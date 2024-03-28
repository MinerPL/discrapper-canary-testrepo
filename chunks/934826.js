"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var a = n("470079"),
  l = n("442837"),
  s = n("821849"),
  i = n("509545"),
  r = n("78839"),
  o = n("289393"),
  u = n("697227"),
  d = n("981631");

function c(e) {
  let t = (0, l.useStateFromStores)([r.default], () => r.default.getSubscriptions()),
    n = a.useMemo(() => {
      if (null == t) return {};
      let e = {};
      for (let n of Object.values(t)) n.type === d.SubscriptionTypes.GUILD && (e[(0, u.getRoleSubscriptionPlanId)(n)] = n);
      return e
    }, [t]),
    {
      activeSubscription: c,
      activeSubscriptionListing: f
    } = (0, l.useStateFromStoresObject)([o.default], () => {
      var t;
      let a, l = null,
        s = null != e ? o.default.getSubscriptionGroupListing(e) : null;
      for (let e of null !== (t = null == s ? void 0 : s.subscription_listings_ids) && void 0 !== t ? t : []) {
        let t = o.default.getSubscriptionListing(e),
          s = null == t ? void 0 : t.subscription_plans[0].id;
        if (null == s) continue;
        let i = n[s];
        if (null != i) {
          l = i, a = t;
          break
        }
      }
      return {
        activeSubscription: l,
        activeSubscriptionListing: a
      }
    }),
    h = null == f ? void 0 : f.subscription_plans[0],
    m = null == h ? void 0 : h.id,
    p = null == h ? void 0 : h.sku_id,
    E = (0, l.useStateFromStores)([i.default], () => null != m ? i.default.get(m) : null),
    C = null == f ? void 0 : f.soft_deleted;
  return a.useEffect(() => {
    null == E && null != p && !i.default.isFetchingForSKU(p) && (0, s.fetchSubscriptionPlansForSKU)(p, void 0, void 0, C)
  }, [E, p, C]), {
    activeSubscription: c,
    activeSubscriptionListing: f,
    activeSubscriptionPlanFromStore: E
  }
}