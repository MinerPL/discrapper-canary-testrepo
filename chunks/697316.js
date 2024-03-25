"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("913144"),
  s = n("862853"),
  l = {
    init() {
      a.default.subscribe("CONNECTION_OPEN", () => {
        (0, s.reset)()
      }), a.default.subscribe("LOGOUT", () => {
        (0, s.reset)()
      })
    }
  }