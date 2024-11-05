n.d(t, {
    U: function () {
        return o;
    }
}),
    n(47120);
var i = n(192379),
    r = n(49898),
    a = n(25912);
let l = 20 + r.U1 - r.Kl,
    s = 20 + r.U1 + r.Kl;
function o(e) {
    let { isSearchBarVisible: t, isSearchBarEmpty: n } = e,
        [o, c] = i.useState(r.WB.DEFAULT),
        d = i.useCallback(
            (e) => {
                if (!t) return;
                let i = Math.round(e);
                switch (o) {
                    case r.WB.DEFAULT:
                        i < 20 && c(n ? r.WB.COLLAPSED : r.WB.FLOATING);
                        break;
                    case r.WB.COLLAPSED:
                        i > l && c(r.WB.DEFAULT);
                        break;
                    case r.WB.FLOATING:
                        i > s && c(r.WB.DEFAULT);
                }
            },
            [n, t, o]
        ),
        u = i.useCallback(() => {
            c(r.WB.FLOATING);
        }, []),
        h = i.useCallback(() => {
            o === r.WB.FLOATING && n && c(r.WB.COLLAPSED);
        }, [n, o]),
        m = o === r.WB.FLOATING ? a.floatingSearchTabsMask : void 0;
    return {
        searchBarState: o,
        onTabsAvailableWidthChange: d,
        tabsClassName: m,
        onCollapsedSearchBarClick: u,
        onSearchBarBlur: h
    };
}
