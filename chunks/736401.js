n(47120);
var r = n(433517),
  i = n(147913),
  a = n(594174),
  o = n(918505),
  s = n(548161),
  l = n(347649),
  u = n(776319),
  c = n(801461);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = 'lastSawPomelo';
class E extends i.Z {
  constructor(...e) {
super(...e), d(this, 'actions', {
  POST_CONNECTION_OPEN: () => this.onPostConnectionOpen()
}), d(this, 'onPostConnectionOpen', () => {
  if (function() {
      if (!o.w8.getCurrentConfig({
          location: 'b9eb97_1'
        }, {
          autoTrackExposure: !1
        }).enabled)
        return !1;
      let e = a.default.getCurrentUser();
      if (null == e || e.isPomelo() || !e.hasVerifiedEmailOrPhone())
        return !1;
      let t = (0, l.ov)(),
        n = r.K.get(t ? 'lastSawPomeloMigration' : _);
      return !(null != n && Date.now() - n < 604800000) && !0;
    }()) {
    let e = u.Z.getCurrentConfig({
      location: 'uu_one_click'
    }, {
      autoTrackExposure: !1
    }).enabled;
    (0, s.a)(c.Kq.APP_START, e, !1) && r.K.set(_, Date.now());
  }
});
  }
}
t.Z = new E();