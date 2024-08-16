n(996173);
var r = n(147018),
    i = n(161581),
    a = n(926515),
    s = n(581031),
    o = n(325008),
    l = n(259230),
    u = n(859209),
    c = n(4340),
    d = n(90338),
    _ = n(865312),
    E = n(673743),
    f = n(644659),
    h = n(603528),
    p = n(354848),
    m = n(740362),
    I = n(566885),
    T = n(974971),
    g = n(24033),
    S = n(622281),
    A = n(714050),
    N = n(803938),
    v = n(879),
    O = n(981971),
    R = n(11697),
    C = n(202934),
    y = n(641236),
    D = n(976418),
    L = y('iterator'),
    b = 'URLSearchParams',
    M = b + 'Iterator',
    P = f.set,
    U = f.getterFor(b),
    w = f.getterFor(M),
    x = Object.getOwnPropertyDescriptor,
    G = function (e) {
        if (!o) return i[e];
        var t = x(i, e);
        return t && t.value;
    },
    k = G('fetch'),
    B = G('Request'),
    F = G('Headers'),
    V = B && B.prototype,
    H = F && F.prototype,
    Z = i.RegExp,
    Y = i.TypeError,
    j = i.decodeURIComponent,
    W = i.encodeURIComponent,
    K = s(''.charAt),
    z = s([].join),
    q = s([].push),
    Q = s(''.replace),
    X = s([].shift),
    $ = s([].splice),
    J = s(''.split),
    ee = s(''.slice),
    et = /\+/g,
    en = [, , , ,],
    er = function (e) {
        try {
            return j(e);
        } catch (t) {
            return e;
        }
    },
    ei = function (e) {
        var t,
            n = Q(e, et, ' '),
            r = 4;
        try {
            return j(n);
        } catch (e) {
            for (; r; ) {
                n = Q(n, en[(t = r--) - 1] || (en[t - 1] = Z('((?:%[\\da-f]{2}){' + t + '})', 'gi')), er);
            }
            return n;
        }
    },
    ea = /[!'()~]|%20/g,
    es = {
        '!': '%21',
        "'": '%27',
        '(': '%28',
        ')': '%29',
        '~': '%7E',
        '%20': '+'
    },
    eo = function (e) {
        return es[e];
    },
    el = function (e) {
        return Q(W(e), ea, eo);
    },
    eu = E(
        function (e, t) {
            P(this, {
                type: M,
                iterator: O(U(e).entries),
                kind: t
            });
        },
        'Iterator',
        function () {
            var e = w(this),
                t = e.kind,
                n = e.iterator.next(),
                r = n.value;
            return !n.done && (n.value = 'keys' === t ? r.key : 'values' === t ? r.value : [r.key, r.value]), n;
        },
        !0
    ),
    ec = function (e) {
        (this.entries = []), (this.url = null), void 0 !== e && (S(e) ? this.parseObject(e) : this.parseQuery('string' == typeof e ? ('?' === K(e, 0) ? ee(e, 1) : e) : A(e)));
    };
ec.prototype = {
    type: b,
    bindURL: function (e) {
        (this.url = e), this.update();
    },
    parseObject: function (e) {
        var t,
            n,
            r,
            i,
            s,
            o,
            l,
            u = R(e);
        if (u)
            for (n = (t = O(e, u)).next; !(r = a(n, t)).done; ) {
                if ((o = a((s = (i = O(g(r.value))).next), i)).done || (l = a(s, i)).done || !a(s, i).done) throw Y('Expected sequence with length 2');
                q(this.entries, {
                    key: A(o.value),
                    value: A(l.value)
                });
            }
        else
            for (var c in e)
                m(e, c) &&
                    q(this.entries, {
                        key: c,
                        value: A(e[c])
                    });
    },
    parseQuery: function (e) {
        if (e) {
            for (var t, n, r = J(e, '&'), i = 0; i < r.length; )
                (t = r[i++]).length &&
                    ((n = J(t, '=')),
                    q(this.entries, {
                        key: ei(X(n)),
                        value: ei(z(n, '='))
                    }));
        }
    },
    serialize: function () {
        for (var e, t = this.entries, n = [], r = 0; r < t.length; ) q(n, el((e = t[r++]).key) + '=' + el(e.value));
        return z(n, '&');
    },
    update: function () {
        (this.entries.length = 0), this.parseQuery(this.url.query);
    },
    updateURL: function () {
        this.url && this.url.update();
    }
};
var ed = function () {
        h(this, e_);
        var e = arguments.length > 0 ? arguments[0] : void 0,
            t = P(this, new ec(e));
        !o && (this.size = t.entries.length);
    },
    e_ = ed.prototype;
if (
    (d(
        e_,
        {
            append: function (e, t) {
                var n = U(this);
                C(arguments.length, 2),
                    q(n.entries, {
                        key: A(e),
                        value: A(t)
                    }),
                    !o && this.length++,
                    n.updateURL();
            },
            delete: function (e) {
                for (var t = U(this), n = C(arguments.length, 1), r = t.entries, i = A(e), a = n < 2 ? void 0 : arguments[1], s = void 0 === a ? a : A(a), l = 0; l < r.length; ) {
                    var u = r[l];
                    if (u.key === i && (void 0 === s || u.value === s)) {
                        if (($(r, l, 1), void 0 !== s)) break;
                    } else l++;
                }
                !o && (this.size = r.length), t.updateURL();
            },
            get: function (e) {
                var t = U(this).entries;
                C(arguments.length, 1);
                for (var n = A(e), r = 0; r < t.length; r++) if (t[r].key === n) return t[r].value;
                return null;
            },
            getAll: function (e) {
                var t = U(this).entries;
                C(arguments.length, 1);
                for (var n = A(e), r = [], i = 0; i < t.length; i++) t[i].key === n && q(r, t[i].value);
                return r;
            },
            has: function (e) {
                for (var t = U(this).entries, n = C(arguments.length, 1), r = A(e), i = n < 2 ? void 0 : arguments[1], a = void 0 === i ? i : A(i), s = 0; s < t.length; ) {
                    var o = t[s++];
                    if (o.key === r && (void 0 === a || o.value === a)) return !0;
                }
                return !1;
            },
            set: function (e, t) {
                var n,
                    r = U(this);
                C(arguments.length, 1);
                for (var i = r.entries, a = !1, s = A(e), l = A(t), u = 0; u < i.length; u++) (n = i[u]).key === s && (a ? $(i, u--, 1) : ((a = !0), (n.value = l)));
                !a &&
                    q(i, {
                        key: s,
                        value: l
                    }),
                    !o && (this.size = i.length),
                    r.updateURL();
            },
            sort: function () {
                var e = U(this);
                D(e.entries, function (e, t) {
                    return e.key > t.key ? 1 : -1;
                }),
                    e.updateURL();
            },
            forEach: function (e) {
                for (var t, n = U(this).entries, r = I(e, arguments.length > 1 ? arguments[1] : void 0), i = 0; i < n.length; ) r((t = n[i++]).value, t.key, this);
            },
            keys: function () {
                return new eu(this, 'keys');
            },
            values: function () {
                return new eu(this, 'values');
            },
            entries: function () {
                return new eu(this, 'entries');
            }
        },
        { enumerable: !0 }
    ),
    u(e_, L, e_.entries, { name: 'entries' }),
    u(
        e_,
        'toString',
        function () {
            return U(this).serialize();
        },
        { enumerable: !0 }
    ),
    o &&
        c(e_, 'size', {
            get: function () {
                return U(this).entries.length;
            },
            configurable: !0,
            enumerable: !0
        }),
    _(ed, b),
    r(
        {
            global: !0,
            constructor: !0,
            forced: !l
        },
        { URLSearchParams: ed }
    ),
    !l && p(F))
) {
    var eE = s(H.has),
        ef = s(H.set),
        eh = function (e) {
            if (S(e)) {
                var t,
                    n = e.body;
                if (T(n) === b)
                    return (
                        !eE((t = e.headers ? new F(e.headers) : new F()), 'content-type') && ef(t, 'content-type', 'application/x-www-form-urlencoded;charset=UTF-8'),
                        N(e, {
                            body: v(0, A(n)),
                            headers: v(0, t)
                        })
                    );
            }
            return e;
        };
    if (
        (p(k) &&
            r(
                {
                    global: !0,
                    enumerable: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                {
                    fetch: function (e) {
                        return k(e, arguments.length > 1 ? eh(arguments[1]) : {});
                    }
                }
            ),
        p(B))
    ) {
        var ep = function (e) {
            return h(this, V), new B(e, arguments.length > 1 ? eh(arguments[1]) : {});
        };
        (V.constructor = ep),
            (ep.prototype = V),
            r(
                {
                    global: !0,
                    constructor: !0,
                    dontCallGetSet: !0,
                    forced: !0
                },
                { Request: ep }
            );
    }
}
e.exports = {
    URLSearchParams: ed,
    getState: U
};
