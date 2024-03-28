"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("873546"),
  l = s("481060"),
  i = s("270237"),
  r = s("682864"),
  o = s("877453"),
  d = s("584825"),
  u = s("892729"),
  c = s("949914"),
  S = s("689938"),
  E = s("423859");
t.default = e => {
  let {
    onGoBack: t
  } = e, s = (0, u.default)(), {
    loading: T
  } = (0, d.useFetchListingsForSubscriptions)(s);
  return ((0, i.default)(n.isMobile ? "role-subscriptions-user-setting" : void 0), T) ? (0, a.jsx)(l.Spinner, {}) : 0 === s.length ? null : (0, a.jsxs)("div", {
    className: E.__invalid_container,
    children: [(0, a.jsxs)(l.Button, {
      look: l.Button.Looks.BLANK,
      innerClassName: E.backButtonContents,
      onClick: t,
      children: [(0, a.jsx)(o.default, {
        className: E.arrowIcon
      }), S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_PAGE_BACK_BUTTON_CTA]
    }), (0, a.jsx)(r.default, {
      size: 10
    }), (0, a.jsx)(l.FormTitle, {
      tag: "h1",
      children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }), (0, a.jsx)(l.Text, {
      variant: "text-sm/normal",
      className: E.pageDescription,
      children: S.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
    }), (0, a.jsx)("div", {
      className: E.subscriptionsContainer,
      children: s.map(e => (0, a.jsx)(c.default, {
        subscription: e
      }, e.id))
    })]
  })
}