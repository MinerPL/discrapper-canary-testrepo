"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var s = a("735250");
a("470079");
var n = a("399606"),
  i = a("481060"),
  l = a("668781"),
  r = a("594174"),
  u = a("626135"),
  d = a("981631"),
  o = a("689938");

function f(e) {
  let {
    header: t,
    children: a,
    sku_id: f,
    sku_name: _,
    guild_id: c,
    cancelLabel: R,
    confirmLabel: m,
    transitionState: E,
    onClose: O,
    ...T
  } = e, g = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser());
  return (0, s.jsx)(i.ConfirmModal, {
    header: null != t ? t : o.default.Messages.REPORT,
    cancelText: null != R ? R : o.default.Messages.CANCEL,
    confirmText: null != m ? m : o.default.Messages.REPORT,
    onConfirm: () => {
      u.default.track(d.AnalyticEvents.TNS_SKU_REPORT_SUBMITTED, {
        sku_id: f,
        guild_id: c,
        user_id: null == g ? void 0 : g.id
      }), l.default.show({
        title: o.default.Messages.SKU_REPORT_CONFIRMATION_HEADER,
        body: o.default.Messages.SKU_REPORT_CONFIRMATION_BODY.format({
          skuName: _
        })
      })
    },
    transitionState: E,
    onClose: O,
    ...T,
    children: a
  })
}