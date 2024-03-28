"use strict";
n.r(t), n.d(t, {
  userNeedsAgeGate: function() {
    return i
  }
});
var a = n("594174"),
  s = n("709054");
let l = new Date("06/16/2020");

function i() {
  let e = a.default.getCurrentUser();
  return null != e && s.default.extractTimestamp(e.id) > l.getTime() && !e.isClaimed() && null == e.nsfwAllowed
}