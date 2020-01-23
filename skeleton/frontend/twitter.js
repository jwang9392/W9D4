const FollowToggle = require('./follow_toggle.js');
const UsersSearch = require('./users_search.js');
$(( ) => {
  // debugger
  $('.follow-toggle').each( (i, el) => {
    // debugger
    new FollowToggle($( el ));
  });

  $('.users-search').each((i, el) => {
    // debugger
    new UsersSearch($(el));
  });
});