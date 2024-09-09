var r = n(250683),
    i = n(932093),
    a = 'function' == typeof Symbol && 'function' == typeof Symbol.for ? Symbol.for('nodejs.util.inspect.custom') : null;
(t.Buffer = o),
    (t.SlowBuffer = function (e) {
        return +e != e && (e = 0), o.alloc(+e);
    }),
    (t.INSPECT_MAX_BYTES = 50);
(t.kMaxLength = 2147483647),
    (o.TYPED_ARRAY_SUPPORT = (function () {
        try {
            var e = new Uint8Array(1),
                t = {
                    foo: function () {
                        return 42;
                    }
                };
            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo();
        } catch (e) {
            return !1;
        }
    })()),
    !o.TYPED_ARRAY_SUPPORT && 'undefined' != typeof console && 'function' == typeof console.error && console.error('This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.');
function s(e) {
    if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
    var t = new Uint8Array(e);
    return Object.setPrototypeOf(t, o.prototype), t;
}
function o(e, t, n) {
    if ('number' == typeof e) {
        if ('string' == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
        return c(e);
    }
    return l(e, t, n);
}
function l(e, t, n) {
    if ('string' == typeof e)
        return (function (e, t) {
            if ((('string' != typeof t || '' === t) && (t = 'utf8'), !o.isEncoding(t))) throw TypeError('Unknown encoding: ' + t);
            var n = 0 | f(e, t),
                r = s(n),
                i = r.write(e, t);
            return i !== n && (r = r.slice(0, i)), r;
        })(e, t);
    if (ArrayBuffer.isView(e)) return d(e);
    if (null == e) throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
    if (b(e, ArrayBuffer) || (e && b(e.buffer, ArrayBuffer)) || ('undefined' != typeof SharedArrayBuffer && (b(e, SharedArrayBuffer) || (e && b(e.buffer, SharedArrayBuffer))))) return _(e, t, n);
    if ('number' == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
    var r = e.valueOf && e.valueOf();
    if (null != r && r !== e) return o.from(r, t, n);
    var i = (function (e) {
        if (o.isBuffer(e)) {
            var t = 0 | E(e.length),
                n = s(t);
            return 0 === n.length ? n : (e.copy(n, 0, 0, t), n);
        }
        if (void 0 !== e.length)
            return 'number' != typeof e.length ||
                (function (e) {
                    return e != e;
                })(e.length)
                ? s(0)
                : d(e);
        if ('Buffer' === e.type && Array.isArray(e.data)) return d(e.data);
    })(e);
    if (i) return i;
    if ('undefined' != typeof Symbol && null != Symbol.toPrimitive && 'function' == typeof e[Symbol.toPrimitive]) return o.from(e[Symbol.toPrimitive]('string'), t, n);
    throw TypeError('The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' + typeof e);
}
function u(e) {
    if ('number' != typeof e) throw TypeError('"size" argument must be of type number');
    if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"');
}
Object.defineProperty(o.prototype, 'parent', {
    enumerable: !0,
    get: function () {
        if (o.isBuffer(this)) return this.buffer;
    }
}),
    Object.defineProperty(o.prototype, 'offset', {
        enumerable: !0,
        get: function () {
            if (o.isBuffer(this)) return this.byteOffset;
        }
    }),
    (o.poolSize = 8192),
    (o.from = function (e, t, n) {
        return l(e, t, n);
    }),
    Object.setPrototypeOf(o.prototype, Uint8Array.prototype),
    Object.setPrototypeOf(o, Uint8Array);
function c(e) {
    return u(e), s(e < 0 ? 0 : 0 | E(e));
}
(o.alloc = function (e, t, n) {
    var r, i, a;
    return (r = e), (i = t), (a = n), (u(r), r <= 0) ? s(r) : void 0 !== i ? ('string' == typeof a ? s(r).fill(i, a) : s(r).fill(i)) : s(r);
}),
    (o.allocUnsafe = function (e) {
        return c(e);
    }),
    (o.allocUnsafeSlow = function (e) {
        return c(e);
    });
function d(e) {
    for (var t = e.length < 0 ? 0 : 0 | E(e.length), n = s(t), r = 0; r < t; r += 1) n[r] = 255 & e[r];
    return n;
}
function _(e, t, n) {
    var r;
    if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
    if (e.byteLength < t + (n || 0)) throw RangeError('"length" is outside of buffer bounds');
    return Object.setPrototypeOf((r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n)), o.prototype), r;
}
function E(e) {
    if (e >= 2147483647) throw RangeError('Attempt to allocate Buffer larger than maximum size: 0x' + '7fffffff bytes');
    return 0 | e;
}
function f(e, t) {
    if (o.isBuffer(e)) return e.length;
    if (ArrayBuffer.isView(e) || b(e, ArrayBuffer)) return e.byteLength;
    if ('string' != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
    var n = e.length,
        r = arguments.length > 2 && !0 === arguments[2];
    if (!r && 0 === n) return 0;
    for (var i = !1; ; )
        switch (t) {
            case 'ascii':
            case 'latin1':
            case 'binary':
                return n;
            case 'utf8':
            case 'utf-8':
                return C(e).length;
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return 2 * n;
            case 'hex':
                return n >>> 1;
            case 'base64':
                return D(e).length;
            default:
                if (i) return r ? -1 : C(e).length;
                (t = ('' + t).toLowerCase()), (i = !0);
        }
}
function h(e, t, n) {
    var i = !1;
    if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return '';
    if (((void 0 === n || n > this.length) && (n = this.length), n <= 0 || (n >>>= 0) <= (t >>>= 0))) return '';
    for (!e && (e = 'utf8'); ; )
        switch (e) {
            case 'hex':
                return (function (e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var i = '', a = t; a < n; ++a) i += P[e[a]];
                    return i;
                })(this, t, n);
            case 'utf8':
            case 'utf-8':
                return g(this, t, n);
            case 'ascii':
                return (function (e, t, n) {
                    var r = '';
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                    return r;
                })(this, t, n);
            case 'latin1':
            case 'binary':
                return (function (e, t, n) {
                    var r = '';
                    n = Math.min(e.length, n);
                    for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                    return r;
                })(this, t, n);
            case 'base64':
                return (function (e, t, n) {
                    return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n));
                })(this, t, n);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return (function (e, t, n) {
                    for (var r = e.slice(t, n), i = '', a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]);
                    return i;
                })(this, t, n);
            default:
                if (i) throw TypeError('Unknown encoding: ' + e);
                (e = (e + '').toLowerCase()), (i = !0);
        }
}
function p(e, t, n) {
    var r = e[t];
    (e[t] = e[n]), (e[n] = r);
}
function m(e, t, n, r, i) {
    if (0 === e.length) return -1;
    if (
        ('string' == typeof n ? ((r = n), (n = 0)) : n > 2147483647 ? (n = 2147483647) : n < -2147483648 && (n = -2147483648),
        (function (e) {
            return e != e;
        })((n = +n)) && (n = i ? 0 : e.length - 1),
        n < 0 && (n = e.length + n),
        n >= e.length)
    ) {
        if (i) return -1;
        n = e.length - 1;
    } else if (n < 0) {
        if (!i) return -1;
        n = 0;
    }
    if (('string' == typeof t && (t = o.from(t, r)), o.isBuffer(t))) return 0 === t.length ? -1 : I(e, t, n, r, i);
    if ('number' == typeof t) {
        if (((t &= 255), 'function' == typeof Uint8Array.prototype.indexOf)) return i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n);
        return I(e, [t], n, r, i);
    }
    throw TypeError('val must be string, number or Buffer');
}
function I(e, t, n, r, i) {
    var a,
        s = 1,
        o = e.length,
        l = t.length;
    if (void 0 !== r && ('ucs2' === (r = String(r).toLowerCase()) || 'ucs-2' === r || 'utf16le' === r || 'utf-16le' === r)) {
        if (e.length < 2 || t.length < 2) return -1;
        (s = 2), (o /= 2), (l /= 2), (n /= 2);
    }
    function u(e, t) {
        return 1 === s ? e[t] : e.readUInt16BE(t * s);
    }
    if (i) {
        var c = -1;
        for (a = n; a < o; a++)
            if (u(e, a) === u(t, -1 === c ? 0 : a - c)) {
                if ((-1 === c && (c = a), a - c + 1 === l)) return c * s;
            } else -1 !== c && (a -= a - c), (c = -1);
    } else
        for (n + l > o && (n = o - l), a = n; a >= 0; a--) {
            for (var d = !0, _ = 0; _ < l; _++)
                if (u(e, a + _) !== u(t, _)) {
                    d = !1;
                    break;
                }
            if (d) return a;
        }
    return -1;
}
(o.isBuffer = function (e) {
    return null != e && !0 === e._isBuffer && e !== o.prototype;
}),
    (o.compare = function (e, t) {
        if ((b(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), b(t, Uint8Array) && (t = o.from(t, t.offset, t.byteLength)), !o.isBuffer(e) || !o.isBuffer(t))) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
        if (e === t) return 0;
        for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
            if (e[i] !== t[i]) {
                (n = e[i]), (r = t[i]);
                break;
            }
        return n < r ? -1 : r < n ? 1 : 0;
    }),
    (o.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
            case 'hex':
            case 'utf8':
            case 'utf-8':
            case 'ascii':
            case 'latin1':
            case 'binary':
            case 'base64':
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return !0;
            default:
                return !1;
        }
    }),
    (o.concat = function (e, t) {
        if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
        if (0 === e.length) return o.alloc(0);
        if (void 0 === t) for (n = 0, t = 0; n < e.length; ++n) t += e[n].length;
        var n,
            r = o.allocUnsafe(t),
            i = 0;
        for (n = 0; n < e.length; ++n) {
            var a = e[n];
            if ((b(a, Uint8Array) && (a = o.from(a)), !o.isBuffer(a))) throw TypeError('"list" argument must be an Array of Buffers');
            a.copy(r, i), (i += a.length);
        }
        return r;
    }),
    (o.byteLength = f),
    (o.prototype._isBuffer = !0),
    (o.prototype.swap16 = function () {
        var e = this.length;
        if (e % 2 != 0) throw RangeError('Buffer size must be a multiple of 16-bits');
        for (var t = 0; t < e; t += 2) p(this, t, t + 1);
        return this;
    }),
    (o.prototype.swap32 = function () {
        var e = this.length;
        if (e % 4 != 0) throw RangeError('Buffer size must be a multiple of 32-bits');
        for (var t = 0; t < e; t += 4) p(this, t, t + 3), p(this, t + 1, t + 2);
        return this;
    }),
    (o.prototype.swap64 = function () {
        var e = this.length;
        if (e % 8 != 0) throw RangeError('Buffer size must be a multiple of 64-bits');
        for (var t = 0; t < e; t += 8) p(this, t, t + 7), p(this, t + 1, t + 6), p(this, t + 2, t + 5), p(this, t + 3, t + 4);
        return this;
    }),
    (o.prototype.toString = function () {
        var e = this.length;
        return 0 === e ? '' : 0 == arguments.length ? g(this, 0, e) : h.apply(this, arguments);
    }),
    (o.prototype.toLocaleString = o.prototype.toString),
    (o.prototype.equals = function (e) {
        if (!o.isBuffer(e)) throw TypeError('Argument must be a Buffer');
        return this === e || 0 === o.compare(this, e);
    }),
    (o.prototype.inspect = function () {
        var e = '',
            n = t.INSPECT_MAX_BYTES;
        return (
            (e = this.toString('hex', 0, n)
                .replace(/(.{2})/g, '$1 ')
                .trim()),
            this.length > n && (e += ' ... '),
            '<Buffer ' + e + '>'
        );
    }),
    a && (o.prototype[a] = o.prototype.inspect),
    (o.prototype.compare = function (e, t, n, r, i) {
        if ((b(e, Uint8Array) && (e = o.from(e, e.offset, e.byteLength)), !o.isBuffer(e))) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
        if ((void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length)) throw RangeError('out of range index');
        if (r >= i && t >= n) return 0;
        if (r >= i) return -1;
        if (t >= n) return 1;
        if (((t >>>= 0), (n >>>= 0), (r >>>= 0), (i >>>= 0), this === e)) return 0;
        for (var a = i - r, s = n - t, l = Math.min(a, s), u = this.slice(r, i), c = e.slice(t, n), d = 0; d < l; ++d)
            if (u[d] !== c[d]) {
                (a = u[d]), (s = c[d]);
                break;
            }
        return a < s ? -1 : s < a ? 1 : 0;
    }),
    (o.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n);
    }),
    (o.prototype.indexOf = function (e, t, n) {
        return m(this, e, t, n, !0);
    }),
    (o.prototype.lastIndexOf = function (e, t, n) {
        return m(this, e, t, n, !1);
    });
