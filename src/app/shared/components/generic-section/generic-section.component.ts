import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css'],
})

export default class GenericSectionComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' | 'profile' | 'editable' = 'small';
  @Input() data: Array<any> = [];
  @Input() title = ' ';
  @Input() rowh = 0;
  margin:string = '200px';
  ngOnInit(): void {
    if(this.mode === 'big' || this.mode === 'editable' ){
      this.margin = '550px'
    }
    if(this.mode === 'medium' ){
      this.margin = '350px'
    }
  }

}
