var r;
if (!Object.keys) {
    var i = Object.prototype.hasOwnProperty,
        a = Object.prototype.toString,
        s = n(560640),
        o = Object.prototype.propertyIsEnumerable,
        l = !o.call({ toString: null }, 'toString'),
        u = o.call(function () {}, 'prototype'),
        c = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
        d = function (e) {
            var t = e.constructor;
            return t && t.prototype === e;
        },
        _ = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0
        },
        E = (function () {
            if ('undefined' == typeof window) return !1;
            for (var e in window)
                try {
                    if (!_['$' + e] && i.call(window, e) && null !== window[e] && 'object' == typeof window[e])
                        try {
                            d(window[e]);
                        } catch (e) {
                            return !0;
                        }
                } catch (e) {
                    return !0;
                }
            return !1;
        })(),
        f = function (e) {
            if ('undefined' == typeof window || !E) return d(e);
            try {
                return d(e);
            } catch (e) {
                return !1;
            }
        };
    r = function (e) {
        var t = null !== e && 'object' == typeof e,
            n = '[object Function]' === a.call(e),
            r = s(e),
            o = t && '[object String]' === a.call(e),
            d = [];
        if (!t && !n && !r) throw TypeError('Object.keys called on a non-object');
        var _ = u && n;
        if (o && e.length > 0 && !i.call(e, 0)) for (var E = 0; E < e.length; ++E) d.push(String(E));
        if (r && e.length > 0) for (var h = 0; h < e.length; ++h) d.push(String(h));
        else for (var p in e) !(_ && 'prototype' === p) && i.call(e, p) && d.push(String(p));
        if (l) {
            for (var m = f(e), I = 0; I < c.length; ++I) !(m && 'constructor' === c[I]) && i.call(e, c[I]) && d.push(c[I]);
        }
        return d;
    };
}
e.exports = r;
