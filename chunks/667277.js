n.r(t), n.d(t, {
    default: function () {
        return v;
    }
});
var r = n(393655), i = n(465735), a = n(528734), o = n(544991), s = n(128961), l = n(424421), u = n(198050), c = n(217224), d = n(951516), _ = n(608297), E = n(416778), f = n(633605);
function h(e) {
    return (h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
        return typeof e;
    } : function (e) {
        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
    })(e);
}
function p(e, t) {
    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
        if (Array.isArray(e) || (i = function (e, t) {
                if (e) {
                    if ('string' == typeof e)
                        return m(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ('Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n)
                        return Array.from(e);
                    if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return m(e, t);
                }
            }(e)) || t && e && 'number' == typeof e.length) {
            i && (e = i);
            var n = 0, r = function () {
                };
            return {
                s: r,
                n: function () {
                    return n >= e.length ? { done: !0 } : {
                        done: !1,
                        value: e[n++]
                    };
                },
                e: function (e) {
                    throw e;
                },
                f: r
            };
        }
        throw TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var i, a, o = !0, s = !1;
    return {
        s: function () {
            i = e[Symbol.iterator]();
        },
        n: function () {
            var e = i.next();
            return o = e.done, e;
        },
        e: function (e) {
            s = !0, a = e;
        },
        f: function () {
            try {
                !o && null != i.return && i.return();
            } finally {
                if (s)
                    throw a;
            }
        }
    };
}
function m(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = Array(t); n < t; n++)
        r[n] = e[n];
    return r;
}
var I = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g, T = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g, g = /^'([^]*?)'?$/, S = /''/g, A = /\S/, N = /[a-zA-Z]/;
function v(e, t, n, m) {
    (0, d.Z)(3, arguments);
    var v = String(e), O = String(t), R = (0, f.j)(), C = null !== (U = null !== (w = null == m ? void 0 : m.locale) && void 0 !== w ? w : R.locale) && void 0 !== U ? U : r.Z;
    if (!C.match)
        throw RangeError('locale must contain match property');
    var y = (0, c.Z)(null !== (x = null !== (G = null !== (k = null !== (B = null == m ? void 0 : m.firstWeekContainsDate) && void 0 !== B ? B : null == m ? void 0 : null === (F = m.locale) || void 0 === F ? void 0 : null === (V = F.options) || void 0 === V ? void 0 : V.firstWeekContainsDate) && void 0 !== k ? k : R.firstWeekContainsDate) && void 0 !== G ? G : null === (H = R.locale) || void 0 === H ? void 0 : null === (Z = H.options) || void 0 === Z ? void 0 : Z.firstWeekContainsDate) && void 0 !== x ? x : 1);
    if (!(y >= 1 && y <= 7))
        throw RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
    var D = (0, c.Z)(null !== (Y = null !== (j = null !== (W = null !== (K = null == m ? void 0 : m.weekStartsOn) && void 0 !== K ? K : null == m ? void 0 : null === (z = m.locale) || void 0 === z ? void 0 : null === (q = z.options) || void 0 === q ? void 0 : q.weekStartsOn) && void 0 !== W ? W : R.weekStartsOn) && void 0 !== j ? j : null === (Q = R.locale) || void 0 === Q ? void 0 : null === (X = Q.options) || void 0 === X ? void 0 : X.weekStartsOn) && void 0 !== Y ? Y : 0);
    if (!(D >= 0 && D <= 6))
        throw RangeError('weekStartsOn must be between 0 and 6 inclusively');
    if ('' === O)
        return '' === v ? (0, a.default)(n) : new Date(NaN);
    var L = {
            firstWeekContainsDate: y,
            weekStartsOn: D,
            locale: C
        }, b = [new _.GT()], M = O.match(T).map(function (e) {
            var t = e[0];
            return t in s.Z ? (0, s.Z[t])(e, C.formatLong) : e;
        }).join('').match(I), P = [], U, w, x, G, k, B, F, V, H, Z, Y, j, W, K, z, q, Q, X, $, J = p(M);
    try {
        for (J.s(); !($ = J.n()).done;) {
            var ee = function () {
                var t = $.value;
                !(null != m && m.useAdditionalWeekYearTokens) && (0, u.Do)(t) && (0, u.qp)(t, O, e), !(null != m && m.useAdditionalDayOfYearTokens) && (0, u.Iu)(t) && (0, u.qp)(t, O, e);
                var n = t[0], r = E.f[n];
                if (r) {
                    var i = r.incompatibleTokens;
                    if (Array.isArray(i)) {
                        var a = P.find(function (e) {
                            return i.includes(e.token) || e.token === n;
                        });
                        if (a)
                            throw RangeError('The format string mustn\'t contain `'.concat(a.fullToken, '` and `').concat(t, '` at the same time'));
                    } else if ('*' === r.incompatibleTokens && P.length > 0)
                        throw RangeError('The format string mustn\'t contain `'.concat(t, '` and any other token at the same time'));
                    P.push({
                        token: n,
                        fullToken: t
                    });
                    var o = r.run(v, t, C.match, L);
                    if (!o)
                        return { v: new Date(NaN) };
                    b.push(o.setter), v = o.rest;
                } else {
                    if (n.match(N))
                        throw RangeError('Format string contains an unescaped latin alphabet character `' + n + '`');
                    if ('\'\'' === t ? t = '\'' : '\'' === n && (t = function (e) {
                            return e.match(g)[1].replace(S, '\'');
                        }(t)), 0 !== v.indexOf(t))
                        return { v: new Date(NaN) };
                    v = v.slice(t.length);
                }
            }();
            if ('object' === h(ee))
                return ee.v;
        }
    } catch (e) {
        J.e(e);
    } finally {
        J.f();
    }
    if (v.length > 0 && A.test(v))
        return new Date(NaN);
    var et = b.map(function (e) {
            return e.priority;
        }).sort(function (e, t) {
            return t - e;
        }).filter(function (e, t, n) {
            return n.indexOf(e) === t;
        }).map(function (e) {
            return b.filter(function (t) {
                return t.priority === e;
            }).sort(function (e, t) {
                return t.subPriority - e.subPriority;
            });
        }).map(function (e) {
            return e[0];
        }), en = (0, a.default)(n);
    if (isNaN(en.getTime()))
        return new Date(NaN);
    var er = (0, i.Z)(en, (0, l.Z)(en)), ei = {}, ea, eo = p(et);
    try {
        for (eo.s(); !(ea = eo.n()).done;) {
            var es = ea.value;
            if (!es.validate(er, L))
                return new Date(NaN);
            var el = es.set(er, ei, L);
            Array.isArray(el) ? (er = el[0], (0, o.Z)(ei, el[1])) : er = el;
        }
    } catch (e) {
        eo.e(e);
    } finally {
        eo.f();
    }
    return er;
}
