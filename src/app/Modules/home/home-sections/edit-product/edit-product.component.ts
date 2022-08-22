import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

import ProductService from 'src/app/shared/services/products.service/product.service';
import { Dataraw } from '../../../../data/categories';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export default class EditProductComponent implements OnInit {
  title = 'Create Product';

  productForm!: FormGroup;

  categories: Array<any> = Dataraw.category;

  user: any = sessionStorage.getItem('User');

  constructor(
    private router: Router,
    private Productservice: ProductService,
    @Inject(MAT_DIALOG_DATA) private data: { id: string; title: string },
    private matDialogRef: MatDialogRef<EditProductComponent>,
  ) {
    this.router = router;
    this.Productservice = Productservice;
    this.data = data;
    this.matDialogRef = matDialogRef;
  }

  ngOnInit(): void {
    this.form();
    if (this.data) {
      this.title = this.data.title;
      this.getdataAPI(this.data.id);
    }
    this.user = JSON.parse(this.user);
  }

  private form(): void {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      urlimg: new FormControl('', [Validators.required]),
    });
  }

  getdataAPI(id: string) {
    this.Productservice.getproduct(id).subscribe((data) => {
      this.productForm.get('name')?.setValue(data.name);
      this.productForm.get('description')?.setValue(data.description);
      this.productForm.get('category')?.setValue(data.category);
      this.productForm.get('price')?.setValue(data.price);
      this.productForm.get('urlimg')?.setValue(data.urlImg);
    });
  }

  getdataform() {
    const dataproduct = {
      name: this.productForm.get('name')?.value,
      description: this.productForm.get('description')?.value,
      urlImg: this.productForm.get('urlimg')?.value,
      price: this.productForm.get('price')?.value,
      category: this.productForm.get('category')?.value,
      supplier: this.user.username,

    };
    return dataproduct;
  }

  save() {
    const product = this.getdataform();
    if (this.data) {
      this.Productservice.updateproduct(this.data.id, product).subscribe(() => {
        this.close();
        this.router.navigate(['/home/seller']);
      });
    } else {
      this.Productservice.createproduct(product).subscribe(() => {
        this.close();
        this.router.navigate(['/home/seller']);
      });
    }
  }

  close() {
    this.matDialogRef.close();
  }
}
