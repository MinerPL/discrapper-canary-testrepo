"use strict";
n.d(t, {
  B_: function() {
    return _
  },
  Lm: function() {
    return o
  },
  Ol: function() {
    return a
  },
  P4: function() {
    return l
  },
  Tk: function() {
    return c
  },
  cO: function() {
    return u
  },
  cj: function() {
    return s
  },
  qu: function() {
    return d
  }
}), n(411104);
var i = n(654861),
  r = n.n(i);
let s = 14200704e5;

function o(e) {
  return Math.floor(Number(e) / 4194304) + s
}

function a(e) {
  let t = e - s;
  return t <= 0 ? "0" : r()(t).shiftLeft(22).toString()
}

function l(e, t) {
  let n = e - s;
  return r()(n <= 0 ? 0 : n).shiftLeft(22).add(t.next()).toString()
}

function u(e) {
  return a(o(e) - 1)
}

function _(e) {
  return Date.now() - o(e)
}

function d(e, t) {
  return e === t ? 0 : null == t ? 1 : null == e ? -1 : e.length > t.length ? 1 : e.length < t.length ? -1 : e > t ? 1 : -1
}
class c {
  next() {
    if (this.seq > 4095) throw Error("Snowflake sequence number overflow: ".concat(this.seq));
    return this.seq++
  }
  reset() {
    this.seq = 0
  }
  constructor() {
    var e, t, n;
    e = this, t = "seq", n = void 0, "seq" in e ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, this.seq = 0
  }
}