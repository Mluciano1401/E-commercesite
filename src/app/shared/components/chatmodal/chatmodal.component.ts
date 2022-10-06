import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chatmodal',
  templateUrl: './chatmodal.component.html',
  styleUrls: ['./chatmodal.component.css']
})
export class ChatmodalComponent implements OnInit {

  constructor(
    private matDialogRef: MatDialogRef<ChatmodalComponent>
  ) { }

  ngOnInit(): void {
  }
  modalClose(){
    this.matDialogRef.close()
  }
}
