"use strict";
n("185726");
var r = n("67867"),
  a = n("668530"),
  o = n("570596"),
  i = n("96403"),
  l = n("447631"),
  u = n("502754"),
  s = n("691244"),
  c = n("942282"),
  d = n("151020"),
  f = n("414847"),
  p = n("468154"),
  h = n("29461"),
  m = n("13780"),
  y = n("735471"),
  v = n("141603"),
  g = n("476508"),
  b = n("327192"),
  _ = n("28886"),
  k = n("982665"),
  C = n("342545"),
  w = n("224106"),
  S = n("241777"),
  N = n("86930"),
  x = n("749915"),
  P = n("215645"),
  A = n("274745"),
  R = n("360518"),
  F = n("409851"),
  O = R("iterator"),
  E = "URLSearchParams",
  I = E + "Iterator",
  M = h.set,
  T = h.getterFor(E),
  B = h.getterFor(I),
  D = Object.getOwnPropertyDescriptor,
  L = function(e) {
    if (!l) return a[e];
    var t = D(a, e);
    return t && t.value
  },
  V = L("fetch"),
  j = L("Request"),
  U = L("Headers"),
  q = j && j.prototype,
  K = U && U.prototype,
  H = a.RegExp,
  z = a.TypeError,
  W = a.decodeURIComponent,
  G = a.encodeURIComponent,
  $ = i("".charAt),
  Y = i([].join),
  Q = i([].push),
  Z = i("".replace),
  J = i([].shift),
  X = i([].splice),
  ee = i("".split),
  et = i("".slice),
  en = /\+/g,
  er = [, , , , ],
  ea = function(e) {
    try {
      return W(e)
    } catch (t) {
      return e
    }
  },
  eo = function(e) {
    var t, n = Z(e, en, " "),
      r = 4;
    try {
      return W(n)
    } catch (e) {
      for (; r;) {
        ;
        n = Z(n, er[(t = r--) - 1] || (er[t - 1] = H("((?:%[\\da-f]{2}){" + t + "})", "gi")), ea)
      }
      return n
    }
  },
  ei = /[!'()~]|%20/g,
  el = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+"
  },
  eu = function(e) {
    return el[e]
  },
  es = function(e) {
    return Z(G(e), ei, eu)
  },
  ec = p(function(e, t) {
    M(this, {
      type: I,
      target: T(e).entries,
      index: 0,
      kind: t
    })
  }, E, function() {
    var e = B(this),
      t = e.target,
      n = e.index++;
    if (!t || n >= t.length) return e.target = void 0, P(void 0, !0);
    var r = t[n];
    switch (e.kind) {
      case "keys":
        return P(r.key, !1);
      case "values":
        return P(r.value, !1)
    }
    return P([r.key, r.value], !1)
  }, !0),
  ed = function(e) {
    this.entries = [], this.url = null, void 0 !== e && (k(e) ? this.parseObject(e) : this.parseQuery("string" == typeof e ? "?" === $(e, 0) ? et(e, 1) : e : C(e)))
  };
ed.prototype = {
  type: E,
  bindURL: function(e) {
    this.url = e, this.update()
  },
  parseObject: function(e) {
    var t, n, r, a, i, l, u, s = this.entries,
      c = x(e);
    if (c)
      for (n = (t = N(e, c)).next; !(r = o(n, t)).done;) {
        if ((l = o(i = (a = N(_(r.value))).next, a)).done || (u = o(i, a)).done || !o(i, a).done) throw new z("Expected sequence with length 2");
        Q(s, {
          key: C(l.value),
          value: C(u.value)
        })
      } else
        for (var d in e) v(e, d) && Q(s, {
          key: d,
          value: C(e[d])
        })
  },
  parseQuery: function(e) {
    if (e) {
      for (var t, n, r = this.entries, a = ee(e, "&"), o = 0; o < a.length;)(t = a[o++]).length && Q(r, {
        key: eo(J(n = ee(t, "="))),
        value: eo(Y(n, "="))
      })
    }
  },
  serialize: function() {
    for (var e, t = this.entries, n = [], r = 0; r < t.length;) Q(n, es((e = t[r++]).key) + "=" + es(e.value));
    return Y(n, "&")
  },
  update: function() {
    this.entries.length = 0, this.parseQuery(this.url.query)
  },
  updateURL: function() {
    this.url && this.url.update()
  }
};
var ef = function() {
    m(this, ep);
    var e = arguments.length > 0 ? arguments[0] : void 0,
      t = M(this, new ed(e));
    !l && (this.size = t.entries.length)
  },
  ep = ef.prototype;
