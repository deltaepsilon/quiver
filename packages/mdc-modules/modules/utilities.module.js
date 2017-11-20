export function findParent(func, el) {
  function find(el) {
    return func(el) ? el : el.parentElement && find(el.parentElement);
  }

  return !el ? find : find(el);
}
