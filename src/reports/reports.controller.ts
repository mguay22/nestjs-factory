import { Controller, Param, Post } from '@nestjs/common';
import { ReportServiceFactory } from './report-service.factory';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportServiceFactory: ReportServiceFactory) {}

  @Post(':code/submit')
  submitReport(@Param('code') code: string) {
    return this.reportServiceFactory.get(code).submit();
  }
}