if (d(ep, {
    append: function(e, t) {
      var n = T(this);
      A(arguments.length, 2), Q(n.entries, {
        key: C(e),
        value: C(t)
      }), !l && this.length++, n.updateURL()
    },
    delete: function(e) {
      for (var t = T(this), n = A(arguments.length, 1), r = t.entries, a = C(e), o = n < 2 ? void 0 : arguments[1], i = void 0 === o ? o : C(o), u = 0; u < r.length;) {
        var s = r[u];
        if (s.key === a && (void 0 === i || s.value === i)) {
          if (X(r, u, 1), void 0 !== i) break
        } else u++
      }!l && (this.size = r.length), t.updateURL()
    },
    get: function(e) {
      var t = T(this).entries;
      A(arguments.length, 1);
      for (var n = C(e), r = 0; r < t.length; r++)
        if (t[r].key === n) return t[r].value;
      return null
    },
    getAll: function(e) {
      var t = T(this).entries;
      A(arguments.length, 1);
      for (var n = C(e), r = [], a = 0; a < t.length; a++) t[a].key === n && Q(r, t[a].value);
      return r
    },
    has: function(e) {
      for (var t = T(this).entries, n = A(arguments.length, 1), r = C(e), a = n < 2 ? void 0 : arguments[1], o = void 0 === a ? a : C(a), i = 0; i < t.length;) {
        var l = t[i++];
        if (l.key === r && (void 0 === o || l.value === o)) return !0
      }
      return !1
    },
    set: function(e, t) {
      var n, r = T(this);
      A(arguments.length, 1);
      for (var a = r.entries, o = !1, i = C(e), u = C(t), s = 0; s < a.length; s++)(n = a[s]).key === i && (o ? X(a, s--, 1) : (o = !0, n.value = u));
      !o && Q(a, {
        key: i,
        value: u
      }), !l && (this.size = a.length), r.updateURL()
    },
    sort: function() {
      var e = T(this);
      F(e.entries, function(e, t) {
        return e.key > t.key ? 1 : -1
      }), e.updateURL()
    },
    forEach: function(e) {
      for (var t, n = T(this).entries, r = g(e, arguments.length > 1 ? arguments[1] : void 0), a = 0; a < n.length;) r((t = n[a++]).value, t.key, this)
    },
    keys: function() {
      return new ec(this, "keys")
    },
    values: function() {
      return new ec(this, "values")
    },
    entries: function() {
      return new ec(this, "entries")
    }
  }, {
    enumerable: !0
  }), s(ep, O, ep.entries, {
    name: "entries"
  }), s(ep, "toString", function() {
    return T(this).serialize()
  }, {
    enumerable: !0
  }), l && c(ep, "size", {
    get: function() {
      return T(this).entries.length
    },
    configurable: !0,
    enumerable: !0
  }), f(ef, E), r({
    global: !0,
    constructor: !0,
    forced: !u
  }, {
    URLSearchParams: ef
  }), !u && y(U)) {
  var eh = i(K.has),
    em = i(K.set),
    ey = function(e) {
      if (k(e)) {
        var t, n = e.body;
        if (b(n) === E) return !eh(t = e.headers ? new U(e.headers) : new U, "content-type") && em(t, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), w(e, {
          body: S(0, C(n)),
          headers: S(0, t)
        })
      }
      return e
    };
  if (y(V) && r({
      global: !0,
      enumerable: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      fetch: function(e) {
        return V(e, arguments.length > 1 ? ey(arguments[1]) : {})
      }
    }), y(j)) {
    var ev = function(e) {
      return m(this, q), new j(e, arguments.length > 1 ? ey(arguments[1]) : {})
    };
    q.constructor = ev, ev.prototype = q, r({
      global: !0,
      constructor: !0,
      dontCallGetSet: !0,
      forced: !0
    }, {
      Request: ev
    })
  }
}
e.exports = {
  URLSearchParams: ef,
  getState: T
}