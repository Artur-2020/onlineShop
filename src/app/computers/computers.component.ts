import { Component, OnInit } from '@angular/core';
import {ElectronicsService} from '../electronics.service'

@Component({
  selector: 'app-computers',
  templateUrl: './computers.component.html',
  styleUrls: ['./computers.component.css']
})
export class ComputersComponent implements OnInit {

  electronics:any[];

  constructor( private Electronics:ElectronicsService) {
    this.electronics=Electronics.products
   }

  ngOnInit(): void {
  }

}
