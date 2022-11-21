import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { TestService } from '../test.service';

@Component({
  selector: 'app-proceed',
  templateUrl: './proceed.component.html',
  styleUrls: ['./proceed.component.css']
})
export class ProceedComponent implements OnInit {
  weekDate: any=[];
  maxsize:number=100000;
form: any;
 constructor(private test: TestService,private route:Router,private fb:FormBuilder,private service:MessageService) { }
 weekDates: any = []
 days=[
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
 ]

  ngOnInit(): void {
    this.test.weekDates.subscribe(x=>
      {
        this.weekDate=x
      })
      this.form = this.fb.group({
        First: '',
        second:''
      })
  }
  submit()
  {
    this.route.navigate(['/add']);
  }
  onBasicUploadAuto(event:any) {
    this.service.add({severity: 'info', summary: 'Success', detail: 'File Uploaded with Auto Mode'});
}
clickMe()
{
  this.route.navigateByUrl('back')

}


}
