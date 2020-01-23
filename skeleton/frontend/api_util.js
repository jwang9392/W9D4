const APIUtil = {
  followUser: id => {
    debugger
    return $.ajax({
      method: "POST",
      url: `/users/${id}/follow`,
      dataType: "json",
    });
  },

  unfollowUser: id => {
    debugger
    return $.ajax({
      method: "DELETE",
      url: `/users/${id}/follow`,
      dataType: "json"
    });
  },

  searchUsers: queryVal => {
    return $.ajax({
      method: 'GET',
      url: '/users/search',
      datatype: 'json',
      data: {query: queryVal}
    });
  }
};

module.exports = APIUtil;