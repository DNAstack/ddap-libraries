import {ModuleMetadata} from "./module-metadata.model";

export interface ViewFilterInterface {
  isVisible(moduleMetadata: ModuleMetadata): boolean;
}
