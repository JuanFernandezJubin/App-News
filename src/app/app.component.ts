import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public loading: boolean = false;
  public listNews : any[] = [];

  constructor(private _newsService: NoticiasService){

  }
  searchNews(params: any){
    this.loading = true;
    this.listNews = [];
    setTimeout(() =>{
      this._newsService.getNews(params).subscribe(data =>{
          this.listNews = data.articles;
          this.loading = false;  
      }, error => {
        console.log(error);
      })
    },1000);
  }
}
