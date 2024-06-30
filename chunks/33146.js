n.d(t, {
    Z: function () {
        return s;
    }
}), n(411104);
var a = n(735250);
n(470079);
var i = n(481060), l = n(34674), r = n(927356), c = n(689938);
function s(e) {
    let t, n, {
            category: s,
            className: o,
            onViewAll: d
        } = e;
    return null == s || (0, l.m0)(s) ? (t = c.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, n = c.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (t = c.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({ categoryName: s.name }), n = c.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
        viewAllHook: (e, t) => (0, a.jsx)(i.Anchor, {
            onClick: d,
            children: e
        }, t)
    })), (0, a.jsx)(r.Z, {
        className: o,
        heading: t,
        body: n
    });
}
