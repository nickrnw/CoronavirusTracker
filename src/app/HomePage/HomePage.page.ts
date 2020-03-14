
import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, ion-refresher } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-HomePage',
  templateUrl: 'HomePage.page.html',
  styleUrls: ['HomePage.page.scss']
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  articles;
  offset: number = 0;
  articleRequestRate: number = 3;

  constructor(private apiService: ApiService) { }

  getNews(limit: number, offset: number = 0) {
    return this.apiService.getNews(limit, offset).subscribe((data) => {
      this.articles = data['items'];
    });
  }

  ionViewDidEnter() {
    this.getNews(this.articleRequestRate);
  }

  // Refresh For Latest
  doRefresh(event) {
    setTimeout(() => {
      this.getNews(this.articleRequestRate);
      event.target.complete();
    }, 2000);
  }

  loadData(event) {
    setTimeout(() => {
      this.getOlderNews(this.articleRequestRate);
      event.target.complete();
      if (this.offset >= 150) event.target.disabled = true; // 150 max articles
    }, 2000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  // Get History
  getOlderNews(count: number) {
    this.offset = this.offset + count;

    return this.apiService.getNews(this.articleRequestRate, this.offset).subscribe((data) => {
      this.articles = [...this.articles, ...data['items']];
    });
  }
}
