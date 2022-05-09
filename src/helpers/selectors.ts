export function selectors(attributeName: string, token: string) {
  return document.querySelector(`[${attributeName}~="${token}"]`);
}

