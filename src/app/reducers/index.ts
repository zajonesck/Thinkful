import { combineReducers, Reducer } from 'redux';
import { RootState } from './state';
import { wilksReducer} from './wilks';
import { routerReducer, RouterState } from 'react-router-redux';

export { RootState, RouterState };

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  wilks: wilksReducer,
  router: routerReducer
});
