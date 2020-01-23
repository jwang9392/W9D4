const APIUtil = require('./api_util.js');
class UsersSearch {
  constructor($el) {
    this.$el = $el;
    this.$input = $('.users-search > input');
    this.$ul = $('.users');
    this.handleInput();
  }

  handleInput() {
    this.$input.on("input", (event) => {
      // let successCB = () => {
      //   this.$ul.append('<h1>').text("searching");
      // };
      let array = APIUtil.searchUsers($(event.target).val());
      debugger
      this.renderResults(array)
    });
  }

  renderResults(array) {
    this.$ul.empty();

  }
}

module.exports = UsersSearch;