"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var o = n("442837"),
  E = n("481060"),
  r = n("703656"),
  s = n("314897"),
  l = n("644766"),
  c = n("518560"),
  I = n("800530"),
  a = n("981631"),
  S = n("689938"),
  _ = n("576662");

function A() {
  return (0, i.jsxs)(l.default, {
    color: l.NoticeColors.DANGER,
    className: _.nagbar,
    children: [(0, i.jsx)(E.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, i.jsx)(l.NoticeButtonAnchor, {
      href: I.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, i.jsx)(E.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: S.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function N() {
  return (0, i.jsx)("div", {
    className: _.pageContainer,
    children: (0, i.jsx)(c.default, {})
  })
}

function u() {
  return null == (0, o.useStateFromStores)([s.default], () => s.default.getSuspendedUserToken()) && (0, r.transitionTo)(a.Routes.LOGIN), (0, i.jsxs)("div", {
    className: _.container,
    children: [(0, i.jsx)(A, {}), (0, i.jsx)(N, {})]
  })
}