function T(e, t, n, r) {
    return L(y(t), e, n, r);
}
(o.prototype.write = function (e, t, n, r) {
    if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0);
    else if (void 0 === n && 'string' == typeof t) (r = t), (n = this.length), (t = 0);
    else if (isFinite(t)) (t >>>= 0), isFinite(n) ? ((n >>>= 0), void 0 === r && (r = 'utf8')) : ((r = n), (n = void 0));
    else throw Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var i,
        a,
        s,
        o,
        l,
        u,
        c,
        d,
        _,
        E,
        f,
        h,
        p,
        m,
        I,
        T,
        g = this.length - t;
    if (((void 0 === n || n > g) && (n = g), (e.length > 0 && (n < 0 || t < 0)) || t > this.length)) throw RangeError('Attempt to write outside buffer bounds');
    !r && (r = 'utf8');
    for (var S = !1; ; )
        switch (r) {
            case 'hex':
                return (function (e, t, n, r) {
                    n = Number(n) || 0;
                    var i = e.length - n;
                    r ? (r = Number(r)) > i && (r = i) : (r = i);
                    var a = t.length;
                    r > a / 2 && (r = a / 2);
                    for (var s = 0; s < r; ++s) {
                        var o = parseInt(t.substr(2 * s, 2), 16);
                        if (
                            (function (e) {
                                return e != e;
                            })(o)
                        )
                            break;
                        e[n + s] = o;
                    }
                    return s;
                })(this, e, t, n);
            case 'utf8':
            case 'utf-8':
                return (i = this), (a = e), (s = t), (o = n), L(C(a, i.length - s), i, s, o);
            case 'ascii':
                return (l = this), (u = e), (c = t), (d = n), L(y(u), l, c, d);
            case 'latin1':
            case 'binary':
                return (function (e, t, n, r) {
                    var i, a, s, o;
                    return (i = e), (a = t), (s = n), (o = r), L(y(a), i, s, o);
                })(this, e, t, n);
            case 'base64':
                return (_ = this), (E = e), (f = t), (h = n), L(D(E), _, f, h);
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
                return (
                    (p = this),
                    (m = e),
                    (I = t),
                    (T = n),
                    L(
                        (function (e, t) {
                            for (var n, r, i, a = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) (r = (n = e.charCodeAt(s)) >> 8), (i = n % 256), a.push(i), a.push(r);
                            return a;
                        })(m, p.length - I),
                        p,
                        I,
                        T
                    )
                );
            default:
                if (S) throw TypeError('Unknown encoding: ' + r);
                (r = ('' + r).toLowerCase()), (S = !0);
        }
}),
    (o.prototype.toJSON = function () {
        return {
            type: 'Buffer',
            data: Array.prototype.slice.call(this._arr || this, 0)
        };
    });
