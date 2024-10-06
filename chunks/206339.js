t(47120);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(392711),
    l = t.n(o),
    c = t(442837),
    d = t(481060),
    _ = t(570140),
    u = t(496929),
    E = t(37234),
    T = t(230711),
    S = t(410030),
    I = t(454585),
    N = t(163684),
    A = t(178100),
    C = t(518638),
    m = t(725727),
    g = t(454982),
    h = t(197115),
    O = t(504983),
    p = t(703656),
    R = t(594174),
    x = t(580130),
    M = t(669079),
    f = t(74538),
    D = t(317941),
    L = t(981631),
    P = t(474936),
    b = t(689938),
    Z = t(360360);
function v(e) {
    let s,
        { outboundPromotion: t, code: i, addClaimedOutboundPromotionCode: o, disabled: l } = e,
        [c, _] = a.useState(!1),
        [u, E] = a.useState(!1),
        T = () => _((e) => !e),
        N = (0, S.ZP)(),
        m = (0, C.Pz)(t.id, N),
        h = null != i,
        O = (0, A.Z)(t, h);
    h && c
        ? (s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
              endDate: O,
              onClickDetails: T
          }))
        : h && !c
          ? (s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
                endDate: O,
                onClickDetails: T
            }))
          : !h && c
            ? (s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
                  endDate: O,
                  onClickDetails: T
              }))
            : !h &&
              !c &&
              (s = b.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
                  endDate: O,
                  onClickDetails: T
              }));
    let p = h ? b.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : b.Z.Messages.PROMOTION_CARD_ACTION_CLAIM,
        R = a.useCallback(() => E(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: M } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)('div', {
                className: r()(Z.skuCard, Z.promotionCard),
                children: [
                    (0, n.jsxs)('div', {
                        className: Z.mainPromotionCardContainer,
                        children: [
                            (0, n.jsxs)('div', {
                                className: Z.promotionCardLeftContainer,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: Z.promotionIcon,
                                        children: (0, n.jsx)('img', {
                                            alt: '',
                                            src: m,
                                            className: Z.promotionIconImage
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
                                                className: Z.__invalid_promotionText,
                                                children: s
                                            })
                                        ]
                                    })
                                ]
                            }),
                            (0, n.jsx)(d.Button, {
                                className: Z.promotionCardButton,
                                color: d.Button.Colors.BRAND,
                                size: d.Button.Sizes.SMALL,
                                onClick: () => E(!0),
                                disabled: !0 === l,
                                children: p
                            })
                        ]
                    }),
                    c &&
                        (0, n.jsx)(d.Text, {
                            className: Z.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: I.Z.parse(M, !1, { allowLinks: !0 })
                        })
                ]
            }),
            u &&
                (0, n.jsx)(d.Modal, {
                    renderModal: (e) =>
                        (0, n.jsx)(g.Z, {
                            ...e,
                            onClose: R,
                            onClaim: o,
                            code: i,
                            outboundPromotion: t
                        }),
                    onCloseRequest: R
                })
        ]
    });
}
s.Z = function () {
    let e = (0, c.Wu)([x.Z], () => x.Z.getGiftable()),
        [s, t] = l().partition(e, (e) => {
            let { giftCodeBatchId: s } = e;
            return null == s;
        }),
        i = (0, c.e7)([R.default], () => f.ZP.isPremiumExactly(R.default.getCurrentUser(), P.p9.TIER_2)),
        o = l().groupBy(s, (e) => (0, M.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [S, I] = a.useState(!1);
    a.useEffect(() => {
        _.Z.wait(() => {
            (0, u.Qv)().then(() => I(!0));
        });
    }, []);
    let { promotionsLoaded: A, activeOutboundPromotions: C, claimedEndedOutboundPromotions: g, claimedOutboundPromotionCodeMap: j, addClaimedOutboundPromotionCode: B } = (0, m.lG)(),
        U = C.length + g.length > 0,
        G =
            N.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !1,
                    disable: i
                }
            ).enabled && U;
    function F() {
        T.Z.open(L.oAB.PREMIUM);
    }
    return S && A
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  (function () {
                      var e;
                      let s = t.find((e) => e.giftCodeBatchId === P.m8 && !e.consumed),
                          a = null !== (e = t.filter((e) => e.giftCodeBatchId === P.rX && !e.consumed)) && void 0 !== e ? e : [],
                          [o, c] = l().partition(a, (e) => {
                              let { subscriptionPlanId: s } = e;
                              return s === P.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          _ = G
                              ? (0, n.jsxs)('div', {
                                    className: Z.promoHeaderContainer,
                                    children: [
                                        (0, n.jsxs)('div', {
                                            children: [
                                                (0, n.jsx)(d.Heading, {
                                                    variant: 'heading-md/semibold',
                                                    children: U ? b.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
                                                }),
                                                (0, n.jsx)(d.Heading, {
                                                    variant: 'text-sm/normal',
                                                    className: Z.promoDescription,
                                                    children: b.Z.Messages.OUTBOUND_PROMO_UPSELL_EXPERIMENT_GIFTS_DESCRIPTION.format({
                                                        onClick: () => {
                                                            (0, E.xf)(), (0, p.uL)(L.Z5c.APPLICATION_STORE);
                                                        }
                                                    })
                                                })
                                            ]
                                        }),
                                        (0, n.jsx)(h.Z, {
                                            showGradient: !0,
                                            className: Z.promoNitroButton,
                                            subscriptionTier: P.Si.TIER_2,
                                            buttonText: b.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
                                        })
                                    ]
                                })
                              : (0, n.jsx)(d.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: U ? b.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
                                });
                      return (0, n.jsx)(O.Z, {
                          className: Z.containerWithMargin,
                          isShown: G,
                          type: O.Y.PREMIUM,
                          hasBackground: !0,
                          children: (0, n.jsxs)(d.FormSection, {
                              className: r()({ [Z.containerWithMargin]: !G }),
                              children: [
                                  _,
                                  U ? (0, n.jsx)(d.FormDivider, { className: Z.divider }) : null,
                                  g.map((e) => {
                                      let { code: s, promotion: t } = e;
                                      return (0, n.jsx)(
                                          v,
                                          {
                                              outboundPromotion: t,
                                              code: s,
                                              addClaimedOutboundPromotionCode: B,
                                              disabled: !i
                                          },
                                          t.id
                                      );
                                  }),
                                  C.map((e) =>
                                      (0, n.jsx)(
                                          v,
                                          {
                                              outboundPromotion: e,
                                              code: j[e.id],
                                              addClaimedOutboundPromotionCode: B,
                                              disabled: !i
                                          },
                                          e.id
                                      )
                                  ),
                                  null != s
                                      ? (0, n.jsx)(
                                            D.Z,
                                            {
                                                className: Z.skuCard,
                                                skuId: s.skuId,
                                                subscriptionPlanId: s.subscriptionPlanId,
                                                entitlements: [s],
                                                giftCodeBatchId: P.m8
                                            },
                                            (0, M.Bg)(s.skuId, s.subscriptionPlanId)
                                        )
                                      : null,
                                  o.length > 0
                                      ? (0, n.jsx)(
                                            D.Z,
                                            {
                                                className: Z.skuCard,
                                                skuId: o[0].skuId,
                                                subscriptionPlanId: o[0].subscriptionPlanId,
                                                entitlements: o,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, M.Bg)(o[0].skuId, o[0].subscriptionPlanId)
                                        )
                                      : null,
                                  c.length > 0
                                      ? (0, n.jsx)(
                                            D.Z,
                                            {
                                                className: Z.skuCard,
                                                skuId: c[0].skuId,
                                                subscriptionPlanId: c[0].subscriptionPlanId,
                                                entitlements: c,
                                                giftCodeBatchId: P.rX
                                            },
                                            (0, M.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                        )
                                      : null
                              ]
                          })
                      });
                  })(),
                  (0, n.jsx)(d.FormSection, {
                      className: Z.containerWithMargin,
                      children: (0, n.jsxs)(d.HeadingLevel, {
                          component: (0, n.jsx)(d.Heading, {
                              variant: 'heading-md/semibold',
                              children: b.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
                          }),
                          children: [
                              (0, n.jsx)(d.FormDivider, { className: Z.divider }),
                              0 === Object.keys(o).length
                                  ? (0, n.jsxs)('div', {
                                        className: Z.emptyState,
                                        children: [
                                            (0, n.jsx)('div', { className: Z.emptyStateImage }),
                                            (0, n.jsx)(d.H, {
                                                className: Z.emptyStateHeader,
                                                children: b.Z.Messages.GIFT_INVENTORY_NO_GIFTS
                                            }),
                                            (0, n.jsx)('p', {
                                                className: Z.emptyStateSubtext,
                                                children: b.Z.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({ onClick: F })
                                            })
                                        ]
                                    })
                                  : l()
                                        .keys(o)
                                        .map((e) => {
                                            let { skuId: s, subscriptionPlanId: t, giftStyle: a } = (0, M.Z0)(e);
                                            return (0, n.jsx)(
                                                D.Z,
                                                {
                                                    className: Z.skuCard,
                                                    skuId: s,
                                                    subscriptionPlanId: t,
                                                    entitlements: o[e],
                                                    giftStyle: a
                                                },
                                                e
                                            );
                                        })
                          ]
                      })
                  })
              ]
          })
        : (0, n.jsx)(d.Spinner, { className: Z.loading });
};
