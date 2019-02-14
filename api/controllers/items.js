const request = require('request');
const config = require('../config');
const mapFunctions = require('./mapper');

function getItemsFromAPI(req, res) {
  const searchValue = encodeURIComponent(req.query.q);
  const endpoint = `/sites/MLA/search?q=${searchValue}&limit=${config.limit}`;
  const urlItems = `${config.API_BASE_URL}${endpoint}`;
  const { getCategories, mapItem } = mapFunctions;

  request.get(urlItems, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const parsedResults = JSON.parse(body);

      if (parsedResults.results.length > 0) {
        const categories = getCategories(parsedResults);
        const items = parsedResults.results.map(item => mapItem(item));
        const response = {
          author: config.author,
          categories: categories[0],
          mainCategory: categories[0].id,
          items: items
        };
        res.status(200).json({
          author: config.author,
          categories: categories[0],
          mainCategory: categories[0].id,
          items: items
        });
      }
      // res
      //   .status(404)
      //   .json('No hay publicaciones que coincidan con tu búsqueda.');
      else
        res.status(404).json({
          error: true,
          message: 'No hay publicaciones que coincidan con tu búsqueda.'
        });
    } else {
      // Error
      console.error(error);
      res.status(404).json('not found');
    }
  });
}

module.exports = getItemsFromAPI;
