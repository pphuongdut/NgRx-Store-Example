import { createAction, props } from '@ngrx/store';
import { Program } from 'src/app/models/program';

export const addProgram = createAction(
  '[Program] Add Program',
  (program: Program) => ({ program })
);

export const deleteProgram = createAction(
  '[Program] Delete Program',
  (index: number) => ({ index })
);
