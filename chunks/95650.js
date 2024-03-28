"use strict";
l.r(t), l.d(t, {
  ApplicationDirectoryStoreBtn: function() {
    return d
  }
});
var i = l("735250"),
  a = l("470079"),
  n = l("481060"),
  s = l("270144"),
  r = l("886491"),
  c = l("887706"),
  o = l("689938");

function d(e) {
  let {
    appId: t,
    guildId: d
  } = e, {
    subscriptionGroupListing: u
  } = (0, s.useActiveSubscriptionListingForApplication)(t, d), p = (0, c.default)(), _ = a.useCallback(() => {
    null != u && (0, n.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([l.e("49237"), l.e("99387"), l.e("98538")]).then(l.bind(l, "7225"));
      return l => (0, i.jsx)(e, {
        transitionState: l.transitionState,
        onClose: l.onClose,
        appId: t,
        subscriptionGroupListing: u,
        guildId: d
      })
    })
  }, [t, d, u]);
  return null == u ? null : p ? (0, i.jsx)(r.StorefrontButton, {
    onClick: _
  }) : (0, i.jsx)(n.Tooltip, {
    text: o.default.Messages.STOREFRONT_MUST_LOGIN,
    children: e => (0, i.jsx)(r.StorefrontButton, {
      ...e,
      disabled: !0
    })
  })
}