import { selectProgram } from './../store/selector/program.selectors';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Program } from 'src/app/models/program';
import { State } from '../store/reducer/program.reducer';
import { deleteProgram } from '../store/action/program.actions';

@Component({
  selector: 'app-program-view',
  templateUrl: './program-view.component.html',
  styleUrls: ['./program-view.component.scss']
})
export class ProgramViewComponent implements OnInit {

  programs$! : Observable<Program[]>
  constructor(private store: Store<State> ) {
    this.programs$ = this.store.pipe(select(selectProgram))
  }

  ngOnInit(): void {
  }
  deleteProgram( index : any )
  {
    this.store.dispatch(deleteProgram(index))
  }
}
