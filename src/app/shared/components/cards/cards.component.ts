import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  @Input() mode: 'small' | 'big' | 'medium' | 'profile' = 'small';
  @Input() datacard= {_id: '0', name : "", username:"", lastname:"", price: "", description: "", urlImg:""};
  urlImg:string = "";
  constructor(private router: Router,) { }

  ngOnInit(): void {
    this.geturlImg()
  }
  geturlImg(){
    var urls = ["../../../assets/images/profileImg/img_568656.png",
    "../../../assets/images/profileImg/profile-img-1.jpg",
    "../../../assets/images/profileImg/profile-img-2.jpg",
    "../../../assets/images/profileImg/profile-img-3.jpeg",
    "../../../assets/images/profileImg/profile-img-4.jpg",
    "../../../assets/images/profileImg/profile-img-5.jpg"]
    let position = Math.floor(Math.random() * (6-0))+ 0;
    this.urlImg=urls[position];
  }
  getproducts(id:string){
    this.router.navigate([`/home/buyer/${id}`]);
  }
}
