import { Component, Input, OnInit } from '@angular/core';

export interface GridColumns {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

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
   
  ngOnInit(): void {
    
  }

}
