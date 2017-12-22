import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  search(terms) {
    return terms
      // Only subscribe after 300ms (debounce user input while typing search term)
      .debounceTime(100)
      // Send the string and not an observable by using switchMap
      .switchMap(term => this.rawsearch(term))
      // Ignore out of order responses (ex: the first query came after last)
      .distinctUntilChanged()
  }

  rawsearch(term) {
    return this.http
      .get(`http://api.localhost.code:3000/v1/locations?q=${term}`)
      .map(results => results['data'])
  }
}
