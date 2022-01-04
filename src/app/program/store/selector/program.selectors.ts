import { programFeatureKey } from './../reducer/program.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducerProgram from '../reducer/program.reducer';

export const selectCustomerState = createFeatureSelector<reducerProgram.State>(
  reducerProgram.programFeatureKey
);
export const selectProgram = createSelector(
  selectCustomerState,
  (state: reducerProgram.State) => state.programs
);
