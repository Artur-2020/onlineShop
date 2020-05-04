import { Component, OnInit } from '@angular/core';
import {ElectronicsService} from '../electronics.service'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item:any
 
  
  constructor(private Electronics:ElectronicsService,private route:ActivatedRoute) {
    const id=this.route.snapshot.params.id  
    this.item = this.Electronics.products.find(a=>a.id == id) 
     
  }
  ngOnInit(): void {
  }

}
