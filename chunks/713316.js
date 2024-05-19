"use strict";
s.r(t), s.d(t, {
  PaymentModalConfirmStep: function() {
    return f
  }
});
var l = s("735250");
s("470079");
var n = s("512722"),
  a = s.n(n),
  i = s("481060"),
  r = s("598"),
  u = s("698708"),
  d = s("614277"),
  o = s("689938"),
  c = s("802302");

function f(e) {
  let {
    handleClose: t
  } = e, {
    skusById: s,
    selectedSkuId: n,
    application: f
  } = (0, r.usePaymentContext)();
  a()(null != n, "Expected selectedSkuId"), a()(null != f, "Expected application");
  let S = s[n];
  a()(null != S, "Expected sku");
  let E = o.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: f.name,
    itemName: S.name
  });
  return (0, l.jsxs)(d.PaymentPortalBody, {
    children: [(0, l.jsx)(u.default, {}), (0, l.jsxs)("div", {
      className: c.confirmation,
      children: [(0, l.jsx)(i.Heading, {
        variant: "heading-xxl/bold",
        className: c.confirmationHeader,
        children: "Success!"
      }), (0, l.jsx)(i.Text, {
        variant: "text-md/normal",
        children: E
      }), (0, l.jsx)("div", {
        className: c.divider
      }), (0, l.jsx)(i.Button, {
        onClick: t,
        children: o.default.Messages.CLOSE
      })]
    })]
  })
}