type Statistics = {
  viewCount: string;
  likeCount: string;
  dislikeCount: string;
  commentCount: string;
};

export interface ISearchItem {
  id: string;
  title: string;
  previewUrl: string;
  stat: Statistics;
}

export interface ISearchResult {
  etag: string;
  pageInfo: { resultsPerPage: number; totalResults: number };
  searchItems: ISearchItem[];
}
