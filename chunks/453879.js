n.d(t, {
    v: function () {
        return l;
    }
}),
    n(47120),
    n(653041);
var i = n(975984),
    a = n(486527),
    s = n(689938);
function l(e, t) {
    if (t !== a.AR.ALL)
        return [
            {
                entries: (0, i.TR)(e),
                appendEndCard: !0
            }
        ];
    let n = [],
        l = (0, i.Lz)(e),
        r = new Set(l.map((e) => e.guildId));
    l.length > 0 &&
        n.push({
            header: s.Z.Messages.SEARCH_NEWEST,
            entries: l,
            appendEndCard: !1
        });
    let o = e.filter((e) => !r.has(e.guildId));
    return (
        (o = (0, i.Th)(o)).length > 0 &&
            n.push({
                header: s.Z.Messages.ALL_SERVERS,
                entries: o,
                appendEndCard: !0
            }),
        n
    );
}
