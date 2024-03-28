"use strict";
n.r(t), n.d(t, {
  openGuildProductInfoModal: function() {
    return l
  }
});
var s = n("735250");
n("470079");
var a = n("481060");

function l(e) {
  (0, a.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("99387"), n.e("38062")]).then(n.bind(n, "546604"));
    return n => (0, s.jsx)(t, {
      ...e,
      ...n
    })
  })
}