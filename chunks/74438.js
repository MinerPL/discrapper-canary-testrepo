i.r(t), i.d(t, {
    default: function () {
        return f;
    }
});
var n = i(735250), a = i(470079), r = i(399606), o = i(626135), s = i(894653), l = i(738130), c = i(132871), d = i(961106), u = i(62413), h = i(603406), _ = i(165209), p = i(981631), m = i(246125);
function f() {
    let e = (0, c.useApplicationDirectoryHistory)(e => e.guildId), t = (0, r.e7)([s.Z], () => s.Z.getCategories()), i = (0, c.getPreviousView)();
    return a.useEffect(() => {
        o.default.track(p.rMx.APP_DIRECTORY_PAGE_VIEWED, {
            current_page: c.ApplicationDirectoryViews.HOME,
            previous_page: null == i ? void 0 : i.type,
            guild_id: e,
            referrer: document.referrer
        });
    }, [
        e,
        i
    ]), (0, n.jsxs)(l.Z, {
        children: [
            (0, n.jsx)(h.Z, {}),
            null != t && t.length > 0 && (0, n.jsx)(d.Z, { className: m.categoryList }),
            (0, n.jsx)('main', {
                className: m.collectionsContainer,
                children: (0, n.jsx)(u.Z, {})
            }),
            (0, n.jsx)(_.Z, {})
        ]
    });
}
