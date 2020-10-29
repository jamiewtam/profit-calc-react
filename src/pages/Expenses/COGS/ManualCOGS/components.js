export const formatManualCOGS = (allManualCOGS) => {
  return allManualCOGS.map((data) => {
    const {
      _id,
      productName,
      productVariantName,
      productVariantID,
      productPrice,
      productCost,
      productShippingCost,
    } = data;

    const profit = productPrice - productCost - productShippingCost;

    return {
      id: _id,
      name: productName,
      variant: productVariantName,
      variantID: productVariantID,
      price: productPrice,
      cogsValue: productCost,
      shippingCostValue: productShippingCost,
      profit: profit,
    };
  });
};

export const columns = [
  {
    dataField: "name",
    text: "Product Name",
  },
  {
    dataField: "variant",
    text: "Variant Name",
  },
  {
    dataField: "price",
    text: "Product Price",
  },
  {
    dataField: "cogs",
    text: "COGS",
  },
  {
    dataField: "shippingCost",
    text: "Shipping Cost",
  },
  {
    dataField: "profit",
    text: "Profit",
  },
  {
    dataField: "submit",
    text: "Save",
  },
];
