const food = (foods = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...foods, action.payload];
    case "SINGLE":
      return [...foods, action.payload];
    default:
      return foods;
  }
};

export default food;
