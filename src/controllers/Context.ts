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
    this.addEventListenerCopy(key);
  }

  key(key: string) {
    const td = createElement('td', null, null, null);
    const copy = createElement('button', 'copy', { class: 'btn-copy' }, { data: "data-copy", value: key });
    const span = createElement('input', null, { class: 'uuid', value: key, readonly: null }, null);

    td.appendChild(span);
    td.appendChild(copy);

    return td;
  }

  delete(key: string) {
    const td = createElement('td', null, null, null);
    const buttonDelete = createElement('button', 'delete', { class: 'btn-delete' }, { data: "data-action", value: key });

    td.appendChild(buttonDelete);

    return td;
  }

  addEventListenerDelete(key: string) {
    const buttonDelete = selectors('data-action', key);


    buttonDelete?.addEventListener('click', () => {
      selectors('data-taget-key', key)?.remove();
    })
  }

  addEventListenerCopy(key: string) {
    const copy = selectors('data-copy', key);

    copy?.addEventListener('click', () => {
      navigator.clipboard.writeText(key);
    })
  }
}
