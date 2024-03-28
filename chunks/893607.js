"use strict";
n.r(t), n.d(t, {
  isValidChannelId: function() {
    return r
  },
  isValidGuildId: function() {
    return i
  }
});
var l = n("981631"),
  a = n("176505");
let s = /^\d+$/;

function i(e) {
  return null != e && (!!(e === l.ME || e === l.FAVORITES || e === l.EMPTY_NUX_SERVER || s.test(e)) || !1)
}

function r(e) {
  return !!(null == e || s.test(e) || (0, a.isStaticChannelRoute)(e)) || !1
}