a.d(n, {
    $: function () {
        return c;
    },
    W: function () {
        return u;
    }
});
var t = a(470079),
    s = a(442837),
    i = a(592125),
    l = a(944486),
    r = a(914010),
    o = a(771845);
function c() {
    var e;
    let { allowGdmActivityChannelSuggestion: n } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { allowGdmActivityChannelSuggestion: !1 },
        a = l.Z.getVoiceChannelId(),
        t = i.Z.getChannel(a);
    if (null != t && null != t.guild_id) return t.guild_id;
    if (null == t || !n) return null !== (e = r.Z.getLastSelectedGuildId()) && void 0 !== e ? e : o.ZP.getFlattenedGuildIds()[0];
}
function u() {
    let e = (0, s.e7)([o.ZP], () => o.ZP.getFlattenedGuildIds());
    return t.useMemo(
        () =>
            e.map((e) => ({
                label: e,
                value: e
            })),
        [e]
    );
}
