!function (e, t) {
    function r(e, t) {
        if (!e)
            throw Error(t || 'Assertion failed');
    }
    function i(e, t) {
        e.super_ = t;
        var n = function () {
        };
        n.prototype = t.prototype, e.prototype = new n(), e.prototype.constructor = e;
    }
    function a(e, t, n) {
        if (a.isBN(e))
            return e;
        this.negative = 0, this.words = null, this.length = 0, this.red = null, null !== e && (('le' === t || 'be' === t) && (n = t, t = 10), this._init(e || 0, t || 10, n || 'be'));
    }
    'object' == typeof e ? e.exports = a : t.BN = a, a.BN = a, a.wordSize = 26;
    try {
        d = 'undefined' != typeof window && void 0 !== window.Buffer ? window.Buffer : n(223686).Buffer;
    } catch (e) {
    }
    function o(e, t) {
        var n = e.charCodeAt(t);
        if (n >= 48 && n <= 57)
            return n - 48;
        if (n >= 65 && n <= 70)
            return n - 55;
        if (n >= 97 && n <= 102)
            return n - 87;
        else
            r(!1, 'Invalid character in ' + e);
    }
    function s(e, t, n) {
        var r = o(e, n);
        return n - 1 >= t && (r |= o(e, n - 1) << 4), r;
    }
    function l(e, t, n, i) {
        for (var a = 0, o = 0, s = Math.min(e.length, n), l = t; l < s; l++) {
            var u = e.charCodeAt(l) - 48;
            a *= i, o = u >= 49 ? u - 49 + 10 : u >= 17 ? u - 17 + 10 : u, r(u >= 0 && o < i, 'Invalid character'), a += o;
        }
        return a;
    }
    function u(e, t) {
        e.words = t.words, e.length = t.length, e.negative = t.negative, e.red = t.red;
    }
    if (a.isBN = function (e) {
            return e instanceof a || null !== e && 'object' == typeof e && e.constructor.wordSize === a.wordSize && Array.isArray(e.words);
        }, a.max = function (e, t) {
            return e.cmp(t) > 0 ? e : t;
        }, a.min = function (e, t) {
            return 0 > e.cmp(t) ? e : t;
        }, a.prototype._init = function (e, t, n) {
            if ('number' == typeof e)
                return this._initNumber(e, t, n);
            if ('object' == typeof e)
                return this._initArray(e, t, n);
            'hex' === t && (t = 16), r(t === (0 | t) && t >= 2 && t <= 36), e = e.toString().replace(/\s+/g, '');
            var i = 0;
            '-' === e[0] && (i++, this.negative = 1), i < e.length && (16 === t ? this._parseHex(e, i, n) : (this._parseBase(e, t, i), 'le' === n && this._initArray(this.toArray(), t, n)));
        }, a.prototype._initNumber = function (e, t, n) {
            e < 0 && (this.negative = 1, e = -e), e < 67108864 ? (this.words = [67108863 & e], this.length = 1) : e < 4503599627370496 ? (this.words = [
                67108863 & e,
                e / 67108864 & 67108863
            ], this.length = 2) : (r(e < 9007199254740992), this.words = [
                67108863 & e,
                e / 67108864 & 67108863,
                1
            ], this.length = 3), 'le' === n && this._initArray(this.toArray(), t, n);
        }, a.prototype._initArray = function (e, t, n) {
            if (r('number' == typeof e.length), e.length <= 0)
                return this.words = [0], this.length = 1, this;
            this.length = Math.ceil(e.length / 3), this.words = Array(this.length);
            for (var i, a, o = 0; o < this.length; o++)
                this.words[o] = 0;
            var s = 0;
            if ('be' === n)
                for (o = e.length - 1, i = 0; o >= 0; o -= 3)
                    a = e[o] | e[o - 1] << 8 | e[o - 2] << 16, this.words[i] |= a << s & 67108863, this.words[i + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, i++);
            else if ('le' === n)
                for (o = 0, i = 0; o < e.length; o += 3)
                    a = e[o] | e[o + 1] << 8 | e[o + 2] << 16, this.words[i] |= a << s & 67108863, this.words[i + 1] = a >>> 26 - s & 67108863, (s += 24) >= 26 && (s -= 26, i++);
            return this._strip();
        }, a.prototype._parseHex = function (e, t, n) {
            this.length = Math.ceil((e.length - t) / 6), this.words = Array(this.length);
            for (var r, i = 0; i < this.length; i++)
                this.words[i] = 0;
            var a = 0, o = 0;
            if ('be' === n)
                for (i = e.length - 1; i >= t; i -= 2)
                    r = s(e, t, i) << a, this.words[o] |= 67108863 & r, a >= 18 ? (a -= 18, o += 1, this.words[o] |= r >>> 26) : a += 8;
            else
                for (i = (e.length - t) % 2 == 0 ? t + 1 : t; i < e.length; i += 2)
                    r = s(e, t, i) << a, this.words[o] |= 67108863 & r, a >= 18 ? (a -= 18, o += 1, this.words[o] |= r >>> 26) : a += 8;
            this._strip();
        }, a.prototype._parseBase = function (e, t, n) {
            this.words = [0], this.length = 1;
            for (var r = 0, i = 1; i <= 67108863; i *= t)
                r++;
            r--, i = i / t | 0;
            for (var a = e.length - n, o = a % r, s = Math.min(a, a - o) + n, u = 0, c = n; c < s; c += r)
                u = l(e, c, c + r, t), this.imuln(i), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
            if (0 !== o) {
                var d = 1;
                for (u = l(e, c, e.length, t), c = 0; c < o; c++)
                    d *= t;
                this.imuln(d), this.words[0] + u < 67108864 ? this.words[0] += u : this._iaddn(u);
            }
            this._strip();
        }, a.prototype.copy = function (e) {
            e.words = Array(this.length);
            for (var t = 0; t < this.length; t++)
                e.words[t] = this.words[t];
            e.length = this.length, e.negative = this.negative, e.red = this.red;
        }, a.prototype._move = function (e) {
            u(e, this);
        }, a.prototype.clone = function () {
            var e = new a(null);
            return this.copy(e), e;
        }, a.prototype._expand = function (e) {
            for (; this.length < e;)
                this.words[this.length++] = 0;
            return this;
        }, a.prototype._strip = function () {
            for (; this.length > 1 && 0 === this.words[this.length - 1];)
                this.length--;
            return this._normSign();
        }, a.prototype._normSign = function () {
            return 1 === this.length && 0 === this.words[0] && (this.negative = 0), this;
        }, 'undefined' != typeof Symbol && 'function' == typeof Symbol.for)
        try {
            a.prototype[Symbol.for('nodejs.util.inspect.custom')] = c;
        } catch (e) {
            a.prototype.inspect = c;
        }
    else
        a.prototype.inspect = c;
    function c() {
        return (this.red ? '<BN-R: ' : '<BN: ') + this.toString(16) + '>';
    }
    var d, _ = [
            '',
            '0',
            '00',
            '000',
            '0000',
            '00000',
            '000000',
            '0000000',
            '00000000',
            '000000000',
            '0000000000',
            '00000000000',
            '000000000000',
            '0000000000000',
            '00000000000000',
            '000000000000000',
            '0000000000000000',
            '00000000000000000',
            '000000000000000000',
            '0000000000000000000',
            '00000000000000000000',
            '000000000000000000000',
            '0000000000000000000000',
            '00000000000000000000000',
            '000000000000000000000000',
            '0000000000000000000000000'
        ], E = [
            0,
            0,
            25,
            16,
            12,
            11,
            10,
            9,
            8,
            8,
            7,
            7,
            7,
            7,
            6,
            6,
            6,
            6,
            6,
            6,
            6,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5,
            5
        ], f = [
            0,
            0,
            33554432,
            43046721,
            16777216,
            48828125,
            60466176,
            40353607,
            16777216,
            43046721,
            10000000,
            19487171,
            35831808,
            62748517,
            7529536,
            11390625,
            16777216,
            24137569,
            34012224,
            47045881,
            64000000,
            4084101,
            5153632,
            6436343,
            7962624,
            9765625,
            11881376,
            14348907,
            17210368,
            20511149,
            24300000,
            28629151,
            33554432,
            39135393,
            45435424,
            52521875,
            60466176
        ];
    a.prototype.toString = function (e, t) {
        if (t = 0 | t || 1, 16 === (e = e || 10) || 'hex' === e) {
            n = '';
            for (var n, i = 0, a = 0, o = 0; o < this.length; o++) {
                var s = this.words[o], l = ((s << i | a) & 16777215).toString(16);
                a = s >>> 24 - i & 16777215, (i += 2) >= 26 && (i -= 26, o--), n = 0 !== a || o !== this.length - 1 ? _[6 - l.length] + l + n : l + n;
            }
            for (0 !== a && (n = a.toString(16) + n); n.length % t != 0;)
                n = '0' + n;
            return 0 !== this.negative && (n = '-' + n), n;
        }
        if (e === (0 | e) && e >= 2 && e <= 36) {
            var u = E[e], c = f[e];
            n = '';
            var d = this.clone();
            for (d.negative = 0; !d.isZero();) {
                var h = d.modrn(c).toString(e);
                n = (d = d.idivn(c)).isZero() ? h + n : _[u - h.length] + h + n;
            }
            for (this.isZero() && (n = '0' + n); n.length % t != 0;)
                n = '0' + n;
            return 0 !== this.negative && (n = '-' + n), n;
        }
        r(!1, 'Base should be between 2 and 36');
    }, a.prototype.toNumber = function () {
        var e = this.words[0];
        return 2 === this.length ? e += 67108864 * this.words[1] : 3 === this.length && 1 === this.words[2] ? e += 4503599627370496 + 67108864 * this.words[1] : this.length > 2 && r(!1, 'Number can only safely store up to 53 bits'), 0 !== this.negative ? -e : e;
    }, a.prototype.toJSON = function () {
        return this.toString(16, 2);
    }, d && (a.prototype.toBuffer = function (e, t) {
        return this.toArrayLike(d, e, t);
    }), a.prototype.toArray = function (e, t) {
        return this.toArrayLike(Array, e, t);
    };
    a.prototype.toArrayLike = function (e, t, n) {
        this._strip();
        var i, a, o = this.byteLength(), s = n || Math.max(1, o);
        r(o <= s, 'byte array longer than desired length'), r(s > 0, 'Requested array length <= 0');
        var l = (i = e, a = s, i.allocUnsafe ? i.allocUnsafe(a) : new i(a));
        return this['_toArrayLike' + ('le' === t ? 'LE' : 'BE')](l, o), l;
    }, a.prototype._toArrayLikeLE = function (e, t) {
        for (var n = 0, r = 0, i = 0, a = 0; i < this.length; i++) {
            var o = this.words[i] << a | r;
            e[n++] = 255 & o, n < e.length && (e[n++] = o >> 8 & 255), n < e.length && (e[n++] = o >> 16 & 255), 6 === a ? (n < e.length && (e[n++] = o >> 24 & 255), r = 0, a = 0) : (r = o >>> 24, a += 2);
        }
        if (n < e.length)
            for (e[n++] = r; n < e.length;)
                e[n++] = 0;
    }, a.prototype._toArrayLikeBE = function (e, t) {
        for (var n = e.length - 1, r = 0, i = 0, a = 0; i < this.length; i++) {
            var o = this.words[i] << a | r;
            e[n--] = 255 & o, n >= 0 && (e[n--] = o >> 8 & 255), n >= 0 && (e[n--] = o >> 16 & 255), 6 === a ? (n >= 0 && (e[n--] = o >> 24 & 255), r = 0, a = 0) : (r = o >>> 24, a += 2);
        }
        if (n >= 0)
            for (e[n--] = r; n >= 0;)
                e[n--] = 0;
    }, Math.clz32 ? a.prototype._countBits = function (e) {
        return 32 - Math.clz32(e);
    } : a.prototype._countBits = function (e) {
        var t = e, n = 0;
        return t >= 4096 && (n += 13, t >>>= 13), t >= 64 && (n += 7, t >>>= 7), t >= 8 && (n += 4, t >>>= 4), t >= 2 && (n += 2, t >>>= 2), n + t;
    }, a.prototype._zeroBits = function (e) {
        if (0 === e)
            return 26;
        var t = e, n = 0;
        return (8191 & t) == 0 && (n += 13, t >>>= 13), (127 & t) == 0 && (n += 7, t >>>= 7), (15 & t) == 0 && (n += 4, t >>>= 4), (3 & t) == 0 && (n += 2, t >>>= 2), (1 & t) == 0 && n++, n;
    }, a.prototype.bitLength = function () {
        var e = this.words[this.length - 1], t = this._countBits(e);
        return (this.length - 1) * 26 + t;
    };
    function h(e, t, n) {
        n.negative = t.negative ^ e.negative;
        var r = e.length + t.length | 0;
        n.length = r, r = r - 1 | 0;
        var i = 0 | e.words[0], a = 0 | t.words[0], o = i * a, s = 67108863 & o, l = o / 67108864 | 0;
        n.words[0] = s;
        for (var u = 1; u < r; u++) {
            for (var c = l >>> 26, d = 67108863 & l, _ = Math.min(u, t.length - 1), E = Math.max(0, u - e.length + 1); E <= _; E++) {
                var f = u - E | 0;
                i = 0 | e.words[f], c += (o = i * (a = 0 | t.words[E]) + d) / 67108864 | 0, d = 67108863 & o;
            }
            n.words[u] = 0 | d, l = 0 | c;
        }
        return 0 !== l ? n.words[u] = 0 | l : n.length--, n._strip();
    }
    a.prototype.zeroBits = function () {
        if (this.isZero())
            return 0;
        for (var e = 0, t = 0; t < this.length; t++) {
            var n = this._zeroBits(this.words[t]);
            if (e += n, 26 !== n)
                break;
        }
        return e;
    }, a.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
    }, a.prototype.toTwos = function (e) {
        return 0 !== this.negative ? this.abs().inotn(e).iaddn(1) : this.clone();
    }, a.prototype.fromTwos = function (e) {
        return this.testn(e - 1) ? this.notn(e).iaddn(1).ineg() : this.clone();
    }, a.prototype.isNeg = function () {
        return 0 !== this.negative;
    }, a.prototype.neg = function () {
        return this.clone().ineg();
    }, a.prototype.ineg = function () {
        return !this.isZero() && (this.negative ^= 1), this;
    }, a.prototype.iuor = function (e) {
        for (; this.length < e.length;)
            this.words[this.length++] = 0;
        for (var t = 0; t < e.length; t++)
            this.words[t] = this.words[t] | e.words[t];
        return this._strip();
    }, a.prototype.ior = function (e) {
        return r((this.negative | e.negative) == 0), this.iuor(e);
    }, a.prototype.or = function (e) {
        return this.length > e.length ? this.clone().ior(e) : e.clone().ior(this);
    }, a.prototype.uor = function (e) {
        return this.length > e.length ? this.clone().iuor(e) : e.clone().iuor(this);
    }, a.prototype.iuand = function (e) {
        var t;
        t = this.length > e.length ? e : this;
        for (var n = 0; n < t.length; n++)
            this.words[n] = this.words[n] & e.words[n];
        return this.length = t.length, this._strip();
    }, a.prototype.iand = function (e) {
        return r((this.negative | e.negative) == 0), this.iuand(e);
    }, a.prototype.and = function (e) {
        return this.length > e.length ? this.clone().iand(e) : e.clone().iand(this);
    }, a.prototype.uand = function (e) {
        return this.length > e.length ? this.clone().iuand(e) : e.clone().iuand(this);
    }, a.prototype.iuxor = function (e) {
        this.length > e.length ? (t = this, n = e) : (t = e, n = this);
        for (var t, n, r = 0; r < n.length; r++)
            this.words[r] = t.words[r] ^ n.words[r];
        if (this !== t)
            for (; r < t.length; r++)
                this.words[r] = t.words[r];
        return this.length = t.length, this._strip();
    }, a.prototype.ixor = function (e) {
        return r((this.negative | e.negative) == 0), this.iuxor(e);
    }, a.prototype.xor = function (e) {
        return this.length > e.length ? this.clone().ixor(e) : e.clone().ixor(this);
    }, a.prototype.uxor = function (e) {
        return this.length > e.length ? this.clone().iuxor(e) : e.clone().iuxor(this);
    }, a.prototype.inotn = function (e) {
        r('number' == typeof e && e >= 0);
        var t = 0 | Math.ceil(e / 26), n = e % 26;
        this._expand(t), n > 0 && t--;
        for (var i = 0; i < t; i++)
            this.words[i] = 67108863 & ~this.words[i];
        return n > 0 && (this.words[i] = ~this.words[i] & 67108863 >> 26 - n), this._strip();
    }, a.prototype.notn = function (e) {
        return this.clone().inotn(e);
    }, a.prototype.setn = function (e, t) {
        r('number' == typeof e && e >= 0);
        var n = e / 26 | 0, i = e % 26;
        return this._expand(n + 1), t ? this.words[n] = this.words[n] | 1 << i : this.words[n] = this.words[n] & ~(1 << i), this._strip();
    }, a.prototype.iadd = function (e) {
        if (0 !== this.negative && 0 === e.negative)
            return this.negative = 0, t = this.isub(e), this.negative ^= 1, this._normSign();
        if (0 === this.negative && 0 !== e.negative)
            return e.negative = 0, t = this.isub(e), e.negative = 1, t._normSign();
        this.length > e.length ? (n = this, r = e) : (n = e, r = this);
        for (var t, n, r, i = 0, a = 0; a < r.length; a++)
            t = (0 | n.words[a]) + (0 | r.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;
        for (; 0 !== i && a < n.length; a++)
            t = (0 | n.words[a]) + i, this.words[a] = 67108863 & t, i = t >>> 26;
        if (this.length = n.length, 0 !== i)
            this.words[this.length] = i, this.length++;
        else if (n !== this)
            for (; a < n.length; a++)
                this.words[a] = n.words[a];
        return this;
    }, a.prototype.add = function (e) {
        var t;
        return 0 !== e.negative && 0 === this.negative ? (e.negative = 0, t = this.sub(e), e.negative ^= 1, t) : 0 === e.negative && 0 !== this.negative ? (this.negative = 0, t = e.sub(this), this.negative = 1, t) : this.length > e.length ? this.clone().iadd(e) : e.clone().iadd(this);
    }, a.prototype.isub = function (e) {
        if (0 !== e.negative) {
            e.negative = 0;
            var t, n, r = this.iadd(e);
            return e.negative = 1, r._normSign();
        }
        if (0 !== this.negative)
            return this.negative = 0, this.iadd(e), this.negative = 1, this._normSign();
        var i = this.cmp(e);
        if (0 === i)
            return this.negative = 0, this.length = 1, this.words[0] = 0, this;
        i > 0 ? (t = this, n = e) : (t = e, n = this);
        for (var a = 0, o = 0; o < n.length; o++)
            a = (r = (0 | t.words[o]) - (0 | n.words[o]) + a) >> 26, this.words[o] = 67108863 & r;
        for (; 0 !== a && o < t.length; o++)
            a = (r = (0 | t.words[o]) + a) >> 26, this.words[o] = 67108863 & r;
        if (0 === a && o < t.length && t !== this)
            for (; o < t.length; o++)
                this.words[o] = t.words[o];
        return this.length = Math.max(this.length, o), t !== this && (this.negative = 1), this._strip();
    }, a.prototype.sub = function (e) {
        return this.clone().isub(e);
    };
    var p = function (e, t, n) {
        var r, i, a, o = e.words, s = t.words, l = n.words, u = 0, c = 0 | o[0], d = 8191 & c, _ = c >>> 13, E = 0 | o[1], f = 8191 & E, h = E >>> 13, p = 0 | o[2], m = 8191 & p, I = p >>> 13, T = 0 | o[3], g = 8191 & T, S = T >>> 13, A = 0 | o[4], N = 8191 & A, v = A >>> 13, O = 0 | o[5], R = 8191 & O, C = O >>> 13, y = 0 | o[6], D = 8191 & y, L = y >>> 13, b = 0 | o[7], M = 8191 & b, P = b >>> 13, U = 0 | o[8], w = 8191 & U, x = U >>> 13, G = 0 | o[9], k = 8191 & G, B = G >>> 13, F = 0 | s[0], V = 8191 & F, H = F >>> 13, Z = 0 | s[1], Y = 8191 & Z, j = Z >>> 13, W = 0 | s[2], K = 8191 & W, z = W >>> 13, q = 0 | s[3], Q = 8191 & q, X = q >>> 13, $ = 0 | s[4], J = 8191 & $, ee = $ >>> 13, et = 0 | s[5], en = 8191 & et, er = et >>> 13, ei = 0 | s[6], ea = 8191 & ei, eo = ei >>> 13, es = 0 | s[7], el = 8191 & es, eu = es >>> 13, ec = 0 | s[8], ed = 8191 & ec, e_ = ec >>> 13, eE = 0 | s[9], ef = 8191 & eE, eh = eE >>> 13;
        n.negative = e.negative ^ t.negative, n.length = 19, r = Math.imul(d, V), i = (i = Math.imul(d, H)) + Math.imul(_, V) | 0;
        var ep = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = Math.imul(_, H)) + (i >>> 13) | 0) + (ep >>> 26) | 0, ep &= 67108863, r = Math.imul(f, V), i = (i = Math.imul(f, H)) + Math.imul(h, V) | 0, a = Math.imul(h, H), r = r + Math.imul(d, Y) | 0, i = (i = i + Math.imul(d, j) | 0) + Math.imul(_, Y) | 0;
        var em = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, j) | 0) + (i >>> 13) | 0) + (em >>> 26) | 0, em &= 67108863, r = Math.imul(m, V), i = (i = Math.imul(m, H)) + Math.imul(I, V) | 0, a = Math.imul(I, H), r = r + Math.imul(f, Y) | 0, i = (i = i + Math.imul(f, j) | 0) + Math.imul(h, Y) | 0, a = a + Math.imul(h, j) | 0, r = r + Math.imul(d, K) | 0, i = (i = i + Math.imul(d, z) | 0) + Math.imul(_, K) | 0;
        var eI = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, z) | 0) + (i >>> 13) | 0) + (eI >>> 26) | 0, eI &= 67108863, r = Math.imul(g, V), i = (i = Math.imul(g, H)) + Math.imul(S, V) | 0, a = Math.imul(S, H), r = r + Math.imul(m, Y) | 0, i = (i = i + Math.imul(m, j) | 0) + Math.imul(I, Y) | 0, a = a + Math.imul(I, j) | 0, r = r + Math.imul(f, K) | 0, i = (i = i + Math.imul(f, z) | 0) + Math.imul(h, K) | 0, a = a + Math.imul(h, z) | 0, r = r + Math.imul(d, Q) | 0, i = (i = i + Math.imul(d, X) | 0) + Math.imul(_, Q) | 0;
        var eT = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, X) | 0) + (i >>> 13) | 0) + (eT >>> 26) | 0, eT &= 67108863, r = Math.imul(N, V), i = (i = Math.imul(N, H)) + Math.imul(v, V) | 0, a = Math.imul(v, H), r = r + Math.imul(g, Y) | 0, i = (i = i + Math.imul(g, j) | 0) + Math.imul(S, Y) | 0, a = a + Math.imul(S, j) | 0, r = r + Math.imul(m, K) | 0, i = (i = i + Math.imul(m, z) | 0) + Math.imul(I, K) | 0, a = a + Math.imul(I, z) | 0, r = r + Math.imul(f, Q) | 0, i = (i = i + Math.imul(f, X) | 0) + Math.imul(h, Q) | 0, a = a + Math.imul(h, X) | 0, r = r + Math.imul(d, J) | 0, i = (i = i + Math.imul(d, ee) | 0) + Math.imul(_, J) | 0;
        var eg = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, ee) | 0) + (i >>> 13) | 0) + (eg >>> 26) | 0, eg &= 67108863, r = Math.imul(R, V), i = (i = Math.imul(R, H)) + Math.imul(C, V) | 0, a = Math.imul(C, H), r = r + Math.imul(N, Y) | 0, i = (i = i + Math.imul(N, j) | 0) + Math.imul(v, Y) | 0, a = a + Math.imul(v, j) | 0, r = r + Math.imul(g, K) | 0, i = (i = i + Math.imul(g, z) | 0) + Math.imul(S, K) | 0, a = a + Math.imul(S, z) | 0, r = r + Math.imul(m, Q) | 0, i = (i = i + Math.imul(m, X) | 0) + Math.imul(I, Q) | 0, a = a + Math.imul(I, X) | 0, r = r + Math.imul(f, J) | 0, i = (i = i + Math.imul(f, ee) | 0) + Math.imul(h, J) | 0, a = a + Math.imul(h, ee) | 0, r = r + Math.imul(d, en) | 0, i = (i = i + Math.imul(d, er) | 0) + Math.imul(_, en) | 0;
        var eS = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, er) | 0) + (i >>> 13) | 0) + (eS >>> 26) | 0, eS &= 67108863, r = Math.imul(D, V), i = (i = Math.imul(D, H)) + Math.imul(L, V) | 0, a = Math.imul(L, H), r = r + Math.imul(R, Y) | 0, i = (i = i + Math.imul(R, j) | 0) + Math.imul(C, Y) | 0, a = a + Math.imul(C, j) | 0, r = r + Math.imul(N, K) | 0, i = (i = i + Math.imul(N, z) | 0) + Math.imul(v, K) | 0, a = a + Math.imul(v, z) | 0, r = r + Math.imul(g, Q) | 0, i = (i = i + Math.imul(g, X) | 0) + Math.imul(S, Q) | 0, a = a + Math.imul(S, X) | 0, r = r + Math.imul(m, J) | 0, i = (i = i + Math.imul(m, ee) | 0) + Math.imul(I, J) | 0, a = a + Math.imul(I, ee) | 0, r = r + Math.imul(f, en) | 0, i = (i = i + Math.imul(f, er) | 0) + Math.imul(h, en) | 0, a = a + Math.imul(h, er) | 0, r = r + Math.imul(d, ea) | 0, i = (i = i + Math.imul(d, eo) | 0) + Math.imul(_, ea) | 0;
        var eA = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, eo) | 0) + (i >>> 13) | 0) + (eA >>> 26) | 0, eA &= 67108863, r = Math.imul(M, V), i = (i = Math.imul(M, H)) + Math.imul(P, V) | 0, a = Math.imul(P, H), r = r + Math.imul(D, Y) | 0, i = (i = i + Math.imul(D, j) | 0) + Math.imul(L, Y) | 0, a = a + Math.imul(L, j) | 0, r = r + Math.imul(R, K) | 0, i = (i = i + Math.imul(R, z) | 0) + Math.imul(C, K) | 0, a = a + Math.imul(C, z) | 0, r = r + Math.imul(N, Q) | 0, i = (i = i + Math.imul(N, X) | 0) + Math.imul(v, Q) | 0, a = a + Math.imul(v, X) | 0, r = r + Math.imul(g, J) | 0, i = (i = i + Math.imul(g, ee) | 0) + Math.imul(S, J) | 0, a = a + Math.imul(S, ee) | 0, r = r + Math.imul(m, en) | 0, i = (i = i + Math.imul(m, er) | 0) + Math.imul(I, en) | 0, a = a + Math.imul(I, er) | 0, r = r + Math.imul(f, ea) | 0, i = (i = i + Math.imul(f, eo) | 0) + Math.imul(h, ea) | 0, a = a + Math.imul(h, eo) | 0, r = r + Math.imul(d, el) | 0, i = (i = i + Math.imul(d, eu) | 0) + Math.imul(_, el) | 0;
        var eN = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, eu) | 0) + (i >>> 13) | 0) + (eN >>> 26) | 0, eN &= 67108863, r = Math.imul(w, V), i = (i = Math.imul(w, H)) + Math.imul(x, V) | 0, a = Math.imul(x, H), r = r + Math.imul(M, Y) | 0, i = (i = i + Math.imul(M, j) | 0) + Math.imul(P, Y) | 0, a = a + Math.imul(P, j) | 0, r = r + Math.imul(D, K) | 0, i = (i = i + Math.imul(D, z) | 0) + Math.imul(L, K) | 0, a = a + Math.imul(L, z) | 0, r = r + Math.imul(R, Q) | 0, i = (i = i + Math.imul(R, X) | 0) + Math.imul(C, Q) | 0, a = a + Math.imul(C, X) | 0, r = r + Math.imul(N, J) | 0, i = (i = i + Math.imul(N, ee) | 0) + Math.imul(v, J) | 0, a = a + Math.imul(v, ee) | 0, r = r + Math.imul(g, en) | 0, i = (i = i + Math.imul(g, er) | 0) + Math.imul(S, en) | 0, a = a + Math.imul(S, er) | 0, r = r + Math.imul(m, ea) | 0, i = (i = i + Math.imul(m, eo) | 0) + Math.imul(I, ea) | 0, a = a + Math.imul(I, eo) | 0, r = r + Math.imul(f, el) | 0, i = (i = i + Math.imul(f, eu) | 0) + Math.imul(h, el) | 0, a = a + Math.imul(h, eu) | 0, r = r + Math.imul(d, ed) | 0, i = (i = i + Math.imul(d, e_) | 0) + Math.imul(_, ed) | 0;
        var ev = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, e_) | 0) + (i >>> 13) | 0) + (ev >>> 26) | 0, ev &= 67108863, r = Math.imul(k, V), i = (i = Math.imul(k, H)) + Math.imul(B, V) | 0, a = Math.imul(B, H), r = r + Math.imul(w, Y) | 0, i = (i = i + Math.imul(w, j) | 0) + Math.imul(x, Y) | 0, a = a + Math.imul(x, j) | 0, r = r + Math.imul(M, K) | 0, i = (i = i + Math.imul(M, z) | 0) + Math.imul(P, K) | 0, a = a + Math.imul(P, z) | 0, r = r + Math.imul(D, Q) | 0, i = (i = i + Math.imul(D, X) | 0) + Math.imul(L, Q) | 0, a = a + Math.imul(L, X) | 0, r = r + Math.imul(R, J) | 0, i = (i = i + Math.imul(R, ee) | 0) + Math.imul(C, J) | 0, a = a + Math.imul(C, ee) | 0, r = r + Math.imul(N, en) | 0, i = (i = i + Math.imul(N, er) | 0) + Math.imul(v, en) | 0, a = a + Math.imul(v, er) | 0, r = r + Math.imul(g, ea) | 0, i = (i = i + Math.imul(g, eo) | 0) + Math.imul(S, ea) | 0, a = a + Math.imul(S, eo) | 0, r = r + Math.imul(m, el) | 0, i = (i = i + Math.imul(m, eu) | 0) + Math.imul(I, el) | 0, a = a + Math.imul(I, eu) | 0, r = r + Math.imul(f, ed) | 0, i = (i = i + Math.imul(f, e_) | 0) + Math.imul(h, ed) | 0, a = a + Math.imul(h, e_) | 0, r = r + Math.imul(d, ef) | 0, i = (i = i + Math.imul(d, eh) | 0) + Math.imul(_, ef) | 0;
        var eO = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(_, eh) | 0) + (i >>> 13) | 0) + (eO >>> 26) | 0, eO &= 67108863, r = Math.imul(k, Y), i = (i = Math.imul(k, j)) + Math.imul(B, Y) | 0, a = Math.imul(B, j), r = r + Math.imul(w, K) | 0, i = (i = i + Math.imul(w, z) | 0) + Math.imul(x, K) | 0, a = a + Math.imul(x, z) | 0, r = r + Math.imul(M, Q) | 0, i = (i = i + Math.imul(M, X) | 0) + Math.imul(P, Q) | 0, a = a + Math.imul(P, X) | 0, r = r + Math.imul(D, J) | 0, i = (i = i + Math.imul(D, ee) | 0) + Math.imul(L, J) | 0, a = a + Math.imul(L, ee) | 0, r = r + Math.imul(R, en) | 0, i = (i = i + Math.imul(R, er) | 0) + Math.imul(C, en) | 0, a = a + Math.imul(C, er) | 0, r = r + Math.imul(N, ea) | 0, i = (i = i + Math.imul(N, eo) | 0) + Math.imul(v, ea) | 0, a = a + Math.imul(v, eo) | 0, r = r + Math.imul(g, el) | 0, i = (i = i + Math.imul(g, eu) | 0) + Math.imul(S, el) | 0, a = a + Math.imul(S, eu) | 0, r = r + Math.imul(m, ed) | 0, i = (i = i + Math.imul(m, e_) | 0) + Math.imul(I, ed) | 0, a = a + Math.imul(I, e_) | 0, r = r + Math.imul(f, ef) | 0, i = (i = i + Math.imul(f, eh) | 0) + Math.imul(h, ef) | 0;
        var eR = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(h, eh) | 0) + (i >>> 13) | 0) + (eR >>> 26) | 0, eR &= 67108863, r = Math.imul(k, K), i = (i = Math.imul(k, z)) + Math.imul(B, K) | 0, a = Math.imul(B, z), r = r + Math.imul(w, Q) | 0, i = (i = i + Math.imul(w, X) | 0) + Math.imul(x, Q) | 0, a = a + Math.imul(x, X) | 0, r = r + Math.imul(M, J) | 0, i = (i = i + Math.imul(M, ee) | 0) + Math.imul(P, J) | 0, a = a + Math.imul(P, ee) | 0, r = r + Math.imul(D, en) | 0, i = (i = i + Math.imul(D, er) | 0) + Math.imul(L, en) | 0, a = a + Math.imul(L, er) | 0, r = r + Math.imul(R, ea) | 0, i = (i = i + Math.imul(R, eo) | 0) + Math.imul(C, ea) | 0, a = a + Math.imul(C, eo) | 0, r = r + Math.imul(N, el) | 0, i = (i = i + Math.imul(N, eu) | 0) + Math.imul(v, el) | 0, a = a + Math.imul(v, eu) | 0, r = r + Math.imul(g, ed) | 0, i = (i = i + Math.imul(g, e_) | 0) + Math.imul(S, ed) | 0, a = a + Math.imul(S, e_) | 0, r = r + Math.imul(m, ef) | 0, i = (i = i + Math.imul(m, eh) | 0) + Math.imul(I, ef) | 0;
        var eC = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(I, eh) | 0) + (i >>> 13) | 0) + (eC >>> 26) | 0, eC &= 67108863, r = Math.imul(k, Q), i = (i = Math.imul(k, X)) + Math.imul(B, Q) | 0, a = Math.imul(B, X), r = r + Math.imul(w, J) | 0, i = (i = i + Math.imul(w, ee) | 0) + Math.imul(x, J) | 0, a = a + Math.imul(x, ee) | 0, r = r + Math.imul(M, en) | 0, i = (i = i + Math.imul(M, er) | 0) + Math.imul(P, en) | 0, a = a + Math.imul(P, er) | 0, r = r + Math.imul(D, ea) | 0, i = (i = i + Math.imul(D, eo) | 0) + Math.imul(L, ea) | 0, a = a + Math.imul(L, eo) | 0, r = r + Math.imul(R, el) | 0, i = (i = i + Math.imul(R, eu) | 0) + Math.imul(C, el) | 0, a = a + Math.imul(C, eu) | 0, r = r + Math.imul(N, ed) | 0, i = (i = i + Math.imul(N, e_) | 0) + Math.imul(v, ed) | 0, a = a + Math.imul(v, e_) | 0, r = r + Math.imul(g, ef) | 0, i = (i = i + Math.imul(g, eh) | 0) + Math.imul(S, ef) | 0;
        var ey = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(S, eh) | 0) + (i >>> 13) | 0) + (ey >>> 26) | 0, ey &= 67108863, r = Math.imul(k, J), i = (i = Math.imul(k, ee)) + Math.imul(B, J) | 0, a = Math.imul(B, ee), r = r + Math.imul(w, en) | 0, i = (i = i + Math.imul(w, er) | 0) + Math.imul(x, en) | 0, a = a + Math.imul(x, er) | 0, r = r + Math.imul(M, ea) | 0, i = (i = i + Math.imul(M, eo) | 0) + Math.imul(P, ea) | 0, a = a + Math.imul(P, eo) | 0, r = r + Math.imul(D, el) | 0, i = (i = i + Math.imul(D, eu) | 0) + Math.imul(L, el) | 0, a = a + Math.imul(L, eu) | 0, r = r + Math.imul(R, ed) | 0, i = (i = i + Math.imul(R, e_) | 0) + Math.imul(C, ed) | 0, a = a + Math.imul(C, e_) | 0, r = r + Math.imul(N, ef) | 0, i = (i = i + Math.imul(N, eh) | 0) + Math.imul(v, ef) | 0;
        var eD = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(v, eh) | 0) + (i >>> 13) | 0) + (eD >>> 26) | 0, eD &= 67108863, r = Math.imul(k, en), i = (i = Math.imul(k, er)) + Math.imul(B, en) | 0, a = Math.imul(B, er), r = r + Math.imul(w, ea) | 0, i = (i = i + Math.imul(w, eo) | 0) + Math.imul(x, ea) | 0, a = a + Math.imul(x, eo) | 0, r = r + Math.imul(M, el) | 0, i = (i = i + Math.imul(M, eu) | 0) + Math.imul(P, el) | 0, a = a + Math.imul(P, eu) | 0, r = r + Math.imul(D, ed) | 0, i = (i = i + Math.imul(D, e_) | 0) + Math.imul(L, ed) | 0, a = a + Math.imul(L, e_) | 0, r = r + Math.imul(R, ef) | 0, i = (i = i + Math.imul(R, eh) | 0) + Math.imul(C, ef) | 0;
        var eL = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(C, eh) | 0) + (i >>> 13) | 0) + (eL >>> 26) | 0, eL &= 67108863, r = Math.imul(k, ea), i = (i = Math.imul(k, eo)) + Math.imul(B, ea) | 0, a = Math.imul(B, eo), r = r + Math.imul(w, el) | 0, i = (i = i + Math.imul(w, eu) | 0) + Math.imul(x, el) | 0, a = a + Math.imul(x, eu) | 0, r = r + Math.imul(M, ed) | 0, i = (i = i + Math.imul(M, e_) | 0) + Math.imul(P, ed) | 0, a = a + Math.imul(P, e_) | 0, r = r + Math.imul(D, ef) | 0, i = (i = i + Math.imul(D, eh) | 0) + Math.imul(L, ef) | 0;
        var eb = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(L, eh) | 0) + (i >>> 13) | 0) + (eb >>> 26) | 0, eb &= 67108863, r = Math.imul(k, el), i = (i = Math.imul(k, eu)) + Math.imul(B, el) | 0, a = Math.imul(B, eu), r = r + Math.imul(w, ed) | 0, i = (i = i + Math.imul(w, e_) | 0) + Math.imul(x, ed) | 0, a = a + Math.imul(x, e_) | 0, r = r + Math.imul(M, ef) | 0, i = (i = i + Math.imul(M, eh) | 0) + Math.imul(P, ef) | 0;
        var eM = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(P, eh) | 0) + (i >>> 13) | 0) + (eM >>> 26) | 0, eM &= 67108863, r = Math.imul(k, ed), i = (i = Math.imul(k, e_)) + Math.imul(B, ed) | 0, a = Math.imul(B, e_), r = r + Math.imul(w, ef) | 0, i = (i = i + Math.imul(w, eh) | 0) + Math.imul(x, ef) | 0;
        var eP = (u + r | 0) + ((8191 & i) << 13) | 0;
        u = ((a = a + Math.imul(x, eh) | 0) + (i >>> 13) | 0) + (eP >>> 26) | 0, eP &= 67108863, r = Math.imul(k, ef), i = (i = Math.imul(k, eh)) + Math.imul(B, ef) | 0;
        var eU = (u + r | 0) + ((8191 & i) << 13) | 0;
        return u = ((a = Math.imul(B, eh)) + (i >>> 13) | 0) + (eU >>> 26) | 0, eU &= 67108863, l[0] = ep, l[1] = em, l[2] = eI, l[3] = eT, l[4] = eg, l[5] = eS, l[6] = eA, l[7] = eN, l[8] = ev, l[9] = eO, l[10] = eR, l[11] = eC, l[12] = ey, l[13] = eD, l[14] = eL, l[15] = eb, l[16] = eM, l[17] = eP, l[18] = eU, 0 !== u && (l[19] = u, n.length++), n;
    };
    function m(e, t, n) {
        n.negative = t.negative ^ e.negative, n.length = e.length + t.length;
        for (var r = 0, i = 0, a = 0; a < n.length - 1; a++) {
            var o = i;
            i = 0;
            for (var s = 67108863 & r, l = Math.min(a, t.length - 1), u = Math.max(0, a - e.length + 1); u <= l; u++) {
                var c = a - u, d = (0 | e.words[c]) * (0 | t.words[u]), _ = 67108863 & d;
                o = o + (d / 67108864 | 0) | 0, s = 67108863 & (_ = _ + s | 0), i += (o = o + (_ >>> 26) | 0) >>> 26, o &= 67108863;
            }
            n.words[a] = s, r = o, o = i;
        }
        return 0 !== r ? n.words[a] = r : n.length--, n._strip();
    }
    function I(e, t, n) {
        return m(e, t, n);
    }
    function T(e, t) {
        this.x = e, this.y = t;
    }
    !Math.imul && (p = h), a.prototype.mulTo = function (e, t) {
        var n, r, i = this.length + e.length;
        if (10 === this.length && 10 === e.length)
            r = p(this, e, t);
        else if (i < 63)
            r = h(this, e, t);
        else if (i < 1024)
            r = m(this, e, t);
        else {
            ;
            n = this, r = m(n, e, t);
        }
        return r;
    }, T.prototype.makeRBT = function (e) {
        for (var t = Array(e), n = a.prototype._countBits(e) - 1, r = 0; r < e; r++)
            t[r] = this.revBin(r, n, e);
        return t;
    }, T.prototype.revBin = function (e, t, n) {
        if (0 === e || e === n - 1)
            return e;
        for (var r = 0, i = 0; i < t; i++)
            r |= (1 & e) << t - i - 1, e >>= 1;
        return r;
    }, T.prototype.permute = function (e, t, n, r, i, a) {
        for (var o = 0; o < a; o++)
            r[o] = t[e[o]], i[o] = n[e[o]];
    }, T.prototype.transform = function (e, t, n, r, i, a) {
        this.permute(a, e, t, n, r, i);
        for (var o = 1; o < i; o <<= 1) {
            for (var s = o << 1, l = Math.cos(2 * Math.PI / s), u = Math.sin(2 * Math.PI / s), c = 0; c < i; c += s) {
                for (var d = l, _ = u, E = 0; E < o; E++) {
                    var f = n[c + E], h = r[c + E], p = n[c + E + o], m = r[c + E + o], I = d * p - _ * m;
                    m = d * m + _ * p, p = I, n[c + E] = f + p, r[c + E] = h + m, n[c + E + o] = f - p, r[c + E + o] = h - m, E !== s && (I = l * d - u * _, _ = l * _ + u * d, d = I);
                }
            }
        }
    }, T.prototype.guessLen13b = function (e, t) {
        var n = 1 | Math.max(t, e), r = 1 & n, i = 0;
        for (n = n / 2 | 0; n; n >>>= 1)
            i++;
        return 1 << i + 1 + r;
    }, T.prototype.conjugate = function (e, t, n) {
        if (!(n <= 1))
            for (var r = 0; r < n / 2; r++) {
                var i = e[r];
                e[r] = e[n - r - 1], e[n - r - 1] = i, i = t[r], t[r] = -t[n - r - 1], t[n - r - 1] = -i;
            }
    }, T.prototype.normalize13b = function (e, t) {
        for (var n = 0, r = 0; r < t / 2; r++) {
            var i = 8192 * Math.round(e[2 * r + 1] / t) + Math.round(e[2 * r] / t) + n;
            e[r] = 67108863 & i, n = i < 67108864 ? 0 : i / 67108864 | 0;
        }
        return e;
    }, T.prototype.convert13b = function (e, t, n, i) {
        for (var a = 0, o = 0; o < t; o++)
            a += 0 | e[o], n[2 * o] = 8191 & a, a >>>= 13, n[2 * o + 1] = 8191 & a, a >>>= 13;
        for (o = 2 * t; o < i; ++o)
            n[o] = 0;
        r(0 === a), r((-8192 & a) == 0);
    }, T.prototype.stub = function (e) {
        for (var t = Array(e), n = 0; n < e; n++)
            t[n] = 0;
        return t;
    }, T.prototype.mulp = function (e, t, n) {
        var r = 2 * this.guessLen13b(e.length, t.length), i = this.makeRBT(r), a = this.stub(r), o = Array(r), s = Array(r), l = Array(r), u = Array(r), c = Array(r), d = Array(r), _ = n.words;
        _.length = r, this.convert13b(e.words, e.length, o, r), this.convert13b(t.words, t.length, u, r), this.transform(o, a, s, l, r, i), this.transform(u, a, c, d, r, i);
        for (var E = 0; E < r; E++) {
            var f = s[E] * c[E] - l[E] * d[E];
            l[E] = s[E] * d[E] + l[E] * c[E], s[E] = f;
        }
        return this.conjugate(s, l, r), this.transform(s, l, _, a, r, i), this.conjugate(_, a, r), this.normalize13b(_, r), n.negative = e.negative ^ t.negative, n.length = e.length + t.length, n._strip();
    }, a.prototype.mul = function (e) {
        var t = new a(null);
        return t.words = Array(this.length + e.length), this.mulTo(e, t);
    }, a.prototype.mulf = function (e) {
        var t, n = new a(null);
        return n.words = Array(this.length + e.length), t = this, m(t, e, n);
    }, a.prototype.imul = function (e) {
        return this.clone().mulTo(e, this);
    }, a.prototype.imuln = function (e) {
        var t = e < 0;
        t && (e = -e), r('number' == typeof e), r(e < 67108864);
        for (var n = 0, i = 0; i < this.length; i++) {
            var a = (0 | this.words[i]) * e, o = (67108863 & a) + (67108863 & n);
            n >>= 26, n += (a / 67108864 | 0) + (o >>> 26), this.words[i] = 67108863 & o;
        }
        return 0 !== n && (this.words[i] = n, this.length++), t ? this.ineg() : this;
    }, a.prototype.muln = function (e) {
        return this.clone().imuln(e);
    }, a.prototype.sqr = function () {
        return this.mul(this);
    }, a.prototype.isqr = function () {
        return this.imul(this.clone());
    }, a.prototype.pow = function (e) {
        var t = function (e) {
            for (var t = Array(e.bitLength()), n = 0; n < t.length; n++) {
                var r = n / 26 | 0, i = n % 26;
                t[n] = e.words[r] >>> i & 1;
            }
            return t;
        }(e);
        if (0 === t.length)
            return new a(1);
        for (var n = this, r = 0; r < t.length && 0 === t[r]; r++, n = n.sqr());
        if (++r < t.length)
            for (var i = n.sqr(); r < t.length; r++, i = i.sqr())
                0 !== t[r] && (n = n.mul(i));
        return n;
    }, a.prototype.iushln = function (e) {
        r('number' == typeof e && e >= 0);
        var t, n = e % 26, i = (e - n) / 26, a = 67108863 >>> 26 - n << 26 - n;
        if (0 !== n) {
            var o = 0;
            for (t = 0; t < this.length; t++) {
                var s = this.words[t] & a, l = (0 | this.words[t]) - s << n;
                this.words[t] = l | o, o = s >>> 26 - n;
            }
            o && (this.words[t] = o, this.length++);
        }
        if (0 !== i) {
            for (t = this.length - 1; t >= 0; t--)
                this.words[t + i] = this.words[t];
            for (t = 0; t < i; t++)
                this.words[t] = 0;
            this.length += i;
        }
        return this._strip();
    }, a.prototype.ishln = function (e) {
        return r(0 === this.negative), this.iushln(e);
    }, a.prototype.iushrn = function (e, t, n) {
        r('number' == typeof e && e >= 0), i = t ? (t - t % 26) / 26 : 0;
        var i, a = e % 26, o = Math.min((e - a) / 26, this.length), s = 67108863 ^ 67108863 >>> a << a;
        if (i -= o, i = Math.max(0, i), n) {
            for (var l = 0; l < o; l++)
                n.words[l] = this.words[l];
            n.length = o;
        }
        if (0 === o);
        else if (this.length > o)
            for (this.length -= o, l = 0; l < this.length; l++)
                this.words[l] = this.words[l + o];
        else
            this.words[0] = 0, this.length = 1;
        var u = 0;
        for (l = this.length - 1; l >= 0 && (0 !== u || l >= i); l--) {
            var c = 0 | this.words[l];
            this.words[l] = u << 26 - a | c >>> a, u = c & s;
        }
        return n && 0 !== u && (n.words[n.length++] = u), 0 === this.length && (this.words[0] = 0, this.length = 1), this._strip();
    }, a.prototype.ishrn = function (e, t, n) {
        return r(0 === this.negative), this.iushrn(e, t, n);
    }, a.prototype.shln = function (e) {
        return this.clone().ishln(e);
    }, a.prototype.ushln = function (e) {
        return this.clone().iushln(e);
    }, a.prototype.shrn = function (e) {
        return this.clone().ishrn(e);
    }, a.prototype.ushrn = function (e) {
        return this.clone().iushrn(e);
    }, a.prototype.testn = function (e) {
        r('number' == typeof e && e >= 0);
        var t = e % 26, n = (e - t) / 26;
        return !(this.length <= n) && !!(this.words[n] & 1 << t);
    }, a.prototype.imaskn = function (e) {
        r('number' == typeof e && e >= 0);
        var t = e % 26, n = (e - t) / 26;
        return (r(0 === this.negative, 'imaskn works only with positive numbers'), this.length <= n) ? this : (0 !== t && n++, this.length = Math.min(n, this.length), 0 !== t && (this.words[this.length - 1] &= 67108863 ^ 67108863 >>> t << t), this._strip());
    }, a.prototype.maskn = function (e) {
        return this.clone().imaskn(e);
    }, a.prototype.iaddn = function (e) {
        if (r('number' == typeof e), r(e < 67108864), e < 0)
            return this.isubn(-e);
        if (0 !== this.negative)
            return 1 === this.length && (0 | this.words[0]) <= e ? (this.words[0] = e - (0 | this.words[0]), this.negative = 0, this) : (this.negative = 0, this.isubn(e), this.negative = 1, this);
        return this._iaddn(e);
    }, a.prototype._iaddn = function (e) {
        this.words[0] += e;
        for (var t = 0; t < this.length && this.words[t] >= 67108864; t++)
            this.words[t] -= 67108864, t === this.length - 1 ? this.words[t + 1] = 1 : this.words[t + 1]++;
        return this.length = Math.max(this.length, t + 1), this;
    }, a.prototype.isubn = function (e) {
        if (r('number' == typeof e), r(e < 67108864), e < 0)
            return this.iaddn(-e);
        if (0 !== this.negative)
            return this.negative = 0, this.iaddn(e), this.negative = 1, this;
        if (this.words[0] -= e, 1 === this.length && this.words[0] < 0)
            this.words[0] = -this.words[0], this.negative = 1;
        else
            for (var t = 0; t < this.length && this.words[t] < 0; t++)
                this.words[t] += 67108864, this.words[t + 1] -= 1;
        return this._strip();
    }, a.prototype.addn = function (e) {
        return this.clone().iaddn(e);
    }, a.prototype.subn = function (e) {
        return this.clone().isubn(e);
    }, a.prototype.iabs = function () {
        return this.negative = 0, this;
    }, a.prototype.abs = function () {
        return this.clone().iabs();
    }, a.prototype._ishlnsubmul = function (e, t, n) {
        var i, a, o = e.length + n;
        this._expand(o);
        var s = 0;
        for (i = 0; i < e.length; i++) {
            a = (0 | this.words[i + n]) + s;
            var l = (0 | e.words[i]) * t;
            a -= 67108863 & l, s = (a >> 26) - (l / 67108864 | 0), this.words[i + n] = 67108863 & a;
        }
        for (; i < this.length - n; i++)
            s = (a = (0 | this.words[i + n]) + s) >> 26, this.words[i + n] = 67108863 & a;
        if (0 === s)
            return this._strip();
        for (r(-1 === s), s = 0, i = 0; i < this.length; i++)
            s = (a = -(0 | this.words[i]) + s) >> 26, this.words[i] = 67108863 & a;
        return this.negative = 1, this._strip();
    }, a.prototype._wordDiv = function (e, t) {
        var n, r = this.length - e.length, i = this.clone(), o = e, s = 0 | o.words[o.length - 1];
        0 != (r = 26 - this._countBits(s)) && (o = o.ushln(r), i.iushln(r), s = 0 | o.words[o.length - 1]);
        var l = i.length - o.length;
        if ('mod' !== t) {
            (n = new a(null)).length = l + 1, n.words = Array(n.length);
            for (var u = 0; u < n.length; u++)
                n.words[u] = 0;
        }
        var c = i.clone()._ishlnsubmul(o, 1, l);
        0 === c.negative && (i = c, n && (n.words[l] = 1));
        for (var d = l - 1; d >= 0; d--) {
            var _ = (0 | i.words[o.length + d]) * 67108864 + (0 | i.words[o.length + d - 1]);
            for (_ = Math.min(_ / s | 0, 67108863), i._ishlnsubmul(o, _, d); 0 !== i.negative;)
                _--, i.negative = 0, i._ishlnsubmul(o, 1, d), !i.isZero() && (i.negative ^= 1);
            n && (n.words[d] = _);
        }
        return n && n._strip(), i._strip(), 'div' !== t && 0 !== r && i.iushrn(r), {
            div: n || null,
            mod: i
        };
    }, a.prototype.divmod = function (e, t, n) {
        var i, o, s;
        if (r(!e.isZero()), this.isZero())
            return {
                div: new a(0),
                mod: new a(0)
            };
        if (0 !== this.negative && 0 === e.negative)
            return s = this.neg().divmod(e, t), 'mod' !== t && (i = s.div.neg()), 'div' !== t && (o = s.mod.neg(), n && 0 !== o.negative && o.iadd(e)), {
                div: i,
                mod: o
            };
        if (0 === this.negative && 0 !== e.negative)
            return s = this.divmod(e.neg(), t), 'mod' !== t && (i = s.div.neg()), {
                div: i,
                mod: s.mod
            };
        if ((this.negative & e.negative) != 0)
            return s = this.neg().divmod(e.neg(), t), 'div' !== t && (o = s.mod.neg(), n && 0 !== o.negative && o.isub(e)), {
                div: s.div,
                mod: o
            };
        if (e.length > this.length || 0 > this.cmp(e))
            return {
                div: new a(0),
                mod: this
            };
        if (1 === e.length)
            return 'div' === t ? {
                div: this.divn(e.words[0]),
                mod: null
            } : 'mod' === t ? {
                div: null,
                mod: new a(this.modrn(e.words[0]))
            } : {
                div: this.divn(e.words[0]),
                mod: new a(this.modrn(e.words[0]))
            };
        return this._wordDiv(e, t);
    }, a.prototype.div = function (e) {
        return this.divmod(e, 'div', !1).div;
    }, a.prototype.mod = function (e) {
        return this.divmod(e, 'mod', !1).mod;
    }, a.prototype.umod = function (e) {
        return this.divmod(e, 'mod', !0).mod;
    }, a.prototype.divRound = function (e) {
        var t = this.divmod(e);
        if (t.mod.isZero())
            return t.div;
        var n = 0 !== t.div.negative ? t.mod.isub(e) : t.mod, r = e.ushrn(1), i = e.andln(1), a = n.cmp(r);
        return a < 0 || 1 === i && 0 === a ? t.div : 0 !== t.div.negative ? t.div.isubn(1) : t.div.iaddn(1);
    }, a.prototype.modrn = function (e) {
        var t = e < 0;
        t && (e = -e), r(e <= 67108863);
        for (var n = 67108864 % e, i = 0, a = this.length - 1; a >= 0; a--)
            i = (n * i + (0 | this.words[a])) % e;
        return t ? -i : i;
    }, a.prototype.modn = function (e) {
        return this.modrn(e);
    }, a.prototype.idivn = function (e) {
        var t = e < 0;
        t && (e = -e), r(e <= 67108863);
        for (var n = 0, i = this.length - 1; i >= 0; i--) {
            var a = (0 | this.words[i]) + 67108864 * n;
            this.words[i] = a / e | 0, n = a % e;
        }
        return this._strip(), t ? this.ineg() : this;
    }, a.prototype.divn = function (e) {
        return this.clone().idivn(e);
    }, a.prototype.egcd = function (e) {
        r(0 === e.negative), r(!e.isZero());
        var t = this, n = e.clone();
        t = 0 !== t.negative ? t.umod(e) : t.clone();
        for (var i = new a(1), o = new a(0), s = new a(0), l = new a(1), u = 0; t.isEven() && n.isEven();)
            t.iushrn(1), n.iushrn(1), ++u;
        for (var c = n.clone(), d = t.clone(); !t.isZero();) {
            for (var _ = 0, E = 1; (t.words[0] & E) == 0 && _ < 26; ++_, E <<= 1);
            if (_ > 0)
                for (t.iushrn(_); _-- > 0;)
                    (i.isOdd() || o.isOdd()) && (i.iadd(c), o.isub(d)), i.iushrn(1), o.iushrn(1);
            for (var f = 0, h = 1; (n.words[0] & h) == 0 && f < 26; ++f, h <<= 1);
            if (f > 0)
                for (n.iushrn(f); f-- > 0;)
                    (s.isOdd() || l.isOdd()) && (s.iadd(c), l.isub(d)), s.iushrn(1), l.iushrn(1);
            t.cmp(n) >= 0 ? (t.isub(n), i.isub(s), o.isub(l)) : (n.isub(t), s.isub(i), l.isub(o));
        }
        return {
            a: s,
            b: l,
            gcd: n.iushln(u)
        };
    }, a.prototype._invmp = function (e) {
        r(0 === e.negative), r(!e.isZero());
        var t, n = this, i = e.clone();
        n = 0 !== n.negative ? n.umod(e) : n.clone();
        for (var o = new a(1), s = new a(0), l = i.clone(); n.cmpn(1) > 0 && i.cmpn(1) > 0;) {
            for (var u = 0, c = 1; (n.words[0] & c) == 0 && u < 26; ++u, c <<= 1);
            if (u > 0)
                for (n.iushrn(u); u-- > 0;)
                    o.isOdd() && o.iadd(l), o.iushrn(1);
            for (var d = 0, _ = 1; (i.words[0] & _) == 0 && d < 26; ++d, _ <<= 1);
            if (d > 0)
                for (i.iushrn(d); d-- > 0;)
                    s.isOdd() && s.iadd(l), s.iushrn(1);
            n.cmp(i) >= 0 ? (n.isub(i), o.isub(s)) : (i.isub(n), s.isub(o));
        }
        return 0 > (t = 0 === n.cmpn(1) ? o : s).cmpn(0) && t.iadd(e), t;
    }, a.prototype.gcd = function (e) {
        if (this.isZero())
            return e.abs();
        if (e.isZero())
            return this.abs();
        var t = this.clone(), n = e.clone();
        t.negative = 0, n.negative = 0;
        for (var r = 0; t.isEven() && n.isEven(); r++)
            t.iushrn(1), n.iushrn(1);
        for (;;) {
            for (; t.isEven();)
                t.iushrn(1);
            for (; n.isEven();)
                n.iushrn(1);
            var i = t.cmp(n);
            if (i < 0) {
                var a = t;
                t = n, n = a;
            } else if (0 === i || 0 === n.cmpn(1))
                break;
            t.isub(n);
        }
        return n.iushln(r);
    }, a.prototype.invm = function (e) {
        return this.egcd(e).a.umod(e);
    }, a.prototype.isEven = function () {
        return (1 & this.words[0]) == 0;
    }, a.prototype.isOdd = function () {
        return (1 & this.words[0]) == 1;
    }, a.prototype.andln = function (e) {
        return this.words[0] & e;
    }, a.prototype.bincn = function (e) {
        r('number' == typeof e);
        var t = e % 26, n = (e - t) / 26, i = 1 << t;
        if (this.length <= n)
            return this._expand(n + 1), this.words[n] |= i, this;
        for (var a = i, o = n; 0 !== a && o < this.length; o++) {
            var s = 0 | this.words[o];
            s += a, a = s >>> 26, s &= 67108863, this.words[o] = s;
        }
        return 0 !== a && (this.words[o] = a, this.length++), this;
    }, a.prototype.isZero = function () {
        return 1 === this.length && 0 === this.words[0];
    }, a.prototype.cmpn = function (e) {
        var t, n = e < 0;
        if (0 !== this.negative && !n)
            return -1;
        if (0 === this.negative && n)
            return 1;
        if (this._strip(), this.length > 1)
            t = 1;
        else {
            n && (e = -e), r(e <= 67108863, 'Number is too big');
            var i = 0 | this.words[0];
            t = i === e ? 0 : i < e ? -1 : 1;
        }
        return 0 !== this.negative ? 0 | -t : t;
    }, a.prototype.cmp = function (e) {
        if (0 !== this.negative && 0 === e.negative)
            return -1;
        if (0 === this.negative && 0 !== e.negative)
            return 1;
        var t = this.ucmp(e);
        return 0 !== this.negative ? 0 | -t : t;
    }, a.prototype.ucmp = function (e) {
        if (this.length > e.length)
            return 1;
        if (this.length < e.length)
            return -1;
        for (var t = 0, n = this.length - 1; n >= 0; n--) {
            var r = 0 | this.words[n], i = 0 | e.words[n];
            if (r !== i) {
                r < i ? t = -1 : r > i && (t = 1);
                break;
            }
        }
        return t;
    }, a.prototype.gtn = function (e) {
        return 1 === this.cmpn(e);
    }, a.prototype.gt = function (e) {
        return 1 === this.cmp(e);
    }, a.prototype.gten = function (e) {
        return this.cmpn(e) >= 0;
    }, a.prototype.gte = function (e) {
        return this.cmp(e) >= 0;
    }, a.prototype.ltn = function (e) {
        return -1 === this.cmpn(e);
    }, a.prototype.lt = function (e) {
        return -1 === this.cmp(e);
    }, a.prototype.lten = function (e) {
        return 0 >= this.cmpn(e);
    }, a.prototype.lte = function (e) {
        return 0 >= this.cmp(e);
    }, a.prototype.eqn = function (e) {
        return 0 === this.cmpn(e);
    }, a.prototype.eq = function (e) {
        return 0 === this.cmp(e);
    }, a.red = function (e) {
        return new R(e);
    }, a.prototype.toRed = function (e) {
        return r(!this.red, 'Already a number in reduction context'), r(0 === this.negative, 'red works only with positives'), e.convertTo(this)._forceRed(e);
    }, a.prototype.fromRed = function () {
        return r(this.red, 'fromRed works only with numbers in reduction context'), this.red.convertFrom(this);
    }, a.prototype._forceRed = function (e) {
        return this.red = e, this;
    }, a.prototype.forceRed = function (e) {
        return r(!this.red, 'Already a number in reduction context'), this._forceRed(e);
    }, a.prototype.redAdd = function (e) {
        return r(this.red, 'redAdd works only with red numbers'), this.red.add(this, e);
    }, a.prototype.redIAdd = function (e) {
        return r(this.red, 'redIAdd works only with red numbers'), this.red.iadd(this, e);
    }, a.prototype.redSub = function (e) {
        return r(this.red, 'redSub works only with red numbers'), this.red.sub(this, e);
    }, a.prototype.redISub = function (e) {
        return r(this.red, 'redISub works only with red numbers'), this.red.isub(this, e);
    }, a.prototype.redShl = function (e) {
        return r(this.red, 'redShl works only with red numbers'), this.red.shl(this, e);
    }, a.prototype.redMul = function (e) {
        return r(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.mul(this, e);
    }, a.prototype.redIMul = function (e) {
        return r(this.red, 'redMul works only with red numbers'), this.red._verify2(this, e), this.red.imul(this, e);
    }, a.prototype.redSqr = function () {
        return r(this.red, 'redSqr works only with red numbers'), this.red._verify1(this), this.red.sqr(this);
    }, a.prototype.redISqr = function () {
        return r(this.red, 'redISqr works only with red numbers'), this.red._verify1(this), this.red.isqr(this);
    }, a.prototype.redSqrt = function () {
        return r(this.red, 'redSqrt works only with red numbers'), this.red._verify1(this), this.red.sqrt(this);
    }, a.prototype.redInvm = function () {
        return r(this.red, 'redInvm works only with red numbers'), this.red._verify1(this), this.red.invm(this);
    }, a.prototype.redNeg = function () {
        return r(this.red, 'redNeg works only with red numbers'), this.red._verify1(this), this.red.neg(this);
    }, a.prototype.redPow = function (e) {
        return r(this.red && !e.red, 'redPow(normalNum)'), this.red._verify1(this), this.red.pow(this, e);
    };
    var g = {
        k256: null,
        p224: null,
        p192: null,
        p25519: null
    };
    function S(e, t) {
        this.name = e, this.p = new a(t, 16), this.n = this.p.bitLength(), this.k = new a(1).iushln(this.n).isub(this.p), this.tmp = this._tmp();
    }
    function A() {
        S.call(this, 'k256', 'ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f');
    }
    function N() {
        S.call(this, 'p224', 'ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001');
    }
    function v() {
        S.call(this, 'p192', 'ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff');
    }
    function O() {
        S.call(this, '25519', '7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed');
    }
    function R(e) {
        if ('string' == typeof e) {
            var t = a._prime(e);
            this.m = t.p, this.prime = t;
        } else
            r(e.gtn(1), 'modulus must be greater than 1'), this.m = e, this.prime = null;
    }
    function C(e) {
        R.call(this, e), this.shift = this.m.bitLength(), this.shift % 26 != 0 && (this.shift += 26 - this.shift % 26), this.r = new a(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv);
    }
    S.prototype._tmp = function () {
        var e = new a(null);
        return e.words = Array(Math.ceil(this.n / 13)), e;
    }, S.prototype.ireduce = function (e) {
        var t, n = e;
        do
            this.split(n, this.tmp), t = (n = (n = this.imulK(n)).iadd(this.tmp)).bitLength();
        while (t > this.n);
        var r = t < this.n ? -1 : n.ucmp(this.p);
        return 0 === r ? (n.words[0] = 0, n.length = 1) : r > 0 ? n.isub(this.p) : void 0 !== n.strip ? n.strip() : n._strip(), n;
    }, S.prototype.split = function (e, t) {
        e.iushrn(this.n, 0, t);
    }, S.prototype.imulK = function (e) {
        return e.imul(this.k);
    }, i(A, S), A.prototype.split = function (e, t) {
        for (var n = Math.min(e.length, 9), r = 0; r < n; r++)
            t.words[r] = e.words[r];
        if (t.length = n, e.length <= 9) {
            e.words[0] = 0, e.length = 1;
            return;
        }
        var i = e.words[9];
        for (r = 10, t.words[t.length++] = 4194303 & i; r < e.length; r++) {
            var a = 0 | e.words[r];
            e.words[r - 10] = (4194303 & a) << 4 | i >>> 22, i = a;
        }
        i >>>= 22, e.words[r - 10] = i, 0 === i && e.length > 10 ? e.length -= 10 : e.length -= 9;
    }, A.prototype.imulK = function (e) {
        e.words[e.length] = 0, e.words[e.length + 1] = 0, e.length += 2;
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = 0 | e.words[n];
            t += 977 * r, e.words[n] = 67108863 & t, t = 64 * r + (t / 67108864 | 0);
        }
        return 0 === e.words[e.length - 1] && (e.length--, 0 === e.words[e.length - 1] && e.length--), e;
    }, i(N, S), i(v, S), i(O, S), O.prototype.imulK = function (e) {
        for (var t = 0, n = 0; n < e.length; n++) {
            var r = (0 | e.words[n]) * 19 + t, i = 67108863 & r;
            r >>>= 26, e.words[n] = i, t = r;
        }
        return 0 !== t && (e.words[e.length++] = t), e;
    }, a._prime = function (e) {
        var t;
        if (g[e])
            return g[e];
        if ('k256' === e)
            t = new A();
        else if ('p224' === e)
            t = new N();
        else if ('p192' === e)
            t = new v();
        else if ('p25519' === e)
            t = new O();
        else
            throw Error('Unknown prime ' + e);
        return g[e] = t, t;
    }, R.prototype._verify1 = function (e) {
        r(0 === e.negative, 'red works only with positives'), r(e.red, 'red works only with red numbers');
    }, R.prototype._verify2 = function (e, t) {
        r((e.negative | t.negative) == 0, 'red works only with positives'), r(e.red && e.red === t.red, 'red works only with red numbers');
    }, R.prototype.imod = function (e) {
        return this.prime ? this.prime.ireduce(e)._forceRed(this) : (u(e, e.umod(this.m)._forceRed(this)), e);
    }, R.prototype.neg = function (e) {
        return e.isZero() ? e.clone() : this.m.sub(e)._forceRed(this);
    }, R.prototype.add = function (e, t) {
        this._verify2(e, t);
        var n = e.add(t);
        return n.cmp(this.m) >= 0 && n.isub(this.m), n._forceRed(this);
    }, R.prototype.iadd = function (e, t) {
        this._verify2(e, t);
        var n = e.iadd(t);
        return n.cmp(this.m) >= 0 && n.isub(this.m), n;
    }, R.prototype.sub = function (e, t) {
        this._verify2(e, t);
        var n = e.sub(t);
        return 0 > n.cmpn(0) && n.iadd(this.m), n._forceRed(this);
    }, R.prototype.isub = function (e, t) {
        this._verify2(e, t);
        var n = e.isub(t);
        return 0 > n.cmpn(0) && n.iadd(this.m), n;
    }, R.prototype.shl = function (e, t) {
        return this._verify1(e), this.imod(e.ushln(t));
    }, R.prototype.imul = function (e, t) {
        return this._verify2(e, t), this.imod(e.imul(t));
    }, R.prototype.mul = function (e, t) {
        return this._verify2(e, t), this.imod(e.mul(t));
    }, R.prototype.isqr = function (e) {
        return this.imul(e, e.clone());
    }, R.prototype.sqr = function (e) {
        return this.mul(e, e);
    }, R.prototype.sqrt = function (e) {
        if (e.isZero())
            return e.clone();
        var t = this.m.andln(3);
        if (r(t % 2 == 1), 3 === t) {
            var n = this.m.add(new a(1)).iushrn(2);
            return this.pow(e, n);
        }
        for (var i = this.m.subn(1), o = 0; !i.isZero() && 0 === i.andln(1);)
            o++, i.iushrn(1);
        r(!i.isZero());
        var s = new a(1).toRed(this), l = s.redNeg(), u = this.m.subn(1).iushrn(1), c = this.m.bitLength();
        for (c = new a(2 * c * c).toRed(this); 0 !== this.pow(c, u).cmp(l);)
            c.redIAdd(l);
        for (var d = this.pow(c, i), _ = this.pow(e, i.addn(1).iushrn(1)), E = this.pow(e, i), f = o; 0 !== E.cmp(s);) {
            for (var h = E, p = 0; 0 !== h.cmp(s); p++)
                h = h.redSqr();
            r(p < f);
            var m = this.pow(d, new a(1).iushln(f - p - 1));
            _ = _.redMul(m), d = m.redSqr(), E = E.redMul(d), f = p;
        }
        return _;
    }, R.prototype.invm = function (e) {
        var t = e._invmp(this.m);
        return 0 !== t.negative ? (t.negative = 0, this.imod(t).redNeg()) : this.imod(t);
    }, R.prototype.pow = function (e, t) {
        if (t.isZero())
            return new a(1).toRed(this);
        if (0 === t.cmpn(1))
            return e.clone();
        var n = Array(16);
        n[0] = new a(1).toRed(this), n[1] = e;
        for (var r = 2; r < n.length; r++)
            n[r] = this.mul(n[r - 1], e);
        var i = n[0], o = 0, s = 0, l = t.bitLength() % 26;
        for (0 === l && (l = 26), r = t.length - 1; r >= 0; r--) {
            for (var u = t.words[r], c = l - 1; c >= 0; c--) {
                var d = u >> c & 1;
                if (i !== n[0] && (i = this.sqr(i)), 0 === d && 0 === o) {
                    s = 0;
                    continue;
                }
                o <<= 1, o |= d, (4 == ++s || 0 === r && 0 === c) && (i = this.mul(i, n[o]), s = 0, o = 0);
            }
            l = 26;
        }
        return i;
    }, R.prototype.convertTo = function (e) {
        var t = e.umod(this.m);
        return t === e ? t.clone() : t;
    }, R.prototype.convertFrom = function (e) {
        var t = e.clone();
        return t.red = null, t;
    }, a.mont = function (e) {
        return new C(e);
    }, i(C, R), C.prototype.convertTo = function (e) {
        return this.imod(e.ushln(this.shift));
    }, C.prototype.convertFrom = function (e) {
        var t = this.imod(e.mul(this.rinv));
        return t.red = null, t;
    }, C.prototype.imul = function (e, t) {
        if (e.isZero() || t.isZero())
            return e.words[0] = 0, e.length = 1, e;
        var n = e.imul(t), r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = n.isub(r).iushrn(this.shift), a = i;
        return i.cmp(this.m) >= 0 ? a = i.isub(this.m) : 0 > i.cmpn(0) && (a = i.iadd(this.m)), a._forceRed(this);
    }, C.prototype.mul = function (e, t) {
        if (e.isZero() || t.isZero())
            return new a(0)._forceRed(this);
        var n = e.mul(t), r = n.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m), i = n.isub(r).iushrn(this.shift), o = i;
        return i.cmp(this.m) >= 0 ? o = i.isub(this.m) : 0 > i.cmpn(0) && (o = i.iadd(this.m)), o._forceRed(this);
    }, C.prototype.invm = function (e) {
        return this.imod(e._invmp(this.m).mul(this.r2))._forceRed(this);
    };
}(e = n.nmd(e), this);
