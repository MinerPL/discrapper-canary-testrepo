n.d(t, {
  C: function() {
return u;
  }
});
var i = n(149765),
  a = n(442837),
  l = n(160404),
  s = n(592125),
  r = n(430824),
  o = n(584825),
  c = n(790285),
  d = n(981631);

function u(e) {
  let {
guildId: t,
channelId: n
  } = e, u = (0, o.qi)(t);
  return (0, a.Wu)([
s.Z,
r.Z,
l.Z
  ], () => {
let e = s.Z.getChannel(n),
  a = r.Z.getGuild(t),
  o = l.Z.isViewingServerShop(t);
return null != a && null != e ? u.filter(t => function(e, t, n) {
  let {
    isPreviewingRoles: a = !1
  } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
  if (!(a || e.published))
    return !1;
  let l = n.permissionOverwrites[e.role_id];
  if ((0, c.TG)(n, l))
    return !0;
  let s = r.Z.getRole(t.id, t.getEveryoneRoleId()),
    o = null != s && !i.e$(s.permissions, d.Plq.VIEW_CHANNEL),
    u = (0, c.wB)(n, n.permissionOverwrites[t.id]),
    h = r.Z.getRole(t.id, e.role_id);
  return o && !u && null != h && (0, c.MT)(h) && !(0, c.wB)(n, l);
}(t, a, e, {
  isPreviewingRoles: o
})) : [];
  }, [
t,
n,
u
  ]);
}