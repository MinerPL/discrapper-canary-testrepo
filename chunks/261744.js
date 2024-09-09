t.d(s, {
    Z: function () {
        return r;
    }
}),
    t(47120);
var n = t(442837),
    a = t(687476),
    i = t(293810);
function r() {
    return (0, n.e7)([a.Z], () =>
        (function () {
            let [e] = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [a.Z],
                s = e.getGuildIdsWithPurchasableRoles(),
                t = !1;
            return (s.forEach((s) => {
                e.getUserSubscriptionRoles(s).size > 0 && (t = !0);
            }),
            t)
                ? i.PY.SUBSCRIBED
                : 0 === s.size
                  ? i.PY.NONE
                  : i.PY.IN_SUBSCRIPTION_SERVER;
        })([a.Z])
    );
}
