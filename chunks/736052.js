n.d(t, {
    Z: function () {
        return u;
    }
}), n(789020);
var i = n(399606), a = n(592125), l = n(630388), s = n(637271), r = n(931261), o = n(981631), c = n(176505);
function u(e) {
    var t;
    let n = (0, i.e7)([a.Z], () => a.Z.getChannel(e)), u = null != n && (0, l.yE)(n.flags, c.zZ.IS_GUILD_RESOURCE_CHANNEL), d = (0, i.e7)([s.Z], () => s.Z.getSelectedResourceChannelId(null == n ? void 0 : n.guild_id)), h = (0, r.g)(null !== (t = null == n ? void 0 : n.guild_id) && void 0 !== t ? t : o.lds);
    return null != n && h && u && d === n.id;
}
