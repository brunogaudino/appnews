import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { environment } from "../../../environments/environment";

@Injectable()
export class RequestNewsService {
  constructor (
    private http: HttpClient
  ) {}

  getNews( typeOfNews: string = 'top-headlines', country: string, category: string, pageSize: number = 20 ) {
    // typeOfNews = 'top-headlines'; // required parameter 
     //country = 'us'; // required  parameter
     //category = 'general'; // optional parameter
    //pageSize = 100; // optional parameter
    const config = environment.HEADERS;
    return this.http.get("https://newsapi.org/v2/"+typeOfNews+"?" + "country="+country+"&category="+category+"&pageSize="+pageSize+"&apiKey="+ environment.API_KEY,config)
    .map((res: Response) => res);
  }

}