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

export const a: ISearchItem[] = [
  {
    id: 'ddfdf',
    title: 'dsfg',
    previewUrl: 'ttrt',
    stat: {
      viewCount: '33',
      likeCount: '344',
      dislikeCount: '333',
      commentCount: '23234',
    },
  },
];
