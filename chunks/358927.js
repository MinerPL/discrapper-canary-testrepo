"use strict";
r.r(t);
var a = r("735250");
r("470079");
var n = r("481060"),
  s = r("63063"),
  c = r("937615"),
  l = r("981631"),
  o = r("689938");
t.default = e => {
  let {
    modalProps: t,
    onConfirm: r,
    onCancel: i,
    newInvoice: d
  } = e, C = {
    newCurrencyAndPrice: (0, c.formatPrice)(d.total, d.currency),
    helpCenterLink: s.default.getArticleURL(l.HelpdeskArticles.LOCALIZED_PRICING)
  };
  return (0, a.jsx)(n.ConfirmModal, {
    header: o.default.Messages.BILLING_CONFIRM_PRICE_CHANGE_TITLE,
    confirmText: o.default.Messages.YES_TEXT,
    cancelText: o.default.Messages.NO_TEXT,
    onConfirm: r,
    onCancel: i,
    confirmButtonColor: n.Button.Colors.BRAND,
    ...t,
    children: (0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      children: o.default.Messages.LOCALIZED_PRICING_ON_CHANGE_PAYMENT_METHOD.format(C)
    })
  })
}