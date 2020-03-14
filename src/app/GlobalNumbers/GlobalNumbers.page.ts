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

   ionViewDidEnter() {
    this.apiService.getTopWorstOutbreaks(15).subscribe((data) => {
      this.articles = data
    });
  }
}
