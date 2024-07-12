var i = n(735250);
n(470079);
var s = n(481060),
  a = n(570140),
  r = n(317770);
let l = 'CONNECTIONS_GRID_MODAL_KEY';
class o extends r.Z {
  _initialize() {
a.Z.subscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), a.Z.subscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
  }
  _terminate() {
a.Z.unsubscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), a.Z.unsubscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
  }
  handleShow(e) {
let {
  onComplete: t,
  excludedPlatformTypes: a,
  includedPlatformTypes: r,
  integrations: o,
  onCompleteApplication: c
} = e;
!(0, s.hasModalOpen)(l) && (0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('28538').then(n.bind(n, 51299));
  return n => (0, i.jsx)(e, {
    onComplete: t,
    excludedPlatformTypes: a,
    includedPlatformTypes: r,
    integrations: o,
    onCompleteApplication: c,
    ...n
  });
});
  }
  handleHide() {
(0, s.closeModal)(l);
  }
}
t.Z = new o();