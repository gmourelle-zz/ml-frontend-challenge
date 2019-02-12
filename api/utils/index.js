const parsePrice = (amount, currency) => {
  let arrayAmount = amount.toString().split('.');
  return {
    currency: currency,
    amount: arrayAmount[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'),
    decimals: arrayAmount[1] === undefined ? '00' : arrayAmount[1]
  };
};

module.exports = {
  parsePrice: parsePrice
};
