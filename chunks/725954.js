i.d(n, {
  Z: function() {
return E;
  }
});
var s = i(735250);
i(470079);
var l = i(120356),
  o = i.n(l),
  t = i(442837),
  r = i(481060),
  a = i(129861),
  d = i(427217),
  c = i(158776),
  u = i(51144),
  I = i(981631),
  _ = i(689938),
  f = i(988546);

function E(e) {
  let {
user: n,
displayProfile: i
  } = e, l = (0, t.e7)([c.Z], () => c.Z.findActivity(n.id, e => e.type === I.IIU.CUSTOM_STATUS)), E = u.ZP.getName(n);
  return (0, s.jsxs)('div', {
className: f.container,
children: [
  null == E && (0, s.jsx)(a.Z, {
    user: n,
    className: f.nameTag,
    usernameClass: f.username,
    discriminatorClass: f.discriminator
  }),
  null != E && (0, s.jsxs)('div', {
    children: [
      (0, s.jsx)(r.Text, {
        variant: 'text-lg/semibold',
        style: {
          marginRight: '12px'
        },
        children: E
      }),
      (0, s.jsx)(a.Z, {
        user: n,
        forceUsername: !0,
        usernameClass: f.discriminator,
        discriminatorClass: f.discriminator,
        className: o()(f.nameTag, f.nameTagSmall)
      })
    ]
  }),
  (null == i ? void 0 : i.pronouns) != null && (null == i ? void 0 : i.pronouns) !== '' && (0, s.jsx)(r.Tooltip, {
    text: _.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, s.jsx)(r.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: o()(f.pronouns, f.nameTagSmall),
      children: i.pronouns
    })
  }),
  null != l ? (0, s.jsx)('div', {
    className: f.__invalid_customStatusActivity,
    children: (0, s.jsx)(r.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: f.customStatusText,
      children: (0, s.jsx)(d.Z, {
        activity: l,
        className: f.customStatus,
        emojiClassName: f.customStatusEmoji,
        soloEmojiClassName: f.customStatusSoloEmoji
      })
    })
  }) : null
]
  });
}