module.exports = {
  async listNumbers() {
    let data = [];

    for (let number = 555000000; number < 555001000; number++) {
      number = number.toString();
      data.push({
        "number": Number(number),
        "cost": Number(`1.${number.substr(7)}`)
      });
    }

    return data;
  },

  async createPage(value) {
    const listNumbers = await this.listNumbers();
    let totalPages = Math.ceil(listNumbers.length / value.perPage);
    let count = (value.page * value.perPage) - value.perPage;
    let maxPage = count + value.perPage;
    let page = {
      meta: {
        "page": value.page,
        "perPage": value.perPage,
        "totalPages": totalPages
      },
      data: []
    };

    if(value.page <= totalPages){
      for(let i = count; i < maxPage; i++){
        if(listNumbers.length != 0){
          page.data.push(listNumbers[i]);
        }
        count++;
      }
    }

    return page;
  }
}
