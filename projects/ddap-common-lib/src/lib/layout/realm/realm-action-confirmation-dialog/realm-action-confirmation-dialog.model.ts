export interface RealmActionConfirmationDialogModel {
  realm: string;
  action: RealmActionType;
  onAcknowledge: any;
}

export enum RealmActionType {
  edit = 'edit',
  delete = 'delete',
}
