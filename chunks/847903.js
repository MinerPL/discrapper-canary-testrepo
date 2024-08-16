n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(470079),
    i = n(442837),
    a = n(570140),
    s = n(355467),
    o = n(314897),
    l = n(351402),
    u = n(853872);
function c() {
    let e = (0, i.e7)([u.Z], () => u.Z.getDefaultBillingCountryCode()),
        t = (0, i.e7)([l.Z], () => l.Z.ipCountryCode),
        n = (0, i.e7)([o.default], () => o.default.isAuthenticated());
    return (
        r.useEffect(() => {
            a.Z.wait(() => {
                n && !l.Z.isPaymentSourceFetching && !u.Z.hasFetchedPaymentSources && s.tZ();
            });
        }, [n]),
        r.useEffect(() => {
            n && !l.Z.ipCountryCodeLoaded && s.GE();
        }, [t, n]),
        {
            defaultBillingCountryCode: e,
            ipCountryCode: t
        }
    );
}
