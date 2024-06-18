"use strict";
var i, r, s, o, a = n(442837),
  l = n(433517),
  u = n(570140);
let _ = "GuildNSFWAgreeStore",
  d = {};
class c extends(o = a.ZP.Store) {
  initialize() {
    var e;
    d = null !== (e = l.K.get(_)) && void 0 !== e ? e : d
  }
  didAgree(e) {
    return null != e && (d[e] || !1)
  }
}
s = "GuildNSFWAgreeStore", (r = "displayName") in(i = c) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new c(u.Z, {
  GUILD_NSFW_AGREE: function(e) {
    let {
      guildId: t
    } = e;
    d[t] = !0, l.K.set(_, d)
  }
})