t.d(n, {
  Z: function() {
return R;
  }
}), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(468194),
  l = t(442837),
  r = t(477690),
  o = t(481060),
  d = t(887706),
  c = t(34674),
  u = t(817460),
  I = t(703656),
  m = t(351402),
  _ = t(937615),
  N = t(73346),
  E = t(270144),
  T = t(359610),
  h = t(245561),
  g = t(696906),
  p = t(981631),
  f = t(689938),
  C = t(683181);
let O = (0, s.Mg)(r.Z.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  x = 'start_application_subscription',
  S = e => {
let {
  listing: n
} = e, t = n.image_asset;
if (null == t)
  return null;
let a = (0, N._W)(n.application_id, t, O);
return (0, i.jsx)('div', {
  children: (0, i.jsx)('img', {
    src: a,
    alt: '',
    className: C.listingImage
  })
});
  },
  A = e => {
let {
  children: n
} = e;
return (0, i.jsx)(o.Button, {
  look: o.Button.Looks.OUTLINED,
  color: o.Button.Colors.PRIMARY,
  disabled: !0,
  size: o.Button.Sizes.SMALL,
  children: n
});
  };

function R(e) {
  let {
listing: n,
groupListingId: t,
guildId: s,
analyticsLocation: r,
onComplete: N,
forcesTransitionToGuild: O
  } = e, R = (0, l.e7)([m.Z], () => m.Z.isSyncing), {
activeSubscription: b,
activeSubscriptionListing: Z
  } = (0, E.F5)(n.application_id, s), {
openModal: v,
canOpenModal: M,
cannotOpenReason: L
  } = (0, g.Z)({
guildId: s,
groupListingId: t,
showBenefitsFirst: !1,
analyticsLocation: r,
onComplete: N,
forcesTransitionToGuild: O,
skuId: n.id
  }), j = n.subscription_plans[0], D = 0 === j.price, P = (null == Z ? void 0 : Z.id) === n.id, B = (0, d.Z)(), y = B && !M || R, G = () => {
B ? v() : (0, c.rf)({
  [x]: 'true'
});
  };
  return a.useEffect(() => {
let e = new URL(location.href);
if (B && !y && 'true' === e.searchParams.get(x)) {
  e.searchParams.delete(x);
  let n = e.pathname + e.search;
  (0, I.dL)(n), v();
}
  }, [
B,
v,
y
  ]), (0, i.jsxs)('div', {
className: C.container,
children: [
  (0, i.jsxs)('div', {
    className: C.cardHeader,
    children: [
      (0, i.jsx)(S, {
        listing: n
      }),
      (0, i.jsx)(o.Text, {
        variant: 'text-lg/medium',
        color: 'interactive-active',
        children: n.name
      }),
      (0, i.jsxs)('div', {
        className: C.priceAndButtonContainer,
        children: [
          (0, i.jsx)(o.Text, {
            variant: 'text-md/normal',
            color: 'interactive-normal',
            children: D ? f.Z.Messages.APPLICATION_SUBSCRIPTION_FREE : f.Z.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
              amount: (0, _.T4)(j.price, j.currency),
              period: (0, u.JE)(j)
            })
          }),
          (() => {
            var e;
            if (P)
              return (0, i.jsx)(A, {
                children: (null == b ? void 0 : b.status) === p.O0b.CANCELED ? f.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : f.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
              });
            if (D)
              return null == Z ? (0, i.jsx)(A, {
                children: f.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
              }) : null;
            return (0, i.jsx)(o.Tooltip, {
              tooltipClassName: C.subscribeButtonTooltip,
              text: M || !B ? null : L,
              'aria-label': null !== (e = !M && L) && void 0 !== e && e,
              children: e => (0, i.jsx)(T.Z, {
                ...e,
                disabled: y,
                submitting: !1,
                onClick: G,
                children: f.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
              })
            });
          })()
        ]
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: C.benefitsContainer,
    children: (0, i.jsx)(h.GU, {
      applicationId: n.application_id,
      storeListingBenefits: n.store_listing_benefits,
      skuBenefits: n.sku_benefits.benefits,
      className: C.benefit
    })
  })
]
  });
}