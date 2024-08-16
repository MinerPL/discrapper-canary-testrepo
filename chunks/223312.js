n.d(s, {
    j: function () {
        return i;
    }
}),
    n(47120);
var a = n(470079),
    t = n(442837),
    r = n(826581),
    l = n(246364);
function i(e) {
    let { guildId: s, applicationStatus: n, sortOrder: i } = e,
        o = (0, t.e7)([r.Z], () => r.Z.getRequests(s, n), [n, s]);
    return {
        guildJoinRequests: a.useMemo(() => (i === l.Nw.TIMESTAMP_DESC ? [...o].reverse() : o), [i, o])
    };
}
