import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  item!: MenuItem[];
  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
   
    
    this.item = [
      {
        label: 'Password Reset',
        icon: 'pi pi-refresh',
        routerLink: 'reset'
      },
      {
        label: 'Logout',
        icon: 'pi pi-power-off',
        routerLink: 'Employee',
      },
    ]
  }

}

