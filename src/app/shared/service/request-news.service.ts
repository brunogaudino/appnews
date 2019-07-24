import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { environment } from "../../../environments/environment";

@Injectable()
export class RequestNewsService {
  constructor (
    private http: HttpClient
  ) {}
//newes e story
  getNews( typeOfNews: string = 'top-headlines', country: string, category: string, pageSize: number = 20 ) {
    // typeOfNews = 'top-headlines'; // required parameter 
     country = 'us'; // required  parameter
     category = 'general'; // optional parameter
    //pageSize = 100; // optional parameter
    return this.http.get("https://newsapi.org/v2/"+typeOfNews+"?" + "country="+country+"&category="+category+"&pageSize="+pageSize+"&apiKey="+ environment.API_KEY)
    .map((res: Response) => res);
  }

  // getHackNews(querySubject: string, tagName: string){
  //   return this.http.get("https://hn.algolia.com/api/v1/search_by_date?query="+querySubject+"&tags="+tagName)
  //   .map((res: Response) => res);
  // }

}