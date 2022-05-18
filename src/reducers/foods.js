const food = (foods = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...foods, action.payload];
    case "DELETE":
      return foods.filter((f) => f._id !== action.payload);
    case "UPDATE":
      return foods.map((f) =>
        f._id !== action.payload._id ? f : action.payload
      );
    default:
      return foods;
  }
};

export default food;
