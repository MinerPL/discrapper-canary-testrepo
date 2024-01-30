"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var i = n("37983"),
  E = n("884691"),
  o = n("77078"),
  r = n("446674"),
  l = n("437822"),
  s = n("393414"),
  c = n("271938"),
  a = n("489622"),
  I = n("861348"),
  S = n("170213"),
  A = n("49111"),
  _ = n("782340"),
  N = n("876680");

function u() {
  return (0, i.jsxs)(a.default, {
    color: a.NoticeColors.DANGER,
    className: N.nagbar,
    children: [(0, i.jsx)(o.Text, {
      tag: "span",
      color: "always-white",
      variant: "text-md/normal",
      children: _.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR
    }), (0, i.jsx)(a.NoticeButtonAnchor, {
      href: S.SafetyHubLinks.WARNING_SYSTEM_HELPCENTER_LINK,
      children: (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: _.default.Messages.SAFETY_HUB_STANDALONE_PAGE_NAGBAR_CTA
      })
    })]
  })
}

function T() {
  return (0, i.jsx)("div", {
    className: N.pageContainer,
    children: (0, i.jsx)(I.default, {})
  })
}

function L() {
  let e = (0, r.useStateFromStores)([c.default], () => c.default.getSuspendedUserToken());
  return null == e && (0, s.transitionTo)(A.Routes.LOGIN), E.useEffect(() => {
    l.default.getExperiments()
  }, []), (0, i.jsxs)("div", {
    className: N.container,
    children: [(0, i.jsx)(u, {}), (0, i.jsx)(T, {})]
  })
}