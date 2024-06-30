Object.defineProperty(t, '__esModule', { value: !0 }), t.calculateChange = function (e, t, n, r) {
    var i = r.clientWidth, a = r.clientHeight, o = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX, s = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY, l = o - (r.getBoundingClientRect().left + window.pageXOffset), u = s - (r.getBoundingClientRect().top + window.pageYOffset);
    if ('vertical' === t) {
        var c = void 0;
        if (c = u < 0 ? 359 : u > a ? 0 : 360 * (-(100 * u / a) + 100) / 100, n.h !== c)
            return {
                h: c,
                s: n.s,
                l: n.l,
                a: n.a,
                source: 'hsl'
            };
    } else {
        var d = void 0;
        if (d = l < 0 ? 0 : l > i ? 359 : 100 * l / i * 360 / 100, n.h !== d)
            return {
                h: d,
                s: n.s,
                l: n.l,
                a: n.a,
                source: 'hsl'
            };
    }
    return null;
};
