const parsePrice = (amount, currency) => {
  let arrayAmount = amount.toString().split('.');
  return {
    currency: currency,
    amount: arrayAmount[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
    decimals: arrayAmount[1] === undefined ? '00' : arrayAmount[1]
  };
};

function getCategories(results) {
  const { filters } = results;
  if (!filters) {
    return;
  }

  const categoryFilters = filters.filter(f => f.id === 'category');
  const arrayCategories = categoryFilters[0].values.map(value =>
    value.path_from_root.map(category => category.name)
  );
  return arrayCategories;
}

function mapItem(item) {
  return {
    id: item.id,
    title: item.title,
    price: parsePrice(item.price, item.currency_id),
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping
  };
}

function getItems(results, limit) {
  const initialItems = results.results.slice(0, limit); // Get first n elements from array.
  const mappedItems = initialItems.map(i => mapItem(i));
  return mappedItems;
}

module.exports = {
  getCategories: getCategories,
  mapItem: mapItem,
  getItems: getItems
};
