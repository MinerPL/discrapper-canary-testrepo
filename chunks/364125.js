n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(470079),
    a = n(399606),
    s = n(673125),
    l = n(292793),
    r = n(88315),
    o = n(179295),
    c = n(370663),
    u = n(743597);
function d(e) {
    let { user: t, channelId: n, streamerId: d, stream: h, focused: m, canvas: p } = e,
        _ = i.useRef(!1),
        E = (0, a.e7)([s.Z], () => s.Z.getDrawMode()),
        f = (0, o.Z)((0, c.Z)(t.id, n, d), h),
        C = (0, o.Z)((0, u.Z)(t.id, n, d), h),
        g = i.useCallback(
            (e, t, n) => {
                if (null == p) return;
                let { x: i, y: a } = (0, r.hn)(p, n);
                switch (t.type) {
                    case l.W.LINE:
                        return f[e](t, i, a);
                    case l.W.EMOJI_HOSE:
                        return C[e](t, i, a);
                }
            },
            [p, f, C]
        ),
        I = i.useCallback(
            (e) => {
                if (!!m && null != E) e.stopPropagation(), (_.current = !0), g('handleMouseDown', E, e);
            },
            [g, E, m]
        ),
        x = i.useCallback(
            (e) => {
                if (!!m && null != E) e.stopPropagation(), _.current && g('handleMouseMove', E, e);
            },
            [g, E, m]
        ),
        T = i.useCallback(
            (e) => {
                if (!!m && null != E) e.stopPropagation(), (_.current = !1), g('handleMouseUp', E, e);
            },
            [g, E, m]
        ),
        N = i.useCallback(
            (e) => {
                if (!!_.current && null != E) g('handleMouseEnter', E, e);
            },
            [g, E]
        );
    return (
        i.useEffect(() => {
            let e = (e) => {
                if (null != E) (_.current = !1), g('handleMouseUp', E, e);
            };
            return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
        }, [g, E]),
        {
            handleClick: i.useCallback(
                (e) => {
                    m && null != E && e.stopPropagation();
                },
                [E, m]
            ),
            handleMouseDown: I,
            handleMouseEnter: N,
            handleMouseMove: x,
            handleMouseUp: T
        }
    );
}
