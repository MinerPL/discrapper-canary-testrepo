n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(339085), i = n(131704), a = n(176354), o = n(700785), s = n(981631);
function l(e, t, n) {
    if (e.type !== s.IIU.CUSTOM_STATUS || null == e.emoji)
        return !1;
    let l = e.emoji;
    if (null == l.id || null == n || !(0, i.zi)(n.type))
        return !0;
    let u = r.Z.getUsableCustomEmojiById(l.id), c = a.ZP.isInternalEmojiForGuildId(u, n.getGuildId()), d = o.BT({
            permission: s.Plq.USE_EXTERNAL_EMOJIS,
            user: t,
            context: n
        });
    return !c || d;
}
