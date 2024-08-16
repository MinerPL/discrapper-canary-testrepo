var r = n(21841),
    i = n(689118);
t.inherits = i;
t.toArray = function (e, t) {
    if (Array.isArray(e)) return e.slice();
    if (!e) return [];
    var n = [];
    if ('string' == typeof e) {
        if (t) {
            if ('hex' === t) for ((e = e.replace(/[^a-z0-9]+/gi, '')).length % 2 != 0 && (e = '0' + e), i = 0; i < e.length; i += 2) n.push(parseInt(e[i] + e[i + 1], 16));
        } else {
            for (var r = 0, i = 0; i < e.length; i++) {
                var a,
                    s,
                    o = e.charCodeAt(i);
                if (o < 128) n[r++] = o;
                else if (o < 2048) (n[r++] = (o >> 6) | 192), (n[r++] = (63 & o) | 128);
                else {
                    if (((a = e), (s = i), (64512 & a.charCodeAt(s)) != 55296 || s < 0 || s + 1 >= a.length ? 1 : (64512 & a.charCodeAt(s + 1)) != 56320)) (n[r++] = (o >> 12) | 224), (n[r++] = ((o >> 6) & 63) | 128), (n[r++] = (63 & o) | 128);
                    else (o = 65536 + ((1023 & o) << 10) + (1023 & e.charCodeAt(++i))), (n[r++] = (o >> 18) | 240), (n[r++] = ((o >> 12) & 63) | 128), (n[r++] = ((o >> 6) & 63) | 128), (n[r++] = (63 & o) | 128);
                }
            }
        }
    } else for (i = 0; i < e.length; i++) n[i] = 0 | e[i];
    return n;
};
function a(e) {
    return ((e >>> 24) | ((e >>> 8) & 65280) | ((e << 8) & 16711680) | ((255 & e) << 24)) >>> 0;
}
(t.toHex = function (e) {
    for (var t = '', n = 0; n < e.length; n++) t += s(e[n].toString(16));
    return t;
}),
    (t.htonl = a);
function s(e) {
    return 1 === e.length ? '0' + e : e;
}
function o(e) {
    if (7 === e.length) return '0' + e;
    if (6 === e.length) return '00' + e;
    if (5 === e.length) return '000' + e;
    else if (4 === e.length) return '0000' + e;
    else if (3 === e.length) return '00000' + e;
    else if (2 === e.length) return '000000' + e;
    else if (1 === e.length) return '0000000' + e;
    else return e;
}
(t.toHex32 = function (e, t) {
    for (var n = '', r = 0; r < e.length; r++) {
        var i = e[r];
        'little' === t && (i = a(i)), (n += o(i.toString(16)));
    }
    return n;
}),
    (t.zero2 = s),
    (t.zero8 = o);
t.join32 = function (e, t, n, i) {
    var a,
        s = n - t;
    r(s % 4 == 0);
    for (var o = Array(s / 4), l = 0, u = t; l < o.length; l++, u += 4) (a = 'big' === i ? (e[u] << 24) | (e[u + 1] << 16) | (e[u + 2] << 8) | e[u + 3] : (e[u + 3] << 24) | (e[u + 2] << 16) | (e[u + 1] << 8) | e[u]), (o[l] = a >>> 0);
    return o;
};
t.split32 = function (e, t) {
    for (var n = Array(4 * e.length), r = 0, i = 0; r < e.length; r++, i += 4) {
        var a = e[r];
        'big' === t ? ((n[i] = a >>> 24), (n[i + 1] = (a >>> 16) & 255), (n[i + 2] = (a >>> 8) & 255), (n[i + 3] = 255 & a)) : ((n[i + 3] = a >>> 24), (n[i + 2] = (a >>> 16) & 255), (n[i + 1] = (a >>> 8) & 255), (n[i] = 255 & a));
    }
    return n;
};
t.rotr32 = function (e, t) {
    return (e >>> t) | (e << (32 - t));
};
t.rotl32 = function (e, t) {
    return (e << t) | (e >>> (32 - t));
};
t.sum32 = function (e, t) {
    return (e + t) >>> 0;
};
t.sum32_3 = function (e, t, n) {
    return (e + t + n) >>> 0;
};
t.sum32_4 = function (e, t, n, r) {
    return (e + t + n + r) >>> 0;
};
t.sum32_5 = function (e, t, n, r, i) {
    return (e + t + n + r + i) >>> 0;
};
t.sum64 = function (e, t, n, r) {
    var i = e[t],
        a = (r + e[t + 1]) >>> 0;
    (e[t] = ((a < r ? 1 : 0) + n + i) >>> 0), (e[t + 1] = a);
};
t.sum64_hi = function (e, t, n, r) {
    return (((t + r) >>> 0 < t ? 1 : 0) + e + n) >>> 0;
};
t.sum64_lo = function (e, t, n, r) {
    return (t + r) >>> 0;
};
t.sum64_4_hi = function (e, t, n, r, i, a, s, o) {
    var l,
        u = t;
    return (l = 0 + ((u = (u + r) >>> 0) < t ? 1 : 0)), (l += (u = (u + a) >>> 0) < a ? 1 : 0), (e + n + i + s + (l += (u = (u + o) >>> 0) < o ? 1 : 0)) >>> 0;
};
t.sum64_4_lo = function (e, t, n, r, i, a, s, o) {
    return (t + r + a + o) >>> 0;
};
t.sum64_5_hi = function (e, t, n, r, i, a, s, o, l, u) {
    var c,
        d = t;
    return (c = 0 + ((d = (d + r) >>> 0) < t ? 1 : 0)), (c += (d = (d + a) >>> 0) < a ? 1 : 0), (c += (d = (d + o) >>> 0) < o ? 1 : 0), (e + n + i + s + l + (c += (d = (d + u) >>> 0) < u ? 1 : 0)) >>> 0;
};
t.sum64_5_lo = function (e, t, n, r, i, a, s, o, l, u) {
    return (t + r + a + o + u) >>> 0;
};
t.rotr64_hi = function (e, t, n) {
    return ((t << (32 - n)) | (e >>> n)) >>> 0;
};
t.rotr64_lo = function (e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
};
t.shr64_hi = function (e, t, n) {
    return e >>> n;
};
t.shr64_lo = function (e, t, n) {
    return ((e << (32 - n)) | (t >>> n)) >>> 0;
};
