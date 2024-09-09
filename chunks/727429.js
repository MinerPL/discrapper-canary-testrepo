n.d(t, {
    Z: function () {
        return o;
    },
    e: function () {
        return l;
    }
});
var r = n(442837),
    i = n(914010),
    a = n(853856),
    s = n(981631);
function o(e) {
    let t = (0, r.e7)([i.Z], () => i.Z.getGuildId());
    return null != t ? t : e.getGuildId();
}
function l(e) {
    return i.Z.getGuildId() !== s.I_8 ? e.getGuildId() : a.Z.isFavorite(e.id) || (e.isThread() && a.Z.isFavorite(e.parent_id)) ? s.I_8 : e.getGuildId();
}
