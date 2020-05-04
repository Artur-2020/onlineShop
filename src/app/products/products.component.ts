import { Component, OnInit } from '@angular/core';
import {ElectronicsService} from '../electronics.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  selval:string="Sort By";
  inpval:string=''
   electronics:any[];
   p:number=1;

  constructor(private Products:ElectronicsService) { 
   
    this.electronics=this.Products.products
  }

  ngOnInit(): void {
  }
  

   
}
