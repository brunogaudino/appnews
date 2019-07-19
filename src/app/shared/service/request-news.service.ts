import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable()
export class RequestNewsService {
  constructor (
    private http: HttpClient
  ) {}
//newes e story
  getNews( querySubject: string, tagName: string ) {
    return this.http.get("https://hn.algolia.com/api/v1/search_by_date?query="+querySubject+"&tags="+tagName)
    .map((res: Response) => res);
  }
}