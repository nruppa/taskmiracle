import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-socialshares',
  templateUrl: './socialshares.component.html',
  styleUrls: ['./socialshares.component.css']
})
export class SocialsharesComponent implements OnInit {
  iconVisible!: boolean;
  hoveredIndex!: number;

  constructor() { }
  gifs = [
    "/../assets/gif/New_Employee_Share_1.gif",
    "/assets/gif/New_Employee_Share_2.gif",
    "/assets/gif/New_Employee_Share_3.gif",
    "/assets/gif/New_Employee_Share_4.gif",
    "/assets/gif/New_Employee_Share_5.gif",
  ]
  images= ["/assets/images/Image-1.jpg", "/assets/images/Image-2.jpg", "/assets/images/Image-3.jpg",
    "/assets/images/Image-4.jpg", "/assets/images/Image-5.jpg","/assets/images/Image-6.jpg",]
  ngOnInit(): void {
  }
  mouseEnter(index:any) {
    console.log("mouse enter");
    //this.iconVisible = true;
    this.hoveredIndex = index;
  }

  mouseLeave() {
    console.log("mouse leave");
    //this.iconVisible = false;
  }


  mouseEnter1(index:any) {
    console.log("mouse enter");
    this.hoveredIndex = index;
  }

  mouseLeave1() {
    console.log("mouse leave");
  }

  downloadUrl(url: string, fileName: string) {
    console.log(url + "url");
    console.log(fileName + "filename")
    const a: any = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.style = 'display: none';
    a.click();
  };

}

