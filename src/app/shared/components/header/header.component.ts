import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import StorageService from 'src/app/core/local-storage.service';
import PurchaseService from '../../services/purchaseService/purchase.service';

import BoxShopComponent from '../box-shop/box-shop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export default class HeaderComponent implements OnInit {
  user: any;

  datapurchase: Array<any> = [];

  @Input() iscolorblack = false;

  constructor(
    public matDialog: MatDialog,
    private purchaseService: PurchaseService,
    private storageService: StorageService,
  ) {
    this.matDialog = matDialog;
    this.purchaseService = purchaseService;
    this.storageService = storageService;
  }

  ngOnInit(): void {
    this.user = this.storageService.getItem('User');
    if (this.user) {
      this.gethistory();
    }
  }

  gethistory() {
    this.purchaseService.gethistory(this.user.username).subscribe((data: Array<any>) => {
      this.datapurchase = data;
    });
  }

  openhistorymodal() {
    this.matDialog.open(BoxShopComponent, {
      width: '40vw',
      data: { data: this.datapurchase },
    });
  }
}
