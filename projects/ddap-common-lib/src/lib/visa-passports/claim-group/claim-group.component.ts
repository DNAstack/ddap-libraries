import { Component, Input } from '@angular/core';
import * as dayjs_ from 'dayjs';
const dayjs = dayjs_;
import * as relativeTimePlugin_ from 'dayjs/plugin/relativeTime';
const relativeTimePlugin = relativeTimePlugin_;
import { TimeDurationParser } from '../../time-duration.parser';

import { VisaPassportService } from '../visa-passport.service';
import { Assertion } from './assertion.model';

@Component({
  selector: 'ddaplib-claim-group',
  templateUrl: './claim-group.component.html',
  styleUrls: ['./claim-group.component.scss'],
})
export class ClaimGroupComponent {

  @Input()
  claimGroupLabel: string;
  @Input()
  standardClaims: ({ [k: string]: string } | null);
  @Input()
  ga4ghClaims: Assertion[];
  @Input()
  ga4ghAccountPassport: { [k: string]: any };

  constructor(public visaPassportService: VisaPassportService) {
    dayjs.extend(relativeTimePlugin);
  }

  getFormattedExpiresTextFromClaim({ expiresDuration }: Assertion): string {
    if (!expiresDuration) {
      return;
    }

    const duration = TimeDurationParser.parseAsDuration(expiresDuration);
    return `Expires every ${duration.value} ${duration.unitOfTime}`;
  }

  getFormattedExpiresTextFromAccountClaim({ exp }: any): string {
    if (!exp) {
      return;
    }

    const timestamp = dayjs.unix(exp);
    const relativeTime = timestamp.fromNow();
    return timestamp.isBefore(dayjs())
      ? `Expired ${relativeTime}`
      : `Expires ${relativeTime}`;
  }

}
