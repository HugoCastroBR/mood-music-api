import { Injectable, Query } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import {
  YoutubeFormattedData,
  YoutubeVideoListData,
  YoutubeVideoListRawData,
  YoutubeVideoRawData,
} from 'src/types/youtube';
import { getListMusics } from 'src/utils/youtubeApi';

@Injectable()
export class MusicsService {
  constructor(private prisma: PrismaService) {}

  async searchWithPagination(
    nextPageToken: string,
    order?: string,
    search?: string,
    orderBy?: string,
    itemsPerPage?: number,
  ) {
    const resYT = await this.getYoutubeMusics();
    const reqData: YoutubeVideoListRawData = await resYT.json();
    const formattedVideos: YoutubeFormattedData[] = reqData.items.map(
      (video) => {
        return {
          channelTitle: video.snippet.channelTitle,
          description: video.snippet.description,
          thumbnailUrl: video.snippet.thumbnails.high.url,
          title: video.snippet.title,
          videoUrl: `https://www.youtube.com/watch?v=${video.id.videoId}`,
          publishedAt: video.snippet.publishedAt,
        };
      },
    );

    const musicsList: YoutubeVideoListData = {
      nextPageToken: reqData.nextPageToken,
      videos: formattedVideos,
      pageInfo: {
        totalResults: 1,
        resultsPerPage: 1,
      },
    };

    return {
      musics: musicsList,
      nextPageToken,
      search,
      itemsPerPage,
      orderBy,
      order,
    };
  }

  async getYoutubeMusics() {
    const res = await getListMusics({
      search: 'mood',
      itemsPerPage: 10,
    });
    return res;
  }
}
