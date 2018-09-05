module.exports.listNumbers = (values) => {
  let list = [];
  let meta = {
    "page": values.page,
    "perPage": values.perPage,
    "totalPages": values.totalPages
  };
  let data = [];

  for (let number = 555000000; number < 555001000; number++) {
    number = number.toString();
    data.push({
      "number": number,
      "cost": `1.${number.substr(7)}`
    });
  }

  list = list.concat(meta, data);

  return list;
};
