"use strict";
n.d(t, {
  S: function() {
    return s
  }
}), n(653041);
var i = n(285651),
  r = n(138421);
let s = (e, t, n) => {
  if ("" === e) return null;
  let s = [],
    o = [];
  return (0, r.WL)(e).forEach(e => {
    let r = (0, i.cO)(e, t, n);
    r === i.eb.SENDABLE ? s.push(e) : r === i.eb.SENDABLE_WITH_PREMIUM && o.push(e)
  }), {
    sendable: s,
    sendableWithPremium: o
  }
}