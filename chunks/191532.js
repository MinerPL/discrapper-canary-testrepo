n.d(t, {
    Z: function () {
        return a;
    }
});
var r = n(374470);
function i(e, t) {
    if ('horizontal' === t) {
        let { scrollLeft: t, scrollWidth: n, offsetWidth: r } = e;
        return {
            scrollPosition: t,
            scrollSize: n,
            offsetSize: r
        };
    }
    let { scrollTop: n, scrollHeight: r, offsetHeight: i } = e;
    return {
        scrollPosition: n,
        scrollSize: r,
        offsetSize: i
    };
}
function a(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 'vertical',
        s = (e) => {
            let { to: r, animate: s, callback: o } = e,
                { scrollPosition: l, scrollSize: u, offsetSize: c } = i(t(), a);
            n.to({
                to: (function (e, t, n) {
                    let r = t - n + 1;
                    return e >= r - 1 ? r : Math.max(0, e);
                })(r, u, c),
                from: l,
                animate: s,
                callback: o
            });
        },
        o = (e) => {
            let { start: n, end: r, shouldScrollToStart: o = !1, padding: l = 0, animate: u, callback: c } = e,
                { scrollPosition: d, offsetSize: _ } = i(t(), a);
            (n -= l),
                (r += l),
                n >= d && r <= d + _
                    ? null != c && c()
                    : n < d || o
                      ? s({
                            to: n,
                            animate: u,
                            callback: c
                        })
                      : s({
                            to: r - _,
                            animate: u,
                            callback: c
                        });
        };
    return {
        spring: n,
        scrollTo: s,
        mergeTo: n.mergeTo,
        scrollIntoViewRect: o,
        scrollIntoViewNode(t) {
            let { node: n, shouldScrollToStart: i = !1, padding: s = 0, animate: l = !1, callback: u } = t,
                { current: c } = e;
            if (null == c) return;
            let { offset: d, offsetSize: _ } = (function (e, t, n) {
                let i = 'horizontal' === t ? e.offsetWidth : e.offsetHeight,
                    a = 'horizontal' === t ? e.offsetLeft : e.offsetTop,
                    s = e.offsetParent;
                for (; null != s && s !== n; ) (0, r.k)(s, HTMLElement) ? ((a += 'horizontal' === t ? s.offsetLeft : s.offsetTop), (s = s.offsetParent)) : (s = s.parentNode);
                return {
                    offset: a,
                    offsetSize: i
                };
            })(n, a, c);
            o({
                start: d,
                end: d + _,
                shouldScrollToStart: i,
                padding: s,
                animate: l,
                callback: u
            });
        },
        scrollPageUp() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: r, offsetSize: o } = i(t(), a);
            s({
                to: r - 0.9 * o,
                animate: e,
                callback: n
            });
        },
        scrollPageDown() {
            let { animate: e = !1, callback: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                { scrollPosition: r, offsetSize: o } = i(t(), a);
            s({
                to: r + 0.9 * o,
                animate: e,
                callback: n
            });
        },
        scrollToTop() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s({
                to: 0,
                animate: e,
                callback: t
            });
        },
        scrollToBottom() {
            let { animate: e = !1, callback: t } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            s({
                to: Number.MAX_SAFE_INTEGER,
                animate: e,
                callback: t
            });
        },
        isScrolledToTop: () => 0 === i(t(), a).scrollPosition,
        isScrolledToBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: r } = i(t(), a);
            return e >= n - r;
        },
        getDistanceFromTop: () => Math.max(0, i(t(), a).scrollPosition),
        getDistanceFromBottom() {
            let { scrollPosition: e, scrollSize: n, offsetSize: r } = i(t(), a);
            return Math.max(0, n - r - e);
        }
    };
}
