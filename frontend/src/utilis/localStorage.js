export const getData = (key) => {
  let data = JSON.parse(localStorage.getItem(key));
  return data;
};
export const setData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
