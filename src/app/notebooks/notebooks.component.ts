import { Component, OnInit } from '@angular/core';
import {ElectronicsService} from '../electronics.service'

@Component({
  selector: 'app-notebooks',
  templateUrl: './notebooks.component.html',
  styleUrls: ['./notebooks.component.css']
})
export class NotebooksComponent implements OnInit {
  electronics:any[];

  constructor( private Electronics:ElectronicsService) {
    this.electronics=Electronics.products
   }

  ngOnInit(): void {
  }

}
