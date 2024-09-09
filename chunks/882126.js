n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(143927),
    r = n(731965),
    l = n(442837),
    o = n(89182),
    c = n(706454),
    d = n(859921),
    u = n(416771),
    _ = n(731455),
    E = n(689938);
function h(e) {
    let { loadId: t } = e,
        n = (0, l.e7)([c.default], () => c.default.locale),
        h = (0, d.B)((e) => {
            let { searchLanguageCode: t } = e;
            return t;
        }, s.Z),
        m = null != h ? h : n,
        I = a.useCallback(
            (e) => {
                (0, r.j)(() => d.B.setState({ searchLanguageCode: e }));
                let n = d.B.getState();
                (0, u.y)({
                    loadId: t,
                    categoryId: n.searchCategoryId,
                    offset: 0,
                    searchQuery: n.searchQuery,
                    languageCode: e
                });
            },
            [t]
        ),
        g = a.useMemo(
            () =>
                _.dU.map((e) => ({
                    id: e.code,
                    label: e.name
                })),
            []
        ),
        p = a.useMemo(() => {
            var e;
            let t = _.dU.find((e) => e.code === m);
            return null !== (e = null == t ? void 0 : t.name) && void 0 !== e ? e : E.Z.Messages.en;
        }, [m]);
    return (0, i.jsx)(o.Z, {
        items: g,
        title: p,
        onSelect: I,
        selected: m,
        'aria-label': E.Z.Messages.GLOBAL_DISCOVERY_SERVERS_LANGUAGE_FILTER
    });
}
