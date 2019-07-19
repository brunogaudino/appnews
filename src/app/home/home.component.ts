import { Component, OnInit } from "@angular/core";
import { RequestNewsService } from '../shared/service/request-news.service';

@Component({
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
  news: {};
  
  constructor(
    private getRequestNews: RequestNewsService
  ) {}
  
  ngOnInit(): void {
    this.getRequestNews.getNews('news','story').subscribe(
      data => { 
        this.news = data, 
        console.log('this news ',this.news) 
      },
      error => { 
        this.infoError(error) 
      }
    );
  }

  infoError(error){
    console.log('App error',error);
  }

}