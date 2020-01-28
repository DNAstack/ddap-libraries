export interface RealmChangeConfirmationDialogModel {
  realm: string;
  action: ActionType;
  onAcknowledge: any;
}

export type ActionType = 'edit' | 'delete';
