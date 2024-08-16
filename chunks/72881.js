n.d(t, {
    X: function () {
        return u;
    },
    y: function () {
        return _;
    }
});
var i = n(731965),
    a = n(212093),
    s = n(878727),
    r = n(706454),
    l = n(683301),
    o = n(900849),
    c = n(540742),
    d = n(731455);
function u() {
    var e;
    let t = d.dU,
        n = r.default.locale;
    return (null !== (e = t.find((e) => e.code === n)) && void 0 !== e ? e : t[0]).code;
}
function _(e) {
    let { loadId: t, categoryId: n, offset: r, searchQuery: d, languageCode: u } = e;
    if ('' !== d.trim())
        !(0, s.x)(d) &&
            ((0, i.j)(() =>
                c.B.setState({
                    searchResultsQuery: d,
                    isSearchVisible: !0,
                    searchCategoryId: n,
                    searchLanguageCode: u
                })
            ),
            o.tI(t, n),
            null == l.ZP.getTopCategoryCounts(d) && a.G7(d, { approximate_member_count: o.sq }),
            a.bR(
                d,
                {
                    categoryId: n,
                    preferredLocale: u,
                    offset: r,
                    length: 12,
                    filters: { approximate_member_count: o.sq }
                },
                !1
            ));
}
