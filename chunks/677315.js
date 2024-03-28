"use strict";
var r, a, o, i, l = n("67867"),
  u = n("414629"),
  s = n("42433"),
  c = n("668530"),
  d = n("570596"),
  f = n("691244"),
  p = n("600385"),
  h = n("414847"),
  m = n("187592"),
  y = n("548828"),
  v = n("735471"),
  g = n("982665"),
  b = n("13780"),
  _ = n("992416"),
  k = n("62691").set,
  C = n("584831"),
  w = n("502856"),
  S = n("139545"),
  N = n("6938"),
  x = n("29461"),
  P = n("197859"),
  A = n("732116"),
  R = n("653457"),
  F = "Promise",
  O = A.CONSTRUCTOR,
  E = A.REJECTION_EVENT,
  I = A.SUBCLASSING,
  M = x.getterFor(F),
  T = x.set,
  B = P && P.prototype,
  D = P,
  L = B,
  V = c.TypeError,
  j = c.document,
  U = c.process,
  q = R.f,
  K = q,
  H = !!(j && j.createEvent && c.dispatchEvent),
  z = "unhandledrejection",
  W = function(e) {
    var t;
    return !!(g(e) && v(t = e.then)) && t
  },
  G = function(e, t) {
    var n, r, a, o = t.value,
      i = 1 === t.state,
      l = i ? e.ok : e.fail,
      u = e.resolve,
      s = e.reject,
      c = e.domain;
    try {
      l ? (!i && (2 === t.rejection && J(t), t.rejection = 1), !0 === l ? n = o : (c && c.enter(), n = l(o), c && (c.exit(), a = !0)), n === e.promise ? s(new V("Promise-chain cycle")) : (r = W(n)) ? d(r, n, u, s) : u(n)) : s(o)
    } catch (e) {
      c && !a && c.exit(), s(e)
    }
  },
  $ = function(e, t) {
    !e.notified && (e.notified = !0, C(function() {
      for (var n, r = e.reactions; n = r.get();) G(n, e);
      e.notified = !1, t && !e.rejection && Q(e)
    }))
  },
  Y = function(e, t, n) {
    var r, a;
    H ? ((r = j.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), c.dispatchEvent(r)) : r = {
      promise: t,
      reason: n
    }, !E && (a = c["on" + e]) ? a(r) : e === z && w("Unhandled promise rejection", n)
  },
  Q = function(e) {
    d(k, c, function() {
      var t, n = e.facade,
        r = e.value;
      if (Z(e) && (t = S(function() {
          s ? U.emit("unhandledRejection", r, n) : Y(z, n, r)
        }), e.rejection = s || Z(e) ? 2 : 1, t.error)) throw t.value
    })
  },
  Z = function(e) {
    return 1 !== e.rejection && !e.parent
  },
  J = function(e) {
    d(k, c, function() {
      var t = e.facade;
      s ? U.emit("rejectionHandled", t) : Y("rejectionhandled", t, e.value)
    })
  },
  X = function(e, t, n) {
    return function(r) {
      e(t, r, n)
    }
  },
  ee = function(e, t, n) {
    !e.done && (e.done = !0, n && (e = n), e.value = t, e.state = 2, $(e, !0))
  },
  et = function(e, t, n) {
    if (!e.done) {
      e.done = !0, n && (e = n);
      try {
        if (e.facade === t) throw new V("Promise can't be resolved itself");
        var r = W(t);
        r ? C(function() {
          var n = {
            done: !1
          };
          try {
            d(r, t, X(et, n, e), X(ee, n, e))
          } catch (t) {
            ee(n, t, e)
          }
        }) : (e.value = t, e.state = 1, $(e, !1))
      } catch (t) {
        ee({
          done: !1
        }, t, e)
      }
    }
  };
if (O && (L = (D = function(e) {
    b(this, L), y(e), d(r, this);
    var t = M(this);
    try {
      e(X(et, t), X(ee, t))
    } catch (e) {
      ee(t, e)
    }
  }).prototype, (r = function(e) {
    T(this, {
      type: F,
      done: !1,
      notified: !1,
      parent: !1,
      reactions: new N,
      rejection: !1,
      state: 0,
      value: void 0
    })
  }).prototype = f(L, "then", function(e, t) {
    var n = M(this),
      r = q(_(this, D));
    return n.parent = !0, r.ok = !v(e) || e, r.fail = v(t) && t, r.domain = s ? U.domain : void 0, 0 === n.state ? n.reactions.add(r) : C(function() {
      G(r, n)
    }), r.promise
  }), a = function() {
    var e = new r,
      t = M(e);
    this.promise = e, this.resolve = X(et, t), this.reject = X(ee, t)
  }, R.f = q = function(e) {
    return e === D || e === o ? new a(e) : K(e)
  }, !u && v(P) && B !== Object.prototype)) {
  i = B.then, !I && f(B, "then", function(e, t) {
    var n = this;
    return new D(function(e, t) {
      d(i, n, e, t)
    }).then(e, t)
  }, {
    unsafe: !0
  });
  try {
    delete B.constructor
  } catch (e) {}
  p && p(B, L)
}
l({
  global: !0,
  constructor: !0,
  wrap: !0,
  forced: O
}, {
  Promise: D
}), h(D, F, !1, !0), m(F)