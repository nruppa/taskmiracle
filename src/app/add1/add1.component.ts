import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-add1',
  templateUrl: './add1.component.html',
  styleUrls: ['./add1.component.css']
})
export class Add1Component implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Employee',
        icon: 'pi pi-home',
        routerLink:'employe',
      },
      {
        label: 'Standards',
        icon: 'pi pi-box',
        routerLink:'standard',
      },
      {
        label: 'Resource',
        icon: 'pi pi-book',
        routerLink:'resource',
      },
      {
        label: 'yourapps',
        icon: 'pi pi-briefcase',
        routerLink:'yourapp',
      },
    ]
  }
}
