s.d(t, {
    Z: function () {
        return h;
    }
}),
    s(47120);
var n = s(470079),
    l = s(790333),
    i = s.n(l),
    a = s(442837),
    r = s(749210),
    o = s(911969),
    c = s(271383),
    d = s(594174),
    u = s(823379);
function h(e, t) {
    let s = (0, a.Wu)([c.ZP], () => c.ZP.getMemberIds(e), [e]),
        [l, h] = n.useMemo(() => {
            var e;
            return i()(
                null == (e = t)
                    ? []
                    : Object.values(e)
                          .filter((e) => e.type === o.BN.MEMBER)
                          .map((e) => e.id),
                (e) => s.includes(e)
            );
        }, [t, s]);
    return (
        n.useEffect(() => {
            h.length > 0 && null != e && r.Z.requestMembersById(e, h, !1);
        }, [h, e]),
        (0, a.Wu)([d.default], () => l.map(d.default.getUser).filter(u.lm), [l])
    );
}
