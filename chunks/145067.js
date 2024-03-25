"use strict";
n.r(t), n.d(t, {
  showGuildHeaderPopout: function() {
    return i
  },
  useGuildHeaderPopoutStore: function() {
    return r
  }
});
var a = n("308503");
let s = Object.freeze({
    isPopoutOpen: !1
  }),
  l = (0, a.default)(e => s),
  i = e => {
    l.setState(() => ({
      isPopoutOpen: e
    }))
  },
  r = l