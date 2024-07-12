n.d(t, {
  Z: function() {
return _;
  }
});
var s = n(735250);
n(470079);
var a = n(481060),
  r = n(204197),
  i = n(998502),
  l = n(631885),
  o = n(329242),
  c = n(811495);
let d = i.ZP.getEnableHardwareAcceleration() ? a.AnimatedAvatar : a.Avatar;

function _(e) {
  let {
otherUser: t,
status: n
  } = e, i = (0, l.j_)(t.id, n), {
avatarSrc: _,
avatarDecorationSrc: u,
eventHandlers: E
  } = (0, r.Z)({
user: t,
size: a.AvatarSizes.SIZE_40,
animateOnHover: !0
  });
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)('div', {
    ...E,
    children: (0, s.jsx)(d, {
      className: c.avatar,
      src: _,
      avatarDecoration: u,
      size: a.AvatarSizes.SIZE_40,
      'aria-label': t.username
    })
  }),
  (0, s.jsxs)('div', {
    className: c.userPreview,
    children: [
      (0, s.jsx)('div', {
        className: c.userContainerWithTimestamp,
        children: (0, s.jsx)(o.Z, {
          user: t
        })
      }),
      (0, s.jsx)(a.Text, {
        className: c.__invalid_timestamp,
        color: 'text-muted',
        variant: 'text-xs/normal',
        children: i
      })
    ]
  })
]
  });
}