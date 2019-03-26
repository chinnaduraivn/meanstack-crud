import { Component, OnInit,Input } from '@angular/core';
import { Item } from '../../models/item'
import { ItemService } from '../../service/item.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  @Input() 
  item: Item;

  constructor(private itemService: ItemService) {
    this.item = new Item();
   }

  ngOnInit() {
  }

  printItem(){
    this.itemService.addItem(this.item).subscribe(contasMae => 
      {
          console.log('Observable:',contasMae);
      }); 
    console.log(this.item);
  }

}
