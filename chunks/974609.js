"use strict";
n.d(t, {
  H: function() {
    return o
  }
}), n(47120), n(442837);
var i = n(271383),
  r = n(430824),
  s = n(700785);
let o = function(e, t) {
  let [n, o] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.Z, i.ZP];
  if (null == e || null == t) return null;
  let a = n.getGuild(e);
  if (null == a) return null;
  let l = o.getMember(a.id, t);
  return null == l ? null : s.Hu(a, l)
}