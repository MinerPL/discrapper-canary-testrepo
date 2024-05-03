"use strict";
l.r(r), l.d(r, {
  default: function() {
    return d
  }
}), l("390547");
var t = l("735250");
l("470079");
var s = l("120356"),
  n = l.n(s),
  a = l("66579"),
  i = l("563132"),
  o = l("409813"),
  c = l("110858");

function d(e) {
  let {
    className: r,
    isEligibleForTrial: l = !1
  } = e, {
    step: s,
    breadcrumbs: d,
    startedPaymentFlowWithPaymentSourcesRef: u
  } = (0, i.usePaymentContext)();
  if (null == d || 0 === d.length) return null;
  let p = d.flatMap(e => {
    let r = e.useBreadcrumbLabel(l);
    return null != r ? {
      id: e.id,
      label: r
    } : []
  });
  return 0 === p.length ? null : (p = p.filter(e => {
    let r = e.id !== o.Step.ADD_PAYMENT_STEPS,
      t = e.id === o.Step.ADD_PAYMENT_STEPS && !u.current;
    return !l || l && (r || t)
  }), (0, t.jsx)("div", {
    className: n()("breadcrumb", c.wrapper, r),
    children: (0, t.jsx)(a.default, {
      activeId: s,
      breadcrumbs: p
    })
  }))
}