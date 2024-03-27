"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  },
  getDisplayProfile: function() {
    return c
  }
}), n("222007");
var i = n("446674"),
  r = n("697218"),
  l = n("117362"),
  s = n("811907"),
  o = n("713135");

function u(e, t) {
  return (0, i.useStateFromStores)([r.default, o.default], () => c(e, t, [r.default, o.default]))
}
let a = (0, l.cachedFunction)((e, t) => new s.default(e, t));

function c(e, t) {
  let [n, i] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [r.default, o.default], l = n.getUser(e), s = i.getUserProfile(e), u = i.getGuildMemberProfile(e, t);
  return null == l || null == s ? null : a(s, u)
}