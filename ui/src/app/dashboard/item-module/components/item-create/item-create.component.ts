import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item';
import { ItemService } from '../../service/item.service';
import { MatSnackBar, MatSpinner } from '@angular/material';

@Component({
  selector: 'app-item-create',
  templateUrl: './item-create.component.html',
  styleUrls: ['./item-create.component.css']
})
export class ItemCreateComponent implements OnInit {

  item: Item;

  constructor(private itemService: ItemService,private snackBar: MatSnackBar) {
    this.item = new Item();
   }

  ngOnInit() {
  }

  createItem(){
    if(this.item.item_id){
    this.itemService.addItem(this.item).subscribe(message  => 
      {
        this.snackBar.open(message.item, "", {
          duration: 2000,
        });
      }); 
  }

  this.snackBar.open("Item cannot be null", "", {
    duration: 2000,
  }); 

}

}
