"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
});
var r = n(393655),
  i = n(465735),
  a = n(528734),
  o = n(544991),
  s = n(128961),
  u = n(424421),
  c = n(198050),
  l = n(217224),
  d = n(951516),
  f = n(608297),
  p = n(416778),
  h = n(633605);

function m(e) {
  return (m = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function g(e, t) {
  if ("undefined" == typeof Symbol || null == e[Symbol.iterator]) {
    if (Array.isArray(e) || (i = function(e, t) {
        if (e) {
          if ("string" == typeof e) return _(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _(e, t)
        }
      }(e)) || t && e && "number" == typeof e.length) {
      i && (e = i);
      var n = 0,
        r = function() {};
      return {
        s: r,
        n: function() {
          return n >= e.length ? {
            done: !0
          } : {
            done: !1,
            value: e[n++]
          }
        },
        e: function(e) {
          throw e
        },
        f: r
      }
    }
    throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
  }
  var i, a, o = !0,
    s = !1;
  return {
    s: function() {
      i = e[Symbol.iterator]()
    },
    n: function() {
      var e = i.next();
      return o = e.done, e
    },
    e: function(e) {
      s = !0, a = e
    },
    f: function() {
      try {
        !o && null != i.return && i.return()
      } finally {
        if (s) throw a
      }
    }
  }
}

function _(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}
var b = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,
  v = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,
  y = /^'([^]*?)'?$/,
  E = /''/g,
  S = /\S/,
  x = /[a-zA-Z]/;

function w(e, t, n, _) {
  (0, d.Z)(3, arguments);
  var w = String(e),
    C = String(t),
    T = (0, h.j)(),
    D = null !== (I = null !== (L = null == _ ? void 0 : _.locale) && void 0 !== L ? L : T.locale) && void 0 !== I ? I : r.Z;
  if (!D.match) throw RangeError("locale must contain match property");
  var M = (0, l.Z)(null !== (P = null !== (B = null !== (F = null !== (U = null == _ ? void 0 : _.firstWeekContainsDate) && void 0 !== U ? U : null == _ ? void 0 : null === (j = _.locale) || void 0 === j ? void 0 : null === (Y = j.options) || void 0 === Y ? void 0 : Y.firstWeekContainsDate) && void 0 !== F ? F : T.firstWeekContainsDate) && void 0 !== B ? B : null === (z = T.locale) || void 0 === z ? void 0 : null === (H = z.options) || void 0 === H ? void 0 : H.firstWeekContainsDate) && void 0 !== P ? P : 1);
  if (!(M >= 1 && M <= 7)) throw RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
  var O = (0, l.Z)(null !== (G = null !== (V = null !== ($ = null !== (Z = null == _ ? void 0 : _.weekStartsOn) && void 0 !== Z ? Z : null == _ ? void 0 : null === (K = _.locale) || void 0 === K ? void 0 : null === (W = K.options) || void 0 === W ? void 0 : W.weekStartsOn) && void 0 !== $ ? $ : T.weekStartsOn) && void 0 !== V ? V : null === (q = T.locale) || void 0 === q ? void 0 : null === (Q = q.options) || void 0 === Q ? void 0 : Q.weekStartsOn) && void 0 !== G ? G : 0);
  if (!(O >= 0 && O <= 6)) throw RangeError("weekStartsOn must be between 0 and 6 inclusively");
  if ("" === C) return "" === w ? (0, a.default)(n) : new Date(NaN);
  var A = {
      firstWeekContainsDate: M,
      weekStartsOn: O,
      locale: D
    },
    k = [new f.GT],
    R = C.match(v).map(function(e) {
      var t = e[0];
      return t in s.Z ? (0, s.Z[t])(e, D.formatLong) : e
    }).join("").match(b),
    N = [],
    I, L, P, B, F, U, j, Y, z, H, G, V, $, Z, K, W, q, Q, X, J = g(R);
  try {
    for (J.s(); !(X = J.n()).done;) {
      var ee = function() {
        var t = X.value;
        !(null != _ && _.useAdditionalWeekYearTokens) && (0, c.Do)(t) && (0, c.qp)(t, C, e), !(null != _ && _.useAdditionalDayOfYearTokens) && (0, c.Iu)(t) && (0, c.qp)(t, C, e);
        var n = t[0],
          r = p.f[n];
        if (r) {
          var i = r.incompatibleTokens;
          if (Array.isArray(i)) {
            var a = N.find(function(e) {
              return i.includes(e.token) || e.token === n
            });
            if (a) throw RangeError("The format string mustn't contain `".concat(a.fullToken, "` and `").concat(t, "` at the same time"))
          } else if ("*" === r.incompatibleTokens && N.length > 0) throw RangeError("The format string mustn't contain `".concat(t, "` and any other token at the same time"));
          N.push({
            token: n,
            fullToken: t
          });
          var o = r.run(w, t, D.match, A);
          if (!o) return {
            v: new Date(NaN)
          };
          k.push(o.setter), w = o.rest
        } else {
          if (n.match(x)) throw RangeError("Format string contains an unescaped latin alphabet character `" + n + "`");
          if ("''" === t ? t = "'" : "'" === n && (t = function(e) {
              return e.match(y)[1].replace(E, "'")
            }(t)), 0 !== w.indexOf(t)) return {
            v: new Date(NaN)
          };
          w = w.slice(t.length)
        }
      }();
      if ("object" === m(ee)) return ee.v
    }
  } catch (e) {
    J.e(e)
  } finally {
    J.f()
  }
  if (w.length > 0 && S.test(w)) return new Date(NaN);
  var et = k.map(function(e) {
      return e.priority
    }).sort(function(e, t) {
      return t - e
    }).filter(function(e, t, n) {
      return n.indexOf(e) === t
    }).map(function(e) {
      return k.filter(function(t) {
        return t.priority === e
      }).sort(function(e, t) {
        return t.subPriority - e.subPriority
      })
    }).map(function(e) {
      return e[0]
    }),
    en = (0, a.default)(n);
  if (isNaN(en.getTime())) return new Date(NaN);
  var er = (0, i.Z)(en, (0, u.Z)(en)),
    ei = {},
    ea, eo = g(et);
  try {
    for (eo.s(); !(ea = eo.n()).done;) {
      var es = ea.value;
      if (!es.validate(er, A)) return new Date(NaN);
      var eu = es.set(er, ei, A);
      Array.isArray(eu) ? (er = eu[0], (0, o.Z)(ei, eu[1])) : er = eu
    }
  } catch (e) {
    eo.e(e)
  } finally {
    eo.f()
  }
  return er
}