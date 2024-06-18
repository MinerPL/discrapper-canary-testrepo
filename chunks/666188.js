"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var i = n(284363),
  r = n(854218);
let s = new Set([i.Q.PARTNERED, i.Q.VERIFIED, i.Q.VERIFIED_AND_PARTNERED, i.Q.COMMUNITY, i.Q.DISCOVERABLE, i.Q.CLAN]);

function o(e) {
  if (null == e) return !1;
  let t = (0, r.XX)(e),
    n = (0, i.i)(t);
  return s.has(n)
}