import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicSearchService {

  constructor() { }

  api_url ='https://api.spotify.com/v1/search'

  search(q:string){

  }

}
