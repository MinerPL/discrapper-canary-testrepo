"use strict";
var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(442837),
  o = n(481060),
  u = n(812206),
  c = n(479446),
  d = n(981632),
  h = n(594174),
  E = n(509545),
  _ = n(55563),
  m = n(366695),
  g = n(819570),
  f = n(296848),
  p = n(981631),
  I = n(474936),
  N = n(689938),
  A = n(354052),
  T = n(961047),
  R = n(611273);
t.Z = l.ZP.connectStores([_.Z, u.Z, E.Z, h.default], e => {
  let {
    giftCode: t
  } = e, n = _.Z.get(t.skuId), {
    subscriptionPlanId: s
  } = t;
  return {
    sku: n,
    subscriptionPlan: null != s ? (0, f.oE)(s) : null,
    application: u.Z.getApplication(n.applicationId),
    gifter: h.default.getUser(t.userId)
  }
})(e => {
  let {
    error: t,
    giftCode: n,
    gifter: i,
    sku: l,
    application: u,
    subscriptionPlan: h
  } = e, E = null == i ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
    username: i.username
  }), _ = l.name;
  return null != h && (_ = (h.interval === I.rV.MONTH ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
    skuName: l.name,
    intervalCount: h.intervalCount
  })), (0, s.jsxs)(r.Fragment, {
    children: [null != n.giftStyle ? (0, s.jsx)(d.Z, {
      defaultAnimationState: c.S.LOOP,
      giftStyle: n.giftStyle,
      className: A.seasonalIcon
    }) : (0, s.jsx)(g.qE, {
      src: null != i ? i.getAvatarURL(void 0, 100) : null,
      size: o.AvatarSizes.DEPRECATED_SIZE_100,
      className: R.marginBottom20
    }), null != t ? (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(g.DK, {
        children: N.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }), (0, s.jsx)(g.Dx, {
        children: t
      })]
    }) : (0, s.jsxs)(r.Fragment, {
      children: [(0, s.jsx)(g.DK, {
        children: E
      }), (0, s.jsxs)(g.Dx, {
        className: a()(R.marginTop8, T.flexCenter),
        children: [l.productLine !== p.POd.COLLECTIBLES && (0, s.jsx)(m.Z, {
          size: m.Z.Sizes.MEDIUM,
          className: A.applicationIcon,
          game: u,
          skuId: l.id
        }), _]
      })]
    })]
  })
})