import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import ChatmodalComponent from '../chatmodal/chatmodal.component';

@Component({
  selector: 'app-btn-float',
  templateUrl: './btn-float.component.html',
  styleUrls: ['./btn-float.component.css'],
})
export default class BtnFloatComponent implements OnInit {
  constructor(private matDialog: MatDialog) {
    this.matDialog = matDialog;
  }

  ngOnInit(): void {
  }

  openmodal() {
    const ref = this.matDialog.open(ChatmodalComponent, {
      width: '40vw',
    });
  }
}
