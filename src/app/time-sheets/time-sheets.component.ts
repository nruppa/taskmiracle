import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PrimeNGConfig } from 'primeng/api';
import { TestService } from '../test.service';

@Component({
  selector: 'app-time-sheets',
  templateUrl: './time-sheets.component.html',
  styleUrls: ['./time-sheets.component.css']
})
export class TimeSheetsComponent implements OnInit {

time:any;
firstday: any;
lastday: any;
calendar: any;
fdate: any;
first: any;
last: any;
dateTime=new Date()
constructor( private primengConfig:PrimeNGConfig,  private fb: FormBuilder, private route: Router,private test:TestService) { }
ngOnInit(): void {

  this.primengConfig.ripple = true;
  this.calendar = this.fb.group({
    selectdate: [''],

  })
  this.getDate()
}
sheets() {
  this.time = true;
}
proceed() {
  this.time = false;
  console.log('first date',this.firstday);
    console.log('last date',this.lastday);
    let data = this.enumerateDaysBetweenDates(this.firstday,this.lastday)
    console.log("Dates", data);
    this.test.weekDates.next(data)
}
 getDate() {
    this.firstday = moment().startOf('week').format('ll');  
    this.lastday = moment().endOf('week').format('ll');  
    
  }
fetchdate() {
  this.fdate = this.calendar.controls.selectdate.value;
  this.first = this.fdate.getDate() - this.fdate.getDay();
  this.last = this.first + 6;
  this.firstday = new Date(this.fdate.setDate(this.first));
  this.lastday = new Date(this.fdate.setDate((this.firstday.getDate() + 6)));
}
enumerateDaysBetweenDates(startDate: any, endDate: any) {
  var dates = [];
  dates.push(startDate)
  var currDate = moment(startDate).startOf('day');
  var lastDate = moment(endDate).startOf('day');

  while(currDate.add(1, 'days').diff(lastDate) < 0) {
      console.log(currDate.toDate());
      dates.push(currDate.format());
      
  }
  dates.push(endDate)
  return dates;
};
}