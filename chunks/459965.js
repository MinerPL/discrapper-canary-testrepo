n.d(t, {
    H: function () {
        return _;
    },
    w: function () {
        return d;
    }
});
var r = n(470079),
    a = n(442837),
    i = n(668781),
    l = n(509545),
    s = n(580130),
    o = n(74538),
    u = n(231338),
    c = n(689938);
function d(e, t, n) {
    r.useEffect(() => {
        null != e &&
            e.isPurchasedExternally &&
            null != e.paymentGateway &&
            !n &&
            (i.Z.show({
                title: c.Z.Messages.BILLING_EXTERNAL_HEADER.format({ paymentGatewayName: u.Vz[e.paymentGateway] }),
                body: c.Z.Messages.BILLING_EXTERNAL_MANAGE_ELSEWHERE.format({
                    paymentGatewayName: u.Vz[e.paymentGateway],
                    subscriptionManagementLink: (0, o.JE)(e.paymentGateway, 'SUBSCRIPTION_MANAGEMENT')
                }),
                confirmText: c.Z.Messages.OKAY
            }),
            t());
    }, [e]);
}
let I = [];
function _(e, t) {
    let n = (0, a.e7)([l.Z], () => (null != e ? l.Z.get(e) : null)),
        i = (0, a.e7)([s.Z], () => {
            var e;
            return null != n && null !== (e = s.Z.getForSku(n.skuId)) && void 0 !== e ? e : I;
        }),
        u = r.useMemo(
            () =>
                Array.from(i).filter((e) => {
                    let { parentId: t, consumed: n } = e;
                    return null != t && !n;
                }),
            [i]
        );
    return {
        hasEntitlements: !t && null != n && null != u && u.length >= o.ZP.getIntervalMonths(n.interval, n.intervalCount),
        entitlements: u
    };
}
