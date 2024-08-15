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
var a = n(120356),
  s = n.n(a),
  r = n(481060),
  l = n(129861),
  o = n(9585);

function c(e) {
  let {
user: t,
status: n,
isFocused: a,
guildId: s
  } = e;
  return (0, i.jsxs)('div', {
className: o.memberItem,
children: [
  (0, i.jsx)(r.Avatar, {
    src: t.getAvatarURL(s, 24),
    className: o.avatar,
    'aria-label': t.username,
    size: r.AvatarSizes.SIZE_24,
    status: n,
    statusColor: a ? 'currentColor' : void 0
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
    className: s()(o.avatar, o.unknown)
  }),
  (0, i.jsx)('div', {
    children: t
  })
]
  });
}