import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-GlobalNumbers',
  templateUrl: 'GlobalNumbers.page.html',
  styleUrls: ['GlobalNumbers.page.scss']
})
export class GlobalNumbersPage {

  articles;

  constructor(private apiService: ApiService) { }

  getOutbreakData(count: number) {
    return this.apiService.getTopWorstOutbreaks(count).subscribe((data) => {
      this.articles = data
    });
  }

  ionViewDidEnter() {
    this.getOutbreakData(15);
  }

  doRefresh(event) {
    setTimeout(() => {
      this.getOutbreakData(15);
      event.target.complete();
    }, 2000);
  }
}
