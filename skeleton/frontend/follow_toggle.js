const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el) {
    // debugger
    this.$el = $el;
    this.userId = $el.data("user-id");
    this.followState = $el.data("initial-follow-state");
    this.render();
    this.handleClick();
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.prop("disabled", false);
    } else if (this.followState === "followed") {
      this.$el.text("Unfollow!");
      this.$el.prop("disabled", false);
    } else {
      this.$el.prop("disabled", true);
    }
  }

  handleClick() {
    this.$el.on("click", (event) => {
      event.preventDefault();
      if (this.followState === "unfollowed") {
        this.followState = "following";
        this.render();

        let follow = () => {
          this.$el.data("initial-follow-state", "followed");
          this.followState = "followed";
          this.render();
        };
 
        APIUtil.followUser(this.userId).then(follow());
      } else {
        this.followState = "unfollowing";
        this.render();
        
        let unfollow = () => {
          this.$el.data("initial-follow-state", "unfollowed");
          this.followState = "unfollowed";
          this.render();
        };

        APIUtil.unfollowUser(this.userId).then(unfollow());

      }
    });
  }
}

module.exports = FollowToggle;