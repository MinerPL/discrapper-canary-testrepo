n.d(t, {
    FX: function () {
        return l;
    },
    LX: function () {
        return o;
    },
    Qg: function () {
        return u;
    },
    jH: function () {
        return s;
    },
    p7: function () {
        return c;
    }
});
var r = n(845389), i = n(979590), a = n.n(i), o = function (e) {
        var t = 0, n = 0;
        return (0, r.Z)([
            'r',
            'g',
            'b',
            'a',
            'h',
            's',
            'l',
            'v'
        ], function (r) {
            e[r] && (t += 1, !isNaN(e[r]) && (n += 1), ('s' === r || 'l' === r) && /^\d+%$/.test(e[r]) && (n += 1));
        }), t === n && e;
    }, s = function (e, t) {
        var n = e.hex ? a()(e.hex) : a()(e), r = n.toHsl(), i = n.toHsv(), o = n.toRgb(), s = n.toHex();
        return 0 === r.s && (r.h = t || 0, i.h = t || 0), {
            hsl: r,
            hex: '000000' === s && 0 === o.a ? 'transparent' : '#' + s,
            rgb: o,
            hsv: i,
            oldHue: e.h || t || r.h,
            source: e.source
        };
    }, l = function (e) {
        if ('transparent' === e)
            return !0;
        var t = '#' === String(e).charAt(0) ? 1 : 0;
        return e.length !== 4 + t && e.length < 7 + t && a()(e).isValid();
    }, u = function (e) {
        if (!e)
            return '#fff';
        var t = s(e);
        return 'transparent' === t.hex ? 'rgba(0,0,0,0.4)' : (299 * t.rgb.r + 587 * t.rgb.g + 114 * t.rgb.b) / 1000 >= 128 ? '#000' : '#fff';
    }, c = function (e, t) {
        var n = e.replace('\xB0', '');
        return a()(t + ' (' + n + ')')._ok;
    };
