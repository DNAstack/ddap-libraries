import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';

@Injectable({
  providedIn: 'root',
})
export class VisaPassportService {

  readonly claimExpirationWarningThresholdInHours = 48;

  public isExpiring({ exp }: any): boolean {
    const timestamp = dayjs.unix(exp);
    const hoursTillExpiration = timestamp.diff(dayjs(), 'hour');
    return hoursTillExpiration < this.claimExpirationWarningThresholdInHours;
  }

}
