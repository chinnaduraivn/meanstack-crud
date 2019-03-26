import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../service/item.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private ItemService: ItemService) { }

  ngOnInit() {
    this.ItemService.getItem().subscribe(
      (item) => {
        console.log(item);
        
      }
      );
  }

}
