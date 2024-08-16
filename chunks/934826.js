n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120);
var i = n(470079),
    a = n(442837),
    s = n(821849),
    r = n(509545),
    l = n(78839),
    o = n(289393),
    c = n(697227),
    u = n(981631);
function d(e) {
    let t = (0, a.e7)([l.ZP], () => l.ZP.getSubscriptions()),
        n = i.useMemo(() => {
            if (null == t) return {};
            let e = {};
            for (let n of Object.values(t)) n.type === u.NYc.GUILD && (e[(0, c.W)(n)] = n);
            return e;
        }, [t]),
        { activeSubscription: d, activeSubscriptionListing: _ } = (0, a.cj)([o.Z], () => {
            var t;
            let i,
                a = null,
                s = null != e ? o.Z.getSubscriptionGroupListing(e) : null;
            for (let e of null !== (t = null == s ? void 0 : s.subscription_listings_ids) && void 0 !== t ? t : []) {
                let t = o.Z.getSubscriptionListing(e),
                    s = null == t ? void 0 : t.subscription_plans[0].id;
                if (null == s) continue;
                let r = n[s];
                if (null != r) {
                    (a = r), (i = t);
                    break;
                }
            }
            return {
                activeSubscription: a,
                activeSubscriptionListing: i
            };
        }),
        E = null == _ ? void 0 : _.subscription_plans[0],
        I = null == E ? void 0 : E.id,
        m = null == E ? void 0 : E.sku_id,
        T = (0, a.e7)([r.Z], () => (null != I ? r.Z.get(I) : null)),
        h = null == _ ? void 0 : _.soft_deleted;
    return (
        i.useEffect(() => {
            null == T && null != m && !r.Z.isFetchingForSKU(m) && (0, s.GZ)(m, void 0, void 0, h);
        }, [T, m, h]),
        {
            activeSubscription: d,
            activeSubscriptionListing: _,
            activeSubscriptionPlanFromStore: T
        }
    );
}
