const request = require('request');
const config = require('../config');

const getDescriptionEndpoint = id =>
  `/items/​${id}/description`.replace(/[^\x00-\x7F]/g, '');

const parsePrice = (amount, currency) => {
  let arrayAmount = amount.toString().split('.');
  return {
    currency: currency,
    amount: arrayAmount[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
    decimals: arrayAmount[1] === undefined ? '00' : arrayAmount[1]
  };
};
function itemDetails(req, res) {
  const id = decodeURIComponent(req.params.id);
  const getItemURL = config.API_BASE_URL + '/items/​' + id;
  let responseDetail;

  request.get(getItemURL, function(error, response, body) {
    if (!error && response.statusCode === 200) {
      const itemDetail = JSON.parse(body);
      const getDescriptionURL =
        config.API_BASE_URL + getDescriptionEndpoint(id);

      request.get(getDescriptionURL, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          const description = JSON.parse(body);
          const categoriesUrl = `${config.API_BASE_URL}/categories/${
            itemDetail.category_id
          }`;

          request.get(categoriesUrl, (error, response, body) => {
            const categoriesBody = JSON.parse(body);
            const categoriesNames = categoriesBody.path_from_root.map(
              category => category.name
            );
            responseDetail = {
              author: config.author,
              item: {
                id: itemDetail.id,
                title: itemDetail.title,
                price: parsePrice(itemDetail.price, itemDetail.currency_id),
                picture: itemDetail.pictures[0].url,
                condition: itemDetail.condition,
                free_shipping: itemDetail.shipping.free_shipping,
                sold_quantity: itemDetail.sold_quantity,
                description: description.plain_text,
                categoryId: itemDetail.category_id
              },
              categories: categoriesNames
            };

            res.json(responseDetail);
          });
        } else {
          res.json({ status: 500, error: 'Server error' });
        }
      });
    } else {
      // Error
      res.json({ status: 500, error: 'Server error' });
    }
  });
}

module.exports = itemDetails;
