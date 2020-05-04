import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './slider/slider.component';
import {ElectronicsService} from './electronics.service';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortPipe } from './pipes/sort.pipe';
import { FooterComponent } from './footer/footer.component';
import { SearchPipe } from './pipes/search.pipe';
import { ComputersComponent } from './computers/computers.component';
import { NotebooksComponent } from './notebooks/notebooks.component';
import { PhonesComponent } from './phones/phones.component';
import { ContactsComponent } from './contacts/contacts.component';
import { SorttypePipe } from './pipes/sorttype.pipe';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SliderComponent,
    ProductsComponent,
    ProductComponent,
    SortPipe,
    FooterComponent,
    SearchPipe,
    ComputersComponent,
    NotebooksComponent,
    PhonesComponent,
    ContactsComponent,
    SorttypePipe,
    ItemComponent,
    CartComponent
  ],
  imports: [
    NgxPaginationModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ElectronicsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
