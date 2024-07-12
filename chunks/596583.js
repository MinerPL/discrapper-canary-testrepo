r(47120);
var t = r(735250);
r(470079);
var a = r(120356),
  i = r.n(a),
  n = r(512722),
  l = r.n(n),
  C = r(442837),
  o = r(780384),
  d = r(481060),
  c = r(493683),
  _ = r(37234),
  x = r(410030),
  p = r(204197),
  h = r(819640),
  f = r(63063),
  u = r(51144),
  R = r(281494),
  m = r(276444),
  E = r(792451),
  j = r(814667),
  L = r(981631),
  g = r(689938),
  S = r(965208);
let A = (e, s) => {
h.Z.hasLayers() && (0, _.xf)(), c.Z.openPrivateChannel(e), s();
  },
  M = e => {
let {
  user: s,
  trialCreationResult: r,
  onClose: a
} = e, {
  avatarSrc: n,
  eventHandlers: l
} = (0, p.Z)({
  user: s,
  size: d.AvatarSizes.SIZE_56
}), C = u.ZP.getName(s), o = s.username !== C && r === R.Fz.SUCCESS, c = r === R.Fz.FAIL;
return (0, t.jsxs)('div', {
  className: S.referredUserRowContainer,
  children: [
    (0, t.jsx)(d.Avatar, {
      imageClassName: i()({
        [S.erroredAvatar]: c
      }),
      src: n,
      'aria-label': C,
      size: d.AvatarSizes.SIZE_56,
      ...l
    }),
    (0, t.jsxs)('div', {
      className: S.referredUserRowBody,
      children: [
        c ? (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(d.Text, {
              className: S.errorDisplayName,
              variant: 'text-md/medium',
              children: C
            }),
            (0, t.jsx)(d.Text, {
              variant: 'text-md/medium',
              className: S.userName,
              children: g.Z.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE.format({
                userName: C
              })
            })
          ]
        }) : (0, t.jsx)(d.Tooltip, {
          text: g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_TOOL_TOP,
          position: 'right',
          children: e => {
            let {
              onMouseEnter: r,
              onMouseLeave: i
            } = e;
            return (0, t.jsx)(d.Clickable, {
              onClick: () => A(s.id, a),
              className: S.displayNameClickableContainer,
              onMouseEnter: r,
              onMouseLeave: i,
              children: (0, t.jsx)(d.Text, {
                variant: 'text-md/medium',
                className: S.displayName,
                children: C
              })
            });
          }
        }),
        o && (0, t.jsx)(d.Text, {
          variant: 'text-md/medium',
          className: S.userName,
          children: s.username
        })
      ]
    })
  ]
});
  };
s.Z = e => {
  let {
selectedUsers: s,
trialCreationResult: r,
onClose: a
  } = e, i = [...s].map(e => (0, t.jsx)(M, {
user: e,
trialCreationResult: r.get(e.id),
onClose: a
  }, e.id)), n = (0, C.e7)([m.Z], () => m.Z.getReferralsRemaining());
  l()(null !== n, 'Referrals remaining should not be null');
  let c = (0, x.Fg)(),
_ = (0, o.ap)(c) ? j.Z : E.Z,
p = g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_RESENT_COMPLETE_HEADER,
h = [...r.values()].filter(e => e === R.Fz.SUCCESS).length;
  return n > 0 && (p = g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_HEADER.format({
numReferrals: h
  })), 0 === h && (p = g.Z.Messages.REFERRAL_PROGRAM_CONFIRMATION_ERROR_PAGE_HEADER), (0, t.jsxs)('div', {
className: S.confrimationContainer,
children: [
  (0, t.jsx)(d.Clickable, {
    onClick: a,
    className: S.closeButtonContainer,
    children: (0, t.jsx)(d.CloseSmallIcon, {
      size: 'custom',
      width: 20,
      height: 20
    })
  }),
  (0, t.jsx)(_, {
    className: S.headerIcon
  }),
  (0, t.jsx)(d.Heading, {
    variant: 'heading-lg/bold',
    className: S.heading,
    children: p
  }),
  (0, t.jsx)('div', {
    className: S.confirmedUserContainer,
    children: i
  }),
  (0, t.jsx)(d.Text, {
    variant: 'text-md/medium',
    children: g.Z.Messages.REFERRAL_PROGRAM_FRIEND_SELECT_COMPLETE_SUBHEADER.format({
      days: 10,
      helpdeskArticle: f.Z.getArticleURL(L.BhN.REFERRAL_PROGRAM)
    })
  })
]
  });
};