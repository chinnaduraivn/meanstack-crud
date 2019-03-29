import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-item-terms',
  templateUrl: './item-terms.component.html',
  styleUrls: ['./item-terms.component.scss']
})
export class ItemTermsComponent implements OnInit {

  constructor() { }

  @Input('price')
  item_price : string;
  
  @Output()
  available = new EventEmitter<boolean>();
  isAvailable :boolean

  item_available = true;
  ngOnInit() {
  }
public setAvailability(){
this.isAvailable = !this.isAvailable;
this.available.emit(this.isAvailable);
}
}
