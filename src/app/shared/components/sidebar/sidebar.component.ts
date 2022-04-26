import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() data:Array<any>=[];
  @Input() seller: Array<any>=[];
  @Input() menu: Array<any>=[];
  @Input() categories: Array<any>=[];
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

}
