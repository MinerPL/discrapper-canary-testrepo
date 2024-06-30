s.d(n, {
    Z: function () {
        return E;
    }
});
var t = s(735250), l = s(470079), i = s(512722), a = s.n(i), r = s(481060), o = s(626135), d = s(358085), u = s(981631), c = s(689938);
function E(e) {
    let n = l.useCallback(() => {
        a()(null != e, 'text cannot be null'), o.default.track(u.rMx.MESSAGE_MENU_GOOGLE_SEARCHED), window.open('https://www.google.com/search?q='.concat(encodeURIComponent(e)), '_blank');
    }, [e]);
    return d.isPlatformEmbedded && null != e && (null == e ? void 0 : e.length) !== 0 ? [(0, t.jsx)(r.MenuItem, {
            id: 'search-google',
            label: c.Z.Messages.SEARCH_WITH_GOOGLE,
            action: n
        }, 'search-google')] : null;
}
