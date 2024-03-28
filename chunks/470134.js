"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("481060"),
  o = n("923726"),
  u = n("689938"),
  d = n("878193");

function c(e) {
  let {
    text: t,
    hasScrolled: n
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(d.container, {
      [d.containerHide]: n
    }),
    children: [(0, a.jsx)("div", {
      className: d.notice,
      children: (0, a.jsx)(r.Text, {
        className: d.__invalid_label,
        variant: "text-md/medium",
        color: "header-primary",
        children: t
      })
    }), (0, a.jsx)("div", {
      className: d.noticeArrow
    })]
  })
}

function f(e) {
  let [t, n] = l.useState(), [s, i] = l.useState(), [r, d] = l.useState(!1), [f, h] = l.useState(!1), {
    enabled: m
  } = (0, o.useRoleSubscriptionMaxTiersExperiment)(e);
  return l.useEffect(() => {
    m && null != t && null != s ? d(t < s) : d(!1)
  }, [m, t, s]), {
    horizontalScrollNotice: l.useMemo(() => r ? (0, a.jsx)(c, {
      text: u.default.Messages.GUILD_ROLE_SUBSCRIPTION_LISTINGS_SCROLLABLE_NOTICE,
      hasScrolled: f
    }) : null, [r, f]),
    handleScroll: () => h(!0),
    handleSetScrollerRef: e => {
      var t;
      return i(null == e ? void 0 : null === (t = e.getScrollerState()) || void 0 === t ? void 0 : t.scrollWidth)
    },
    handleSetContainerRef: e => n(null == e ? void 0 : e.clientWidth)
  }
}