n(47120);
var r = n(224706),
  i = n(978085),
  a = n(147913),
  s = n(283595),
  o = n(358085);
class l extends a.Z {
  handlePostConnectionOpen() {
(0, o.isDesktop)() && (!s.Z.fetched && (0, i.b8)(), r.Z.getDetectableGames());
  }
  constructor(...e) {
var t, n, r;
super(...e), t = this, n = 'actions', r = {
  POST_CONNECTION_OPEN: this.handlePostConnectionOpen
}, n in t ? Object.defineProperty(t, n, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : t[n] = r;
  }
}
t.Z = new l();