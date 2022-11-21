import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {

  constructor() { }

  items!: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Dashbord',
        icon: 'pi pi-home',
        routerLink:'dashbar',
      },
      {
        label: 'Referral',
        icon: 'pi pi-directions-alt',
        routerLink:'referral',
      },
      {
        label: 'Suggestions',
        icon: 'pi pi-stop',
        styleClass:'',
        routerLink: 'suggestion',
      },
      {
        label: 'Upcoming Events',
        icon: 'pi pi-envelope',
        styleClass:'position: relative;left:8px',
        routerLink: 'upcoming',
      },
    ]
  }
}