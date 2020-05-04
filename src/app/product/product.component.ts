import { Component, OnInit,Input } from '@angular/core';

import { ElectronicsService } from '../electronics.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  point:number
  cart:any[]
  @Input() electronic;

  constructor( private Electronics:ElectronicsService) {
    this.point=this.Electronics.cartpoint
    this.cart=this.Electronics.cart

   }
  

  ngOnInit(): void {
  }
  buy(a:any){
    this.Electronics.cartpoint++
    
    let y={...a}
    let z=this.cart.filter(b=> b.id==y.id)
    if(z.length==0){
      y.mycount=1
      this.cart.push(y)
      
      
    }
    else if(y.count>z[0].mycount){
      this.Electronics.cartpoint--
      z[0].mycount++
    }
    
  }
 
}
