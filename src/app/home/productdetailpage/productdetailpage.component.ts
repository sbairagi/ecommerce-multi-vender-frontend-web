import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-productdetailpage',
  templateUrl: './productdetailpage.component.html',
  styleUrls: ['./productdetailpage.component.css']
})
export class ProductdetailpageComponent implements OnInit {

  mainimg: string = ''
  img1: string = ''
  img2: string = ''
  img3: string = ''
  img4: string = ''
  productName : string = ''
  productPrice : number = 0
  productPriceNot : number = 0
  productDesc : string = ''
  product:{}={}
  productSize:[]=[]
  productReview:[]=[]

  electronics = []

  owlOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    autoplayHoverPause: true,
    dots: false,
    navSpeed: 700,
    navText: ['&#8249', '&#8250;'],
    autoplay: true,
    animateIn: true,
    animateOut: true,
    responsive: {
      0: {
        items: 2.2
      },
      480: {
        items: 3.2
      },
      767: {
        items: 5
      },
      1024: {
        items: 7
      }
    },
    nav: true
  }

  constructor(private apiservice: ApiService) { 
    console.log(this.apiservice.productdetailurl)
    this.apiservice.getproductdetails().subscribe(data => {
      console.log(data)
      this.mainimg = data.image1
      this.img1 = data.image1
      this.img2 = data.image2
      this.img3 = data.image3
      this.img4 = data.image4
      this.productSize = data.productsize
      this.productReview = data.product_review
      this.productName = data.product_name
      this.productPrice = data.price
      this.productDesc = data.desc
    })
  }

  ngOnInit(): void {

  }

  changeImage(url:string){
    this.mainimg = url

  }

  Product(){
    
  }

}
