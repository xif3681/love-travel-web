import Common from './common';
import { ManagementReducer } from './management';

export interface GlobalState {
  [key: string]: any
  common: Common
  management: ManagementReducer
}