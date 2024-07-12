var i = n(735250);
n(470079);
var l = n(481060),
  r = n(570140),
  a = n(317770),
  s = n(51596),
  o = n(823385),
  c = n(900085);
let u = 'QUICK_SWITCHER_MODAL_KEY';
class d extends a.Z {
  _initialize() {
r.Z.subscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.subscribe('QUICKSWITCHER_HIDE', this.handleHide);
  }
  _terminate() {
r.Z.unsubscribe('QUICKSWITCHER_SHOW', this.handleShow), r.Z.unsubscribe('QUICKSWITCHER_HIDE', this.handleHide);
  }
  handleShow() {
o.Z.isOpen() && !(0, l.hasModalOpen)(u) && (0, l.openModal)(e => (0, i.jsx)(c.Z, {
  ...e
}), {
  modalKey: u,
  instant: !0,
  onCloseCallback: s.Cp
});
  }
  handleHide() {
(0, l.closeModal)(u);
  }
}
t.Z = new d();