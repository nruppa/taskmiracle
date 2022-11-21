import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService implements OnInit{

  constructor() { }
  weekDates = new BehaviorSubject<any>([])

  ngOnInit(): void {
  }

}
