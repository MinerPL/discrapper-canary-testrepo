"use strict";
n.d(t, {
  I8: function() {
    return r
  },
  KW: function() {
    return h
  },
  LT: function() {
    return u
  },
  Me: function() {
    return o
  },
  eU: function() {
    return c
  },
  rI: function() {
    return d
  }
});
var s = n(512722),
  l = n.n(s);

function a(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let i = 2 / 3,
  r = 12;
class o {
  getWidth(e) {
    return this.getRenderOptions(e).columnWidth
  }
  getRenderOptions(e) {
    if (e <= this.minWidth) return {
      columns: 1,
      columnWidth: this.minWidth
    };
    let t = e / this.maxWidth,
      n = Math.max(Math.floor(t + (e / this.minWidth - t) / 2), 1),
      s = this.gap * (n - 1);
    return {
      columns: n,
      columnWidth: (e - s) / n
    }
  }
  constructor({
    minWidth: e,
    maxWidth: t,
    gap: n
  }) {
    a(this, "minWidth", void 0), a(this, "maxWidth", void 0), a(this, "gap", void 0), l()(e < t, "minWidth needs to be smaller than maxWidth"), this.minWidth = e, this.maxWidth = t, this.gap = n
  }
}
let c = {
    columns: 1,
    columnWidth: 450
  },
  d = e => {
    let t = e - 2,
      n = Math.ceil(t * i);
    return [t, n]
  },
  u = 12,
  h = e => 60 + d(e - 2 * u)[1] + 24 + 3 * r