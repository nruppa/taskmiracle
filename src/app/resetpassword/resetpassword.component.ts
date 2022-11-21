import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { TestService } from '../test.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {
  myform: any;

  constructor(private fb: FormBuilder, private route: Router, private test: TestService) { }
  ngOnInit(): void {
    this.myform = this.fb.group({
      OldPassword:'',
      NewPassword:'',
      ConfirmPassword:'',
    })
  }
}

