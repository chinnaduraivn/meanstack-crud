const express = require("express");
const app = express();
const itemRoutes = express.Router();

let Item = require('../model/Item');
        
itemRoutes.get('/', function(req, res, next) {
    res.json({ message: 'hooray! welcome to our item!' });   
});

itemRoutes.post('/add',function (req,res,next){
   let item = new Item(req.body);
   item.save()
   .then(item => {
       res.status(200).json({'item': 'Item is added successfully'});
   })
   .catch(
       err => { 
           res.status(400).send("unable to save to database");
       }
   );
})

itemRoutes.get('/edit/:id', function (req,res,next) {
   let id = req.params.id;
   Item.findById(id,function(err, item) {
       if(err){
           console.log(err);
       }
       else{
           res.json(item);
       }
   });

});

itemRoutes.post('/update/:id', function (req,res,next) {
   let id = req.params.id;
   Item.findById(id,function(err, next,item) {
       if(!item){
           return next(new Error('Could not load Item'));
       }
       else{
           item.item_id = req.body.item_id;
           itemm.item_name = req.body.item_name;
           item.item_price = req.body.item_price;
           item.item_type = req.body.item_type;

           item.save()
               .then(
                   item => {
                       res.json("Update complete");
               })
               .catch(
                   err => {
                       res.status(400).send("Unable to updat the database");
                   });
       }
   });
});

itemRoutes.get('/delete/:id', function(req,res,next){
   Item.findByIdAndDelete(
       {_id: req.params.id}, function(err, item){
           if(err) res.json(err);
           else res.json('Successfully removed');
       });
})

module.exports = itemRoutes;