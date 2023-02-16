import { FullNamePipe } from './pipes.component';

describe('PipesComponent', () => {
  it('create an instance', () => {
    const pipe = new FullNamePipe();
    expect(pipe).toBeTruthy();
  });
});
