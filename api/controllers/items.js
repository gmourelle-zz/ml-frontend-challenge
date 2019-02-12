const request = require('request');
const config = require('../config');
const mapFunctions = require('./mapper');

function getItemsFromAPI(req, res) {
  const searchValue = encodeURIComponent(req.query.q);
  const endpoint = `/sites/MLA/search?q=${searchValue}`;
  const getItemsURL = config.API_BASE_URL + endpoint;

  request.get(getItemsURL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const parsedResults = JSON.parse(body);
      const categories = mapFunctions.getCategories(parsedResults);
      const items = mapFunctions.getItems(parsedResults, config.itemsLimit);
      var response = {
        author: config.author,
        categories: categories[0],
        mainCategory: categories[0].id,
        items: items
      };

      res.status(200).json(response);
    } else {
      // Error
      res.status(404).json('Not found');
    }
  });
}

module.exports = getItemsFromAPI;
