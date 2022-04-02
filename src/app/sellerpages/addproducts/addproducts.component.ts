import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {
  CheckBox:boolean = false;
  showproductsizes : boolean = false;
  productsize : boolean = true;
  size: number[] = [1];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getallcategories();
  }

  getallcategories(){
    this.apiservice.allcategory().subscribe( data => {
      console.log(data)
    });
  }

  

  checkBox(value:boolean){
      this.CheckBox = value;
      if (this.CheckBox){
        this.productsize = true;
        this.showproductsizes = false;
      }else{
        this.productsize = false;
        this.showproductsizes = true;
      }
  }

  addmorequantity(){
    this.size.push(this.size[0] + 1)
  }

  canclesizebox(){
    this.size.pop();
    console.log(this.size)
  }

}
