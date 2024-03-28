"use strict";
n.r(t), n.d(t, {
  getUnreadTopicsCount: function() {
    return s
  }
}), n("47120");
var a = n("709054"),
  l = n("765104");

function s(e, t) {
  var n;
  let s = null !== (n = l.default.summaries(e)) && void 0 !== n ? n : [],
    i = 0;
  for (let e of s) a.default.compare(e.endId, t) > 0 && (i += 1);
  return i
}