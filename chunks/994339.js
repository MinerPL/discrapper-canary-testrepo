"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
});
var s = n("70956"),
  a = n("709054");
let l = 2 * s.default.Millis.HOUR;

function i(e, t, n) {
  if (null == e) return !1;
  let s = null != t.activity ? t.activity.party_id : null,
    i = null != s && (null == e.party || e.party.id !== s),
    r = a.default.extractTimestamp(t.id) + l < Date.now(),
    o = null != e.application_id && e.application_id !== n;
  return !i && !r && !o
}