import { selectors } from '../helpers/selectors';
import { createElement } from '../helpers/createElement';

export default class Context {

  constructor() {
    this.submit();
  }

  submit() {
    addEventListener('submit', (event: Event) => {
      event.preventDefault();

      const name = selectors('data-input', 'name') as HTMLInputElement;
      const plate = selectors('data-input', 'plate') as HTMLInputElement;

      if (name.value != "" && plate.value) {
        this.create([name.value, plate.value]);
      }
    });
  }

  create(filds: string[]) {
    const tbody = selectors('data-target', 'tbody') as HTMLTableElement;
    const tr = createElement('tr', null, null, null);

    tr.appendChild(this.pin);

    filds.forEach((element) => {
      tr.appendChild(createElement('td', element, null, null));
    });

    tr.appendChild(this.delete);

    tbody.appendChild(tr);
  }

  get pin() {
    const pin = createElement('td', '231312', null, null);
    const copy = createElement('button', 'copy', null, null);

    pin.appendChild(copy);

    return pin;
  }

  get delete() {
    const td = createElement('td', null, null, null);
    const buttonDelete = createElement('button', 'delete', null, null);

    td.appendChild(buttonDelete);

    return td;
  }
}
