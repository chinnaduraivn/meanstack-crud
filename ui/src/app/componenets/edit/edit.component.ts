import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
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
