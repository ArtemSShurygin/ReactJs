
function addProductsByIds(json,...ids) {
  const parseDataIndexProducts = JSON.parse(json);
  let productsOnDisplay = [];
  ids.forEach(id => {
    productsOnDisplay.push(parseDataIndexProducts.find((el) =>el.id === id));
  });
  return productsOnDisplay;
}



export { addProductsByIds };

