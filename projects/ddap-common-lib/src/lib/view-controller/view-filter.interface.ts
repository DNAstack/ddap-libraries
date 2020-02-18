import {ModuleMetadata} from "../model/module-metadata.model";

export interface ViewFilterInterface {
  isVisible(moduleMetadata: ModuleMetadata): boolean;
}
