n.d(t, {
    Q: function () {
        return u;
    },
    Z: function () {
        return l;
    }
});
var r = n(442837),
    i = n(314897),
    a = n(592125),
    s = n(944486),
    o = n(885110);
function l() {
    let e = (0, r.e7)([i.default], () => i.default.getId()),
        t = (0, r.e7)([s.Z], () => s.Z.getVoiceChannelId()),
        n = (0, r.e7)([a.Z], () => a.Z.getChannel(t), [t]),
        l = (0, r.e7)([o.Z], () => null != o.Z.getBroadcast()),
        u = ((null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel())) || null == t;
    return !l && u;
}
function u() {
    if (null != o.Z.getBroadcast()) return !1;
    let e = s.Z.getVoiceChannelId();
    if (null == e) return !0;
    let t = i.default.getId(),
        n = a.Z.getChannel(e);
    return (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel());
}
