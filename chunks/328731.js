l.d(n, {
  Z: function() {
return p;
  }
});
var t = l(735250),
  r = l(120356),
  i = l.n(r),
  a = l(481060),
  u = l(318374),
  s = l(171368),
  o = l(5192),
  c = l(192918),
  d = l(256139),
  m = l(689938),
  f = l(182408);

function p(e) {
  let {
entry: n,
channel: l,
className: r
  } = e, {
displayParticipants: p,
participant1: E,
participant2: v,
numOtherParticipants: C
  } = (0, c.Z)(n, 3), h = [
E,
v
  ];
  return (0, t.jsxs)('div', {
className: i()(f.container, r),
children: [
  p.length > 0 ? (0, t.jsxs)(t.Fragment, {
    children: [
      (0, t.jsx)(u.Z, {
        maxUsers: 3,
        users: p,
        size: a.AvatarSizes.SIZE_20,
        avatarClassName: f.stackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }),
      (0, t.jsx)(a.Spacer, {
        size: 6,
        horizontal: !0
      })
    ]
  }) : null,
  (0, t.jsx)(a.Heading, {
    variant: 'text-sm/semibold',
    className: i()(f.textSecondary, f.truncatedText, f.usersHeader),
    scaleFontToUserSetting: !0,
    children: m.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS.format({
      user1: o.ZP.getName(l.guild_id, l.id, h[0]),
      user2: o.ZP.getName(l.guild_id, l.id, h[1]),
      countOthers: C,
      nameHook: (e, n) => (0, t.jsx)(d.Z, {
        tag: 'span',
        onClick: () => (0, s.openUserProfileModal)({
          userId: h[parseInt(n)].id
        }),
        children: (0, t.jsx)(a.Text, {
          variant: 'text-sm/semibold',
          className: i()(f.textPrimary, f.truncatedText),
          lineClamp: 1,
          scaleFontToUserSetting: !0,
          children: e
        }, n)
      })
    })
  })
]
  });
}