import { Component } from "@angular/core";
import { RequestNewsService } from '../shared/service/request-news.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent{

  isSearchPage: boolean = true;
  news: any = {};
  searchForm: FormGroup;
  
  constructor(
    private getRequestNews: RequestNewsService,
    private formBuilder: FormBuilder
  ) {
    this.searchForm = this.formBuilder.group({
      countryParam: ['country'],
      categoryParam: ['category']
    })
  }
  
  // ngOnInit(): void {
  //   //this.submitSearchForm();
  // }

  infoError(error){
    console.log('App error ', error);
    console.log('error status ', error.status);
  }

  submitSearchForm(){
    const countryName = this.searchForm.get('countryParam').value;
    const categoryName = this.searchForm.get('categoryParam').value;
    
    this.getRequestNews.getNews('top-headlines', countryName, categoryName).subscribe(
      (data) => {
        console.log('return news ', data);
        this.setSearchPage(false);
        return this.news = data;
      },
      error => {this.infoError(error)}
    )
  }

  setSearchPage(isSearchPage: boolean = true){
    return this.isSearchPage = isSearchPage;
  }
  
}