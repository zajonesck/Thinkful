import {WilksModel} from 'app/models';
import { RouterState } from 'react-router-redux';

export interface RootState {
  wilks: RootState.WilksState;
  router: RouterState
}

export namespace RootState {
  export type WilksState = WilksModel;
}
