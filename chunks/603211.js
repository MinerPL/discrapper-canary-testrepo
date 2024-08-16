t.d(n, {
    Z: function () {
        return l;
    }
}),
    t(47120);
var i = t(470079),
    a = t(225857),
    s = t(290843);
function l(e) {
    let { type: n, index: t, optionId: l, onDragStart: r, onDragComplete: o, onDragReset: d } = e,
        [c, u] = i.useState(!1),
        [, I] = (0, a.c)({
            type: n,
            item: () => (
                r(l),
                {
                    id: l,
                    position: t
                }
            ),
            canDrag: () => c,
            collect: (e) => ({ isDragging: e.isDragging() }),
            end: (e, n) => {
                let t = n.getDropResult();
                if (null == t) {
                    d();
                    return;
                }
                o(t.optionId);
            }
        }),
        [{ dragSourcePosition: m }, _] = (0, s.L)({
            accept: n,
            canDrop: () => !0,
            collect: (e) => {
                let n = e.getItem();
                return null != n && e.isOver() && e.canDrop() ? { dragSourcePosition: n.position } : { dragSourcePosition: null };
            },
            drop: () => ({ optionId: l })
        });
    return {
        drag: I,
        dragSourcePosition: m,
        drop: _,
        setIsDraggable: u
    };
}
