var s = n(735250),
  r = n(470079),
  i = n(120356),
  a = n.n(i),
  l = n(442837),
  o = n(481060),
  c = n(812206),
  u = n(388905),
  d = n(479446),
  h = n(981632),
  _ = n(594174),
  E = n(509545),
  g = n(55563),
  p = n(366695),
  f = n(296848),
  I = n(981631),
  m = n(474936),
  N = n(689938),
  T = n(607348),
  x = n(483085),
  A = n(549856);
t.Z = l.ZP.connectStores([
  g.Z,
  c.Z,
  E.Z,
  _.default
], e => {
  let {
giftCode: t
  } = e, n = g.Z.get(t.skuId), {
subscriptionPlanId: s
  } = t;
  return {
sku: n,
subscriptionPlan: null != s ? (0, f.oE)(s) : null,
application: c.Z.getApplication(n.applicationId),
gifter: _.default.getUser(t.userId)
  };
})(e => {
  let {
error: t,
giftCode: n,
gifter: i,
sku: l,
application: c,
subscriptionPlan: _
  } = e, E = null == i ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_BY.format({
username: i.username
  }), g = l.name;
  return null != _ && (g = (_.interval === m.rV.MONTH ? N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_MONTHLY : N.Z.Messages.GIFT_CODE_AUTH_GIFTED_SUBSCRIPTION_YEARLY).format({
skuName: l.name,
intervalCount: _.intervalCount
  })), (0, s.jsxs)(r.Fragment, {
children: [
  null != n.giftStyle ? (0, s.jsx)(h.Z, {
    defaultAnimationState: d.S.LOOP,
    giftStyle: n.giftStyle,
    className: T.seasonalIcon
  }) : (0, s.jsx)(u.qE, {
    src: null != i ? i.getAvatarURL(void 0, 100) : null,
    size: o.AvatarSizes.DEPRECATED_SIZE_100,
    className: A.marginBottom20
  }),
  null != t ? (0, s.jsxs)(r.Fragment, {
    children: [
      (0, s.jsx)(u.DK, {
        children: N.Z.Messages.INVITE_MODAL_ERROR_TITLE
      }),
      (0, s.jsx)(u.Dx, {
        children: t
      })
    ]
  }) : (0, s.jsxs)(r.Fragment, {
    children: [
      (0, s.jsx)(u.DK, {
        children: E
      }),
      (0, s.jsxs)(u.Dx, {
        className: a()(A.marginTop8, x.flexCenter),
        children: [
          l.productLine !== I.POd.COLLECTIBLES && (0, s.jsx)(p.Z, {
            size: p.Z.Sizes.MEDIUM,
            className: T.applicationIcon,
            game: c,
            skuId: l.id
          }),
          g
        ]
      })
    ]
  })
]
  });
});