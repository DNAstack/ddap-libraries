export interface Assertion {

  type: string;
  source: string;
  value: string;
  assertedDuration: string;
  expiresDuration: string;
  conditions: any[];
  by: string;

}
