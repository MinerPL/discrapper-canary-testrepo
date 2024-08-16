n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(653041);
var s = n(442837),
    a = n(977258),
    i = n(958832),
    r = n(592125),
    l = n(981631);
function o(e) {
    return (0, s.Wu)([i.Z, r.Z], () => {
        var t;
        let n = (null !== (t = i.Z.getTopChannelIds(e.id)) && void 0 !== t ? t : []).map((e) => r.Z.getChannel(e)).filter((t) => null == t || t.id !== e.rulesChannelId),
            s = [],
            o = 0;
        return (
            n.forEach((e) => {
                if (e.type === l.d4z.GUILD_ANNOUNCEMENT) {
                    if (o >= 2) return;
                    o++;
                }
                s.length < 5 && !s.includes(e) && s.push(e);
            }),
            s.sort((t, n) => ((0, a.s)(e.id, n.id) ? 1 : 0) - ((0, a.s)(e.id, t.id) ? 1 : 0)),
            s
        );
    });
}
