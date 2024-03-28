"use strict";
o.r(t), o.d(t, {
  showGuildHeaderPopout: function() {
    return n
  },
  useGuildHeaderPopoutStore: function() {
    return u
  }
});
var r = o("652874");
let s = Object.freeze({
    isPopoutOpen: !1
  }),
  a = (0, r.default)(e => s),
  n = e => {
    a.setState(() => ({
      isPopoutOpen: e
    }))
  },
  u = a