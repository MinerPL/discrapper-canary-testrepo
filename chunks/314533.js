var i = n(735250);
n(470079);
var a = n(481060),
    s = n(570140),
    r = n(317770);
let l = 'CONNECTIONS_GRID_MODAL_KEY';
class o extends r.Z {
    _initialize() {
        s.Z.subscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), s.Z.subscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    _terminate() {
        s.Z.unsubscribe('CONNECTIONS_GRID_MODAL_SHOW', this.handleShow), s.Z.unsubscribe('CONNECTIONS_GRID_MODAL_HIDE', this.handleHide);
    }
    handleShow(e) {
        let { onComplete: t, excludedPlatformTypes: s, includedPlatformTypes: r, integrations: o, onCompleteApplication: c } = e;
        !(0, a.hasModalOpen)(l) &&
            (0, a.openModalLazy)(async () => {
                let { default: e } = await n.e('28538').then(n.bind(n, 51299));
                return (n) =>
                    (0, i.jsx)(e, {
                        onComplete: t,
                        excludedPlatformTypes: s,
                        includedPlatformTypes: r,
                        integrations: o,
                        onCompleteApplication: c,
                        ...n
                    });
            });
    }
    handleHide() {
        (0, a.closeModal)(l);
    }
}
t.Z = new o();
