import { v4 as uuidv4 } from 'uuid';
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
        name.value = "";
        plate.value = "";
      }
    });
  }

  create(filds: string[]) {
    const key = uuidv4();

    const tbody = selectors('data-target', 'tbody') as HTMLTableElement;
    const tr = createElement('tr', null, null, { data: 'data-taget-key', value: key });

    tr.appendChild(this.key(key));

    filds.forEach((element) => {
      tr.appendChild(createElement('td', element, null, null));
    });

    tr.appendChild(this.delete(key));

    tbody.appendChild(tr);

    this.addEventListenerDelete(key);
  }

  key(key: string) {
    const pin = createElement('td', key, null, null);
    const copy = createElement('button', 'copy', null, null);

    pin.appendChild(copy);

    return pin;
  }

  delete(key: string) {
    const td = createElement('td', null, null, null);
    const buttonDelete = createElement('button', 'delete', null, { data: "data-action", value: key });

    td.appendChild(buttonDelete);

    return td;
  }

  addEventListenerDelete(key: string) {
    const buttonDelete = selectors('data-action', key);


    buttonDelete?.addEventListener('click', () => {
      selectors('data-taget-key', key)?.remove();
    })
  }
}
