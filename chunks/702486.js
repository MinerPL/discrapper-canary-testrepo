n.d(t, {
    _: function () {
        return c;
    }
});
var s = n(470079),
    r = n(772848),
    a = n(638730),
    i = n(626135);
let o = (e, t, n, s) => {
        let { scrollTop: r = 0, scrollOffset: a = 0, scrollHeight: o = 0, scrollWidth: c = 0 } = s;
        if (o > 0) {
            let s = (r + a) / o;
            s > 0 &&
                i.default.track(e, {
                    scroll_visible_percent: s,
                    source: n,
                    page_height: Math.round(o),
                    page_width: Math.round(c),
                    page_session_id: t
                });
        }
    },
    c = (e, t) => {
        let n = s.useRef(null),
            i = s.useRef((0, r.Z)()),
            c = (0, a.h)(o, 5000, [], { trailing: !0 }),
            l = s.useCallback(() => {
                var s;
                let r = null === (s = n.current) || void 0 === s ? void 0 : s.getScrollerNode();
                null != r &&
                    c(e, i.current, t, {
                        scrollTop: r.scrollTop,
                        scrollOffset: r.offsetHeight,
                        scrollHeight: r.scrollHeight,
                        scrollWidth: r.scrollWidth
                    });
            }, [c, e, t]);
        return {
            scrollerRef: n,
            scrollHandler: l,
            sessionId: i.current
        };
    };
