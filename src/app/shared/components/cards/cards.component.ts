import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' = 'small';
  @Input() datacard= {_id: 0, name : "", img: ""};
  constructor() { }

  ngOnInit(): void {
  }

}
