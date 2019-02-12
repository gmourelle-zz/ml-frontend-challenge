const { parsePrice } = require('../utils');

const getCategories = results => {
  const { filters } = results;
  if (!filters) {
    return;
  }

  const categoryFilters = filters.filter(f => f.id === 'category');
  const arrayCategories = categoryFilters[0].values.map(value =>
    value.path_from_root.map(category => category.name)
  );
  return arrayCategories;
};

const mapItem = item => {
  return {
    id: item.id,
    title: item.title,
    price: parsePrice(item.price, item.currency_id),
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  };
};

module.exports = {
  getCategories: getCategories,
  mapItem: mapItem
};
