export interface ModuleMetadata {
  key: string;
  group?: string;
  name: string;
  requiredFeatureFlags?: string[];
  iconName?: string;
  iconClasses?: string;
  routerLink?: string;  // relative path
  externalLink?: string;
  parentKey?: string;
  isApp: boolean;
  isExperimental?: boolean;
  isSidebarEnabled?: boolean;
}
