import { Injectable, Logger } from '@nestjs/common';
import { ReportService } from '../report-service.interface';

@Injectable()
export class HalfReportService implements ReportService {
  private readonly logger = new Logger(HalfReportService.name);

  submit() {
    this.logger.log('Submitting report...');
  }
}
