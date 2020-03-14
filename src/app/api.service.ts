import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`https://api.coronatracker.com/news/trending?limit=9&offset=0&countryCode=&country=&language=en`);
  }
  
  searchNews(searchQuery: string) {
    return this.httpClient.get(`https://api.coronatracker.com/news?q=${searchQuery}`)
  }

  getStatsByTopNumber(limit: number) {
    return this.httpClient.get(`https://api.coronatracker.com/v2/stats/top?limit=${limit}`)
  }

  getStatsByCountryCode(code: string) {
    return this.httpClient.get(`https://api.coronatracker.com/v2/stats?countryCode=${code}`)
  }

  getLatestNewsSpecific(countryCode: string, country: string, limit: number, language: string) {
    return this.httpClient.get(`https://api.coronatracker.com/news/trending?limit=${limit}&offset=0&countryCode=${countryCode}&country=${country}&language=${language}`)
  }

  getTopWorstOutbreaks(count: number) {
    return this.httpClient.get(`https://api.coronatracker.com/v2/stats/top?limit=${count}`)
  }
}


/*

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getNews() {
    return this.httpClient.get(`https://api.coronatracker.com/news`)
  }

  searchNews(searchQuery: string) {
    return this.httpClient.get(`https://api.coronatracker.com/news?q=${searchQuery}`)
  }

  getStatsByTopNumber(limit: number) {
    return this.httpClient.get(`https://api.coronatracker.com/v2/stats/top?limit=${limit}`)
  }

  getStatsByCountryCode(code: string) {
    return this.httpClient.get(`https://api.coronatracker.com/v2/stats?countryCode=${code}`)
  }

  getLatestNewsSpecific(countryCode: string, country: string, limit: number, language: string) {
    return this.httpClient.get(`https://api.coronatracker.com/news/trending?limit=${limit}&offset=0&countryCode=${countryCode}&country=${country}&language=${language}`)
  }

  getTopWorstOutbreaks(count: number) {
    return this.httpClient.get(`https://api.coronatracker.com/v2/stats/top?limit=${count}`)
  }

}


*/