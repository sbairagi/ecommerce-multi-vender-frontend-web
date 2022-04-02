import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-categoriesdropdown',
  templateUrl: './categoriesdropdown.component.html',
  styleUrls: ['./categoriesdropdown.component.css']
})
export class CategoriesdropdownComponent implements OnInit {
  AllCategories: Array<any>= [];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {
    this.getallcategories();
  }

  getallcategories(){
    this.apiservice.allcategory().subscribe( data => {
      for (var i = 0; i < data.length; i++) {
        
        let subcategory : string[] = []
          for (var j = 0; j < data[i].subcategory.length; j++) {

            if (data[i].subcategory[j]['root_category']){
            subcategory.push(data[i].subcategory[j]['root_category'])
            }
          }
        let category = {"category" : data[i].category, "subcategory":subcategory}
        this.AllCategories.push(category)
      }
    });
  }


}
