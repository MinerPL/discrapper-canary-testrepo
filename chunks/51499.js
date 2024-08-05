n.d(r, {
  Z: function() {
return d;
  }
}), n(390547);
var l = n(735250);
n(470079);
var o = n(120356),
  s = n.n(o),
  t = n(481060),
  a = n(598),
  c = n(409813),
  i = n(645701);

function d(e) {
  let {
className: r,
isEligibleForTrial: n = !1
  } = e, {
step: o,
breadcrumbs: d,
startedPaymentFlowWithPaymentSourcesRef: u
  } = (0, a.usePaymentContext)();
  if (null == d || 0 === d.length)
return null;
  let p = d.flatMap(e => {
let r = e.useBreadcrumbLabel(n);
return null != r ? {
  id: e.id,
  label: r
} : [];
  });
  return 0 === p.length ? null : (p = p.filter(e => {
let r = e.id !== c.h8.ADD_PAYMENT_STEPS,
  l = e.id === c.h8.ADD_PAYMENT_STEPS && !u.current;
return !n || n && (r || l);
  }), (0, l.jsx)('div', {
className: s()('breadcrumb', i.wrapper, r),
children: (0, l.jsx)(t.Breadcrumbs, {
  activeId: o,
  breadcrumbs: p
})
  }));
}