n.d(t, {
    x: function () {
        return o;
    }
});
var r = n(594174),
    i = n(130402),
    a = n(174065),
    s = n(353842);
async function o() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'unknown';
    if (null == r.default.getCurrentUser()) return;
    let { isEmojiTextMatchSuggestionsEnabled: t } = s.Z.getCurrentConfig({ location: e });
    if (!t) {
        a.Z.hasPersistedState() && a.Z.clear();
        return;
    }
    if (a.Z.getIsFetching()) return;
    let n = a.Z.getEmojiCaptionsTTL();
    if (!(null != n && Date.now() < n)) await (0, i.n)();
}
