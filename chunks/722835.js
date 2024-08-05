n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(872810),
  a = n(594190),
  s = n(199902),
  r = n(592125),
  l = n(430824),
  o = n(131951),
  c = n(496675),
  d = n(944486),
  u = n(449224),
  _ = n(382182),
  h = n(74299),
  E = n(960861),
  I = n(989941);

function m() {
  let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
  if (!(0, h.Z)(o.Z) || null != s.Z.getCurrentUserActiveStream())
return !1;
  let t = d.Z.getVoiceChannelId(),
n = r.Z.getChannel(t);
  if (null == n)
return !1;
  let m = n.getGuildId();
  if (!(0, _.JL)(n, l.Z, c.Z, !1))
return !1;
  if (E.ZP.enabled())
E.ZP.presentPicker();
  else {
let t = (0, I.Z)(a.ZP, u.Z);
if (null == t || t.isLauncher && !e)
  return !1;
(0, i.WH)(m, n.id, {
  pid: t.pid
});
  }
  return !0;
}