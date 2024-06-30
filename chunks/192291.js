var e, o, i, u = n(212036), f = n(325008), a = n(161581), c = n(354848), s = n(622281), y = n(740362), p = n(974971), h = n(938507), v = n(251069), d = n(859209), g = n(4340), l = n(838957), A = n(144748), w = n(276321), x = n(641236), b = n(457507), T = n(644659), E = T.enforce, I = T.get, R = a.Int8Array, m = R && R.prototype, O = a.Uint8ClampedArray, M = O && O.prototype, F = R && A(R), U = m && A(m), _ = Object.prototype, L = a.TypeError, B = x('toStringTag'), C = b('TYPED_ARRAY_TAG'), S = 'TypedArrayConstructor', P = u && !!w && 'Opera' !== p(a.opera), V = !1, N = {
        Int8Array: 1,
        Uint8Array: 1,
        Uint8ClampedArray: 1,
        Int16Array: 2,
        Uint16Array: 2,
        Int32Array: 4,
        Uint32Array: 4,
        Float32Array: 4,
        Float64Array: 8
    }, W = {
        BigInt64Array: 8,
        BigUint64Array: 8
    }, j = function (t) {
        var r = A(t);
        if (s(r)) {
            var n = I(r);
            return n && y(n, S) ? n[S] : j(r);
        }
    }, Y = function (t) {
        if (!s(t))
            return !1;
        var r = p(t);
        return y(N, r) || y(W, r);
    };
for (e in N)
    (i = (o = a[e]) && o.prototype) ? E(i)[S] = o : P = !1;
for (e in W)
    (i = (o = a[e]) && o.prototype) && (E(i)[S] = o);
if ((!P || !c(F) || F === Function.prototype) && (F = function () {
        throw L('Incorrect invocation');
    }, P))
    for (e in N)
        a[e] && w(a[e], F);
if ((!P || !U || U === _) && (U = F.prototype, P))
    for (e in N)
        a[e] && w(a[e].prototype, U);
if (P && A(M) !== U && w(M, U), f && !y(U, B))
    for (e in (V = !0, g(U, B, {
            configurable: !0,
            get: function () {
                return s(this) ? this[C] : void 0;
            }
        }), N))
        a[e] && v(a[e], C, e);
t.exports = {
    NATIVE_ARRAY_BUFFER_VIEWS: P,
    TYPED_ARRAY_TAG: V && C,
    aTypedArray: function (t) {
        if (Y(t))
            return t;
        throw L('Target is not a typed array');
    },
    aTypedArrayConstructor: function (t) {
        if (c(t) && (!w || l(F, t)))
            return t;
        throw L(h(t) + ' is not a typed array constructor');
    },
    exportTypedArrayMethod: function (t, r, n, e) {
        if (f) {
            if (n)
                for (var o in N) {
                    var i = a[o];
                    if (i && y(i.prototype, t))
                        try {
                            delete i.prototype[t];
                        } catch (n) {
                            try {
                                i.prototype[t] = r;
                            } catch (t) {
                            }
                        }
                }
            (!U[t] || n) && d(U, t, n ? r : P && m[t] || r, e);
        }
    },
    exportTypedArrayStaticMethod: function (t, r, n) {
        var e, o;
        if (f) {
            if (w) {
                if (n) {
                    for (e in N)
                        if ((o = a[e]) && y(o, t))
                            try {
                                delete o[t];
                            } catch (t) {
                            }
                }
                if (F[t] && !n)
                    return;
                try {
                    return d(F, t, n ? r : P && F[t] || r);
                } catch (t) {
                }
            }
            for (e in N)
                (o = a[e]) && (!o[t] || n) && d(o, t, r);
        }
    },
    getTypedArrayConstructor: j,
    isView: function (t) {
        if (!s(t))
            return !1;
        var r = p(t);
        return 'DataView' === r || y(N, r) || y(W, r);
    },
    isTypedArray: Y,
    TypedArray: F,
    TypedArrayPrototype: U
};
