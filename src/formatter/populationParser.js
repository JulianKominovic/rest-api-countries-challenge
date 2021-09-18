const formatter = new Intl.NumberFormat("en-US", { style: "decimal" });

const getFormatted = (number) => {
  return formatter.format(number);
};

export { getFormatted };
