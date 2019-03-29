import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemViewComponent } from './components/item-view/item-view.component';
import { RouterModule, Routes} from '@angular/router'
import { ItemModuleModule } from './item-module/item-module.module';
import { ItemTermsComponent } from './components/item-terms/item-terms.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatCardModule ,  MatListModule, MatSnackBarModule, MatProgressSpinnerModule} from '@angular/material';

const routes: Routes = [
  {path: 'items',component: ItemViewComponent},
  {path: '',redirectTo:'items',pathMatch:'full'}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    ItemModuleModule,
    MatListModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  declarations: [ItemViewComponent, ItemTermsComponent]
})
export class DashboardModule { }
