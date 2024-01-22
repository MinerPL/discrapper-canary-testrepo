"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var i = n("37983"),
  E = n("884691"),
  o = n("65597"),
  s = n("77078"),
  r = n("437822"),
  l = n("789563"),
  a = n("393414"),
  c = n("489622"),
  I = n("858839"),
  S = n("861348"),
  _ = n("170213"),
  A = n("49111"),
  N = n("782340"),
  u = n("876680");

function T() {
  return (0, i.jsxs)(c.default, {
    color: c.NoticeColors.DANGER,
    className: u.nagbar,
    children: [(0, i.jsx)(s.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: N.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, i.jsx)(c.NoticeButtonAnchor, {
      href: _.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: N.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function L() {
  return (0, i.jsx)("div", {
    className: u.pageContainer,
    children: (0, i.jsx)(S.default, {})
  })
}

function C() {
  let e = (0, o.default)([l.default], () => l.default.hasLoadedExperiments),
    t = (0, I.useIsSuspendedUserPageEnabled)("standalone page");
  return (E.useEffect(() => {
    e && !t ? (0, a.transitionTo)(A.Routes.ME) : !e && !t && r.default.getExperiments()
  }, [e, t]), e && t) ? (0, i.jsxs)("div", {
    className: u.container,
    children: [(0, i.jsx)(T, {}), (0, i.jsx)(L, {})]
  }) : null
}