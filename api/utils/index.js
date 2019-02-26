const { limit, API_BASE_URL } = require("../config");

const parsePrice = (amount, currency) => {
  let arrayAmount = amount.toString().split(".");
  return {
    currency: currency,
    amount: arrayAmount[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."),
    decimals: arrayAmount[1] === undefined ? "00" : arrayAmount[1]
  };
};

const getUrlCategories = category_id =>
  `${API_BASE_URL}/categories/${category_id}`;

const getUrlDescription = id => {
  const description = `/items/​${id}/description`.replace(/[^\x00-\x7F]/g, "");
  return `${API_BASE_URL}${description}`;
};

const getUrlItem = id => `${API_BASE_URL}/items/${id}`;
const getUrlItems = searchValue =>
  `${API_BASE_URL}/sites/MLA/search?q=${searchValue}&limit=${limit}`;

const getCategories = ({ filters }) => {
  if (!filters || filters.length === 0) {
    return;
  }

  const categoryFilters = filters.filter(f => f.id === "category");
  const arrayCategories = categoryFilters[0].values.map(value =>
    value.path_from_root.map(category => category.name)
  );
  console.log(arrayCategories);
  return arrayCategories[0];
};

const mapItem = item => {
  const {
    id,
    title,
    currency_id,
    thumbnail,
    condition,
    shipping,
    address
  } = item;
  return {
    id: id,
    title: title,
    price: parsePrice(title, currency_id),
    picture: thumbnail,
    condition: condition,
    free_shipping: shipping.free_shipping,
    localidad: address.state_name
  };
};

module.exports = {
  parsePrice: parsePrice,
  getCategories: getCategories,
  mapItem: mapItem,
  getUrlItems: getUrlItems,
  getUrlItem: getUrlItem,
  getUrlDescription: getUrlDescription,
  getUrlCategories: getUrlCategories
};
