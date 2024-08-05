s(47120);
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(392711),
  l = s.n(o),
  c = s(442837),
  d = s(481060),
  _ = s(570140),
  E = s(496929),
  u = s(37234),
  T = s(230711),
  I = s(410030),
  S = s(960359),
  N = s(730417),
  C = s(524347),
  m = s(454585),
  A = s(163684),
  g = s(178100),
  h = s(518638),
  O = s(725727),
  p = s(454982),
  R = s(197115),
  x = s(504983),
  M = s(703656),
  f = s(594174),
  D = s(580130),
  P = s(669079),
  L = s(74538),
  b = s(695346),
  Z = s(317941),
  v = s(622474),
  j = s(981631),
  B = s(474936),
  U = s(689938),
  G = s(979031);

function F(e) {
  let t, {
  outboundPromotion: s,
  code: i,
  addClaimedOutboundPromotionCode: o,
  disabled: l
} = e,
[c, _] = a.useState(!1),
[E, u] = a.useState(!1),
T = () => _(e => !e),
S = (0, I.ZP)(),
N = (0, h.Pz)(s.id, S),
C = null != i,
A = (0, g.Z)(s, C);
  C && c ? t = U.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
endDate: A,
onClickDetails: T
  }) : C && !c ? t = U.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
endDate: A,
onClickDetails: T
  }) : !C && c ? t = U.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
endDate: A,
onClickDetails: T
  }) : !C && !c && (t = U.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
endDate: A,
onClickDetails: T
  }));
  let O = C ? U.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : U.Z.Messages.PROMOTION_CARD_ACTION_CLAIM,
