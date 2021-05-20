import { HttpClient } from '@angular/common/http';
import { Injectable  } from '@angular/core';
import { Observable } from 'rxjs'; 
import { CONFIG } from '../config/configuration';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNews(params: any): Observable<any> {
    const URL = CONFIG.URL + CONFIG.KEY + CONFIG.COUNTRY +
      params.country + CONFIG.CATEGORY + params.category;
    
      return this.http.get(URL);
  }
}
