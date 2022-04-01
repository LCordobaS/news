import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsResponse, Article } from 'src/app/interfaces';
import { environment } from '../../environments/environment';
import {map} from 'rxjs/operators';



const apiKey=environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getTopHeadlines():Observable<Article[]>{
  return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=business`,{
  params: {
    apiKey: apiKey
  }
}).pipe(
  map(({articles}) => articles)
)

  }
  getTopHeadlinesByCategory(category: string):Observable<Article[]>{
    return this.http.get<NewsResponse>(`https://newsapi.org/v2/top-headlines?country=us&category=${category}`,{
  params: {
    apiKey: apiKey
  }
}).pipe(
  map(({articles}) => articles)
)
  }
}
