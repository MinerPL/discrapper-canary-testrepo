n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var i = n(470079),
    a = n(442837),
    s = n(162461),
    l = n(71585),
    r = n(146282),
    o = n(561308);
let c = new Set();
function u(e) {
    let t = (0, a.e7)(
        [l.Z, r.Z],
        () => {
            let e = r.Z.getDebugImpressionCappingDisabled();
            return !(0, s.wm)('useFilterImpressionCappedContent') || e ? c : l.Z.getImpressionCappedItemIds();
        },
        [e]
    );
    return i.useMemo(() => {
        if (null == e)
            return {
                entries: e,
                filteredIds: c
            };
        let n = new Set();
        return {
            entries: e.filter((e) => !!(0, o.kr)(e) || !t.has(e.id) || (n.add(e.id), !1)),
            filteredIds: n
        };
    }, [e, t]);
}
