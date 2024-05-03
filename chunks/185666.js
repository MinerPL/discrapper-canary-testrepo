"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("570140"),
  i = n("317770"),
  r = n("472365"),
  o = n("590965");
let u = "INVITE_MODAL_KEY";
class d extends i.default {
  _initialize() {
    s.default.subscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.subscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  _terminate() {
    (0, a.closeModal)(u), s.default.unsubscribe("INVITE_MODAL_OPEN", this.handleOpenModal), s.default.unsubscribe("INVITE_MODAL_CLOSE", this.handleCloseModal)
  }
  handleOpenModal() {
    o.default.isOpen() && !(0, a.hasModalOpen)(u) && (0, a.openModal)(e => (0, l.jsx)(r.default, {
      ...e
    }), {
      modalKey: u,
      onCloseRequest: () => s.default.dispatch({
        type: "INVITE_MODAL_CLOSE"
      })
    })
  }
  handleCloseModal() {
    (0, a.closeModal)(u)
  }
}
t.default = new d