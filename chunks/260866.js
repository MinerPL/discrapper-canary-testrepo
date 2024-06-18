"use strict";

function i(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
n.d(t, {
  $o: function() {
    return c
  },
  NE: function() {
    return _
  },
  P1: function() {
    return l
  },
  P2: function() {
    return d
  },
  ie: function() {
    return r
  },
  jb: function() {
    return o
  },
  kn: function() {
    return s
  },
  qR: function() {
    return u
  },
  x3: function() {
    return a
  }
}), n(47120);
let r = "data-list-item-id",
  s = "data-list-id";

function o(e, t) {
  return "".concat(e).concat("___").concat(t)
}

function a(e) {
  return e.split("___")[1]
}

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
  return "[".concat(t, '="').concat(e, '"]')
}

function u(e, t) {
  return "".concat(e, "-").concat(t)
}

function _(e, t, n) {
  return "".concat(e, "-").concat(t, "-").concat(n)
}

function d(e, t) {
  let n = !1;
  return function() {
    for (var i = arguments.length, r = Array(i), s = 0; s < i; s++) r[s] = arguments[s];
    !n && (e(...r), n = !0, setTimeout(() => n = !1, t))
  }
}
class c {
  get(e) {
    let t = this.handlers.get(e);
    return null == t && (t = this.makeHandler(e), this.handlers.set(e, t)), t
  }
  clean() {
    delete this.handlers, this.handlers = new Map
  }
  constructor(e) {
    i(this, "makeHandler", void 0), i(this, "handlers", void 0), this.makeHandler = e, this.handlers = new Map, this.makeHandler = e
  }
}