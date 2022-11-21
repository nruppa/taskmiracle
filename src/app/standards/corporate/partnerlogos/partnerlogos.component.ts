import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partnerlogos',
  templateUrl: './partnerlogos.component.html',
  styleUrls: ['./partnerlogos.component.css']
})
export class PartnerlogosComponent implements OnInit {
  hoveredIndex!: number;
  value:any;
  constructor() { }
  images = ["assets/photo/12.png", "assets/photo/1.png",
    "assets/photo/2.png", "assets/photo/10.png",
    "assets/photo/9.png", "assets/photo/4.png",
    "assets/photo/6.png", "assets/photo/7.png",
    "assets/photo/3.png", "assets/photo/10.png",
    "assets/photo/16.png", "assets/photo/8.png",
    "assets/photo/13.png", "assets/photo/14.png",
  ]
 
  ngOnInit(): void {
  }
  mouseEnter(index: any) {
    console.log("mouse enter");
    this.hoveredIndex = index;
  }

  mouseLeave() {
    console.log("mouse leave");
  }
}
