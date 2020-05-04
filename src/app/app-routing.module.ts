import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import {ComputersComponent} from './computers/computers.component'
import {PhonesComponent} from './phones/phones.component'
import {NotebooksComponent} from './notebooks/notebooks.component'
import  {ContactsComponent} from './contacts/contacts.component'
import {CartComponent} from './cart/cart.component'
import {ItemComponent} from './item/item.component'


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'item/:id',component:ItemComponent},
  {path:'computers',component:ComputersComponent},
  {path:'notebooks',component:NotebooksComponent},
  {path:'phones',component:PhonesComponent},
  {path:'contacts',component:ContactsComponent},
  {path:'cart',component:CartComponent},

  {path:'**', redirectTo:'home',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
