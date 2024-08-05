n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(481060),
  l = n(906732),
  u = n(785717),
  c = n(588822),
  d = n(171368),
  _ = n(981631),
  E = n(689938),
  f = n(645671);
let h = 57.75;
t.Z = i.memo(function(e) {
  let {
user: t,
onClose: n,
bio: a,
hidePersonalInformation: p
  } = e, {
guildId: m,
channelId: I,
messageId: T,
roleId: g
  } = (0, u.KZ)(), {
analyticsLocations: S
  } = (0, l.ZP)(), [A, N] = i.useState(!1), [v, O] = i.useState(!1);
  return p || null == a || '' === a ? null : (0, r.jsxs)('div', {
children: [
  (0, r.jsx)('div', {
    ref: e => {
      null != e && (N(!v && e.scrollHeight - e.clientHeight > 1), e.getBoundingClientRect().height > h && O(!0));
    },
    className: s()(f.descriptionClamp, v && f.maxBioHeight),
    children: (0, r.jsx)(c.Z, {
      userBio: a,
      setLineClamp: !1,
      textColor: 'header-primary'
    })
  }),
  (A || v) && (0, r.jsx)(o.Button, {
    look: o.Button.Looks.BLANK,
    size: o.Button.Sizes.NONE,
    className: f.viewFullBio,
    color: f.viewFullBioColor,
    onClick: () => {
      null == n || n(), (0, d.openUserProfileModal)({
        userId: t.id,
        guildId: null != m ? m : void 0,
        channelId: null != I ? I : void 0,
        messageId: null != T ? T : void 0,
        roleId: null != g ? g : void 0,
        analyticsLocation: {
          section: _.jXE.BITE_SIZE_PROFILE_POPOUT
        },
        sourceAnalyticsLocations: S
      });
    },
    children: (0, r.jsx)(o.Text, {
      variant: 'text-xs/normal',
      color: 'none',
      children: E.Z.Messages.USER_PROFILE_VIEW_FULL_BIO
    })
  })
]
  });
});