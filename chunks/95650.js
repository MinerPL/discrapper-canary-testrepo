"use strict";
i.r(t), i.d(t, {
  ApplicationDirectoryStoreBtn: function() {
    return d
  }
});
var l = i("735250"),
  a = i("470079"),
  n = i("481060"),
  s = i("270144"),
  r = i("886491"),
  o = i("887706"),
  c = i("689938");

function d(e) {
  let {
    appId: t,
    guildId: d
  } = e, {
    subscriptionGroupListing: u
  } = (0, s.useActiveSubscriptionListingForApplication)(t, d), p = (0, o.default)(), m = a.useCallback(() => {
    null != u && (0, n.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([i.e("49237"), i.e("99387"), i.e("77172"), i.e("98538")]).then(i.bind(i, "7225"));
      return i => (0, l.jsx)(e, {
        transitionState: i.transitionState,
        onClose: i.onClose,
        appId: t,
        subscriptionGroupListing: u,
        guildId: d
      })
    })
  }, [t, d, u]);
  return null == u ? null : p ? (0, l.jsx)(r.StorefrontButton, {
    onClick: m
  }) : (0, l.jsx)(n.Tooltip, {
    text: c.default.Messages.STOREFRONT_MUST_LOGIN,
    children: e => (0, l.jsx)(r.StorefrontButton, {
      ...e,
      disabled: !0
    })
  })
}