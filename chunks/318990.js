n.d(t, {
  Z: function() {
return E;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(442837),
  l = n(481060),
  u = n(204197),
  c = n(357355),
  d = n(689938),
  _ = n(876925);

function E() {
  let e = (0, o.e7)([c.Z], () => c.Z.affinities.slice(0, 3)),
t = e[0],
{
  avatarSrc: n,
  eventHandlers: a
} = (0, u.Z)({
  user: t,
  size: l.AvatarSizes.SIZE_24,
  animateOnHover: !0
}),
E = e => null != e.globalName ? e.globalName : e.username,
f = i.useMemo(() => e.length >= 2 ? d.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_3.format({
  username: E(e[0])
}) : 1 === e.length ? d.Z.Messages.AFFINITIES_MARKETING_HEADER_V2_1.format({
  username: E(e[0])
}) : '', [e]);
  return 0 === e.length ? null : (0, r.jsxs)('div', {
className: _.container,
children: [
  (0, r.jsx)(l.Avatar, {
    className: _.__invalid_icon,
    src: n,
    'aria-label': t.username,
    size: l.AvatarSizes.SIZE_24,
    ...a
  }),
  (0, r.jsx)(l.Text, {
    className: s()(_.text),
    variant: 'text-sm/normal',
    color: 'always-white',
    children: f
  })
]
  });
}