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
    const config = {
      headers: {
        'Access-Control-Allow-Origin': 'https://appnews.netlify.app/', // Substitua com o domínio da sua origem permitida
        // Outros cabeçalhos CORS opcionais
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Credentials': 'true', // Se você estiver usando autenticação com credenciais
      },
    };
    return this.http.get("https://newsapi.org/v2/"+typeOfNews+"?" + "country="+country+"&category="+category+"&pageSize="+pageSize+"&apiKey="+ environment.API_KEY,config)
    .map((res: Response) => res);
  }

}