const url = process.env.REACT_APP_API;

export const getItems = query =>
  fetch(`${url}?q=${query}`)
    .then(data => data.json())
    .catch(error => ({ error: true, message: error.message }));

export const getItem = id =>
  fetch(`${url}${id}`)
    .then(data => data.json())
    .catch(error => ({ error: true, message: error.message }));
