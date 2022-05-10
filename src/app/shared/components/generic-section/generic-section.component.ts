import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})
export class GenericSectionComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' | 'profile'  | 'editable'= 'small';
  @Input() data:Array<any>=[];
  @Input() title:string=" ";
  cols:number = 0;
  @Input() rowh:number=0;
  scrHeight:any;
  scrWidth:any; 
  constructor() {    
    this.scrHeight = (window.screen.height);
    this.scrWidth = (window.screen.width);
  }

  ngOnInit(): void {
    this.takeMeasures();
  }
  takeMeasures(){
    if(this.scrWidth <= 580 && (this.mode == "medium" || this.mode == "big")){
      this.cols = 1;
    }
    else if(this.scrWidth <= 920 && (this.scrWidth > 580) && (this.mode == "medium" || this.mode == "big") || this.mode == "editable"){
      this.cols = 2;
    }
    else{
      this.cols = 3;
    }
    if(this.scrWidth <= 580 && (this.mode == "small"||this.mode == "profile")){
      this.cols = 2;
    }
  }


}
