t.d(n, {
    T: function () {
        return c;
    },
    Z: function () {
        return _;
    }
}), t(653041);
var i = t(470079), l = t(442837), o = t(734307), E = t(854444), r = t(131704), u = t(680089), a = t(888369), s = t(981631), d = t(647086);
function _(e, n, t) {
    return C(e === d._ || e === s.I_8 ? (0, E.t)() : o.Z.getGuildWithoutChangingCommunityRows(e).guildChannels, n, t);
}
function c(e, n, t, o, E) {
    let r = (0, l.e7)([a.default], () => a.default.getGuildChangeSentinel(e)), s = (0, l.e7)([u.Z], () => u.Z.version);
    return (0, i.useMemo)(() => C(n, o, E).map(e => e.id), [
        n,
        t,
        r,
        s
    ]);
}
function C(e, n, t) {
    let i = [];
    return e.forEachShownChannel(e => {
        ((0, r.r8)(e.type) || n && (0, r.bw)(e.type)) && i.push(e);
    }, t), i;
}
