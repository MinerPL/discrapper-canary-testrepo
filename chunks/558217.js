n.d(t, {
    O: function () {
        return o;
    }
});
var r = n(594174),
    i = n(339085),
    a = n(396352),
    s = n(664437);
function o(e) {
    if (null == e || null == r.default.getCurrentUser()) return;
    let t = i.ZP.getTopEmojisMetadata(e);
    if (null != t) {
        let { topEmojisTTL: e } = t;
        if (null == e || Date.now() < e) return;
    }
    if (!a.Z.getIsFetching(e)) (0, s.pj)(e);
}
