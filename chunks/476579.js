var e = n(161581), o = n(581031), i = n(325008), u = n(212036), f = n(539459), a = n(251069), c = n(4340), s = n(90338), y = n(936940), p = n(603528), h = n(959318), v = n(552028), d = n(646328), g = n(339399), l = n(144748), A = n(276321), w = n(537443).f, x = n(692994), b = n(175440), T = n(865312), E = n(644659), I = f.PROPER, R = f.CONFIGURABLE, m = 'ArrayBuffer', O = 'DataView', M = 'prototype', F = 'Wrong index', U = E.getterFor(m), _ = E.getterFor(O), L = E.set, B = e[m], C = B, S = C && C[M], P = e[O], V = P && P[M], N = Object.prototype, W = e.Array, j = e.RangeError, Y = o(x), k = o([].reverse), D = g.pack, G = g.unpack, z = function (t) {
        return [255 & t];
    }, K = function (t) {
        return [
            255 & t,
            t >> 8 & 255
        ];
    }, q = function (t) {
        return [
            255 & t,
            t >> 8 & 255,
            t >> 16 & 255,
            t >> 24 & 255
        ];
    }, H = function (t) {
        return t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0];
    }, J = function (t) {
        return D(t, 23, 4);
    }, Q = function (t) {
        return D(t, 52, 8);
    }, X = function (t, r, n) {
        c(t[M], r, {
            configurable: !0,
            get: function () {
                return n(this)[r];
            }
        });
    }, Z = function (t, r, n, e) {
        var o = _(t), i = d(n);
        if (i + r > o.byteLength)
            throw j(F);
        var u = o.bytes, f = i + o.byteOffset, a = b(u, f, f + r);
        return e ? a : k(a);
    }, $ = function (t, r, n, e, o, i) {
        var u = _(t), f = d(n), a = e(+o), c = !!i;
        if (f + r > u.byteLength)
            throw j(F);
        for (var s = u.bytes, y = f + u.byteOffset, p = 0; p < r; p++)
            s[y + p] = a[c ? p : r - p - 1];
    };
if (u) {
    var tt = I && B.name !== m;
    if (!y(function () {
            B(1);
        }) || !y(function () {
            new B(-1);
        }) || y(function () {
            return new B(), new B(1.5), new B(NaN), 1 !== B.length || tt && !R;
        })) {
        (C = function (t) {
            return p(this, S), new B(d(t));
        })[M] = S;
        for (var tr, tn = w(B), te = 0; tn.length > te;)
            !((tr = tn[te++]) in C) && a(C, tr, B[tr]);
        S.constructor = C;
    } else
        tt && R && a(B, 'name', m);
    A && l(V) !== N && A(V, N);
    var to = new P(new C(2)), ti = o(V.setInt8);
    to.setInt8(0, 2147483648), to.setInt8(1, 2147483649), (to.getInt8(0) || !to.getInt8(1)) && s(V, {
        setInt8: function (t, r) {
            ti(this, t, r << 24 >> 24);
        },
        setUint8: function (t, r) {
            ti(this, t, r << 24 >> 24);
        }
    }, { unsafe: !0 });
} else
    S = (C = function (t) {
        p(this, S);
        var r = d(t);
        L(this, {
            type: m,
            bytes: Y(W(r), 0),
            byteLength: r
        }), !i && (this.byteLength = r, this.detached = !1);
    })[M], V = (P = function (t, r, n) {
        p(this, V), p(t, S);
        var e = U(t), o = e.byteLength, u = h(r);
        if (u < 0 || u > o)
            throw j('Wrong offset');
        if (n = void 0 === n ? o - u : v(n), u + n > o)
            throw j('Wrong length');
        L(this, {
            type: O,
            buffer: t,
            byteLength: n,
            byteOffset: u,
            bytes: e.bytes
        }), !i && (this.buffer = t, this.byteLength = n, this.byteOffset = u);
    })[M], i && (X(C, 'byteLength', U), X(P, 'buffer', _), X(P, 'byteLength', _), X(P, 'byteOffset', _)), s(V, {
        getInt8: function (t) {
            return Z(this, 1, t)[0] << 24 >> 24;
        },
        getUint8: function (t) {
            return Z(this, 1, t)[0];
        },
        getInt16: function (t) {
            var r = Z(this, 2, t, arguments.length > 1 && arguments[1]);
            return (r[1] << 8 | r[0]) << 16 >> 16;
        },
        getUint16: function (t) {
            var r = Z(this, 2, t, arguments.length > 1 && arguments[1]);
            return r[1] << 8 | r[0];
        },
        getInt32: function (t) {
            return H(Z(this, 4, t, arguments.length > 1 && arguments[1]));
        },
        getUint32: function (t) {
            return H(Z(this, 4, t, arguments.length > 1 && arguments[1])) >>> 0;
        },
        getFloat32: function (t) {
            return G(Z(this, 4, t, arguments.length > 1 && arguments[1]), 23);
        },
        getFloat64: function (t) {
            return G(Z(this, 8, t, arguments.length > 1 && arguments[1]), 52);
        },
        setInt8: function (t, r) {
            $(this, 1, t, z, r);
        },
        setUint8: function (t, r) {
            $(this, 1, t, z, r);
        },
        setInt16: function (t, r) {
            $(this, 2, t, K, r, arguments.length > 2 && arguments[2]);
        },
        setUint16: function (t, r) {
            $(this, 2, t, K, r, arguments.length > 2 && arguments[2]);
        },
        setInt32: function (t, r) {
            $(this, 4, t, q, r, arguments.length > 2 && arguments[2]);
        },
        setUint32: function (t, r) {
            $(this, 4, t, q, r, arguments.length > 2 && arguments[2]);
        },
        setFloat32: function (t, r) {
            $(this, 4, t, J, r, arguments.length > 2 && arguments[2]);
        },
        setFloat64: function (t, r) {
            $(this, 8, t, Q, r, arguments.length > 2 && arguments[2]);
        }
    });
T(C, m), T(P, O), t.exports = {
    ArrayBuffer: C,
    DataView: P
};
