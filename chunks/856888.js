"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("78839"),
  r = s("682864"),
  o = s("877453"),
  d = s("270144"),
  u = s("238847"),
  c = s("689938"),
  S = s("704100");
t.default = e => {
  let {
    onGoBack: t
  } = e, s = (0, n.useStateFromStores)([i.default], () => {
    var e;
    return null !== (e = i.default.getActiveApplicationSubscriptions()) && void 0 !== e ? e : []
  }), {
    loading: E
  } = (0, d.useFetchListingsForSubscriptions)(s), {
    loadState: T
  } = (0, d.useFetchUserApplicationSubscriptionEntitlements)();
  return E || T !== d.LoadState.LOADED ? (0, a.jsx)(l.Spinner, {}) : 0 === s.length ? null : (0, a.jsxs)("div", {
    className: S.__invalid_container,
    children: [(0, a.jsxs)(l.Button, {
      look: l.Button.Looks.BLANK,
      innerClassName: S.backButtonContents,
      onClick: t,
      children: [(0, a.jsx)(o.default, {
        className: S.arrowIcon
      }), c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_BACK_CTA]
    }), (0, a.jsx)(r.default, {
      size: 10
    }), (0, a.jsx)(l.FormTitle, {
      tag: "h1",
      children: c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      className: S.pageDescription,
      children: c.default.Messages.APPLICATION_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
    }), (0, a.jsx)("div", {
      className: S.subscriptionsContainer,
      children: s.map(e => (0, a.jsx)(u.default, {
        subscription: e
      }, e.id))
    })]
  })
}