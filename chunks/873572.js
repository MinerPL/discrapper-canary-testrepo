"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(442837),
  r = n(270144),
  s = n(171246),
  o = n(621853),
  a = n(981631);

function l(e) {
  var t;
  let {
    user: n,
    guildId: l
  } = e, u = (0, i.e7)([o.Z], () => {
    var e;
    return null === (e = o.Z.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
  }, [n]), {
    applicationSubscriptionListingsShown: _
  } = (0, r.ZP)({
    applicationId: null == u ? void 0 : u.id,
    groupListingId: null == u ? void 0 : u.primarySkuId,
    guildId: l
  }), {
    activeSubscriptionListing: d,
    activeEntitlement: c,
    subscriptionGroupListing: E
  } = (0, r.F5)(null == u ? void 0 : u.id, l), I = null !== (t = null == E ? void 0 : E.sku_flags) && void 0 !== t ? t : 0, T = (0, s.KW)(I) || null != l && l !== a.ME && (0, s.KK)(I), h = null != c;
  return _ ? {
    botUpgraded: h,
    botUpgradeable: !h && _ && T,
    activeSubscriptionListing: d,
    subscriptionGroupListing: E
  } : {
    botUpgraded: !1,
    botUpgradeable: !1,
    activeSubscriptionListing: null,
    subscriptionGroupListing: null
  }
}