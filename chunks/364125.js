n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(470079), a = n(399606), l = n(673125), s = n(292793), r = n(88315), o = n(179295), c = n(370663), u = n(743597);
function d(e) {
    let {
            user: t,
            channelId: n,
            streamerId: d,
            stream: h,
            focused: p,
            canvas: m
        } = e, _ = i.useRef(!1), f = (0, a.e7)([l.Z], () => l.Z.getDrawMode()), E = (0, o.Z)((0, c.Z)(t.id, n, d), h), C = (0, o.Z)((0, u.Z)(t.id, n, d), h), g = i.useCallback((e, t, n) => {
            if (null == m)
                return;
            let {
                x: i,
                y: a
            } = (0, r.hn)(m, n);
            switch (t.type) {
            case s.W.LINE:
                return E[e](t, i, a);
            case s.W.EMOJI_HOSE:
                return C[e](t, i, a);
            }
        }, [
            m,
            E,
            C
        ]), I = i.useCallback(e => {
            if (!!p && null != f)
                e.stopPropagation(), _.current = !0, g('handleMouseDown', f, e);
        }, [
            g,
            f,
            p
        ]), x = i.useCallback(e => {
            if (!!p && null != f)
                e.stopPropagation(), _.current && g('handleMouseMove', f, e);
        }, [
            g,
            f,
            p
        ]), T = i.useCallback(e => {
            if (!!p && null != f)
                e.stopPropagation(), _.current = !1, g('handleMouseUp', f, e);
        }, [
            g,
            f,
            p
        ]), N = i.useCallback(e => {
            if (!!_.current && null != f)
                g('handleMouseEnter', f, e);
        }, [
            g,
            f
        ]);
    return i.useEffect(() => {
        let e = e => {
            if (null != f)
                _.current = !1, g('handleMouseUp', f, e);
        };
        return window.addEventListener('mouseup', e), () => window.removeEventListener('mouseup', e);
    }, [
        g,
        f
    ]), {
        handleClick: i.useCallback(e => {
            p && null != f && e.stopPropagation();
        }, [
            f,
            p
        ]),
        handleMouseDown: I,
        handleMouseEnter: N,
        handleMouseMove: x,
        handleMouseUp: T
    };
}
