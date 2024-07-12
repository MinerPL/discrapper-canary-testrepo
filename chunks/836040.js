n.d(t, {
  Z: function() {
return u;
  }
});
var i = n(735250),
  l = n(470079),
  r = n(442837),
  a = n(451478),
  s = n(727258),
  o = n(325257),
  c = n(981631);

function u(e) {
  let {
guild: t,
invite: n
  } = e, u = l.useMemo(() => (0, s.Mg)(t.id), [t.id]), d = (0, r.e7)([a.Z], () => a.Z.isFocused());
  return null == t ? null : (0, i.jsx)(o.Z, {
guildNode: u,
guild: t,
animatable: d,
draggable: !1,
contextMenu: () => {},
selected: !0,
route: c.Z5c.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, n.code)
  });
}