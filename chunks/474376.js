n.d(t, {
  g: function() {
return T;
  }
}), n(653041);
var i = n(735250);
n(470079);
var a = n(442837),
  s = n(481060),
  r = n(44315),
  l = n(598077),
  o = n(246946),
  c = n(594174),
  d = n(626135),
  u = n(51144),
  _ = n(480387),
  E = n(726745),
  h = n(251423),
  m = n(383832),
  I = n(981631),
  g = n(689938),
  p = n(196364);

function T() {
  let e = (0, a.e7)([c.default], () => c.default.getCurrentUser()),
t = (0, a.e7)([o.Z], () => o.Z.hidePersonalInformation),
{
  multiAccountUsers: n
} = (0, h.L)(),
T = t => {
  if (t !== (null == e ? void 0 : e.id))
    d.default.track(I.rMx.MULTI_ACCOUNT_SWITCH_ATTEMPT, {
      location: {
        section: I.jXE.PROFILE_POPOUT
      }
    }), _.yD(t);
},
S = n.map(n => {
  let a = new l.Z(n),
    o = a.id === (null == e ? void 0 : e.id),
    c = n.tokenStatus === E.q.INVALID,
    d = t ? null : '#'.concat(a.discriminator);
  return (0, i.jsx)(s.MenuItem, {
    id: a.id,
    focusedClassName: p.focused,
    label: e => {
      let {
        isFocused: l
      } = e;
      return (0, i.jsxs)('div', {
        className: p.userMenuItem,
        children: [
          (0, i.jsx)(s.Avatar, {
            src: a.getAvatarURL(void 0, 40),
            size: s.AvatarSizes.SIZE_24,
            'aria-label': n.username
          }),
          (0, i.jsxs)('div', {
            className: p.userMenuUsername,
            children: [
              (0, i.jsx)(s.Text, {
                className: p.userMenuText,
                variant: 'text-sm/normal',
                children: u.ZP.getUserTag(a, {
                  mode: 'username',
                  identifiable: t ? 'never' : 'always'
                })
              }),
              !a.isPomelo() && (0, i.jsx)(s.Text, {
                className: p.userMenuDiscriminator,
                variant: 'text-sm/normal',
                children: d
              })
            ]
          }),
          o && (0, i.jsx)(s.CircleCheckIcon, {
            size: 'sm',
            color: (0, r.Lq)(l ? I.Ilk.WHITE_500 : I.Ilk.BRAND_500),
            secondaryColor: (0, r.Lq)(l ? I.Ilk.BRAND_500 : I.Ilk.WHITE_500),
            className: p.activeIcon
          }),
          c && (0, i.jsx)(s.CircleWarningIcon, {
            color: (0, r.Lq)(I.Ilk.RED_400),
            secondaryColor: (0, r.Lq)(I.Ilk.WHITE_500),
            size: 'xs',
            className: p.activeIcon
          })
        ]
      });
    },
    action: () => {
      c ? (0, m.Z)() : T(a.id);
    }
  }, a.id);
});
  return S.push((0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(s.MenuSeparator, {}),
  (0, i.jsx)(s.MenuItem, {
    id: 'manage-accounts',
    label: g.Z.Messages.SWITCH_ACCOUNTS_MANAGE_ACCOUNTS,
    action: m.Z
  })
]
  })), S;
}