n.d(t, {
    D: function () {
        return c;
    },
    j: function () {
        return u;
    }
}), n(47120);
var r = n(470079), i = n(399606), a = n(430824), o = n(709054), s = n(763296);
function l(e, t) {
    return o.default.keys(e).filter(e => null == t.get(e));
}
function u() {
    let e = (0, i.e7)([a.Z], () => a.Z.getGuilds()), t = (0, i.e7)([s.Z], () => s.Z.getSounds());
    return (0, r.useMemo)(() => l(e, t), [
        e,
        t
    ]);
}
function c() {
    let e = a.Z.getGuilds();
    return l(e, s.Z.getSounds());
}
