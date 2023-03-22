import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Url = 'http://jsonplaceholder.typicode.com/posts'
  constructor( private HttpClient :HttpClient ) { }

  getApi(){
    return this.HttpClient.get(this.Url)
  }
}
