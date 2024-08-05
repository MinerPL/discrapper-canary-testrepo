n(47120);
var s = n(735250),
  a = n(470079),
  i = n(442837),
  r = n(481060),
  l = n(782568),
  o = n(223892),
  c = n(203498),
  d = n(641806),
  u = n(690221),
  _ = n(30624),
  I = n(577275),
  E = n(594174),
  T = n(451478),
  m = n(626135),
  N = n(584825),
  S = n(723047),
  h = n(416867),
  g = n(903773),
  C = n(215124),
  x = n(326578),
  p = n(981631),
  R = n(674563),
  f = n(829857),
  L = n(689938),
  O = n(215274);

function A(e) {
  let {
onCreateTeamClick: t,
isGuildOwner: n
  } = e;
  return (0, s.jsx)('div', {
className: O.selectTeamContainer,
children: (0, s.jsx)(r.Button, {
  disabled: !n,
  onClick: t,
  className: O.enableTicketingButton,
  fullWidth: !0,
  children: L.Z.Messages.GUILD_MONETIZATION_ENABLE_CREATE_TEAM
})
  });
}

function M(e) {
  let {
guild: t,
eligibleTeams: n,
isGuildOwner: i
  } = e, [l, o] = a.useState(), {
enableGuildMonetizationForTeam: d,
submitting: u,
error: _
  } = (0, c.Z)(), {
fetchSubscriptionsSettings: I
  } = (0, N.JH)(), E = (0, S.mY)(), T = a.useMemo(() => n.map(e => ({
label: e.name,
value: e.id
  })), [n]), m = async () => {
await d(t, l, R.wW.GUILD_ROLE_SUBSCRIPTIONS) && (I(t.id), (0, h.B)({
  Icon: x.Z,
  title: L.Z.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_TITLE,
  body: L.Z.Messages.GUILD_MONETIZATION_ENABLE_CONFIRMATION_SUBTITLE
}));
  };
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsxs)('div', {
    className: O.selectTeamContainer,
    children: [
      (0, s.jsx)(r.SingleSelect, {
        className: O.teamSelect,
        options: T,
        placeholder: L.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER,
        value: l,
        isDisabled: 0 === T.length || E || !i,
        onChange: e => o(e),
        'aria-label': L.Z.Messages.GUILD_MONETIZATION_ENABLE_SELECT_PLACEHOLDER
      }),
      (0, s.jsx)(r.Button, {
        onClick: m,
        className: O.enableTicketingButton,
        submitting: u,
        disabled: null == l || E || !i,
        children: L.Z.Messages.GUILD_MONETIZATION_ENABLE_CTA
      })
    ]
  }),
  null != _ && (0, s.jsx)(r.Text, {
    className: O.error,
    variant: 'text-sm/normal',
    children: _.getAnyErrorMessage()
  })
]
  });
}
t.Z = e => {
  let {
guild: t
  } = e, n = (0, i.e7)([E.default], () => E.default.getCurrentUser()), c = t.isOwner(n), N = (0, o.Ob)(t), S = (0, i.e7)([T.Z], () => T.Z.isFocused()), {
teams: h,
loading: x
  } = (0, I.Z)({
refreshOnDepChange: S
  }), R = a.useMemo(() => h.filter(e => {
var t;
return e.payout_account_status !== f.C.BLOCKED && (0, _.Z)(null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : p.lds, e);
  }), [
h,
n
  ]), D = R.length > 0, v = a.useCallback(async () => {
m.default.track(p.rMx.GUILD_ROLE_SUBSCRIPTION_TEAM_SETUP_CLICKED, {
  is_onboarding_v2: N,
  has_eligible_team: D,
  guild_id: t.id,
  is_owner: c
});
let e = await (0, d.$)(p.E07.DEVELOPER_PORTAL_TEAMS);
(0, l.Z)(e);
  }, [
t,
c,
N,
D
  ]), j = a.useCallback(e => c ? (0, s.jsx)(u.Z, {
onClick: v,
children: e
  }) : e, [
v,
c
  ]);
  return x ? (0, s.jsx)(r.Spinner, {}) : (0, s.jsxs)(s.Fragment, {
children: [
  !c && (0, s.jsx)(g.Z, {
    className: O.nonOwnerNotice,
    children: L.Z.Messages.GUILD_MONETIZATION_ENABLE_NON_OWNER_WARNING
  }),
  (0, s.jsxs)(r.FormSection, {
    title: L.Z.Messages.GUILD_MONETIZATION_ENABLE_HEADER,
    disabled: !c,
    children: [
      (0, s.jsx)(r.FormText, {
        type: r.FormText.Types.DESCRIPTION,
        className: O.description,
        disabled: !c,
        children: L.Z.Messages.GUILD_MONETIZATION_ENABLE_DESCRIPTION.format({
          onCreateTeamHook: j
        })
      }),
      D ? (0, s.jsx)(M, {
        guild: t,
        eligibleTeams: R,
        isGuildOwner: c
      }) : (0, s.jsx)(A, {
        onCreateTeamClick: v,
        isGuildOwner: c
      })
    ]
  }),
  (0, s.jsx)(r.FormSection, {
    title: L.Z.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_TITLE,
    className: O.selfDemonetization,
    children: (0, s.jsx)(C.Z, {
      guildId: t.id,
      allPeriods: []
    })
  })
]
  });
};