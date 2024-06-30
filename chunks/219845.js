n.d(t, {
    Fs: function () {
        return s;
    },
    Y9: function () {
        return h;
    },
    uP: function () {
        return f;
    }
});
var r = n(644387), i = n(582661), a = n(383466), o = n(559972), s = new Map(), l = /auto|scroll/, u = /^tb|vertical/, c = /msie|trident/i.test(o.C.navigator && o.C.navigator.userAgent), d = function (e) {
        return parseFloat(e || '0');
    }, _ = function (e, t, n) {
        return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === n && (n = !1), Object.freeze({
            inlineSize: (n ? t : e) || 0,
            blockSize: (n ? e : t) || 0
        });
    }, E = Object.freeze({
        devicePixelContentBoxSize: _(),
        borderBoxSize: _(),
        contentBoxSize: _(),
        contentRect: new i.N(0, 0, 0, 0)
    }), f = function (e) {
        if (s.has(e))
            return s.get(e);
        if ((0, a.xj)(e))
            return s.set(e, E), E;
        var t = getComputedStyle(e), n = (0, a.zd)(e) && e.ownerSVGElement && e.getBBox(), r = !c && 'border-box' === t.boxSizing, o = u.test(t.writingMode || ''), f = !n && l.test(t.overflowY || ''), h = !n && l.test(t.overflowX || ''), p = n ? 0 : d(t.paddingTop), m = n ? 0 : d(t.paddingRight), I = n ? 0 : d(t.paddingBottom), T = n ? 0 : d(t.paddingLeft), g = n ? 0 : d(t.borderTopWidth), S = n ? 0 : d(t.borderRightWidth), A = n ? 0 : d(t.borderBottomWidth), N = n ? 0 : d(t.borderLeftWidth), v = T + m, O = p + I, R = N + S, C = g + A, y = h ? e.offsetHeight - C - e.clientHeight : 0, D = f ? e.offsetWidth - R - e.clientWidth : 0, L = n ? n.width : d(t.width) - (r ? v + R : 0) - D, b = n ? n.height : d(t.height) - (r ? O + C : 0) - y, M = L + v + D + R, P = b + O + y + C, U = Object.freeze({
                devicePixelContentBoxSize: _(Math.round(L * devicePixelRatio), Math.round(b * devicePixelRatio), o),
                borderBoxSize: _(M, P, o),
                contentBoxSize: _(L, b, o),
                contentRect: new i.N(T, p, L, b)
            });
        return s.set(e, U), U;
    }, h = function (e, t) {
        var n = f(e), i = n.borderBoxSize, a = n.contentBoxSize, o = n.devicePixelContentBoxSize;
        switch (t) {
        case r.z.DEVICE_PIXEL_CONTENT_BOX:
            return o;
        case r.z.BORDER_BOX:
            return i;
        default:
            return a;
        }
    };
