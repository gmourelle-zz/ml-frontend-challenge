const { parsePrice } = require('../utils');

const getCategories = results => {
  const { filters } = results;
  if (!filters || filters.length === 0) {
    return;
  }
  const categoryFilters = filters.filter(f => f.id === 'category');
  const arrayCategories = categoryFilters[0].values.map(value =>
    value.path_from_root.map(category => category.name)
  );
  return arrayCategories;
};

const mapItem = item => ({
  id: item.id,
  title: item.title,
  price: parsePrice(item.price, item.currency_id),
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
  localidad: item.address.state_name
});

module.exports = {
  getCategories: getCategories,
  mapItem: mapItem
};
