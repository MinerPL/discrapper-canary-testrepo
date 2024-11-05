n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(339085),
    i = n(131704),
    a = n(176354),
    s = n(700785),
    o = n(981631);
function l(e, t, n) {
    if (e.type !== o.IIU.CUSTOM_STATUS || null == e.emoji) return !1;
    let l = e.emoji;
    if (null == l.id || null == n || !(0, i.zi)(n.type)) return !0;
    let u = r.ZP.getUsableCustomEmojiById(l.id),
        c = a.ZP.isInternalEmojiForGuildId(u, n.getGuildId()),
        d = s.BT({
            permission: o.Plq.USE_EXTERNAL_EMOJIS,
            user: t,
            context: n
        });
    return !c || d;
}
