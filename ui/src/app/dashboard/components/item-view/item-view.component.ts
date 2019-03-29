import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item'
import { DashboardServiceService } from '../../service/dashboard-service.service' 
import {Router, NavigationExtras,} from "@angular/router";

@Component({
  selector: 'app-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.css']
})
export class ItemViewComponent implements OnInit {
  items : Item[];
  toggle : boolean;
  constructor(private dashboardService: DashboardServiceService,private router: Router) {
   }

  ngOnInit() {
    this.fetchAllItems();
  }

  fetchAllItems(){
    this.dashboardService.getAllItems().subscribe( (response) => {
      this.items = response;
    }
    )
  }

  public directToView(item_id: string){
    let params: NavigationExtras ={
      queryParams: {
        "item_id":item_id
      }
    }
    this.router.navigate(["/item/details"],params);
  }

  public directToUpdate(item_id: string){
    let params: NavigationExtras ={
      queryParams: {
        "item_id":item_id
      }
    }
    this.router.navigate(["/item/update"],params);
  }

  public directToDelete(item_id: string){
    let params: NavigationExtras ={
      queryParams: {
        "item_id":item_id
      }
    }
    this.router.navigate(["/item/delete"],params);
  }

  public setAvailability(status: boolean){
    this.toggle= status;
  }

}