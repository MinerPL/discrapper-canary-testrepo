n.d(t, {
    K: function () {
        return o;
    }
});
var r = n(339085), i = n(176354), a = n(185923);
function o(e, t) {
    if (null == e.id)
        return !0;
    let n = r.Z.getCustomEmojiById(e.id);
    return null != n && !i.ZP.isEmojiDisabled({
        emoji: n,
        channel: t,
        intention: a.Hz.STATUS
    });
}
