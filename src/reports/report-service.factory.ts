import { Injectable } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';
import { EmptyReportService } from './services/empty-report.service';
import { HalfReportService } from './services/half-report.service';
import { FullReportService } from './services/full-report.service';

@Injectable()
export class ReportServiceFactory {
  constructor(private readonly moduleRef: ModuleRef) {}

  get(code: string) {
    switch (code) {
      case 'EMPTY':
        return this.moduleRef.get(EmptyReportService);
      case 'HALF':
        return this.moduleRef.get(HalfReportService);
      case 'FULL':
        return this.moduleRef.get(FullReportService);
    }
  }
}
