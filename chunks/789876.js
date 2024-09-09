var r;
(r = function () {
    var e,
        t,
        r,
        i,
        a = 'undefined' != typeof window ? window : (n.g, n.g),
        s = (a.cancelRequestAnimationFrame && a.requestAnimationFrame) || setTimeout,
        o = a.cancelRequestAnimationFrame || clearTimeout,
        l = [],
        u = 0,
        c = !1,
        d = 7,
        _ = 35,
        E = 125,
        f = 0,
        h = 0,
        p = 0,
        m = {
            get didTimeout() {
                return !1;
            },
            timeRemaining: function () {
                var e = d - (Date.now() - h);
                return e < 0 ? 0 : e;
            }
        },
        I = (function (e) {
            var t,
                n,
                r = function () {
                    var i = Date.now() - n;
                    i < 99 ? (t = setTimeout(r, 99 - i)) : ((t = null), e());
                };
            return function () {
                (n = Date.now()), !t && (t = setTimeout(r, 99));
            };
        })(function () {
            (d = 22), (E = 66), (_ = 0);
        });
    function T() {
        125 != E && ((d = 7), (E = 125), (_ = 35), c && (c && (i && o(i), r && clearTimeout(r), (c = !1)), A())), I();
    }
    function g() {
        (i = null), (r = setTimeout(N, 0));
    }
    function S() {
        (r = null), s(g);
    }
    function A() {
        if (!c) (t = E - (Date.now() - h)), (e = Date.now()), (c = !0), _ && t < _ && (t = _), t > 9 ? (r = setTimeout(S, t)) : ((t = 0), S());
    }
    function N() {
        var n,
            i,
            a,
            s = d > 9 ? 9 : 1;
        if (((h = Date.now()), (c = !1), (r = null), u > 2 || h - t - 50 < e)) for (i = 0, a = l.length; i < a && m.timeRemaining() > s; i++) (n = l.shift()), p++, n && n(m);
        l.length ? A() : (u = 0);
    }
    function v(e) {
        return f++, l.push(e), A(), f;
    }
    function O(e) {
        var t = e - 1 - p;
        l[t] && (l[t] = null);
    }
    if (a.requestIdleCallback && a.cancelIdleCallback)
        try {
            a.requestIdleCallback(function () {}, { timeout: 0 });
        } catch (e) {
            !(function (e) {
                var t, n;
                if (
                    ((a.requestIdleCallback = function (t, n) {
                        return n && 'number' == typeof n.timeout ? e(t, n.timeout) : e(t);
                    }),
                    a.IdleCallbackDeadline && (t = IdleCallbackDeadline.prototype))
                ) {
                    if (!(n = Object.getOwnPropertyDescriptor(t, 'timeRemaining')) || !n.configurable || !n.get) return;
                    Object.defineProperty(t, 'timeRemaining', {
                        value: function () {
                            return n.get.call(this);
                        },
                        enumerable: !0,
                        configurable: !0
                    });
                }
            })(a.requestIdleCallback);
        }
    else
        (a.requestIdleCallback = v),
            (a.cancelIdleCallback = O),
            a.document &&
                document.addEventListener &&
                (a.addEventListener('scroll', T, !0),
                a.addEventListener('resize', T),
                document.addEventListener('focus', T, !0),
                document.addEventListener('mouseover', T, !0),
                ['click', 'keypress', 'touchstart', 'mousedown'].forEach(function (e) {
                    document.addEventListener(e, T, {
                        capture: !0,
                        passive: !0
                    });
                }),
                a.MutationObserver &&
                    new MutationObserver(T).observe(document.documentElement, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }));
    return {
        request: v,
        cancel: O
    };
}),
    'function' == typeof define && define.amd ? define([], r) : e.exports ? (e.exports = r()) : (window.idleCallbackShim = r());
