"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("570140"),
  i = n("798077");

function r() {
  (0, s.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("49237"), n.e("99387"), n.e("52030"), n.e("85514"), n.e("55944")]).then(n.bind(n, "266653"));
    return t => (0, a.jsx)(e, {
      ...t
    })
  }, {
    onCloseCallback: () => {
      l.default.dispatch({
        type: "CLEAR_AUTHENTICATION_ERRORS"
      }), l.default.dispatch({
        type: "LOGIN_RESET",
        isMultiAccount: !0
      })
    },
    modalKey: i.SWITCH_ACCOUNTS_MODAL_KEY
  })
}