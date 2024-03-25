"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("913144"),
  i = n("316272");
let r = "CONNECTIONS_GRID_MODAL_KEY";
class o extends i.default {
  _initialize() {
    l.default.subscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.default.subscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  _terminate() {
    l.default.unsubscribe("CONNECTIONS_GRID_MODAL_SHOW", this.handleShow), l.default.unsubscribe("CONNECTIONS_GRID_MODAL_HIDE", this.handleHide)
  }
  handleShow(e) {
    let {
      onComplete: t,
      excludedPlatformTypes: l,
      integrations: i,
      onCompleteApplication: o
    } = e;
    !(0, s.hasModalOpen)(r) && (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("121942").then(n.bind(n, "121942"));
      return n => (0, a.jsx)(e, {
        onComplete: t,
        excludedPlatformTypes: l,
        integrations: i,
        onCompleteApplication: o,
        ...n
      })
    })
  }
  handleHide() {
    (0, s.closeModal)(r)
  }
}
var u = new o