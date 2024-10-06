n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(442837),
    r = n(89182),
    l = n(706454),
    o = n(762692),
    c = n(164991),
    d = n(726115),
    u = n(731455),
    _ = n(689938);
function E(e) {
    let { loadId: t } = e,
        n = (0, s.e7)([l.default], () => (0, d.Xp)([l.default])),
        E = (0, c.Dm)(),
        h = null != E ? E : n,
        m = a.useCallback(
            (e) => {
                (0, c.LD)({ languageCode: e });
                let n = (0, c.Zq)();
                o.Z.clearAlgoliaSearchResults({ ignoreQueries: [n] }),
                    (0, d.oT)({
                        loadId: t,
                        categoryId: (0, c.lx)(),
                        query: n,
                        languageCode: e
                    });
            },
            [t]
        ),
        I = a.useMemo(
            () =>
                u.dU.map((e) => ({
                    id: e.code,
                    label: e.name
                })),
            []
        ),
        p = a.useMemo(() => {
            var e;
            let t = u.dU.find((e) => e.code === h);
            return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : _.Z.Messages.en;
        }, [h]);
    return (0, i.jsx)(r.Z, {
        items: I,
        title: p,
        onSelect: m,
        selected: h,
        'aria-label': _.Z.Messages.GLOBAL_DISCOVERY_SERVERS_LANGUAGE_FILTER
    });
}
