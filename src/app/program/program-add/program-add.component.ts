import { addProgram } from './../store/action/program.actions';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../store/reducer/program.reducer';
import { Program } from 'src/app/models/program';

@Component({
  selector: 'app-program-add',
  templateUrl: './program-add.component.html',
  styleUrls: ['./program-add.component.scss']
})
export class ProgramAddComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
  }
  addProgram( name: any, type: any)
  {
    const program = new Program();
    program.name = name;
    program.type = type;
    this.store.dispatch(addProgram(program))
  }

}
