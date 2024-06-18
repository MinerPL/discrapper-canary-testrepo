"use strict";
n.d(t, {
  M: function() {
    return o
  },
  Z: function() {
    return a
  }
});
var i = n(979554),
  r = n(656698);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let o = e => e instanceof a;
class a extends r.Z {
  static fromServer(e) {
    return new a({
      ...super.fromServer(e),
      ...e
    })
  }
  constructor(e) {
    super(e), s(this, "asset", void 0), s(this, "label", void 0), this.type = i.Z.AVATAR_DECORATION, this.asset = e.asset, this.label = e.label
  }
}