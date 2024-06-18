"use strict";
E.r(e), E.d(e, {
  default: function() {
    return u
  }
});
var t = E(735250);
E(470079);
var I = E(442837),
  _ = E(481060),
  i = E(703656),
  r = E(314897),
  N = E(518560),
  S = E(800530),
  A = E(981631),
  o = E(689938),
  s = E(833440);

function c() {
  return (0, t.jsxs)(_.Notice, {
    color: _.NoticeColors.DANGER,
    className: s.nagbar,
    children: [(0, t.jsx)(_.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: o.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, t.jsx)(_.NoticeButtonAnchor, {
      href: S.sQ.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, t.jsx)(_.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: o.Z.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function L() {
  return (0, t.jsx)("div", {
    className: s.pageContainer,
    children: (0, t.jsx)(N.Z, {})
  })
}

function u() {
  return null == (0, I.e7)([r.default], () => r.default.getSuspendedUserToken()) && (0, i.uL)(A.Z5c.LOGIN), (0, t.jsxs)("div", {
    className: s.container,
    children: [(0, t.jsx)(c, {}), (0, t.jsx)(L, {})]
  })
}