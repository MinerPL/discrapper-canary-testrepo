n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
    a = n(893776),
    s = n(147913),
    o = n(594174),
    l = n(626135),
    u = n(374023),
    c = n(344532),
    d = n(981631),
    _ = n(231338);
class E extends s.Z {
    handleConnectionOpen() {
        let e = o.default.getCurrentUser();
        if (null == e || u.s.isDisallowPopupsSet()) return;
        let t = c.Z.requiredActionsIncludes(e.id, [d.ane.UPDATE_PASSWORD]);
        c.Z.wasLoginAttemptedInSession(e.id) && t
            ? (0, i.openModalLazy)(
                  async () => {
                      let { default: e } = await n.e('48707').then(n.bind(n, 194530));
                      return function (t) {
                          return (0, r.jsx)(e, {
                              ...t,
                              onSuccess: () => {
                                  l.default.track(d.rMx.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose();
                              },
                              onClose: () => {
                                  t.onClose(), a.Z.logout(d.Z5c.LOGIN);
                              },
                              requirementsUpdated: !0
                          });
                      };
                  },
                  {
                      modalKey: 'LOGIN_REQUIRED_ACTIONS_MODAL_KEY',
                      onCloseRequest: _.Vq,
                      instant: !0
                  }
              )
            : t && a.Z.logout(d.Z5c.LOGIN);
    }
    constructor(...e) {
        var t, n, r;
        super(...e),
            (t = this),
            (n = 'actions'),
            (r = { POST_CONNECTION_OPEN: this.handleConnectionOpen }),
            n in t
                ? Object.defineProperty(t, n, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (t[n] = r);
    }
}
t.Z = new E();
