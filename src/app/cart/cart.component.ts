import { Component, OnInit } from '@angular/core';
import {ElectronicsService} from '../electronics.service'



@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  electronics:any[];
  p:number=1

  constructor(private Electronics:ElectronicsService) {
    this.electronics=this.Electronics.cart
    
   }

  ngOnInit(): void {
  }
  remove(a:number){
    this.Electronics.cart.splice(a,1)
    this.Electronics.cartpoint--
  }
  minus(a,b){
    if(a.mycount>0){
      a.mycount--
    }
    if(a.mycount==0){
      this.Electronics.cart.splice(b,1)
      this.Electronics.cartpoint--

    }
  }
  plus(b){
    if(b.mycount<b.count){
      b.mycount++
    }
  }
  total(){
    let x=this.Electronics.cart
    let s=0
    for(let i=0;i<x.length;i++){
      s+=x[i].mycount*x[i].price

    }
    return s
  }
}
