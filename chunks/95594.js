n.d(t, {
    Z: function () {
        return l;
    }
}),
    n(47120);
var r = n(470079),
    i = n(663507),
    a = n(924428),
    s = n(151973);
let o = Object.freeze({
    coordsMap: {},
    visibleSections: {},
    totalHeight: 0,
    gridData: {
        boundaries: [],
        coordinates: {}
    }
});
function l(e) {
    let { sections: t, columns: n, getItemKey: l, getItemHeight: u, getSectionHeight: c, chunkSize: d = 250, getScrollerState: _, maxBufferWidth: E, itemGutter: f, removeEdgeItemGutters: h, sectionGutter: p, padding: m, paddingVertical: I, paddingHorizontal: T, dir: g } = e,
        S = (0, a.Z)(),
        A = (0, r.useRef)(o),
        [N] = (0, r.useState)(() => new i.ZP()),
        v = _(),
        O = Math.min(null != E ? E : 1 / 0, v.offsetWidth),
        R = null != E ? Math.max(0, v.offsetWidth - E) : 0,
        {
            dirty: C,
            chunkStart: y,
            chunkEnd: D,
            forceUpdateOnChunkChange: L
        } = (0, s.Z)({
            chunkSize: d,
            getScrollerState: _,
            forceUpdate: S
        });
    return (
        (A.current = (0, r.useMemo)(
            () =>
                C > 0
                    ? A.current
                    : (N.mergeProps({
                          sections: t,
                          columns: n,
                          getItemKey: l,
                          getItemHeight: u,
                          getSectionHeight: c,
                          bufferWidth: O,
                          itemGutter: f,
                          removeEdgeItemGutters: h,
                          sectionGutter: p,
                          padding: m,
                          paddingVertical: I,
                          paddingHorizontal: T,
                          marginLeft: R / 2,
                          dir: g
                      }),
                      N.computeVisibleSections(Math.max(0, y * d), D * d),
                      N.getState()),
            [C, N, t, n, l, u, c, y, D, d, f, h, p, m, I, T, O, g]
        )),
        {
            ...A.current,
            masonryComputer: N,
            forceUpdateOnChunkChange: L,
            forceUpdate: S
        }
    );
}
