var i = n(200651);
n(192379);
var l = n(481060),
    r = n(570140),
    a = n(468026),
    o = n(317770),
    s = n(981631),
    c = n(388032);
let u = 'ActivityInviteManager',
    d = () => {
        r.Z.dispatch({ type: 'ACTIVITY_INVITE_MODAL_CLOSE' });
    };
class h extends o.Z {
    _initialize() {
        r.Z.subscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.subscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    _terminate() {
        r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_OPEN', this.handleModalOpen), r.Z.unsubscribe('ACTIVITY_INVITE_MODAL_CLOSE', this.handleModalClose);
    }
    handleModalOpen(e) {
        let { activity: t, isPrivate: r, context: o } = e,
            h = o === s.IlC.POPOUT ? l.POPOUT_MODAL_CONTEXT : l.DEFAULT_MODAL_CONTEXT;
        r
            ? (0, l.openModal)(
                  (e) =>
                      (0, i.jsx)(a.default, {
                          title: c.intl.formatToPlainString(c.t['2tN7io'], { name: t.name }),
                          body: c.intl.string(c.t.MAxtkp),
                          confirmText: c.intl.string(c.t.BddRzc),
                          ...e
                      }),
                  {
                      onCloseCallback: d,
                      modalKey: u
                  },
                  h
              )
            : (0, l.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e('79921').then(n.bind(n, 699099));
                      return (t) => (0, i.jsx)(e, { ...t });
                  },
                  {
                      onCloseCallback: d,
                      modalKey: u,
                      contextKey: h
                  }
              );
    }
    handleModalClose(e) {
        (0, l.closeModal)(u);
    }
}
t.Z = new h();
