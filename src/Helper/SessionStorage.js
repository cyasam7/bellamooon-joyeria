export function setItem(name, data) {
  sessionStorage.setItem(name, data);
}
export function getItem(name) {
  return sessionStorage.getItem(name);
}
export function deleteItem(name) {
  sessionStorage.removeItem(name);
}
