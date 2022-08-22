import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import StorageService from 'src/app/core/local-storage.service';
import ProductService from 'src/app/shared/services/products.service/product.service';
import PurchaseService from 'src/app/shared/services/purchaseService/purchase.service';
import GetUserSellerService from 'src/app/shared/services/userseller.service/get-user-seller.service';

@Component({
  selector: 'app-sectionproducts',
  templateUrl: './sectionproducts.component.html',
  styleUrls: ['./sectionproducts.component.css'],
})
export default class SectionproductsComponent implements OnInit {
  id: string | null;

  section: string |undefined;

  object: any;

  products: Array<unknown> = [];

  isseller = false;

  iscategory = false;

  color = '#bdbdbd';

  is_liked = false;

  user: unknown;

  constructor(
private aRouter: ActivatedRoute,
    private router: Router,
    private purchaseService: PurchaseService,
    private sellerService: GetUserSellerService,
    private Productservice: ProductService,
    private storageService: StorageService,
  ) {
    this.aRouter = aRouter;
    this.router = router;
    this.purchaseService = purchaseService;
    this.sellerService = sellerService;
    this.Productservice = Productservice;
    this.storageService = storageService;
    this.id = this.aRouter.snapshot.paramMap.get('id');
    this.section = this.aRouter.snapshot.routeConfig?.path;
  }

  ngOnInit(): void {
    if (this.section === 'supplier/:id') {
      this.getseller();
      this.isseller = true;
    }
    if (this.section === 'product/:id') {
      this.getproduct();
      this.isseller = false;
    }
    if (this.section === 'category/:id') {
      if (this.id != null) {
        this.iscategory = true;
        this.isseller = false;
        this.object = { name: this.id };
        this.getproductsbycat(null, this.id);
      }
    }
  }

  getseller() {
    if (this.id != null) {
      this.sellerService.getSellerbyAPI(this.id).subscribe((data) => {
        this.object = data;
        this.getproductsbyseller();
      });
    }
  }

  getproductsbyseller() {
    this.Productservice.getproductsbysupplier(this.object.username).subscribe((data) => {
      this.products = data;
    });
  }

  getproduct() {
    if (this.id != null) {
      this.Productservice.getproduct(this.id).subscribe((data) => {
        this.object = data;
        this.getproductsbycat(this.object, null);
      });
    }
  }

  getproductsbycat(object: any|null, name: string|null) {
    if (object != null) {
      this.Productservice.getproductsbycategory(object.category).subscribe((data) => {
        this.products = data;
      });
    }
    if (name != null) {
      this.Productservice.getproductsbycategory(name).subscribe((data) => {
        this.products = data;
      });
    }
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

  buyprodut(price: number, supplier: string, idproduct: string) {
    if (this.user) {
      const datarawUser = this.storageService.getItem('User');
      let money;
      this.sellerService.getuserbyusername(supplier).subscribe((data) => {
        money = { money: data[0].money + price };
        this.sellerService.updatemoney(data[0]._id, money).subscribe();
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
}
