n.d(t, {
  Z: function() {
return m;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  o = n.n(a),
  s = n(481060),
  l = n(129861),
  u = n(954138),
  c = n(979264),
  d = n(969832),
  _ = n(51144),
  E = n(659101),
  f = n(981631),
  h = n(689938),
  p = n(768524);

function m(e) {
  let {
user: t,
shouldCopyOnClick: n,
nickname: a,
pronouns: m,
usernameIcon: I,
identityCTA: T,
className: g,
isTryItOut: S = !1,
lastSection: A
  } = e, N = (0, u.Z)('username'), v = i.useMemo(() => ({
source: f.jXE.PROFILE_POPOUT,
tagUserId: t.id
  }), [t.id]);
  return (0, r.jsxs)(E.Z, {
className: o()(p.container, g),
lastSection: A,
children: [
  (0, r.jsxs)('div', {
    className: n ? p.copiableNameTag : void 0,
    children: [
      (0, r.jsx)(d.o, {
        className: p.copiableField,
        copyMetaData: 'User Tag',
        copyTooltip: h.Z.Messages.ACCOUNT_CLICK_TO_COPY,
        copyValue: _.ZP.getUserTag(t, {
          decoration: 'never',
          identifiable: 'always'
        }),
        showCopyIcon: !0,
        disableCopy: !n,
        children: (0, r.jsxs)('div', {
          className: p.userText,
          children: [
            null != a ? (0, r.jsx)(s.Heading, {
              variant: 'heading-lg/semibold',
              className: p.nickname,
              children: a
            }) : null,
            (0, r.jsx)(l.Z, {
              usernameIcon: I,
              user: t,
              forceUsername: !0,
              forcePomelo: S,
              className: null == a ? p.userTagNoNickname : p.userTagWithNickname,
              usernameClass: null == a ? p.userTagUsernameNoNickname : p.userTagUsernameBase,
              discriminatorClass: null == a ? p.userTagDiscriminatorNoNickname : p.discrimBase,
              botClass: null == a ? p.headerBotTag : p.headerBotTagWithNickname
            }),
            T
          ]
        })
      }),
      null != m && '' !== m && (0, r.jsx)(s.Tooltip, {
        text: h.Z.Messages.USER_PROFILE_PRONOUNS,
        children: e => (0, r.jsx)(s.Text, {
          ...e,
          variant: 'text-sm/normal',
          className: p.pronouns,
          children: m
        })
      })
    ]
  }),
  N && (0, r.jsx)('div', {
    className: p.clanTag,
    children: (0, r.jsx)(c.ZP, {
      userId: t.id,
      inline: !1,
      profileViewedAnalytics: v
    })
  })
]
  });
}