import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../models/item'
import { Options } from '../../models/result'

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  url = 'http://localhost:3000/item';
  constructor(private http:HttpClient) { }

  getItem(){
    return this.http.get(this.url);
  }

  getItemById(id){
    return this.http.get(this.url+'/edit/'+id);
  }

  addItem(item : Item){
    
   return this.http.post<Options>('http://localhost:3000/item/add',item);
  }

  updateItem(id,item_id,name,price,type){

    const item = {
      item_id: item_id,
      item_name: name,
      item_price: price,
      item_type: type
    }
    return this.http.post('${this.url}/item/update/${id}',item);
  }

  deleteItem(id){
    return this.http.get('${this.uri}/item/delete/${id}');
  }

}
