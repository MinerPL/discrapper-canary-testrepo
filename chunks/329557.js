"use strict";
n.r(t);
var l = n("735250");
n("470079");
var a = n("481060"),
  s = n("570140"),
  i = n("317770"),
  r = n("51596"),
  o = n("823385"),
  u = n("900085");
let d = "QUICK_SWITCHER_MODAL_KEY";
class c extends i.default {
  _initialize() {
    s.default.subscribe("QUICKSWITCHER_SHOW", this.handleShow), s.default.subscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  _terminate() {
    s.default.unsubscribe("QUICKSWITCHER_SHOW", this.handleShow), s.default.unsubscribe("QUICKSWITCHER_HIDE", this.handleHide)
  }
  handleShow() {
    o.default.isOpen() && !(0, a.hasModalOpen)(d) && (0, a.openModal)(e => (0, l.jsx)(u.default, {
      ...e
    }), {
      modalKey: d,
      instant: !0,
      onCloseCallback: r.hide
    })
  }
  handleHide() {
    (0, a.closeModal)(d)
  }
}
t.default = new c