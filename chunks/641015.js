n.d(t, {
    D: function () {
        return o;
    },
    Z: function () {
        return l;
    }
});
var r = n(592125),
    i = n(496675),
    a = n(944486),
    s = n(981631);
function o() {
    let e = a.Z.getVoiceChannelId();
    return l(r.Z.getChannel(e));
}
function l(e) {
    if (null == e) return !1;
    if (s.TPd.CALLABLE.has(e.type)) return !0;
    let t = i.Z.can(s.Plq.USE_SOUNDBOARD, e),
        n = i.Z.can(s.Plq.SPEAK, e);
    return e.type === s.d4z.GUILD_VOICE && t && n;
}
