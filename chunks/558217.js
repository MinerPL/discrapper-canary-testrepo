n.d(t, {
    O: function () {
        return s;
    }
});
var r = n(594174), i = n(339085), a = n(396352), o = n(664437);
function s(e) {
    if (null == e || null == r.default.getCurrentUser())
        return;
    let t = i.Z.getTopEmojisMetadata(e);
    if (null != t) {
        let {topEmojisTTL: e} = t;
        if (null == e || Date.now() < e)
            return;
    }
    if (!a.Z.getIsFetching(e))
        (0, o.pj)(e);
}
