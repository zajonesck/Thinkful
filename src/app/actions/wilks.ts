import { createAction } from 'redux-actions';

export namespace WilksActions {
  export enum Type {
    CALCULATE_BAR_WEIGHT = 'CALCULATE_BAR_WEIGHT',
    UPDATE_BODY_WEIGHT = 'UPDATE_BODY_WEIGHT',
    UPDATE_GOAL_WILKS = 'UPDATE_GOAL_WILKS',
  }

  export const calculateBarWeight = createAction<{bodyWeight: number, goalWilks: number, isMale: boolean}>(Type.CALCULATE_BAR_WEIGHT);
  export const updateBodyWeight = createAction<{bodyWeight: number}>(Type.UPDATE_BODY_WEIGHT);
  export const updateGoalWilks = createAction<{goalWilks: number}>(Type.UPDATE_GOAL_WILKS);
}

export type WilksActions = Omit<typeof WilksActions, 'Type'>;

