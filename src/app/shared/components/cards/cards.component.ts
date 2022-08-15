import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import StorageService from 'src/app/core/local-storage.service';
import EditProductComponent from 'src/app/Modules/home/home-sections/edit-product/edit-product.component';
import ProductService from '../../services/products.service/product.service';
import PurchaseService from '../../services/purchaseService/purchase.service';
import GetUserSellerService from '../../services/userseller.service/get-user-seller.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export default class CardsComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' | 'profile' | 'editable' = 'small';

  @Input() datacard = {
    _id: '0', name: '', username: '', lastname: '', price: 0, description: '', urlImg: '', supplier: '',
  };

  urlImg = '';

  user: any;

  color: any = '#bdbdbd';

  is_liked = false;

  constructor(
    private router: Router,
    private Productservice: ProductService,
    public matDialog: MatDialog,
    private purchaseService: PurchaseService,
    private sellerService: GetUserSellerService,
    private storageService: StorageService,
  ) {
    this.router = router;
    this.Productservice = Productservice;
    this.matDialog = matDialog;
    this.purchaseService = purchaseService;
    this.sellerService = sellerService;
    this.storageService = storageService;
  }

  ngOnInit(): void {
  }

  getproducts(id: string) {
    this.router.navigate([`/home/supplier/${id}`]);
  }

  getproduct(id: string) {
    this.router.navigate([`/home/product/${id}`]);
  }

  getcategort(id: string) {
    this.router.navigate([`/home/category/${id}`]);
  }

  changeColor() {
    if (!this.is_liked) {
      this.is_liked = true;
      this.color = 'warn';
    } else {
      this.is_liked = false;
      this.color = '#bdbdbd';
    }
  }

  openmodal(id: string) {
    this.matDialog.open(EditProductComponent, {
      width: '40vw',
      data: { id, title: 'Modify Product' },
    });
  }

  buyprodut(price: number, supplier: string, idproduct: string) {
    if (this.user) {
      const datarawUser = this.storageService.getItem('User');
      let money;
      this.sellerService.getuserbyusername(supplier).subscribe((data) => {
        money = { money: data[0].money + price };
        this.sellerService.updatemoney(data[0]._id, money).subscribe(() => {

        });
      });
      const datas = {
        customer: datarawUser.username,
        product: idproduct,
        price,
        seller: supplier,
      };
      this.purchaseService.processpurchase(datas).subscribe(() => {
        this.router.navigate(['/home/buyer']);
      });
    }
  }

  remove(id: string) {
    this.Productservice.deleteProduct(id).subscribe(() => {
      this.router.navigate(['/home/seller']);
    });
  }
}
