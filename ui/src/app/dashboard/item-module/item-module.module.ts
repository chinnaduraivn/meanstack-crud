import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';
import { MatIconModule, MatToolbarModule, MatInputModule} from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../../app-routing.module';

import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';
import { ItemDeleteComponent } from './components/item-delete/item-delete.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';

const routes: Routes = [

  {path: 'item/create',component: ItemCreateComponent},
  {path: 'item/update',component: ItemUpdateComponent},
  {path: 'item/details',component: ItemDetailsComponent},
  {path: 'item/delete',component: ItemDeleteComponent}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  declarations: [ItemCreateComponent, ItemUpdateComponent, ItemDeleteComponent, ItemDetailsComponent]
})
export class ItemModuleModule { }
