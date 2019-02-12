const request = require('request');
const config = require('../config');
const { parsePrice } = require('../utils');

const getDescriptionEndpoint = id =>
  `/items/​${id}/description`.replace(/[^\x00-\x7F]/g, '');

const itemDetails = (req, res) => {
  const id = decodeURIComponent(req.params.id);
  const itemURL = `${config.API_BASE_URL}/items/${id}`;
  let responseDetail;

  request.get(itemURL, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const itemDetail = JSON.parse(body);
      const descriptionURL = `${config.API_BASE_URL}${getDescriptionEndpoint(
        id
      )}`;

      request.get(descriptionURL, function(error, response, body) {
        if (!error && response.statusCode === 200) {
          const description = JSON.parse(body);
          const categoriesUrl = `${config.API_BASE_URL}/categories/${
            itemDetail.category_id
          }`;

          request.get(categoriesUrl, (error, response, body) => {
            if (!error && response.statusCode === 200) {
              const categoriesBody = JSON.parse(body);
              const categoryNames = categoriesBody.path_from_root.map(
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
                categories: categoryNames
              };

              res.json(responseDetail);
            } else {
              console.log(error);
              res.json({ status: 500, error: 'Server error' });
            }
          });
        } else {
          console.log(error);
          res.json({ status: 500, error: 'Server error' });
        }
      });
    } else {
      // Error
      console.log(error);
      res.json({ status: 500, error: 'Server error' });
    }
  });
};

module.exports = itemDetails;
