"use strict";
n(47120);
var i = n(846519),
  r = n(147913),
  s = n(246133),
  o = n(734934),
  a = n(695346),
  l = n(885110),
  u = n(981631);

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let d = new i.V7,
  c = new i.V7,
  E = new i.V7;
class I extends r.Z {
  constructor(...e) {
    super(...e), _(this, "actions", {
      USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
      POST_CONNECTION_OPEN: () => this.handleUpdateProto()
    }), _(this, "handleUpdateProto", () => {
      let e = a.Ok.getSetting();
      if (null == e) E.stop();
      else if (null != e.expiresAtMs && "0" !== e.expiresAtMs) {
        let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
        t > 0 ? E.start(t, () => {
          a.Ok.updateSetting(void 0)
        }, !0) : (a.Ok.updateSetting(void 0), E.stop())
      } else null != E && E.stop();
      let t = a.Cr.getSetting();
      if (null != t && "0" !== t && l.Z.getStatus() !== u.Skl.ONLINE) {
        let e = new Date(Number(t)).getTime() - new Date().getTime();
        e > 0 ? d.start(e, () => {
          (0, s.Z)(u.Skl.ONLINE, l.Z.getStatus(), {
            location: {
              object: u.qAy.CUSTOM_STATUS_MANAGER
            }
          }, void 0)
        }, !0) : ((0, s.Z)(u.Skl.ONLINE, l.Z.getStatus(), {
          location: {
            object: u.qAy.CUSTOM_STATUS_MANAGER
          }
        }, void 0), d.stop())
      } else null != d && d.stop();
      let n = a.fv.getSetting();
      if (null != n && "0" !== n) {
        let e = new Date(Number(n)).getTime() - new Date().getTime();
        e > 0 ? c.start(e, () => {
          (0, o.oW)(!1)
        }, !0) : ((0, o.oW)(!1), c.stop())
      } else null != c && c.stop()
    })
  }
}
t.Z = new I