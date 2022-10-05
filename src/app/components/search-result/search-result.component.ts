import { Component } from '@angular/core';
import { ISearchResult } from 'src/app/models/search-item.model';
import responce from '../../data/mock-response.json';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent {
  searchResult: ISearchResult = {
    etag: '',
    pageInfo: { resultsPerPage: 0, totalResults: 0 },
    searchItems: [],
  };

  array = [1, 1, 1, 1, 11];

  constructor() {
    this.searchResult.etag = responce.etag;
    this.searchResult.pageInfo = responce.pageInfo;
    this.searchResult.searchItems = responce.items.map((item) => ({
      id: item.id,
      title: item.snippet.title,
      previewUrl: item.snippet.thumbnails.medium.url,
      stat: {
        likeCount: item.statistics.likeCount,
        viewCount: item.statistics.viewCount,
        dislikeCount: item.statistics.dislikeCount,
        commentCount: item.statistics.commentCount,
      },
    }));
    console.log(this.searchResult);
  }
}
