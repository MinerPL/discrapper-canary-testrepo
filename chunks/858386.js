"use strict";
n(47120);
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(893776),
  o = n(147913),
  a = n(594174),
  l = n(626135),
  u = n(374023),
  _ = n(344532),
  d = n(981631),
  c = n(231338);
class E extends o.Z {
  handleConnectionOpen() {
    let e = a.default.getCurrentUser();
    if (null == e || u.s.isDisallowPopupsSet()) return;
    let t = _.Z.requiredActionsIncludes(e.id, [d.ane.UPDATE_PASSWORD]);
    _.Z.wasLoginAttemptedInSession(e.id) && t ? (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("48707")]).then(n.bind(n, 194530));
      return function(t) {
        return (0, i.jsx)(e, {
          ...t,
          onSuccess: () => {
            l.default.track(d.rMx.FORCED_UPDATE_PASSWORD_SUCCEEDED), t.onClose()
          },
          onClose: () => {
            t.onClose(), s.Z.logout(d.Z5c.LOGIN)
          },
          requirementsUpdated: !0
        })
      }
    }, {
      modalKey: "LOGIN_REQUIRED_ACTIONS_MODAL_KEY",
      onCloseRequest: c.Vq,
      instant: !0
    }) : t && s.Z.logout(d.Z5c.LOGIN)
  }
  constructor(...e) {
    var t, n, i;
    super(...e), t = this, n = "actions", i = {
      POST_CONNECTION_OPEN: this.handleConnectionOpen
    }, n in t ? Object.defineProperty(t, n, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : t[n] = i
  }
}
t.Z = new E