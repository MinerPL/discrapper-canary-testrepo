s.d(t, {
    C: function () {
        return _;
    },
    V: function () {
        return d;
    }
}), s(47120);
var n = s(470079), a = s(392711), i = s.n(a), r = s(442837), o = s(271383), l = s(430824), c = s(353093);
function d() {
    return (0, r.Wu)([
        l.Z,
        o.ZP
    ], () => {
        let e = l.Z.getGuilds();
        return i()(e).values().filter(e => {
            var t;
            return (0, c.EJ)(e) && (null === (t = o.ZP.getSelfMember(e.id)) || void 0 === t ? void 0 : t.joinedAt) != null;
        }).value();
    });
}
function _() {
    let e = d();
    return n.useMemo(() => new Set(e.map(e => {
        let {id: t} = e;
        return t;
    })), [e]);
}
