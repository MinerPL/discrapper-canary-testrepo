"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("872717"),
  s = n("913144"),
  l = n("258516"),
  i = n("49111"),
  r = {
    async fetch() {
      try {
        let e = await a.HTTP.get({
          url: i.Endpoints.FRIEND_SUGGESTIONS
        });
        s.default.dispatch({
          type: "LOAD_FRIEND_SUGGESTIONS_SUCCESS",
          suggestions: e.body
        })
      } catch (e) {
        s.default.dispatch({
          type: "LOAD_FRIEND_SUGGESTIONS_FAILURE"
        })
      }
    },
    ignore(e) {
      a.HTTP.del(i.Endpoints.FRIEND_SUGGESTION(e))
    },
    async viewSuggestions(e) {
      if ((0, l.isInFriendSuggestionSeenStateExperiment)()) try {
        await a.HTTP.post({
          url: i.Endpoints.FRIEND_FINDER_VIEWED_SUGGESTIONS,
          body: {
            viewed_user_ids: e
          },
          retries: 1
        }), s.default.dispatch({
          type: "VIEWED_FRIEND_SUGGESTIONS_SUCCESS",
          userIds: e
        })
      } catch (e) {
        s.default.dispatch({
          type: "VIEWED_FRIEND_SUGGESTIONS_FAILURE"
        })
      }
    }
  }