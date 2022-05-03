import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  title:string="Create Product";
  productForm!: FormGroup;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: { id:string, title: string },
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form()
  }
  private form(): void{
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required])
    })
  }
  submit(){

  }

}
