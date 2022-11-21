import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-meeting',
  templateUrl: './virtual-meeting.component.html',
  styleUrls: ['./virtual-meeting.component.css']
})
export class VirtualMeetingComponent implements OnInit {
  hoveredIndex!: number;
  videos = ["assets/virtual/Blue-Wave.mp4",
    "assets/virtual/Circular-Lines.mp4",
    "assets/virtual/Connecting-Dots.mp4 ",
    "assets/virtual/Dark-Plexus.mp4",
  ]
  fileData!: string;
  constructor() { }

  ngOnInit(): void {
  }
  mouseEnter(index: any) {
    console.log("mouse enter");
    //this.iconVisible = true;
    this.hoveredIndex = index;
  }
  mouseLeave() {
    console.log("mouse leave");
  }

}
