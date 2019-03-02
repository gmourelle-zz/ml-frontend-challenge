const fetch = require("node-fetch");
const { author } = require("../config");
const {
  parsePrice,
  getUrlItem,
  getUrlDescription,
  getUrlCategories
} = require("../utils");

const getDescriptionItem = async id => {
  try {
    const response = await fetch(getUrlDescription(id));
    const json = await response.json();
    const data = json.plain_text;
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
const getCategoryNames = async category_id => {
  try {
    const response = await fetch(getUrlCategories(category_id));
    const json = await response.json();
    const data = json.path_from_root.map(category => category.name);
    return data;
  } catch (error) {
    throw new Error(error);
  }
};
const formatResponseItemDetail = async id => {
  const response = await fetch(getUrlItem(id));
  const data = await response.json();

  const {
    title,
    price,
    currency_id,
    pictures,
    condition,
    shipping,
    sold_quantity,
    category_id
  } = data;

  const description = await getDescriptionItem(id);

  const categories = await getCategoryNames(category_id);

  return {
    author: author,
    item: {
      id: id,
      title: title,
      price: parsePrice(price, currency_id),
      picture: pictures[0].url,
      condition: condition,
      free_shipping: shipping.free_shipping,
      sold_quantity: sold_quantity,
      description: description,
      categoryId: category_id
    },
    categories: categories
  };
};
const getItemDetails = async (req, res) => {
  const id = decodeURIComponent(req.params.id);

  try {
    const response = await formatResponseItemDetail(id);
    res.status(200).json(response);
  } catch (error) {
    res.send(error);
  }
};

module.exports = getItemDetails;
