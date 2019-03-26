const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Item = new Schema({

    item_id: {
        type: String
    },
    item_name: {
        type: String
    },
    item_price: {
        type: Number
    },
    item_type: {
        type: String
    }
}, {
        collection: 'item'
    }
);

module.exports = mongoose.model('Item', Item);