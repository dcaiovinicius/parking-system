function createElement(
  tagName: string,
  textContext: string | null,
  attributes: object | null,
  data: object | null
) {
  const element = document.createElement(tagName);

  if (attributes != null) {
    const entries = Object.entries(attributes);

    entries.map(([key, index]) => element.setAttribute(key, index));
  }

  if (textContext != null) {
    const text = document.createTextNode(textContext);

    element.appendChild(text);
  }

  if (data != null) {
    const map = new Map(Object.entries(data));

    element.setAttribute(map.get('data'), map.get('value'))
  }

  return element;
}

export default createElement;
