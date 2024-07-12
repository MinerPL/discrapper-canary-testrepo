n.d(t, {
  Y: function() {
return d;
  },
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var s = n(120356),
  a = n.n(s),
  r = n(481060),
  l = n(129861),
  o = n(254065);

function c(e) {
  let {
user: t,
status: n,
isFocused: s,
guildId: a
  } = e;
  return (0, i.jsxs)('div', {
className: o.memberItem,
children: [
  (0, i.jsx)(r.Avatar, {
    src: t.getAvatarURL(a, 24),
    className: o.avatar,
    'aria-label': t.username,
    size: r.AvatarSizes.SIZE_24,
    status: n,
    statusColor: s ? 'currentColor' : void 0
  }),
  (0, i.jsx)(l.Z, {
    user: t,
    hideDiscriminator: !0
  })
]
  });
}

function d(e) {
  let {
label: t
  } = e;
  return (0, i.jsxs)('div', {
className: o.memberItem,
children: [
  (0, i.jsx)('div', {
    className: a()(o.avatar, o.unknown)
  }),
  (0, i.jsx)('div', {
    children: t
  })
]
  });
}