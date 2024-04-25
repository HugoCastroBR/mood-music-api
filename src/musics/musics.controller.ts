import { Controller, Get, Body, Query, Res } from '@nestjs/common';
import { MusicsService } from './musics.service';
import { Request, Response } from 'express';
import { PaginationDTO } from 'src/dtos/pagination';

@Controller('musics')
export class MusicsController {
  constructor(private readonly musicsService: MusicsService) {}

  @Get()
  async searchWithPagination(
    @Query('page') pagination: PaginationDTO,
    @Res() response?: Response,
  ) {
    try {
      const res = await this.musicsService.searchWithPagination(
        pagination.nextPageToken,
        pagination.order,
        pagination.search,
        pagination.orderBy,
        pagination.itemsPerPage,
      );

      response.status(200).json(res);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  }
}
