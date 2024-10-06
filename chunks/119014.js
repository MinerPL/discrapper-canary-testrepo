n.d(t, {
    i: function () {
        return o;
    }
}),
    n(47120);
var i = n(470079),
    a = n(442837),
    s = n(894653),
    r = n(979007),
    l = n(689938);
function o() {
    let e = (0, a.e7)([s.Z], () => s.Z.getCategories()),
        [t, n] = i.useState(r.k),
        o = i.useMemo(
            () => [
                {
                    id: r.k,
                    label: l.Z.Messages.GLOBAL_DISCOVERY_APPS_FEATURED_CATEGORY
                },
                ...e.map((e) => ({
                    id: e.id.toString(),
                    label: e.name
                }))
            ],
            [e]
        ),
        c = i.useCallback((e) => {
            n(e);
        }, []);
    return {
        tabs: o,
        selectedTab: null != t ? t : o[0].id,
        onSelectTab: c
    };
}
