export interface ISegment {
  overridden: boolean;
  modified: boolean;
  supplement: boolean;
  verified: boolean;
  deleted: boolean;
  printable: boolean;
  chargeable?: boolean;
  status?: number;
  remark?: string;
}
