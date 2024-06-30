function r(e) {
    for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
        n[r - 1] = arguments[r];
    throw Error('[Immer] minified error nr: ' + e + (n.length ? ' ' + n.map(function (e) {
        return '\'' + e + '\'';
    }).join(',') : '') + '. Find the full error at: https://bit.ly/3cXEKWf');
}
function i(e) {
    return !!e && !!e[H];
}
function a(e) {
    var t;
    return !!e && (function (e) {
        if (!e || 'object' != typeof e)
            return !1;
        var t = Object.getPrototypeOf(e);
        if (null === t)
            return !0;
        var n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor;
        return n === Object || 'function' == typeof n && Function.toString.call(n) === Z;
    }(e) || Array.isArray(e) || !!e[V] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[V]) || c(e) || d(e));
}
function o(e, t, n) {
    void 0 === n && (n = !1), 0 === s(e) ? (n ? Object.keys : Y)(e).forEach(function (r) {
        n && 'symbol' == typeof r || t(r, e[r], e);
    }) : e.forEach(function (n, r) {
        return t(r, n, e);
    });
}
function s(e) {
    var t = e[H];
    return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : c(e) ? 2 : d(e) ? 3 : 0;
}
function l(e, t) {
    return 2 === s(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
n.d(t, {
    P2: function () {
        return X;
    },
    Uy: function () {
        return Q;
    },
    _x: function () {
        return $;
    },
    mv: function () {
        return i;
    }
});
function u(e, t, n) {
    var r = s(e);
    2 === r ? e.set(t, n) : 3 === r ? e.add(n) : e[t] = n;
}
function c(e) {
    return G && e instanceof Map;
}
function d(e) {
    return k && e instanceof Set;
}
function _(e) {
    return e.o || e.t;
}
function E(e) {
    if (Array.isArray(e))
        return Array.prototype.slice.call(e);
    var t = j(e);
    delete t[H];
    for (var n = Y(t), r = 0; r < n.length; r++) {
        var i = n[r], a = t[i];
        !1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[i] = {
            configurable: !0,
            writable: !0,
            enumerable: a.enumerable,
            value: e[i]
        });
    }
    return Object.create(Object.getPrototypeOf(e), t);
}
function f(e, t) {
    return void 0 === t && (t = !1), p(e) || i(e) || !a(e) || (s(e) > 1 && (e.set = e.add = e.clear = e.delete = h), Object.freeze(e), t && o(e, function (e, t) {
        return f(t, !0);
    }, !0)), e;
}
function h() {
    r(2);
}
function p(e) {
    return null == e || 'object' != typeof e || Object.isFrozen(e);
}
function m(e) {
    var t = W[e];
    return t || r(18, e), t;
}
function I() {
    return w;
}
function T(e, t) {
    t && (m('Patches'), e.u = [], e.s = [], e.v = t);
}
function g(e) {
    S(e), e.p.forEach(N), e.p = null;
}
function S(e) {
    e === w && (w = e.l);
}
function A(e) {
    return w = {
        p: [],
        l: w,
        h: e,
        m: !0,
        _: 0
    };
}
function N(e) {
    var t = e[H];
    0 === t.i || 1 === t.i ? t.j() : t.g = !0;
}
function v(e, t) {
    t._ = t.p.length;
    var n = t.p[0], i = void 0 !== e && e !== n;
    return t.h.O || m('ES5').S(t, e, i), i ? (n[H].P && (g(t), r(4)), a(e) && (e = O(t, e), t.l || C(t, e)), t.u && m('Patches').M(n[H].t, e, t.u, t.s)) : e = O(t, n, []), g(t), t.u && t.v(t.u, t.s), e !== F ? e : void 0;
}
function O(e, t, n) {
    if (p(t))
        return t;
    var r = t[H];
    if (!r)
        return o(t, function (i, a) {
            return R(e, r, t, i, a, n);
        }, !0), t;
    if (r.A !== e)
        return t;
    if (!r.P)
        return C(e, r.t, !0), r.t;
    if (!r.I) {
        r.I = !0, r.A._--;
        var i = 4 === r.i || 5 === r.i ? r.o = E(r.k) : r.o, a = i, s = !1;
        3 === r.i && (a = new Set(i), i.clear(), s = !0), o(a, function (t, a) {
            return R(e, r, i, t, a, n, s);
        }), C(e, i, !1), n && e.u && m('Patches').N(r, n, e.u, e.s);
    }
    return r.o;
}
function R(e, t, n, r, o, s, c) {
    if (i(o)) {
        var d = O(e, o, s && t && 3 !== t.i && !l(t.R, r) ? s.concat(r) : void 0);
        if (u(n, r, d), !i(d))
            return;
        e.m = !1;
    } else
        c && n.add(o);
    if (a(o) && !p(o)) {
        if (!e.h.D && e._ < 1)
            return;
        O(e, o), t && t.A.l || C(e, o);
    }
}
function C(e, t, n) {
    void 0 === n && (n = !1), !e.l && e.h.D && e.m && f(t, n);
}
function y(e, t) {
    var n = e[H];
    return (n ? _(n) : e)[t];
}
function D(e, t) {
    if (t in e)
        for (var n = Object.getPrototypeOf(e); n;) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r)
                return r;
            n = Object.getPrototypeOf(n);
        }
}
function L(e) {
    e.P || (e.P = !0, e.l && L(e.l));
}
function b(e) {
    e.o || (e.o = E(e.t));
}
function M(e, t, n) {
    var r, i, a, o, s, l, u, _, E, f = c(t) ? m('MapSet').F(t, n) : d(t) ? m('MapSet').T(t, n) : e.O ? (r = t, i = n, s = o = {
            i: (a = Array.isArray(r)) ? 1 : 0,
            A: i ? i.A : w,
            P: !1,
            I: !1,
            R: {},
            l: i,
            t: r,
            k: null,
            o: null,
            j: null,
            C: !1
        }, l = K, a && (s = [o], l = z), _ = (u = Proxy.revocable(s, l)).revoke, E = u.proxy, o.k = E, o.j = _, E) : m('ES5').J(t, n);
    return (n ? n.A : w).p.push(f), f;
}
function P(e, t) {
    switch (t) {
    case 2:
        return new Map(e);
    case 3:
        return Array.from(e);
    }
    return E(e);
}
var U, w, x = 'undefined' != typeof Symbol && 'symbol' == typeof Symbol('x'), G = 'undefined' != typeof Map, k = 'undefined' != typeof Set, B = 'undefined' != typeof Proxy && void 0 !== Proxy.revocable && 'undefined' != typeof Reflect, F = x ? Symbol.for('immer-nothing') : ((U = {})['immer-nothing'] = !0, U), V = x ? Symbol.for('immer-draftable') : '__$immer_draftable', H = x ? Symbol.for('immer-state') : '__$immer_state', Z = '' + Object.prototype.constructor, Y = 'undefined' != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function (e) {
        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
    } : Object.getOwnPropertyNames, j = Object.getOwnPropertyDescriptors || function (e) {
        var t = {};
        return Y(e).forEach(function (n) {
            t[n] = Object.getOwnPropertyDescriptor(e, n);
        }), t;
    }, W = {}, K = {
        get: function (e, t) {
            if (t === H)
                return e;
            var n, r, i, o = _(e);
            if (!l(o, t)) {
                ;
                return n = e, (i = D(o, t)) ? 'value' in i ? i.value : null === (r = i.get) || void 0 === r ? void 0 : r.call(n.k) : void 0;
            }
            var s = o[t];
            return e.I || !a(s) ? s : s === y(e.t, t) ? (b(e), e.o[t] = M(e.A.h, s, e)) : s;
        },
        has: function (e, t) {
            return t in _(e);
        },
        ownKeys: function (e) {
            return Reflect.ownKeys(_(e));
        },
        set: function (e, t, n) {
            var r = D(_(e), t);
            if (null == r ? void 0 : r.set)
                return r.set.call(e.k, n), !0;
            if (!e.P) {
                var i, a, o = y(_(e), t), s = null == o ? void 0 : o[H];
                if (s && s.t === n)
                    return e.o[t] = n, e.R[t] = !1, !0;
                if (((i = n) === (a = o) ? 0 !== i || 1 / i == 1 / a : i != i && a != a) && (void 0 !== n || l(e.t, t)))
                    return !0;
                b(e), L(e);
            }
            return e.o[t] === n && (void 0 !== n || t in e.o) || Number.isNaN(n) && Number.isNaN(e.o[t]) || (e.o[t] = n, e.R[t] = !0), !0;
        },
        deleteProperty: function (e, t) {
            return void 0 !== y(e.t, t) || t in e.t ? (e.R[t] = !1, b(e), L(e)) : delete e.R[t], e.o && delete e.o[t], !0;
        },
        getOwnPropertyDescriptor: function (e, t) {
            var n = _(e), r = Reflect.getOwnPropertyDescriptor(n, t);
            return r ? {
                writable: !0,
                configurable: 1 !== e.i || 'length' !== t,
                enumerable: r.enumerable,
                value: n[t]
            } : r;
        },
        defineProperty: function () {
            r(11);
        },
        getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
        },
        setPrototypeOf: function () {
            r(12);
        }
    }, z = {};
