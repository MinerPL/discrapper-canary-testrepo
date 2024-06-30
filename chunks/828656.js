n.d(t, {
    Z: function () {
        return i;
    }
}), n(47120);
var s = n(225857), a = n(290843);
function i(e, t, n, i) {
    let [{isDragging: r}, l, o] = (0, s.c)({
            type: t,
            item: () => ({ index: n }),
            collect: e => ({ isDragging: e.isDragging() })
        }), [, c] = (0, a.L)({
            accept: t,
            hover(t, s) {
                if (null == e.current)
                    return;
                let a = t.index;
                if (a === n)
                    return;
                let r = e.current.getBoundingClientRect(), l = (r.bottom - r.top) / 2, o = s.getClientOffset().y - r.top;
                if ((!(a < n) || !(o < l)) && (!(a > n) || !(o > l)))
                    i(a, n), t.index = n;
            }
        });
    return {
        drag: l,
        dragPreview: o,
        drop: c,
        isDragging: r
    };
}
