"use strict";
n.r(t), n.d(t, {
  openModal: function() {
    return s
  }
});
var r = n("735250");
n("470079");
var i = n("481060"),
  l = n("302463");

function s(e, t) {
  (0, i.openModalLazy)(async () => {
    let {
      default: i
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("70716"), n.e("47055")]).then(n.bind(n, "458961"));
    return n => (0, r.jsx)(i, {
      guildId: e,
      productId: t,
      ...n
    })
  }, {
    modalKey: l.GUILD_PRODUCT_EDIT_MODAL_KEY
  })
}