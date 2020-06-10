export interface RealmChangeConfirmationDialogModel {
  realm: string;
  action: RealmActionType;
  onAcknowledge: any;
}

export enum RealmActionType {
  edit = 'edit',
  delete = 'delete',
}
