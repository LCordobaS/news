import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTMDB } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient) { }

  getCartelera(){

    return this.http.get<RespuestaTMDB>('https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2021-12-01&primary_release_date.lte=2022-03-31&api_key=64e688d0c499acb526d05ba540e7be2d&language=es&include_image_lenguage=es');

  }
}
