"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(570140);
async function o(e) {
  let t = await (0, r.openModalLazy)(async () => {
    let {
      default: t
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("8739"), n.e("57650")]).then(n.bind(n, 677012));
    return n => (0, i.jsx)(t, {
      ...n,
      ...e
    })
  }, {
    onCloseCallback: () => {
      s.Z.dispatch({
        type: "INTERACTION_IFRAME_MODAL_CLOSE",
        applicationId: e.application.id
      })
    }
  });
  s.Z.dispatch({
    type: "INTERACTION_IFRAME_MODAL_KEY_CREATE",
    modalKey: t
  })
}