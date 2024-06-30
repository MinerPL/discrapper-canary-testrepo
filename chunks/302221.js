n.d(t, {
    AZ: function () {
        return E;
    },
    BM: function () {
        return g;
    },
    Cj: function () {
        return o;
    },
    WY: function () {
        return c;
    },
    YD: function () {
        return m;
    },
    aD: function () {
        return l;
    },
    j: function () {
        return h;
    },
    k8: function () {
        return p;
    },
    oo: function () {
        return s;
    },
    vq: function () {
        return u;
    },
    xj: function () {
        return T;
    }
}), n(653041);
var r = n(866442);
n(710845);
var i = n(564334), a = n(689938);
function o(e, t) {
    let n;
    let r = e;
    9 === e.length ? (r = e.slice(0, 7), n = Math.round(parseInt(e.slice(7, 9), 16) / 255 * t * 255)) : n = Math.round(255 * t);
    let i = n.toString(16).toUpperCase().padStart(2, '0');
    return ''.concat(r).concat(i).padEnd(9, '0');
}
function s(e) {
    '#' === e[0] && (e = e.slice(1));
    let t = parseInt(e, 16);
    return {
        r: t >> 16 & 255,
        g: t >> 8 & 255,
        b: 255 & t
    };
}
function l(e, t) {
    let {
        r: n,
        g: r,
        b: i
    } = s(e);
    return 'rgba('.concat(n, ', ').concat(r, ', ').concat(i, ', ').concat(t, ')');
}
function u(e, t, n) {
    return '#' + (16777216 + (e << 16) + (t << 8) + n).toString(16).slice(1);
}
function c(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3, n = [], {
            h: r,
            s: i,
            l: a
        } = function (e, t, n) {
            let r = Math.min(e /= 255, t /= 255, n /= 255), i = Math.max(e, t, n), a = i - r, o = 0, s = 0, l = 0;
            return (o = Math.round(60 * (o = 0 === a ? 0 : i === e ? (t - n) / a % 6 : i === t ? (n - e) / a + 2 : (e - t) / a + 4))) < 0 && (o += 360), l = (i + r) / 2, s = +(100 * (s = 0 === a ? 0 : a / (1 - Math.abs(2 * l - 1)))).toFixed(1), {
                h: o,
                s,
                l: l = +(100 * l).toFixed(1)
            };
        }(e[0], e[1], e[2]), o = r, l = i, u = a;
    l < 30 && (l += 30), u > 80 && (u -= 40), u < 20 && (u += 15);
    let c = 360 / (t + 1);
    for (; n.length < t;) {
        (o -= c) < 0 && (o += 360);
        let {
            r: e,
            g: t,
            b: r
        } = s(function (e, t, n) {
            let r = t * Math.min(n /= 100, 1 - n) / 100, i = t => {
                    let i = (t + e / 30) % 12;
                    return Math.round(255 * (n - r * Math.max(Math.min(i - 3, 9 - i, 1), -1))).toString(16).padStart(2, '0');
                };
            return '#'.concat(i(0)).concat(i(8)).concat(i(4));
        }(o, l, u));
        n.push([
            e,
            t,
            r
        ]);
    }
    return n;
}
function d(e) {
    let {
            red: t,
            green: n,
            blue: r
        } = e, i = [
            t,
            n,
            r
        ].map(e => (e /= 255) <= 0.03928 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
    return 0.2126 * i[0] + 0.7152 * i[1] + 0.0722 * i[2];
}
function _(e) {
    let t = e[0], n = e[1], r = d(t), i = d(n);
    return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
}
function E(e, t, n) {
    let r, i;
    let a = Math.max(e /= 255, t /= 255, n /= 255), o = Math.min(e, t, n), s = (a + o) / 2;
    if (a === o)
        r = i = 0;
    else {
        let l = a - o;
        switch (i = s > 0.5 ? l / (2 - a - o) : l / (a + o), a) {
        case e:
            r = (t - n) / l + (t < n ? 6 : 0);
            break;
        case t:
            r = (n - e) / l + 2;
            break;
        case n:
            r = (e - t) / l + 4;
        }
        null == r ? r = 0 : r /= 6;
    }
    return {
        hue: 360 * r,
        saturation: i,
        lightness: s,
        alpha: 1
    };
}
function f(e, t, n) {
    let r, a, o;
    if (e /= 360, 0 === t)
        r = a = o = n;
    else {
        let i = function (e, t, n) {
                return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < 0.5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
            }, s = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - s;
        r = i(l, s, e + 1 / 3), a = i(l, s, e), o = i(l, s, e - 1 / 3);
    }
    return new i.Z(Math.round(255 * r), Math.round(255 * a), Math.round(255 * o), 1);
}
function h(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], r = E(e.red, e.green, e.blue);
    return n ? r.lightness = r.lightness + t > 1 ? 0.9 : r.lightness + t : r.lightness = r.lightness - t < 0 ? 0.1 : r.lightness - t, f(r.hue, r.saturation, r.lightness);
}
function p(e) {
    let {
        colors: t,
        ratio: n = 5,
        saturationFactor: i = 1
    } = e;
    if (t.length < 2)
        return;
    let a = t[0], o = t[1];
    if (null == o || null == a)
        return;
    let s = (0, r._i)(o.toHexString()), l = (0, r.Bd)(s) > 0.5, u = _([
            a,
            o
        ]), c = E(a.red, a.green, a.blue);
    for (c.saturation *= i; u < n && null != c;) {
        ;
        if (l) {
            if (c.lightness < 0.95)
                c.lightness += 0.05;
            else
                break;
        } else if (c.lightness > 0.05)
            c.lightness -= 0.05;
        else
            break;
        u = _([
            f(c.hue, c.saturation, c.lightness),
            t[1]
        ]);
    }
    return f(c.hue, c.saturation, c.lightness);
}
function m(e) {
    return e.slice(0, 3).map(e => {
        var t;
        return {
            hex: e,
            hsv: null !== (t = function (e) {
                let t, n, r, i, a;
                var o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                if (null == o)
                    return null;
                var s = parseInt(o[1], 16), l = parseInt(o[2], 16), u = parseInt(o[3], 16);
                let c = s / 255, d = l / 255, _ = u / 255, E = Math.max(c, d, _), f = E - Math.min(c, d, _), h = e => Math.round(100 * e) / 100;
                if (0 === f)
                    i = a = 0;
                else {
                    a = f / E;
                    t = (E - c) / 6 / f + 0.5;
                    n = (E - d) / 6 / f + 0.5;
                    r = (E - _) / 6 / f + 0.5, (i = c === E ? r - n : d === E ? 1 / 3 + t - r : _ === E ? 2 / 3 + n - t : 0) < 0 ? i += 1 : i > 1 && (i -= 1);
                }
                return {
                    h: Math.round(360 * i),
                    s: h(100 * a),
                    v: h(100 * E)
                };
            }(e)) && void 0 !== t ? t : {
                h: 0,
                s: 0,
                v: 0
            }
        };
    }).sort(I)[0].hex;
}
function I(e, t) {
    let n = e.hsv, r = t.hsv;
    return r.s + r.v - (n.s + n.v);
}
function T(e) {
    var t;
    let {
        colorRGB: n,
        saturationFactor: r = 1
    } = e;
    if (null == n)
        return n;
    let i = E(n.red, n.green, n.blue);
    if (null == i)
        return null == n ? void 0 : n.toHexString();
    return null === (t = f(i.hue, i.saturation * r, i.lightness)) || void 0 === t ? void 0 : t.toHexString();
}
function g(e, t, n) {
    let r = parseInt(e.substring(1, 3), 16), i = parseInt(e.substring(3, 5), 16), a = parseInt(e.substring(5, 7), 16), o = parseInt(t.substring(1, 3), 16), s = parseInt(t.substring(3, 5), 16), l = parseInt(t.substring(5, 7), 16), u = Math.round(r + (o - r) * n).toString(16).padStart(2, '0'), c = Math.round(i + (s - i) * n).toString(16).padStart(2, '0'), d = Math.round(a + (l - a) * n).toString(16).padStart(2, '0');
    return '#'.concat(u).concat(c).concat(d);
}
