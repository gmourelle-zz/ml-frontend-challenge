const url = process.env.REACT_APP_DB_API;

export const getItems = query =>
  fetch(`${url}?q=${query}`)
    .then(data => data.json())
    .then(items => items)
    .catch(error => ({ error: true, message: error.message }));

export const getItem = id =>
  fetch(`${url}${id}`)
    .then(data => data.json())
    .then(items => items)
    .catch(error => error);
