t.d(n, {
    Z: function () {
        return l;
    }
});
var i = t(442837),
    r = t(592125),
    u = t(944486);
function l() {
    return (0, i.e7)([u.Z, r.Z], () => {
        let e = u.Z.getVoiceChannelId();
        if (null != e) {
            let n = r.Z.getChannel(e);
            if (null == n ? void 0 : n.isGuildStageVoice()) return n;
        }
        return null;
    });
}
