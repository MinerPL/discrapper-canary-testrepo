n.d(t, {
    v: function () {
        return s;
    }
}), n(47120), n(653041);
var i = n(975984), a = n(486527), l = n(689938);
function s(e, t) {
    if (t !== a.AR.ALL)
        return [{
                entries: (0, i.TR)(e),
                appendEndCard: !0
            }];
    let n = [], s = (0, i.Lz)(e), r = new Set(s.map(e => e.guildId));
    s.length > 0 && n.push({
        header: l.Z.Messages.SEARCH_NEWEST,
        entries: s,
        appendEndCard: !1
    });
    let o = e.filter(e => !r.has(e.guildId));
    return (o = (0, i.Th)(o)).length > 0 && n.push({
        header: l.Z.Messages.ALL_SERVERS,
        entries: o,
        appendEndCard: !0
    }), n;
}