o(K, function (e, t) {
    z[e] = function () {
        return arguments[0] = arguments[0][0], t.apply(this, arguments);
    };
}), z.deleteProperty = function (e, t) {
    return z.set.call(this, e, t, void 0);
}, z.set = function (e, t, n) {
    return K.set.call(this, e[0], t, n, e[0]);
};
var q = new (function () {
        function e(e) {
            var t = this;
            this.O = B, this.D = !0, this.produce = function (e, n, i) {
                if ('function' == typeof e && 'function' != typeof n) {
                    var o, s = n;
                    return n = e, function (e) {
                        var r = this;
                        void 0 === e && (e = s);
                        for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
                            a[o - 1] = arguments[o];
                        return t.produce(e, function (e) {
                            var t;
                            return (t = n).call.apply(t, [
                                r,
                                e
                            ].concat(a));
                        });
                    };
                }
                if ('function' != typeof n && r(6), void 0 !== i && 'function' != typeof i && r(7), a(e)) {
                    var l = A(t), u = M(t, e, void 0), c = !0;
                    try {
                        o = n(u), c = !1;
                    } finally {
                        c ? g(l) : S(l);
                    }
                    return 'undefined' != typeof Promise && o instanceof Promise ? o.then(function (e) {
                        return T(l, i), v(e, l);
                    }, function (e) {
                        throw g(l), e;
                    }) : (T(l, i), v(o, l));
                }
                if (!e || 'object' != typeof e) {
                    if (void 0 === (o = n(e)) && (o = e), o === F && (o = void 0), t.D && f(o, !0), i) {
                        var d = [], _ = [];
                        m('Patches').M(e, o, d, _), i(d, _);
                    }
                    return o;
                }
                r(21, e);
            }, this.produceWithPatches = function (e, n) {
                if ('function' == typeof e)
                    return function (n) {
                        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                            i[a - 1] = arguments[a];
                        return t.produceWithPatches(n, function (t) {
                            return e.apply(void 0, [t].concat(i));
                        });
                    };
                var r, i, a = t.produce(e, n, function (e, t) {
                        r = e, i = t;
                    });
                return 'undefined' != typeof Promise && a instanceof Promise ? a.then(function (e) {
                    return [
                        e,
                        r,
                        i
                    ];
                }) : [
                    a,
                    r,
                    i
                ];
            }, 'boolean' == typeof (null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), 'boolean' == typeof (null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze);
        }
        var t = e.prototype;
        return t.createDraft = function (e) {
            a(e) || r(8), i(e) && (i(t = e) || r(22, t), e = function e(t) {
                if (!a(t))
                    return t;
                var n, r = t[H], i = s(t);
                if (r) {
                    if (!r.P && (r.i < 4 || !m('ES5').K(r)))
                        return r.t;
                    r.I = !0, n = P(t, i), r.I = !1;
                } else
                    n = P(t, i);
                return o(n, function (t, i) {
                    var a, o;
                    r && (a = r.t, o = t, (2 === s(a) ? a.get(o) : a[o]) === i) || u(n, t, e(i));
                }), 3 === i ? new Set(n) : n;
            }(t));
            var t, n = A(this), l = M(this, e, void 0);
            return l[H].C = !0, S(n), l;
        }, t.finishDraft = function (e, t) {
            var n = (e && e[H]).A;
            return T(n, t), v(void 0, n);
        }, t.setAutoFreeze = function (e) {
            this.D = e;
        }, t.setUseProxies = function (e) {
            e && !B && r(20), this.O = e;
        }, t.applyPatches = function (e, t) {
            for (n = t.length - 1; n >= 0; n--) {
                var n, r = t[n];
                if (0 === r.path.length && 'replace' === r.op) {
                    e = r.value;
                    break;
                }
            }
            n > -1 && (t = t.slice(n + 1));
            var a = m('Patches').$;
            return i(e) ? a(e, t) : this.produce(e, function (e) {
                return a(e, t);
            });
        }, e;
    }())(), Q = q.produce, X = (q.produceWithPatches.bind(q), q.setAutoFreeze.bind(q), q.setUseProxies.bind(q), q.applyPatches.bind(q), q.createDraft.bind(q)), $ = q.finishDraft.bind(q);
