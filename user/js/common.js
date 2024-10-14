const convertNumberToPrice = (value = 0) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value).split(".")[0];
};
