n.d(t, {
    Z: function () {
        return l;
    }
}), n(47120);
var r = n(470079), i = n(442837), a = n(232567), o = n(110924), s = n(314897);
function l() {
    let [e, t] = (0, i.Wu)([s.default], () => [
            s.default.isAuthenticated(),
            null != s.default.getAnalyticsToken()
        ]), n = (0, o.Z)(e);
    r.useEffect(() => {
        !n && e && !t && a.k({ withAnalyticsToken: !0 });
    }, [
        n,
        e,
        t
    ]);
}
