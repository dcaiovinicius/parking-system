import { selectors } from '../helpers/selectors'

export default class Context {
  constructor() {
    this.submit();
  }

  submit() {
    addEventListener('submit', (event: Event) => {
      event.preventDefault();

      const name = selectors('data-input', 'name') as HTMLInputElement;
      const plate = selectors('data-input', 'plate') as HTMLInputElement;
      console.log(name.value);
      console.log(plate.value);
    });
  }
}
