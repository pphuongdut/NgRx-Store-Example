import * as programActions from './../action/program.actions';
import { Action, createReducer, on } from '@ngrx/store';
import { Program } from 'src/app/models/program';

export const programFeatureKey = 'program';

export interface State {
  programs: Program[

  ];
}

export const initialState: State = {
  programs: [
    {
      name: 'Pg 1',
      type: 'A',
    },
    {
      name: 'Pg 2',
      type: 'B',
    },
  ],
};

export const programReducer = createReducer(
  initialState,
  on(programActions.addProgram, (state: State, { program }) => ({
    ...state,
    programs: [...state.programs, program],
  })),
  on(programActions.deleteProgram, (state: State, { index }) => ({
    ...state,
    programs: [...state.programs.slice(0, index), ...state.programs.slice(index + 1)],
  }))
);

export function reducer(state: State | undefined, action: Action) : any
{
  return programReducer(state, action)
}
