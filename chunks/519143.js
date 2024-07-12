n(47120);
var r = n(355467),
  i = n(147913),
  a = n(400407);
class o extends i.Z {
  constructor(...e) {
var t, n, i;
super(...e), t = this, n = 'actions', i = {
  POST_CONNECTION_OPEN: () => {
    let {
      enabled: e
    } = a.A.getCurrentConfig({
      location: 'cd74f0_1'
    }, {
      autoTrackExposure: !1
    });
    e && (0, r.B$)();
  }
}, n in t ? Object.defineProperty(t, n, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = i;
  }
}
t.Z = new o();