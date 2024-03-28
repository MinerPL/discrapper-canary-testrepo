"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("570140"),
  u = s("355467"),
  c = s("179360"),
  S = s("496929"),
  E = s("821849"),
  T = s("230711"),
  _ = s("497321"),
  f = s("167354"),
  m = s("15640"),
  g = s("406174"),
  h = s("810762"),
  N = s("681833"),
  I = s("856888"),
  p = s("246946"),
  C = s("663389"),
  A = s("351402"),
  O = s("853872"),
  x = s("78839"),
  R = s("580130"),
  M = s("285952"),
  v = s("366695"),
  D = s("626135"),
  L = s("74538"),
  P = s("639056"),
  j = s("52164"),
  b = s("91430"),
  U = s("474936"),
  y = s("981631"),
  B = s("526761"),
  F = s("689938"),
  G = s("34933");

function k() {
  return (0, a.jsx)(o.Card, {
    className: G.noItemsCard,
    type: o.Card.Types.CUSTOM,
    children: (0, a.jsxs)(M.default, {
      align: M.default.Align.CENTER,
      children: [(0, a.jsx)(v.default, {
        game: null,
        size: v.default.Sizes.SMALL,
        className: G.noItemsIcon
      }), (0, a.jsx)("span", {
        className: G.cardText,
        children: F.default.Messages.USER_SETTINGS_NO_SUBSCRIPTION_CREDIT
      })]
    })
  })
}

function H() {
  let e = (0, r.useStateFromStores)([R.default], () => R.default.getForApplication(U.PREMIUM_SUBSCRIPTION_APPLICATION));
  return n.useEffect(() => {
    (0, S.fetchUserEntitlementsForApplication)(U.PREMIUM_SUBSCRIPTION_APPLICATION)
  }, []), (0, a.jsxs)("section", {
    className: G.sectionAccountCredit,
    children: [(0, a.jsx)(o.FormTitle, {
      className: G.accountCreditTitle,
      tag: o.FormTitleTags.H1,
      children: F.default.Messages.BILLING_SUBSCRIPTION_CREDIT
    }), (0, a.jsx)("p", {
      className: G.accountCreditDescription,
      children: F.default.Messages.BILLING_ACCOUNT_CREDIT_DESCRIPTION
    }), null != e && L.default.hasAccountCredit(e) ? (0, a.jsx)(P.default, {
      className: G.accountCredit,
      entitlements: e
    }) : (0, a.jsx)(k, {})]
  })
}
t.default = function() {
  let e = (0, r.useStateFromStores)([x.default], () => x.default.getPremiumTypeSubscription()),
    t = (0, f.default)({
      subscriptionFilter: e => b.VIEWABLE_SUBSCRIPTION_STATUSES.has(e.status)
    }),
    s = t.length > 1,
    l = (0, r.useStateFromStores)([O.default], () => null != e && null != e.paymentSourceId ? O.default.getPaymentSource(e.paymentSourceId) : null, [e]),
    S = (0, r.useStateFromStores)([x.default], () => x.default.hasFetchedSubscriptions()),
    R = (0, r.useStateFromStores)([A.default], () => A.default.isBusy),
    M = (0, m.useSubscriptionPlansLoaded)(),
    v = (0, r.useStateFromStores)([C.default], () => C.default.getSubsection());
  return (n.useEffect(() => (d.default.wait(() => {
    (0, E.fetchPremiumSubscriptionPlans)(), u.fetchSubscriptions(), (0, c.fetchGuildBoostSlots)(), u.fetchPaymentSources()
  }), function() {
    T.default.clearSubsection()
  }), []), p.default.enabled) ? (0, a.jsx)(_.default, {}) : S && M ? v === B.ROLE_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(h.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : v === B.APPLICATION_SUBSCRIPTION_SUBSECTION ? (0, a.jsx)(I.default, {
    onGoBack: () => T.default.clearSubsection()
  }) : (0, a.jsx)("div", {
    className: G.container,
    children: (0, a.jsxs)("div", {
      className: G.content,
      children: [s ? (0, a.jsx)(b.DuplicateSubscriptionsBanner, {}) : null, null != e ? (0, a.jsx)(b.default, {
        className: G.subscriptionDetails,
        subscription: e,
        paymentSource: l,
        busy: R,
        subscriptions: t
      }) : (0, a.jsx)(b.SubscriptionDetailsEmpty, {
        className: G.subscriptionDetails
      }), (0, a.jsx)(g.default, {
        onClickManageSubscription: () => T.default.setSection(y.UserSettingsSections.SUBSCRIPTIONS, B.ROLE_SUBSCRIPTION_SUBSECTION)
      }), (0, a.jsx)(N.default, {
        onClickManageSubscription: () => {
          T.default.setSection(y.UserSettingsSections.SUBSCRIPTIONS, B.APPLICATION_SUBSCRIPTION_SUBSECTION), D.default.track(y.AnalyticEvents.PREMIUM_APPLICATION_SUBSCRIPTION_MANAGE_CTA_CLICKED)
        }
      }), (0, a.jsx)(H, {}), null != e ? (0, a.jsx)(j.default, {
        subscription: e,
        withOverheadSeparator: !1
      }) : null]
    })
  }) : (0, a.jsx)("div", {
    className: i()(G.container, G.loading),
    children: (0, a.jsx)(o.Spinner, {})
  })
}