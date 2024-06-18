"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(411198);
let _ = {};
class d extends(o = a.ZP.Store) {
  getGuild(e) {
    return _[e]
  }
}
s = "AuthInviteStore", (r = "displayName") in(i = d) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new d(l.Z, {
  AUTH_INVITE_UPDATE: function(e) {
    let {
      invite: t
    } = e, n = t.guild;
    if (null == n) return !1;
    _[n.id] = (0, u.Qs)(n)
  }
})