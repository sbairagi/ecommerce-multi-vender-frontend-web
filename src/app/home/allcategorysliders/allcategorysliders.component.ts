import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarouselComponent, OwlOptions, SlidesOutputData} from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-allcategorysliders',
  templateUrl: './allcategorysliders.component.html',
  styleUrls: ['./allcategorysliders.component.css']
})
export class AllcategoryslidersComponent implements OnInit {

  electronics:[]= [];
  men:[] = [];
  women:[] = [];
  baby_and_kids:[]=[];
  home_and_furniture:[]=[];
  sports_or_books_or_more:[]=[];
  tvs_and_appliances:[]=[];
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


  constructor(private apiservice : ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getProducts();
  }


  getProducts(){
    const electronics = 'http://127.0.0.1:8000/userapi/products/filterProducts/?category=Electronics'
    const men = 'http://127.0.0.1:8000/userapi/products/filterProducts/?category=Men'
    const women = 'http://127.0.0.1:8000/userapi/products/filterProducts/?category=Women'
    const baby_and_kids = 'http://127.0.0.1:8000/userapi/products/filterProducts/?category=Baby & Kids'
    const home_and_furniture = 'http://127.0.0.1:8000/userapi/products/filterProducts/?category=Home & Furniture'
    const sports_or_books_or_more = 'http://127.0.0.1:8000/userapi/products/filterProducts/?category=Sports, Books & More'
    const tvs_and_appliances = 'http://127.0.0.1:8000/userapi/products/filterProducts/?category=TVs & Appliances'
    this.apiservice.getProducts(electronics).subscribe(  data => {
      this.electronics = data.results
    });
    this.apiservice.getProducts(men).subscribe(  data => {
      this.men = data.results
    });
    this.apiservice.getProducts(women).subscribe(  data => {
      this.women = data.results
    });
    this.apiservice.getProducts(baby_and_kids).subscribe(  data => {
      this.baby_and_kids = data.results
    });
    this.apiservice.getProducts(home_and_furniture).subscribe(  data => {
      this.home_and_furniture = data.results
    });
    this.apiservice.getProducts(sports_or_books_or_more).subscribe(  data => {
      this.sports_or_books_or_more = data.results
    });
    this.apiservice.getProducts(tvs_and_appliances).subscribe(  data => {
      this.tvs_and_appliances = data.results
    });
  }

  product(producturl:number){
    this.apiservice.productdetailurl = producturl.toString()
    this.router.navigate(['/user/productdetail'])
    window.scrollTo(0, 0);
  }

  category(category:any){
   
   if (category.length){
    console.log(category[0]['category'])
    this.apiservice.category = category[0]['category']
    this.router.navigate(['/user/filterproducts'])
   }
  }

}
