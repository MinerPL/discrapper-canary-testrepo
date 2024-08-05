var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(442837),
  l = s(481060),
  c = s(570140),
  d = s(355467),
  _ = s(179360),
  E = s(496929),
  u = s(821849),
  T = s(230711),
  I = s(497321),
  S = s(167354),
  N = s(15640),
  C = s(925329),
  m = s(406174),
  A = s(810762),
  g = s(681833),
  h = s(856888),
  O = s(921801),
  p = s(246946),
  R = s(663389),
  x = s(351402),
  M = s(853872),
  f = s(78839),
  D = s(580130),
  P = s(285952),
  L = s(626135),
  b = s(74538),
  Z = s(639056),
  v = s(52164),
  j = s(91430),
  B = s(474936),
  U = s(981631),
  G = s(526761),
  F = s(726985),
  y = s(689938),
  V = s(533866);

function Y() {
  return (0, n.jsx)(l.Card, {
className: V.noItemsCard,
type: l.Card.Types.CUSTOM,
children: (0, n.jsxs)(P.Z, {
  align: P.Z.Align.CENTER,
  children: [
    (0, n.jsx)(C.Z, {
      game: null,
      size: C.Z.Sizes.SMALL,
      className: V.noItemsIcon
    }),
    (0, n.jsx)('span', {
      className: V.cardText,
      children: y.Z.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
    })
  ]
})
  });
}

function w() {
  let e = (0, o.e7)([D.Z], () => D.Z.getForApplication(B.RQ));
  return a.useEffect(() => {
(0, E.yD)(B.RQ);
  }, []), (0, n.jsxs)('section', {
className: V.sectionAccountCredit,
children: [
  (0, n.jsx)(l.FormTitle, {
    className: V.accountCreditTitle,
    tag: l.FormTitleTags.H1,
    children: y.Z.Messages.BILLING_SUBSCRIPTION_CREDIT
  }),
  (0, n.jsx)('p', {
    className: V.accountCreditDescription,
    children: y.Z.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
  }),
  null != e && b.ZP.hasAccountCredit(e) ? (0, n.jsx)(Z.Z, {
    className: V.accountCredit,
    entitlements: e
  }) : (0, n.jsx)(Y, {})
]
  });
}
t.Z = function() {
  let e = (0, o.e7)([f.ZP], () => f.ZP.getPremiumTypeSubscription()),
t = (0, S.Z)({
  subscriptionFilter: e => j.eS.has(e.status)
}),
s = t.length > 1,
i = (0, o.e7)([M.Z], () => null != e && null != e.paymentSourceId ? M.Z.getPaymentSource(e.paymentSourceId) : null, [e]),
E = (0, o.e7)([f.ZP], () => f.ZP.hasFetchedSubscriptions()),
C = (0, o.e7)([x.Z], () => x.Z.isBusy),
D = (0, N.V)(),
P = (0, o.e7)([R.Z], () => R.Z.getSubsection());
  return (a.useEffect(() => (c.Z.wait(() => {
(0, u.Y2)(), d.jg(), (0, _.X8)(), d.tZ();
  }), function() {
T.Z.clearSubsection();
  }), []), p.Z.enabled) ? (0, n.jsx)(I.Z, {}) : E && D ? P === G.cP ? (0, n.jsx)(A.Z, {
onGoBack: () => T.Z.clearSubsection()
  }) : P === G.XZ ? (0, n.jsx)(h.Z, {
onGoBack: () => T.Z.clearSubsection()
  }) : (0, n.jsx)('div', {
className: V.container,
children: (0, n.jsxs)('div', {
  className: V.content,
  children: [
    s ? (0, n.jsx)(j.Yn, {}) : null,
    null != e ? (0, n.jsx)(j.ZP, {
      className: V.subscriptionDetails,
      subscription: e,
      paymentSource: i,
      busy: C,
      subscriptions: t
    }) : (0, n.jsx)(j.MM, {
      className: V.subscriptionDetails
    }),
    (0, n.jsx)(m.Z, {
      onClickManageSubscription: () => T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.cP)
    }),
    (0, n.jsx)(g.Z, {
      onClickManageSubscription: () => {
        T.Z.setSection(U.oAB.SUBSCRIPTIONS, G.XZ), L.default.track(U.rMx.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED);
      }
    }),
    (0, n.jsx)(O.F, {
      setting: F.s6.SUBSCRIPTIONS_CREDITS,
      children: (0, n.jsx)(w, {})
    }),
    null != e ? (0, n.jsx)(v.Z, {
      subscription: e,
      withOverheadSeparator: !1
    }) : null
  ]
})
  }) : (0, n.jsx)('div', {
className: r()(V.container, V.loading),
children: (0, n.jsx)(l.Spinner, {})
  });
};