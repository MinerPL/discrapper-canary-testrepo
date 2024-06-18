"use strict";
n.d(t, {
  KV: function() {
    return u
  },
  ZP: function() {
    return d
  },
  dj: function() {
    return l
  }
});
var i = n(392711),
  r = n.n(i),
  s = n(31775),
  o = n.n(s);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let l = 100,
  u = [
    [0, 99]
  ];

function _(e) {
  let t = {};
  return e.forEach((e, n) => {
    t[n] = e
  }), t
}
class d {
  reset() {
    this._subscriptions = {}
  }
  get(e) {
    return _(this._get(e))
  }
  _get(e) {
    var t;
    return null !== (t = this._subscriptions[e]) && void 0 !== t ? t : new(o())({
      max: 5
    })
  }
  clear(e) {
    delete this._subscriptions[e]
  }
  subscribe(e, t, n) {
    let i = this._get(e);
    return !r().isEqual(i.get(t), n) && (i.set(t, n), this._subscriptions[e] = i, this._onChange(e, _(i)), !0)
  }
  constructor(e) {
    a(this, "_subscriptions", {}), a(this, "_onChange", void 0), this._onChange = e
  }
}