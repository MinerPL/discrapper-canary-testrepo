"use strict";
n.d(t, {
  k: function() {
    return a
  },
  m: function() {
    return r
  }
});
var i, r, s = n(652874);
(i = r || (r = {})).PROFILE_PANEL = "profile panel", i.USER_POPOUT = "user popout";
let o = {
    upsellSource: null
  },
  a = (0, s.Z)(e => ({
    ...o,
    setUpsellSource: t => e({
      upsellSource: t
    }),
    reset: () => {
      e({
        ...o
      })
    }
  }))