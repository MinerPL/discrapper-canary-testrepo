"use strict";
n.r(t), n.d(t, {
  openGuildShopReportModal: function() {
    return l
  }
});
var s = n("735250");
n("470079");
var a = n("481060");

function l(e) {
  let {
    listing: t
  } = e;
  (0, a.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("95480").then(n.bind(n, "275869"));
    return n => (0, s.jsx)(e, {
      listing: t,
      ...n
    })
  })
}