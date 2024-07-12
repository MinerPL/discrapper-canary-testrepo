t.d(n, {
  Z: function() {
return R;
  }
}), t(315314), t(610138), t(216116), t(78328), t(815648), t(47120);
var i = t(735250),
  a = t(470079),
  s = t(468194),
  l = t(442837),
  o = t(477690),
  r = t(481060),
  c = t(887706),
  d = t(34674),
  u = t(817460),
  I = t(703656),
  m = t(351402),
  _ = t(937615),
  N = t(73346),
  E = t(270144),
  T = t(359610),
  h = t(245561),
  p = t(696906),
  g = t(981631),
  C = t(689938),
  f = t(797254);
let x = (0, s.Mg)(o.Z.APPLICATION_SUBSCRIPTION_CARD_LISTING_IMAGE_SIZE),
  O = 'start_application_subscription',
  S = e => {
let {
  listing: n
} = e, t = n.image_asset;
if (null == t)
  return null;
let a = (0, N._W)(n.application_id, t, x);
return (0, i.jsx)('div', {
  children: (0, i.jsx)('img', {
    src: a,
    alt: '',
    className: f.listingImage
  })
});
  },
  A = e => {
let {
  children: n
} = e;
return (0, i.jsx)(r.Button, {
  look: r.Button.Looks.OUTLINED,
  color: r.Button.Colors.PRIMARY,
  disabled: !0,
  size: r.Button.Sizes.SMALL,
  children: n
});
  };

function R(e) {
  let {
listing: n,
groupListingId: t,
guildId: s,
analyticsLocation: o,
onComplete: N,
forcesTransitionToGuild: x
  } = e, R = (0, l.e7)([m.Z], () => m.Z.isSyncing), {
activeSubscription: b,
activeSubscriptionListing: Z
  } = (0, E.F5)(n.application_id, s), {
openModal: v,
canOpenModal: M,
cannotOpenReason: L
  } = (0, p.Z)({
guildId: s,
groupListingId: t,
showBenefitsFirst: !1,
analyticsLocation: o,
onComplete: N,
forcesTransitionToGuild: x,
skuId: n.id
  }), j = n.subscription_plans[0], D = 0 === j.price, P = (null == Z ? void 0 : Z.id) === n.id, B = (0, c.Z)(), y = B && !M || R, G = () => {
B ? v() : (0, d.rf)({
  [O]: 'true'
});
  };
  return a.useEffect(() => {
let e = new URL(location.href);
if (B && !y && 'true' === e.searchParams.get(O)) {
  e.searchParams.delete(O);
  let n = e.pathname + e.search;
  (0, I.dL)(n), v();
}
  }, [
B,
v,
y
  ]), (0, i.jsxs)('div', {
className: f.container,
children: [
  (0, i.jsxs)('div', {
    className: f.cardHeader,
    children: [
      (0, i.jsx)(S, {
        listing: n
      }),
      (0, i.jsx)(r.Text, {
        variant: 'text-lg/medium',
        color: 'interactive-active',
        children: n.name
      }),
      (0, i.jsxs)('div', {
        className: f.priceAndButtonContainer,
        children: [
          (0, i.jsx)(r.Text, {
            variant: 'text-md/normal',
            color: 'interactive-normal',
            children: D ? C.Z.Messages.APPLICATION_SUBSCRIPTION_FREE : C.Z.Messages.APPLICATION_SUBSCRIPTION_AMOUNT_PER_PERIOD.format({
              amount: (0, _.T4)(j.price, j.currency),
              period: (0, u.JE)(j)
            })
          }),
          (() => {
            var e;
            if (P)
              return (0, i.jsx)(A, {
                children: (null == b ? void 0 : b.status) === g.O0b.CANCELED ? C.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CANCELED_LABEL : C.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
              });
            if (D)
              return null == Z ? (0, i.jsx)(A, {
                children: C.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_CURRENT_TIER_LABEL
              }) : null;
            return (0, i.jsx)(r.Tooltip, {
              tooltipClassName: f.subscribeButtonTooltip,
              text: M || !B ? null : L,
              'aria-label': null !== (e = !M && L) && void 0 !== e && e,
              children: e => (0, i.jsx)(T.Z, {
                ...e,
                disabled: y,
                submitting: !1,
                onClick: G,
                children: C.Z.Messages.APPLICATION_SUBSCRIPTION_TIER_REVIEW_SUBSCRIBE_LABEL
              })
            });
          })()
        ]
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: f.benefitsContainer,
    children: (0, i.jsx)(h.GU, {
      applicationId: n.application_id,
      storeListingBenefits: n.store_listing_benefits,
      skuBenefits: n.sku_benefits.benefits,
      className: f.benefit
    })
  })
]
  });
}