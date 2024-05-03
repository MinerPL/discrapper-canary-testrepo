"use strict";
n.r(t), n.d(t, {
  useDetectableGameSupplementalData: function() {
    return f
  }
}), n("653041"), n("47120");
var a = n("470079"),
  i = n("392711"),
  r = n.n(i),
  s = n("442837"),
  l = n("846519"),
  o = n("224706"),
  c = n("669764");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = new class e {
  request(e) {
    !(this._pending.has(e) || this._fetched.has(e)) && (this._pending.add(e), this._flushHandler.delay(!1))
  }
  _flush() {
    let e = [];
    this._pending.forEach(t => {
      this._fetched.add(t), e.push(t)
    }), r().chunk(e, 20).forEach(e => {
      o.default.getDetectableGamesSupplemental(e)
    })
  }
  constructor() {
    d(this, "_fetched", new Set), d(this, "_pending", new Set), d(this, "_flushHandler", new l.DelayedCall(0, () => this._flush()))
  }
};

function f(e, t) {
  a.useEffect(() => {
    u.request(e)
  }, [e]);
  let n = a.useMemo(() => null != t ? {
    width: t.coverImageWidth,
    height: t.coverImageHeight
  } : void 0, [t]);
  return (0, s.useStateFromStoresObject)([c.default], () => ({
    isFetching: c.default.isFetching(e),
    localizedName: c.default.getLocalizedName(e),
    themes: c.default.getThemes(e),
    coverImageUrl: c.default.getCoverImageUrl(e, n)
  }))
}