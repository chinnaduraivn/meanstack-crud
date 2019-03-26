import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { FormsModule } from '@angular/forms';

import { MatIconModule, MatToolbarModule, MatInputModule} from '@angular/material'

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './componenets/list/list.component';
import { CreateComponent } from './componenets/create/create.component';
import { EditComponent } from './componenets/edit/edit.component';

import { ItemService } from './service/item.service';

const routes: Routes = [

  {path: 'item/create',component: CreateComponent},
  {path: 'item/edit',component: EditComponent},
  {path: 'item/list',component: ListComponent},
  {path: '',redirectTo:'item/list',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ ItemService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
