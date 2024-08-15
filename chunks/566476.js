n.d(t, {
  Z: function() {
return u;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  i = n.n(a),
  r = n(399606),
  l = n(481060),
  o = n(385499),
  c = n(246946),
  d = n(92714);

function u(e) {
  let {
className: t,
avatarURL: n,
name: a,
bot: u,
verifiedBot: _,
userTag: I
  } = e, E = (0, r.e7)([c.Z], () => c.Z.hidePersonalInformation);
  return (0, s.jsxs)('div', {
className: i()(d.container, t),
children: [
  (0, s.jsx)(l.Avatar, {
    className: d.avatar,
    src: n,
    size: l.AvatarSizes.SIZE_24,
    'aria-label': a
  }),
  (0, s.jsxs)('div', {
    className: d.textContainer,
    children: [
      (0, s.jsx)(l.Text, {
        tag: 'span',
        className: d.name,
        color: 'header-primary',
        variant: 'text-sm/semibold',
        children: a
      }),
      u ? (0, s.jsx)(o.Z, {
        className: d.botTag,
        verified: _
      }) : null,
      E ? null : (0, s.jsx)(l.Text, {
        tag: 'span',
        color: 'interactive-normal',
        className: d.userTag,
        variant: 'text-sm/normal',
        children: I
      })
    ]
  })
]
  });
}