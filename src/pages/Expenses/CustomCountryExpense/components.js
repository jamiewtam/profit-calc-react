export const formatCustomCountryExp = (productCosts, shippingCosts) => {
  const customCountryExpArr = [];

  for (const country in productCosts) {
    customCountryExpArr.push({
      countryName: country,
      cost: productCosts[country],
      costInput: productCosts[country],
      shipping: shippingCosts[country],
      shippingInput: shippingCosts[country],
    });
  }

  return customCountryExpArr;
};

export const columns = [
  {
    dataField: "countryName",
    text: "Country Name",
  },
  {
    dataField: "costInput",
    text: "Product Cost (Per Product)",
  },
  {
    dataField: "shippingInput",
    text: "Shipping Cost (Per Order)",
  },

  {
    dataField: "submit",
    text: "Save",
  },
];
