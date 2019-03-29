import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item'

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  url = 'http://localhost:3000/item';
  constructor(private http: HttpClient) { }

  getAllItems(){
    return this.http.get<Item[]>(this.url + '/items')
  }

}
