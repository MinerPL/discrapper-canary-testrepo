t.d(n, {
  Z: function() {
return _;
  }
});
var l = t(735250),
  r = t(120356),
  i = t.n(r),
  a = t(481060),
  o = t(318374),
  s = t(171368),
  c = t(5192),
  u = t(192918),
  d = t(256139),
  m = t(689938),
  f = t(559522);

function _(e) {
  let {
entry: n,
channel: t,
className: r
  } = e, {
displayParticipants: _,
participant1: p,
participant2: v,
numOtherParticipants: C
  } = (0, u.Z)(n, 3), h = [
p,
v
  ];
  return (0, l.jsxs)('div', {
className: i()(f.container, r),
children: [
  _.length > 0 ? (0, l.jsxs)(l.Fragment, {
    children: [
      (0, l.jsx)(o.Z, {
        maxUsers: 3,
        users: _,
        size: a.AvatarSizes.SIZE_20,
        avatarClassName: f.stackedAvatar,
        hideOverflowCount: !0,
        disableUsernameTooltip: !0
      }),
      (0, l.jsx)(a.Spacer, {
        size: 6,
        horizontal: !0
      })
    ]
  }) : null,
  (0, l.jsx)(a.Heading, {
    variant: 'text-sm/semibold',
    className: i()(f.textSecondary, f.truncatedText),
    children: m.Z.Messages.CONTENT_INVENTORY_ENTRY_USERS.format({
      user1: c.ZP.getName(t.guild_id, t.id, h[0]),
      user2: c.ZP.getName(t.guild_id, t.id, h[1]),
      countOthers: C,
      nameHook: (e, n) => (0, l.jsx)(d.Z, {
        tag: 'span',
        onClick: () => (0, s.openUserProfileModal)({
          userId: h[parseInt(n)].id
        }),
        children: (0, l.jsx)(a.Text, {
          variant: 'text-sm/semibold',
          className: i()(f.textPrimary, f.truncatedText),
          lineClamp: 1,
          children: e
        }, n)
      })
    })
  })
]
  });
}