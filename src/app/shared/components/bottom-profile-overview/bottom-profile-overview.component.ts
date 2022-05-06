import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-bottom-profile-overview',
  templateUrl: './bottom-profile-overview.component.html',
  styleUrls: ['./bottom-profile-overview.component.css']
})
export class BottomProfileOverviewComponent implements OnInit {
  user:any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: {user: any}) { }

  ngOnInit(): void {
    this.user = this.data.user;
  }

}
