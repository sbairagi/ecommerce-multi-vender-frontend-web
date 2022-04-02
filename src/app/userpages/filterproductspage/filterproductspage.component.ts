import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-filterproductspage',
  templateUrl: './filterproductspage.component.html',
  styleUrls: ['./filterproductspage.component.css']
})
export class FilterproductspageComponent implements OnInit {

  products: any [] = []
  nextpageUrl = ''
  previuspageUrl = ''

  constructor(private apiservice: ApiService, private router: Router) {
    const url = `http://127.0.0.1:8000/userapi/products/filterProducts/?category=${this.apiservice.category}`
    this.apiservice.getProducts(url).subscribe(  data => {
      this.products = data.results
      this.previuspageUrl = data.previous
      this.nextpageUrl = data.next
      console.log(data, this.nextpageUrl, this.previuspageUrl)
    });
   }

  ngOnInit(): void {
  }

  product(producturl:number){
    this.apiservice.productdetailurl = producturl.toString()
    this.router.navigate(['/user/productdetail'])
    window.scrollTo(0, 0);
  }

}
