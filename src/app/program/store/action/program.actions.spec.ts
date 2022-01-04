import * as fromProgram from './program.actions';

describe('loadPrograms', () => {
  it('should return an action', () => {
    expect(fromProgram.loadPrograms().type).toBe('[Program] Load Programs');
  });
});
