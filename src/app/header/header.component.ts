import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ElectronicsService} from '../electronics.service';




@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  point:number;
 
  constructor(private Electronics:ElectronicsService ) { 
    let s= setInterval(()=>{
      
     
      this.point=this.Electronics.cartpoint
    }
    
    ,500)
    
   

  }

  ngOnInit(): void {
  }


  

}
