
import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-HomePage',
  templateUrl: 'HomePage.page.html',
  styleUrls: ['HomePage.page.scss']
})
export class HomePage {

  articles;

  constructor(private apiService: ApiService) { }

  getNews() {
    return this.apiService.getNews().subscribe((data) => {
      this.articles = data['items'];
    });
  }

  ionViewDidEnter() {
    this.getNews();
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getNews();
      event.target.complete();
    }, 2000);
  }
}
