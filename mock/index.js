module.exports.numbersGenaration = () => {
  let list = [];

  for (let i = 0; i < 1000; i++) {
    i = i.toString();
    if (i.length == 1) {
      list.push({
        "number": `555 000 00${i}`,
        "cost": `1.0${i}`
      });
    }
    else if (i.length == 2) {
      list.push({
        "number": `555 000 0${i}`,
        "cost": `1.${i}`
      });
    }
    else if (i.length == 3) {
      list.push({
        "number": `555 000 ${i}`,
        "cost": `1.${i.substr(1)}`
      });
    }
  }

  return list;
};
