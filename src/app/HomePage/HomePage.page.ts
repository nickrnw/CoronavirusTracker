
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

  ionViewDidEnter() {
    this.apiService.getNews().subscribe((data) => {
      this.articles = data['items'];
    });
  }
}
