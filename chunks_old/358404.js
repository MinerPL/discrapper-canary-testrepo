"use strict";
n.r(t), n.d(t, {
  openGuildProductInfoModal: function() {
    return l
  }
});
var s = n("37983");
n("884691");
var a = n("77078");

function l(e) {
  (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await n.el("962276").then(n.bind(n, "962276"));
    return n => (0, s.jsx)(t, {
      ...e,
      ...n
    })
  })
}