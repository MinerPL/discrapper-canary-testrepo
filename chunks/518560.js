"use strict";
a.r(e), a.d(e, {
  default: function() {
    return N
  }
});
var n = a("735250"),
  i = a("470079"),
  s = a("286379"),
  l = a("481060"),
  u = a("797614"),
  r = a("644766"),
  o = a("626135"),
  c = a("103879"),
  d = a("451284"),
  _ = a("802429"),
  S = a("846488"),
  E = a("181211"),
  T = a("811085"),
  f = a("967254"),
  A = a("981631"),
  I = a("689938"),
  g = a("712266");

function N() {
  let t = (0, E.default)(),
    e = (0, S.useSafetyHubInitialized)(),
    a = (0, d.useSafetyHubAccountStanding)(),
    N = (0, _.useSafetyHubFetchError)();
  return (i.useEffect(() => {
    c.getSafetyHubData()
  }, []), i.useEffect(() => {
    e && (o.default.track(A.AnalyticEvents.SAFETY_HUB_VIEWED, {
      account_standing: a.state
    }), u.default.increment({
      name: s.MetricEvents.SAFETY_HUB_VIEW
    }))
  }, [e]), t) ? (0, n.jsx)("div", {
    children: (0, n.jsx)(l.Spinner, {})
  }) : null != N ? (0, n.jsxs)(r.default, {
    color: r.NoticeColors.DANGER,
    className: g.nagbar,
    children: [I.default.Messages.SAFETY_HUB_ERROR_MESSAGE, (0, n.jsx)(r.NoticeButton, {
      onClick: () => c.getSafetyHubData(),
      children: I.default.Messages.SAFETY_HUB_ERROR_ACTION_BUTTON
    })]
  }) : (0, n.jsxs)("div", {
    className: g.container,
    children: [(0, n.jsx)(T.default, {}), (0, n.jsx)(f.ConnectedSafetyHubViolationsContainer, {})]
  })
}