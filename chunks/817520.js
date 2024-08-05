n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(442837),
  a = n(430824),
  s = n(644542),
  r = n(923726),
  l = n(144507),
  o = n(981631);

function c(e) {
  let t = (0, i.e7)([a.Z], () => a.Z.getGuild(e)),
n = (0, r.ss)(e),
c = (0, r.Gp)(),
d = (null == t ? void 0 : t.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_ENABLED)) === !0 && (null == t ? void 0 : t.hasFeature(o.oNc.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE)) === !1,
u = (0, l.H2)(t);
  return d && c && u && s.jJ.trackExposure({
guildId: e,
location: 'ca30d9_1'
  }), d && c && u && n;
}