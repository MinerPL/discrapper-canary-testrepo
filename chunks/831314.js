"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var a = n("872717"),
  s = n("271938"),
  l = n("49111"),
  i = {
    setUserAchievement(e, t, n) {
      let i = s.default.getId();
      return a.HTTP.put({
        url: l.Endpoints.USER_ACHIEVEMENTS_FOR_USER(i, e, t),
        body: {
          percent_complete: n
        },
        oldFormErrors: !0
      })
    },
    fetchForApplication: e => a.HTTP.get({
      url: l.Endpoints.USER_ACHIEVEMENTS(e),
      retries: 1,
      oldFormErrors: !0
    }).then(e => {
      let {
        body: t
      } = e;
      return t
    })
  }