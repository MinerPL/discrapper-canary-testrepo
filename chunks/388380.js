"use strict";
n.r(t);
var a = n("544891"),
  s = n("570140"),
  l = n("981631");
t.default = {
  async fetch() {
    try {
      let e = await a.HTTP.get({
        url: l.Endpoints.FRIEND_SUGGESTIONS
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
    a.HTTP.del(l.Endpoints.FRIEND_SUGGESTION(e))
  }
}