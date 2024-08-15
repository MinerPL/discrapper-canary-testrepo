n.d(s, {
  Z: function() {
return E;
  }
});
var i = n(735250);
n(470079);
var t = n(120356),
  l = n.n(t),
  o = n(442837),
  a = n(481060),
  r = n(129861),
  d = n(427217),
  c = n(158776),
  u = n(51144),
  _ = n(981631),
  I = n(689938),
  f = n(754090);

function E(e) {
  let {
user: s,
displayProfile: n
  } = e, t = (0, o.e7)([c.Z], () => c.Z.findActivity(s.id, e => e.type === _.IIU.CUSTOM_STATUS)), E = u.ZP.getName(s);
  return (0, i.jsxs)('div', {
className: f.container,
children: [
  null == E && (0, i.jsx)(r.Z, {
    user: s,
    className: f.nameTag,
    usernameClass: f.username,
    discriminatorClass: f.discriminator
  }),
  null != E && (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)(a.Text, {
        variant: 'text-lg/semibold',
        style: {
          marginRight: '12px'
        },
        children: E
      }),
      (0, i.jsx)(r.Z, {
        user: s,
        forceUsername: !0,
        usernameClass: f.discriminator,
        discriminatorClass: f.discriminator,
        className: l()(f.nameTag, f.nameTagSmall)
      })
    ]
  }),
  (null == n ? void 0 : n.pronouns) != null && (null == n ? void 0 : n.pronouns) !== '' && (0, i.jsx)(a.Tooltip, {
    text: I.Z.Messages.USER_PROFILE_PRONOUNS,
    children: e => (0, i.jsx)(a.Text, {
      ...e,
      variant: 'text-sm/normal',
      className: l()(f.pronouns, f.nameTagSmall),
      children: n.pronouns
    })
  }),
  null != t ? (0, i.jsx)('div', {
    className: f.__invalid_customStatusActivity,
    children: (0, i.jsx)(a.Text, {
      variant: 'text-sm/normal',
      color: 'header-secondary',
      className: f.customStatusText,
      children: (0, i.jsx)(d.Z, {
        activity: t,
        className: f.customStatus,
        emojiClassName: f.customStatusEmoji,
        soloEmojiClassName: f.customStatusSoloEmoji
      })
    })
  }) : null
]
  });
}