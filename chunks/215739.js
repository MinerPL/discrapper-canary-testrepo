n(47120);
var r = n(846519),
  i = n(147913),
  a = n(246133),
  o = n(734934),
  s = n(695346),
  l = n(885110),
  u = n(981631);

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let d = new r.V7(),
  _ = new r.V7(),
  E = new r.V7();
class f extends i.Z {
  constructor(...e) {
super(...e), c(this, 'actions', {
  USER_SETTINGS_PROTO_UPDATE: () => this.handleUpdateProto(),
  POST_CONNECTION_OPEN: () => this.handleUpdateProto()
}), c(this, 'handleUpdateProto', () => {
  let e = s.Ok.getSetting();
  if (null == e)
    E.stop();
  else if (null != e.expiresAtMs && '0' !== e.expiresAtMs) {
    let t = new Date(Number(e.expiresAtMs)).getTime() - new Date().getTime();
    t > 0 ? E.start(t, () => {
      s.Ok.updateSetting(void 0);
    }, !0) : (s.Ok.updateSetting(void 0), E.stop());
  } else
    null != E && E.stop();
  let t = s.Cr.getSetting();
  if (null != t && '0' !== t && l.Z.getStatus() !== u.Skl.ONLINE) {
    let e = new Date(Number(t)).getTime() - new Date().getTime();
    e > 0 ? d.start(e, () => {
      (0, a.Z)(u.Skl.ONLINE, l.Z.getStatus(), {
        location: {
          object: u.qAy.CUSTOM_STATUS_MANAGER
        }
      }, void 0);
    }, !0) : ((0, a.Z)(u.Skl.ONLINE, l.Z.getStatus(), {
      location: {
        object: u.qAy.CUSTOM_STATUS_MANAGER
      }
    }, void 0), d.stop());
  } else
    null != d && d.stop();
  let n = s.fv.getSetting();
  if (null != n && '0' !== n) {
    let e = new Date(Number(n)).getTime() - new Date().getTime();
    e > 0 ? _.start(e, () => {
      (0, o.oW)(!1);
    }, !0) : ((0, o.oW)(!1), _.stop());
  } else
    null != _ && _.stop();
});
  }
}
t.Z = new f();