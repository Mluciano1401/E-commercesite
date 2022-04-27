import { Component, Input, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { BottomProfileOverviewComponent } from '../bottom-profile-overview/bottom-profile-overview.component';

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
  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }
  openBottomSheet(){
    this.matDialog.open(BottomProfileOverviewComponent, {
      width: '40vw',
      data: {}
    });
  }
}
