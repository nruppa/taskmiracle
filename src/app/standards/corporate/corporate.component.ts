import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

  items!: MenuItem[];
  constructor(){}

  ngOnInit() {
   
    
    this.items = [
      {
        label: 'Standard Policy',
      },
      {
        label: 'Flat Icons',
        
      },
      {
        label:'Partner Logos',
        // routerLinkActiveOptions:'grey',
        routerLink:'logos'
      },
      {
        label:'Corporate Logos'
      },
      {
        label:'Social Shares',
        routerLink:'shares',
        // icon:'pi-share-alt'
      },
      {
        label:'Documents'
      },
      {
        label:'Virtual Meeting',
        routerLink:'metting'
      },
      
      
    ]
  }
}
