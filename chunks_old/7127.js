"use strict";
n.r(t), n.d(t, {
  PaymentModalConfirmStep: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("627445"),
  a = n.n(r),
  l = n("77078"),
  s = n("642906"),
  u = n("367767"),
  o = n("650484"),
  c = n("782340"),
  d = n("348550");

function f(e) {
  let {
    handleClose: t
  } = e, {
    skusById: n,
    selectedSkuId: r,
    application: f
  } = (0, s.usePaymentContext)();
  a(null != r, "Expected selectedSkuId"), a(null != f, "Expected application");
  let E = n[r];
  a(null != E, "Expected sku");
  let S = c.default.Messages.APPLICATION_ADDON_PURCHASE_CONFIRMATION_BLURB.format({
    applicationName: f.name,
    itemName: E.name
  });
  return (0, i.jsxs)(o.PaymentPortalBody, {
    children: [(0, i.jsx)(u.default, {}), (0, i.jsxs)("div", {
      className: d.confirmation,
      children: [(0, i.jsx)(l.Heading, {
        variant: "heading-xxl/bold",
        className: d.confirmationHeader,
        children: "Success!"
      }), (0, i.jsx)(l.Text, {
        variant: "text-md/normal",
        children: S
      }), (0, i.jsx)("div", {
        className: d.divider
      }), (0, i.jsx)(l.Button, {
        onClick: t,
        children: c.default.Messages.CLOSE
      })]
    })]
  })
}