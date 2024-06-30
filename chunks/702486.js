n.d(t, {
    _: function () {
        return l;
    }
});
var s = n(470079), r = n(772848), a = n(638730), o = n(626135);
let i = (e, t, n, s) => {
        let {
            scrollTop: r = 0,
            scrollOffset: a = 0,
            scrollHeight: i = 0,
            scrollWidth: l = 0
        } = s;
        if (i > 0) {
            let s = (r + a) / i;
            s > 0 && o.default.track(e, {
                scroll_visible_percent: s,
                source: n,
                page_height: Math.round(i),
                page_width: Math.round(l),
                page_session_id: t
            });
        }
    }, l = (e, t) => {
        let n = s.useRef(null), o = s.useRef((0, r.Z)()), l = (0, a.h)(i, 5000, [], { trailing: !0 }), c = s.useCallback(() => {
                var s;
                let r = null === (s = n.current) || void 0 === s ? void 0 : s.getScrollerNode();
                null != r && l(e, o.current, t, {
                    scrollTop: r.scrollTop,
                    scrollOffset: r.offsetHeight,
                    scrollHeight: r.scrollHeight,
                    scrollWidth: r.scrollWidth
                });
            }, [
                l,
                e,
                t
            ]);
        return {
            scrollerRef: n,
            scrollHandler: c,
            sessionId: o.current
        };
    };
