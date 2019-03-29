import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';

@Component({
  selector: 'app-item-update',
  templateUrl: './item-update.component.html',
  styleUrls: ['./item-update.component.css']
})
export class ItemUpdateComponent implements OnInit {

  id: String;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  getItem(){
    console.log(this.id);
    this.itemService.getItemById(this.id).subscribe(data => {
      console.log(data);
    });
  }
}
