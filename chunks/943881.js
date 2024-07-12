var r, i, a, o, s = n(442837),
  l = n(570140),
  u = n(411198);
let c = {};
class d extends(o = s.ZP.Store) {
  getGuild(e) {
return c[e];
  }
}
a = 'AuthInviteStore', (i = 'displayName') in(r = d) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new d(l.Z, {
  AUTH_INVITE_UPDATE: function(e) {
let {
  invite: t
} = e, n = t.guild;
if (null == n)
  return !1;
c[n.id] = (0, u.Qs)(n);
  }
});