R = a.useCallback(() => u(!1), []),
{
  outboundTitle: x,
  outboundTermsAndConditions: M
} = s;
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)('div', {
    className: r()(G.skuCard, G.promotionCard),
    children: [
      (0, n.jsxs)('div', {
        className: G.mainPromotionCardContainer,
        children: [
          (0, n.jsxs)('div', {
            className: G.promotionCardLeftContainer,
            children: [
              (0, n.jsx)('div', {
                className: G.promotionIcon,
                children: (0, n.jsx)('img', {
                  alt: '',
                  src: N,
                  className: G.promotionIconImage
                })
              }),
              (0, n.jsxs)('div', {
                children: [
                  (0, n.jsx)(d.Heading, {
                    variant: 'heading-md/semibold',
                    children: x
                  }),
                  (0, n.jsx)(d.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-normal',
                    className: G.__invalid_promotionText,
                    children: t
                  })
                ]
              })
            ]
          }),
          (0, n.jsx)(d.Button, {
            className: G.promotionCardButton,
            color: d.Button.Colors.BRAND,
            size: d.Button.Sizes.SMALL,
            onClick: () => u(!0),
            disabled: !0 === l,
            children: O
          })
        ]
      }),
      c && (0, n.jsx)(d.Text, {
        className: G.promotionLegalese,
        variant: 'text-xs/normal',
        color: 'header-secondary',
        children: m.Z.parse(M, !1, {
          allowLinks: !0
        })
      })
    ]
  }),
  E && (0, n.jsx)(d.Modal, {
    renderModal: e => (0, n.jsx)(p.Z, {
      ...e,
      onClose: R,
      onClaim: o,
      code: i,
      outboundPromotion: s
    }),
    onCloseRequest: R
  })
]
  });
}
t.Z = function() {
  let e = (0, c.Wu)([D.Z], () => D.Z.getGiftable()),
[t, s] = l().partition(e, e => {
  let {
    giftCodeBatchId: t
  } = e;
  return null == t;
}),
i = (0, c.e7)([f.default], () => L.ZP.isPremium(f.default.getCurrentUser())),
o = l().groupBy(t, e => (0, P.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
[I, m] = a.useState(!1),
g = (0, c.e7)([C.Z], () => C.Z.userStatus);
  a.useEffect(() => {
_.Z.wait(() => {
  (0, E.Qv)().then(() => m(!0));
});
  }, []);
  let h = (0, N.dy)();
  a.useEffect(() => {
h && _.Z.wait(async () => {
  await (0, S.R5)();
});
  }, [h]);
  let p = b.bh.useSetting(),
y = null != g || !h,
{
  promotionsLoaded: V,
  activeOutboundPromotions: Y,
  claimedEndedOutboundPromotions: w,
  claimedOutboundPromotionCodeMap: k,
  addClaimedOutboundPromotionCode: H
} = (0, O.lG)(),
W = Y.length + w.length > 0,
K = A.g.useExperiment({
  location: 'EntitlementGifts'
}, {
  autoTrackExposure: !i,
  disable: i
}).enabled && W;

  function z() {
T.Z.open(j.oAB.PREMIUM);
  }
  return I && V && y ? (0, n.jsxs)(n.Fragment, {
children: [
  h ? (0, n.jsx)(v.Z, {
    dropsOptedOut: p,
    dropsStatuses: g
  }) : null,
  function() {
    var e;
    let t = s.find(e => e.giftCodeBatchId === B.m8 && !e.consumed),
      a = null !== (e = s.filter(e => e.giftCodeBatchId === B.rX && !e.consumed)) && void 0 !== e ? e : [],
      [o, c] = l().partition(a, e => {
        let {
          subscriptionPlanId: t
        } = e;
        return t === B.Xh.PREMIUM_YEAR_TIER_2;
      }),
      _ = K ? (0, n.jsxs)('div', {
        className: G.promoHeaderContainer,
        children: [
          (0, n.jsxs)('div', {
            children: [
              (0, n.jsx)(d.Heading, {
                variant: 'heading-md/semibold',
                children: W ? U.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
              }),
              (0, n.jsx)(d.Heading, {
                variant: 'text-sm/normal',
                className: G.promoDescription,
                children: U.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_GIFTS_DESCRIPTION.format({
                  onClick: () => {
                    (0, u.xf)(), (0, M.uL)(j.Z5c.APPLICATION_STORE);
                  }
                })
              })
            ]
          }),
          (0, n.jsx)(R.Z, {
            showGradient: !0,
            className: G.promoNitroButton,
            subscriptionTier: B.Si.TIER_2,
            buttonText: U.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
          })
        ]
      }) : (0, n.jsx)(d.Heading, {
        variant: 'heading-md/semibold',
        children: W ? U.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
      });
    return (0, n.jsx)(x.Z, {
      className: G.containerWithMargin,
      isShown: K,
      type: x.Y.PREMIUM,
      hasBackground: !0,
      children: (0, n.jsxs)(d.FormSection, {
        className: r()({
          [G.containerWithMargin]: !K
        }),
        children: [
          _,
          W ? (0, n.jsx)(d.FormDivider, {
            className: G.divider
          }) : null,
          w.map(e => {
            let {
              code: t,
              promotion: s
            } = e;
            return (0, n.jsx)(F, {
              outboundPromotion: s,
              code: t,
              addClaimedOutboundPromotionCode: H,
              disabled: !i
            }, s.id);
          }),
          Y.map(e => (0, n.jsx)(F, {
            outboundPromotion: e,
            code: k[e.id],
            addClaimedOutboundPromotionCode: H,
            disabled: !i
          }, e.id)),
          null != t ? (0, n.jsx)(Z.Z, {
            className: G.skuCard,
            skuId: t.skuId,
            subscriptionPlanId: t.subscriptionPlanId,
            entitlements: [t],
            giftCodeBatchId: B.m8
          }, (0, P.Bg)(t.skuId, t.subscriptionPlanId)) : null,
          o.length > 0 ? (0, n.jsx)(Z.Z, {
            className: G.skuCard,
            skuId: o[0].skuId,
            subscriptionPlanId: o[0].subscriptionPlanId,
            entitlements: o,
            giftCodeBatchId: B.rX
          }, (0, P.Bg)(o[0].skuId, o[0].subscriptionPlanId)) : null,
          c.length > 0 ? (0, n.jsx)(Z.Z, {
            className: G.skuCard,
            skuId: c[0].skuId,
            subscriptionPlanId: c[0].subscriptionPlanId,
            entitlements: c,
            giftCodeBatchId: B.rX
          }, (0, P.Bg)(c[0].skuId, c[0].subscriptionPlanId)) : null
        ]
      })
    });
  }(),
  (0, n.jsx)(d.FormSection, {
    className: G.containerWithMargin,
    children: (0, n.jsxs)(d.HeadingLevel, {
      component: (0, n.jsx)(d.Heading, {
        variant: 'heading-md/semibold',
        children: U.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
      }),
      children: [
        (0, n.jsx)(d.FormDivider, {
          className: G.divider
        }),
        0 === Object.keys(o).length ? (0, n.jsxs)('div', {
          className: G.emptyState,
          children: [
            (0, n.jsx)('div', {
              className: G.emptyStateImage
            }),
            (0, n.jsx)(d.H, {
              className: G.emptyStateHeader,
              children: U.Z.Messages.GIFT_INVENTORY_NO_GIFTS
            }),
            (0, n.jsx)('p', {
              className: G.emptyStateSubtext,
              children: U.Z.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
                onClick: z
              })
            })
          ]
        }) : l().keys(o).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: s,
            giftStyle: a
          } = (0, P.Z0)(e);
          return (0, n.jsx)(Z.Z, {
            className: G.skuCard,
            skuId: t,
            subscriptionPlanId: s,
            entitlements: o[e],
            giftStyle: a
          }, e);
        })
      ]
    })
  })
]
  }) : (0, n.jsx)(d.Spinner, {
className: G.loading
  });
};