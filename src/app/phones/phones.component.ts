import { Component, OnInit } from '@angular/core';
import {ElectronicsService} from '../electronics.service'

@Component({
  selector: 'app-phones',
  templateUrl: './phones.component.html',
  styleUrls: ['./phones.component.css']
})
export class PhonesComponent implements OnInit {

  electronics:any[];

  constructor( private Electronics:ElectronicsService) {
    this.electronics=Electronics.products
   }

  ngOnInit(): void {
  }

}
