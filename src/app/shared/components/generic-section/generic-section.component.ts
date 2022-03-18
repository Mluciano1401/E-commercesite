import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generic-section',
  templateUrl: './generic-section.component.html',
  styleUrls: ['./generic-section.component.css']
})
export class GenericSectionComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' = 'small';
  @Input() data:Array<any>=[];
  @Input() cols:number = 0;
  @Input() rowh:number=0;
  @Input() title:string=" ";
  constructor() {
  
  }

  ngOnInit(): void {
  }

}
