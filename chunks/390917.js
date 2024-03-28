"use strict";
r.r(t), r.d(t, {
  openGuildProductPurchaseConfirmationModal: function() {
    return a
  }
});
var n = r("735250");
r("470079");
var s = r("481060");

function a(e) {
  (0, s.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([r.e("99387"), r.e("16359")]).then(r.bind(r, "588091"));
    return r => (0, n.jsx)(t, {
      ...e,
      ...r
    })
  })
}