function g(e, t, n) {
    n = Math.min(e.length, n);
    for (var r = [], i = t; i < n; ) {
        var a,
            s,
            o,
            l,
            u = e[i],
            c = null,
            d = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
        if (i + d <= n)
            switch (d) {
                case 1:
                    u < 128 && (c = u);
                    break;
                case 2:
                    (192 & (a = e[i + 1])) == 128 && (l = ((31 & u) << 6) | (63 & a)) > 127 && (c = l);
                    break;
                case 3:
                    (a = e[i + 1]), (s = e[i + 2]), (192 & a) == 128 && (192 & s) == 128 && (l = ((15 & u) << 12) | ((63 & a) << 6) | (63 & s)) > 2047 && (l < 55296 || l > 57343) && (c = l);
                    break;
                case 4:
                    (a = e[i + 1]), (s = e[i + 2]), (o = e[i + 3]), (192 & a) == 128 && (192 & s) == 128 && (192 & o) == 128 && (l = ((15 & u) << 18) | ((63 & a) << 12) | ((63 & s) << 6) | (63 & o)) > 65535 && l < 1114112 && (c = l);
            }
        null === c ? ((c = 65533), (d = 1)) : c > 65535 && ((c -= 65536), r.push(((c >>> 10) & 1023) | 55296), (c = 56320 | (1023 & c))), r.push(c), (i += d);
    }
    return (function (e) {
        var t = e.length;
        if (t <= 4096) return String.fromCharCode.apply(String, e);
        for (var n = '', r = 0; r < t; ) n += String.fromCharCode.apply(String, e.slice(r, (r += 4096)));
        return n;
    })(r);
}
function S(e, t, n) {
    if (e % 1 != 0 || e < 0) throw RangeError('offset is not uint');
    if (e + t > n) throw RangeError('Trying to access beyond buffer length');
}
function A(e, t, n, r, i, a) {
    if (!o.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
    if (t > i || t < a) throw RangeError('"value" argument is out of bounds');
    if (n + r > e.length) throw RangeError('Index out of range');
}
function N(e, t, n, r, i, a) {
    if (n + r > e.length || n < 0) throw RangeError('Index out of range');
}
function v(e, t, n, r, a) {
    return (t = +t), (n >>>= 0), !a && N(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38), i.write(e, t, n, r, 23, 4), n + 4;
}
function O(e, t, n, r, a) {
    return (t = +t), (n >>>= 0), !a && N(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308), i.write(e, t, n, r, 52, 8), n + 8;
}
(o.prototype.slice = function (e, t) {
    var n = this.length;
    (e = ~~e), (t = void 0 === t ? n : ~~t), e < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), t < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
    var r = this.subarray(e, t);
    return Object.setPrototypeOf(r, o.prototype), r;
}),
    (o.prototype.readUIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), !n && S(e, t, this.length);
        for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256); ) r += this[e + a] * i;
        return r;
    }),
    (o.prototype.readUIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), !n && S(e, t, this.length);
        for (var r = this[e + --t], i = 1; t > 0 && (i *= 256); ) r += this[e + --t] * i;
        return r;
    }),
    (o.prototype.readUInt8 = function (e, t) {
        return (e >>>= 0), !t && S(e, 1, this.length), this[e];
    }),
    (o.prototype.readUInt16LE = function (e, t) {
        return (e >>>= 0), !t && S(e, 2, this.length), this[e] | (this[e + 1] << 8);
    }),
    (o.prototype.readUInt16BE = function (e, t) {
        return (e >>>= 0), !t && S(e, 2, this.length), (this[e] << 8) | this[e + 1];
    }),
    (o.prototype.readUInt32LE = function (e, t) {
        return (e >>>= 0), !t && S(e, 4, this.length), (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) + 16777216 * this[e + 3];
    }),
    (o.prototype.readUInt32BE = function (e, t) {
        return (e >>>= 0), !t && S(e, 4, this.length), 16777216 * this[e] + ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3]);
    }),
    (o.prototype.readIntLE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), !n && S(e, t, this.length);
        for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256); ) r += this[e + a] * i;
        return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r;
    }),
    (o.prototype.readIntBE = function (e, t, n) {
        (e >>>= 0), (t >>>= 0), !n && S(e, t, this.length);
        for (var r = t, i = 1, a = this[e + --r]; r > 0 && (i *= 256); ) a += this[e + --r] * i;
        return a >= (i *= 128) && (a -= Math.pow(2, 8 * t)), a;
    }),
    (o.prototype.readInt8 = function (e, t) {
        return ((e >>>= 0), !t && S(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e];
    }),
    (o.prototype.readInt16LE = function (e, t) {
        (e >>>= 0), !t && S(e, 2, this.length);
        var n = this[e] | (this[e + 1] << 8);
        return 32768 & n ? 4294901760 | n : n;
    }),
    (o.prototype.readInt16BE = function (e, t) {
        (e >>>= 0), !t && S(e, 2, this.length);
        var n = this[e + 1] | (this[e] << 8);
        return 32768 & n ? 4294901760 | n : n;
    }),
    (o.prototype.readInt32LE = function (e, t) {
        return (e >>>= 0), !t && S(e, 4, this.length), this[e] | (this[e + 1] << 8) | (this[e + 2] << 16) | (this[e + 3] << 24);
    }),
    (o.prototype.readInt32BE = function (e, t) {
        return (e >>>= 0), !t && S(e, 4, this.length), (this[e] << 24) | (this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3];
    }),
    (o.prototype.readFloatLE = function (e, t) {
        return (e >>>= 0), !t && S(e, 4, this.length), i.read(this, e, !0, 23, 4);
    }),
    (o.prototype.readFloatBE = function (e, t) {
        return (e >>>= 0), !t && S(e, 4, this.length), i.read(this, e, !1, 23, 4);
    }),
    (o.prototype.readDoubleLE = function (e, t) {
        return (e >>>= 0), !t && S(e, 8, this.length), i.read(this, e, !0, 52, 8);
    }),
    (o.prototype.readDoubleBE = function (e, t) {
        return (e >>>= 0), !t && S(e, 8, this.length), i.read(this, e, !1, 52, 8);
    }),
    (o.prototype.writeUIntLE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n) - 1;
            A(this, e, t, n, i, 0);
        }
        var a = 1,
            s = 0;
        for (this[t] = 255 & e; ++s < n && (a *= 256); ) this[t + s] = (e / a) & 255;
        return t + n;
    }),
    (o.prototype.writeUIntBE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), (n >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n) - 1;
            A(this, e, t, n, i, 0);
        }
        var a = n - 1,
            s = 1;
        for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); ) this[t + a] = (e / s) & 255;
        return t + n;
    }),
    (o.prototype.writeUInt8 = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 1, 255, 0), (this[t] = 255 & e), t + 1;
    }),
    (o.prototype.writeUInt16LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 2, 65535, 0), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
    }),
    (o.prototype.writeUInt16BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 2, 65535, 0), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
    }),
    (o.prototype.writeUInt32LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 4, 4294967295, 0), (this[t + 3] = e >>> 24), (this[t + 2] = e >>> 16), (this[t + 1] = e >>> 8), (this[t] = 255 & e), t + 4;
    }),
    (o.prototype.writeUInt32BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 4, 4294967295, 0), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
    }),
    (o.prototype.writeIntLE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            A(this, e, t, n, i - 1, -i);
        }
        var a = 0,
            s = 1,
            o = 0;
        for (this[t] = 255 & e; ++a < n && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + a - 1] && (o = 1), (this[t + a] = (((e / s) >> 0) - o) & 255);
        return t + n;
    }),
    (o.prototype.writeIntBE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), !r)) {
            var i = Math.pow(2, 8 * n - 1);
            A(this, e, t, n, i - 1, -i);
        }
        var a = n - 1,
            s = 1,
            o = 0;
        for (this[t + a] = 255 & e; --a >= 0 && (s *= 256); ) e < 0 && 0 === o && 0 !== this[t + a + 1] && (o = 1), (this[t + a] = (((e / s) >> 0) - o) & 255);
        return t + n;
    }),
    (o.prototype.writeInt8 = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), (this[t] = 255 & e), t + 1;
    }),
    (o.prototype.writeInt16LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 2, 32767, -32768), (this[t] = 255 & e), (this[t + 1] = e >>> 8), t + 2;
    }),
    (o.prototype.writeInt16BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 2, 32767, -32768), (this[t] = e >>> 8), (this[t + 1] = 255 & e), t + 2;
    }),
    (o.prototype.writeInt32LE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 4, 2147483647, -2147483648), (this[t] = 255 & e), (this[t + 1] = e >>> 8), (this[t + 2] = e >>> 16), (this[t + 3] = e >>> 24), t + 4;
    }),
    (o.prototype.writeInt32BE = function (e, t, n) {
        return (e = +e), (t >>>= 0), !n && A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), (this[t] = e >>> 24), (this[t + 1] = e >>> 16), (this[t + 2] = e >>> 8), (this[t + 3] = 255 & e), t + 4;
    }),
    (o.prototype.writeFloatLE = function (e, t, n) {
        return v(this, e, t, !0, n);
    }),
    (o.prototype.writeFloatBE = function (e, t, n) {
        return v(this, e, t, !1, n);
    }),
    (o.prototype.writeDoubleLE = function (e, t, n) {
        return O(this, e, t, !0, n);
    }),
    (o.prototype.writeDoubleBE = function (e, t, n) {
        return O(this, e, t, !1, n);
    }),
    (o.prototype.copy = function (e, t, n, r) {
        if (!o.isBuffer(e)) throw TypeError('argument should be a Buffer');
        if ((!n && (n = 0), !r && 0 !== r && (r = this.length), t >= e.length && (t = e.length), !t && (t = 0), r > 0 && r < n && (r = n), r === n || 0 === e.length || 0 === this.length)) return 0;
        if (t < 0) throw RangeError('targetStart out of bounds');
        if (n < 0 || n >= this.length) throw RangeError('Index out of range');
        if (r < 0) throw RangeError('sourceEnd out of bounds');
        r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
        var i = r - n;
        if (this === e && 'function' == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
        else if (this === e && n < t && t < r) for (var a = i - 1; a >= 0; --a) e[a + t] = this[a + n];
        else Uint8Array.prototype.set.call(e, this.subarray(n, r), t);
        return i;
    }),
    (o.prototype.fill = function (e, t, n, r) {
        if ('string' == typeof e) {
            if (('string' == typeof t ? ((r = t), (t = 0), (n = this.length)) : 'string' == typeof n && ((r = n), (n = this.length)), void 0 !== r && 'string' != typeof r)) throw TypeError('encoding must be a string');
            if ('string' == typeof r && !o.isEncoding(r)) throw TypeError('Unknown encoding: ' + r);
            if (1 === e.length) {
                var i,
                    a = e.charCodeAt(0);
                (('utf8' === r && a < 128) || 'latin1' === r) && (e = a);
            }
        } else 'number' == typeof e ? (e &= 255) : 'boolean' == typeof e && (e = Number(e));
        if (t < 0 || this.length < t || this.length < n) throw RangeError('Out of range index');
        if (n <= t) return this;
        if (((t >>>= 0), (n = void 0 === n ? this.length : n >>> 0), !e && (e = 0), 'number' == typeof e)) for (i = t; i < n; ++i) this[i] = e;
        else {
            var s = o.isBuffer(e) ? e : o.from(e, r),
                l = s.length;
            if (0 === l) throw TypeError('The value "' + e + '" is invalid for argument "value"');
            for (i = 0; i < n - t; ++i) this[i + t] = s[i % l];
        }
        return this;
    });
var R = /[^+/0-9A-Za-z-_]/g;
function C(e, t) {
    t = t || 1 / 0;
    for (var n, r = e.length, i = null, a = [], s = 0; s < r; ++s) {
        if ((n = e.charCodeAt(s)) > 55295 && n < 57344) {
            if (!i) {
                if (n > 56319) {
                    (t -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                }
                if (s + 1 === r) {
                    (t -= 3) > -1 && a.push(239, 191, 189);
                    continue;
                }
                i = n;
                continue;
            }
            if (n < 56320) {
                (t -= 3) > -1 && a.push(239, 191, 189), (i = n);
                continue;
            }
            n = (((i - 55296) << 10) | (n - 56320)) + 65536;
        } else i && (t -= 3) > -1 && a.push(239, 191, 189);
        if (((i = null), n < 128)) {
            if ((t -= 1) < 0) break;
            a.push(n);
        } else if (n < 2048) {
            if ((t -= 2) < 0) break;
            a.push((n >> 6) | 192, (63 & n) | 128);
        } else if (n < 65536) {
            if ((t -= 3) < 0) break;
            a.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else if (n < 1114112) {
            if ((t -= 4) < 0) break;
            a.push((n >> 18) | 240, ((n >> 12) & 63) | 128, ((n >> 6) & 63) | 128, (63 & n) | 128);
        } else throw Error('Invalid code point');
    }
    return a;
}
function y(e) {
    for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
    return t;
}
function D(e) {
    return r.toByteArray(
        (function (e) {
            if ((e = (e = e.split('=')[0]).trim().replace(R, '')).length < 2) return '';
            for (; e.length % 4 != 0; ) e += '=';
            return e;
        })(e)
    );
}
function L(e, t, n, r) {
    for (var i = 0; i < r && !(i + n >= t.length) && !(i >= e.length); ++i) t[i + n] = e[i];
    return i;
}
function b(e, t) {
    return e instanceof t || (null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name);
}
function M(e) {
    return e != e;
}
var P = (function () {
    for (var e = '0123456789abcdef', t = Array(256), n = 0; n < 16; ++n) {
        for (var r = 16 * n, i = 0; i < 16; ++i) t[r + i] = e[n] + e[i];
    }
    return t;
})();
