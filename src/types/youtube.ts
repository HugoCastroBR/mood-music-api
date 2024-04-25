type Thumbnail = {
  url: string;
  width: number;
  height: number;
};

type Snippet = {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    [key: string]: Thumbnail;
  };
  channelTitle: string;
  liveBroadcastContent: string;
  publishTime: string;
};

export type YoutubeVideoRawData = {
  kind: string;
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: Snippet;
};

export type YoutubeFormattedData = {
  videoUrl: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  publishedAt: string;
  channelTitle: string;
};

export type YoutubeVideoListRawData = {
  nextPageToken: string;
  items: YoutubeVideoRawData[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};

export type YoutubeVideoListData = {
  nextPageToken: string;
  videos: YoutubeFormattedData[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
};
