import { Injectable } from '@nestjs/common';
import {
  Prisma,
  Inbound,
  Outbound
} from '@prisma/client';
import { DatabaseService } from './database.service';


@Injectable()
export class CommonService {
  constructor(private prisma: DatabaseService) { }

  async createInbound(data: any): Promise<Inbound> {
    return await this.prisma.inbound.create({
      data,
    });
  }

  async createOutbound(data: any): Promise<Inbound> {
    return await this.prisma.inbound.create({
      data,
    });
  }
}

