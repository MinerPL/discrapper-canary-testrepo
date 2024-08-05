t.d(n, {
  v: function() {
return f;
  }
}), t(47120);
var a = t(735250),
  s = t(470079),
  i = t(512722),
  l = t.n(i),
  r = t(89057),
  o = t(987209),
  d = t(598),
  u = t(409813),
  c = t(456251),
  E = t(981631);

function f(e) {
  let {
handleStepChange: n,
handleClose: t
  } = e, {
blockedPayments: i,
hasFetchedSkus: f,
paymentSources: h,
hasFetchedPaymentSources: m,
application: v,
skusById: C,
selectedSkuId: p
  } = (0, d.usePaymentContext)(), {
isGift: x
  } = (0, o.wD)(), [I, T] = s.useState(!0);
  return (s.useEffect(() => {
let e = null != v;
if (!!f && !!m && !!e)
  T(!1);
  }, [
f,
m,
v
  ]), s.useEffect(() => {
if (I || i)
  return;
l()(null != p, 'Expected selectedSkuId');
let e = C[p];
if (x && (null == e ? void 0 : e.productLine) === E.POd.COLLECTIBLES) {
  n(u.h8.GIFT_CUSTOMIZATION);
  return;
}
if (0 === Object.keys(h).length) {
  n(u.h8.ADD_PAYMENT_STEPS);
  return;
}
n(u.h8.REVIEW);
  }, [
I,
i,
n,
h,
x,
C,
p
  ]), I) ? (0, a.jsx)(c.Z, {}) : i ? (0, a.jsx)(r.Vq, {
onClose: t
  }) : null;
}