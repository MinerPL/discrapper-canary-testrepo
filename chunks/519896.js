"use strict";
n.r(t), n.d(t, {
  SubscriptionDetailsModal: function() {
    return v
  }
});
var i = n("735250"),
  s = n("470079"),
  l = n("269210"),
  r = n("752843"),
  a = n("368072"),
  o = n("481060"),
  u = n("789703"),
  d = n("889989"),
  c = n("73346"),
  f = n("591759"),
  h = n("680005"),
  S = n("938337"),
  p = n("689938"),
  m = n("399461");

function v(e) {
  let {
    appId: t,
    groupListingId: n,
    groupListingType: v,
    guildId: g,
    onClose: T,
    skuId: x,
    transitionState: I
  } = e, _ = (0, u.useGetSubscriptionListing__DO_NOT_USE)(x), E = s.useMemo(() => {
    var e;
    return (null == _ ? void 0 : _.image_asset) != null && null !== (e = f.default.toURLSafe((0, c.getAssetURL)(t, _.image_asset, 256))) && void 0 !== e ? e : void 0
  }, [t, null == _ ? void 0 : _.image_asset]), N = s.useMemo(() => {
    var e;
    return null == _ ? void 0 : null === (e = _.store_listing_benefits) || void 0 === e ? void 0 : e.map(e => ({
      id: e.id,
      title: e.name,
      description: e.description,
      icon: (0, d.getBenefitIcon)(t, e.icon)
    }))
  }, [t, null == _ ? void 0 : _.store_listing_benefits]);
  if (null == _) return null;
  let L = _.subscription_plans.length > 0 ? _.subscription_plans[0] : null;
  return null == L || null == N ? null : (0, i.jsxs)(o.ModalRoot, {
    transitionState: I,
    size: o.ModalSize.DYNAMIC,
    className: m.subDetailsModal,
    children: [(0, i.jsx)(S.TrackedCardDetails, {
      appId: t,
      skuId: x,
      benefits: N.map(e => (0, i.jsx)(l.SubscriptionCardBenefit, {
        name: e.title,
        icon: e.icon,
        description: e.description
      }, e.id)),
      description: _.description,
      imgSrc: E,
      title: _.name,
      tag: (0, i.jsx)(r.SubscriptionTag, {
        type: v
      }),
      onClose: T,
      FallbackIcon: a.BadgeIcon
    }), (0, i.jsxs)(o.ModalFooter, {
      className: m.footer,
      children: [(0, i.jsx)(o.Button, {
        className: m.backButton,
        onClick: T,
        look: o.ButtonLooks.BLANK,
        children: (0, i.jsx)(o.Text, {
          color: "header-primary",
          tag: "p",
          variant: "heading-md/semibold",
          children: p.default.Messages.BACK
        })
      }), (0, i.jsx)(h.SubscriptionPurchaseButton, {
        appId: t,
        groupListingId: n,
        groupListingType: v,
        guildId: g,
        skuId: x,
        subPlan: L
      })]
    })]
  })
}