"use strict";
n.d(t, {
  J: function() {
    return d
  }
}), n(47120);
var i = n(298444),
  r = n(570140),
  s = n(447543),
  o = n(147913),
  a = n(314897),
  l = n(358085),
  u = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = "guestInviteToAccept";
class c extends o.Z {
  constructor(...e) {
    super(...e), _(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handleConnectionOpen()
    }), _(this, "handleConnectionOpen", async () => {
      if ((0, l.isWeb)()) {
        let e = i.x.get(d);
        if (null != e && "string" == typeof e && a.default.isAuthenticated()) {
          let {
            invite: t
          } = await s.Z.resolveInvite(e, "Desktop Modal");
          null != t && (r.Z.dispatch({
            type: "INVITE_MODAL_OPEN",
            invite: t,
            code: e,
            context: u.IlC.APP
          }), i.x.remove(d))
        }
      }
    })
  }
}
t.Z = new c