import { ApiProperty } from '@nestjs/swagger';

export class PaginationDTO {
  @ApiProperty({
    type: Number,
    required: false,
    default: 1,
  })
  page?: number;

  @ApiProperty({
    type: String,
    required: false,
    default: '',
  })
  nextPageToken?: string;

  @ApiProperty({
    type: Number,
    default: 10,
  })
  itemsPerPage: number;

  @ApiProperty({
    type: String,
    default: 'createdAt',
  })
  orderBy?: string;

  @ApiProperty({
    type: String,
    default: 'desc',
  })
  order?: 'asc' | 'desc';

  @ApiProperty({
    type: String,
    required: false,
    default: '',
  })
  search?: string;
}
