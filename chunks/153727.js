"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("881410");
var r = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  a = n("454589"),
  i = n("642906"),
  o = n("85336"),
  u = n("696034");

function c(e) {
  let {
    className: t,
    isEligibleForTrial: n = !1
  } = e, {
    step: l,
    breadcrumbs: c,
    startedPaymentFlowWithPaymentSourcesRef: d
  } = (0, i.usePaymentContext)();
  if (null == c || 0 === c.length) return null;
  let E = c.flatMap(e => {
    let t = e.useBreadcrumbLabel(n);
    return null != t ? {
      id: e.id,
      label: t
    } : []
  });
  return 0 === E.length ? null : (E = E.filter(e => {
    let t = e.id !== o.Step.ADD_PAYMENT_STEPS,
      r = e.id === o.Step.ADD_PAYMENT_STEPS && !d.current;
    return !n || n && (t || r)
  }), (0, r.jsx)("div", {
    className: s("breadcrumb", u.wrapper, t),
    children: (0, r.jsx)(a.default, {
      activeId: l,
      breadcrumbs: E
    })
  }))
}