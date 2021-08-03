import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: 'list', component: ListComponent },
  { path: 'list/:productId', component: ProductComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
