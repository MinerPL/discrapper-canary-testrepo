var n = t(470079),
    a = t(442837),
    i = t(78839),
    r = t(231338);
s.Z = function (e) {
    let { subscriptionFilter: s } = e,
        t = (0, a.e7)([i.ZP], () => i.ZP.getSubscriptions(!0)),
        o = n.useMemo(() => (null == t ? [] : Object.values(t).filter((e) => !!(e.type === r.NY.PREMIUM && (null == s || s(e)) && (0, i.sE)(e)) || !1)), [t, s]);
    return (
        o.sort((e, s) => {
            var t, n;
            let a = null !== (t = e.paymentGateway) && void 0 !== t ? t : 0,
                i = null !== (n = s.paymentGateway) && void 0 !== n ? n : 0;
            return a < i ? -1 : a > i ? 1 : 0;
        }),
        o
    );
};
