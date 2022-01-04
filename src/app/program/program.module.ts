import { programFeatureKey, reducer } from './store/reducer/program.reducer';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramViewComponent } from './program-view/program-view.component';
import { ProgramAddComponent } from './program-add/program-add.component';
import { StoreModule } from '@ngrx/store';



@NgModule({
  declarations: [
    ProgramViewComponent,
    ProgramAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(programFeatureKey, reducer),
  ],
  exports: [
    ProgramAddComponent,
    ProgramViewComponent
  ]
})
export class ProgramModule { }
