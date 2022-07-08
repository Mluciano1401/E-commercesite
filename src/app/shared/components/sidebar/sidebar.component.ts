import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { EditProductComponent } from 'src/app/Modules/home/home-sections/edit-product/edit-product.component';
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
  @Input() titless:Array<any>=[];
  @Input() user:any;
  showFiller = false;
  @Input() userIsSeller:boolean=false;
  mode:'small' | 'big' | 'medium' | 'profile' | 'editable'= 'big';
  constructor(
    private matDialog: MatDialog,) { }

  ngOnInit(): void {
    if(this.userIsSeller){
      this.mode = 'editable'
    }
  }
  openBottomSheet(){
    this.matDialog.open(BottomProfileOverviewComponent, {
      width: '40vw',
      data: {user: this.user}
    });
  }
  openmodal(){
    this.matDialog.open(EditProductComponent, {
      width: '40vw',
    });
  }
}
