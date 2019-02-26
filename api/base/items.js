const fetch = require("node-fetch");
const { author } = require("../config");
const { getUrlItems, getCategories, mapItem } = require("../utils");

const formatResponse = res => {
  const categories = getCategories(res);
  const items = res.results.map(mapItem);
  const response = {
    author: author,
    categories: categories,
    mainCategory: categories ? categories.id : -1,
    items: items
  };
  return response;
};
const getItemsFromAPI = (req, res) => {
  const searchValue = encodeURIComponent(req.query.q);
  try {
    fetch(getUrlItems(searchValue))
      .then(res => res.json())
      .then(json => {
        if (json.results.length > 0) {
          res.status(200).json(formatResponse(json));
        } else
          res.status(404).json({
            status: 404,
            error: true,
            message: "No hay publicaciones que coincidan con tu búsqueda."
          });
      })
      .catch(error => res.send(error));
  } catch (error) {
    res.send(error);
  }
};

module.exports = getItemsFromAPI;
