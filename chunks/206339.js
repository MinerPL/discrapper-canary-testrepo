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
    E = t(496929),
    u = t(37234),
    I = t(230711),
    T = t(410030),
    S = t(960359),
    N = t(730417),
    C = t(524347),
    m = t(454585),
    A = t(163684),
    O = t(178100),
    g = t(518638),
    h = t(725727),
    p = t(454982),
    R = t(197115),
    x = t(504983),
    M = t(703656),
    f = t(594174),
    D = t(580130),
    P = t(669079),
    L = t(74538),
    b = t(695346),
    Z = t(317941),
    v = t(622474),
    j = t(981631),
    B = t(474936),
    U = t(689938),
    G = t(161368);
function F(e) {
    let s,
        { outboundPromotion: t, code: i, addClaimedOutboundPromotionCode: o, disabled: l } = e,
        [c, _] = a.useState(!1),
        [E, u] = a.useState(!1),
        I = () => _((e) => !e),
        S = (0, T.ZP)(),
        N = (0, g.Pz)(t.id, S),
        C = null != i,
        A = (0, O.Z)(t, C);
    C && c
        ? (s = U.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
              endDate: A,
              onClickDetails: I
          }))
        : C && !c
          ? (s = U.Z.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
                endDate: A,
                onClickDetails: I
            }))
          : !C && c
            ? (s = U.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
                  endDate: A,
                  onClickDetails: I
              }))
            : !C &&
              !c &&
              (s = U.Z.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
                  endDate: A,
                  onClickDetails: I
              }));
    let h = C ? U.Z.Messages.OUTBOUND_PROMOTION_SEE_CODE : U.Z.Messages.PROMOTION_CARD_ACTION_CLAIM,
        R = a.useCallback(() => u(!1), []),
        { outboundTitle: x, outboundTermsAndConditions: M } = t;
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
                                                children: s
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
                                children: h
                            })
                        ]
                    }),
                    c &&
                        (0, n.jsx)(d.Text, {
                            className: G.promotionLegalese,
                            variant: 'text-xs/normal',
                            color: 'header-secondary',
                            children: m.Z.parse(M, !1, { allowLinks: !0 })
                        })
                ]
            }),
            E &&
                (0, n.jsx)(d.Modal, {
                    renderModal: (e) =>
                        (0, n.jsx)(p.Z, {
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
    let e = (0, c.Wu)([D.Z], () => D.Z.getGiftable()),
        [s, t] = l().partition(e, (e) => {
            let { giftCodeBatchId: s } = e;
            return null == s;
        }),
        i = (0, c.e7)([f.default], () => L.ZP.isPremium(f.default.getCurrentUser())),
        o = l().groupBy(s, (e) => (0, P.Bg)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
        [T, m] = a.useState(!1),
        O = (0, c.e7)([C.Z], () => C.Z.userStatus);
    a.useEffect(() => {
        _.Z.wait(() => {
            (0, E.Qv)().then(() => m(!0));
        });
    }, []);
    let g = (0, N.dy)();
    a.useEffect(() => {
        g &&
            _.Z.wait(async () => {
                await (0, S.R5)();
            });
    }, [g]);
    let p = b.bh.useSetting(),
        y = null != O || !g,
        { promotionsLoaded: V, activeOutboundPromotions: Y, claimedEndedOutboundPromotions: w, claimedOutboundPromotionCodeMap: k, addClaimedOutboundPromotionCode: H } = (0, h.lG)(),
        W = Y.length + w.length > 0,
        K =
            A.g.useExperiment(
                { location: 'EntitlementGifts' },
                {
                    autoTrackExposure: !i,
                    disable: i
                }
            ).enabled && W;
    function z() {
        I.Z.open(j.oAB.PREMIUM);
    }
    return T && V && y
        ? (0, n.jsxs)(n.Fragment, {
              children: [
                  g
                      ? (0, n.jsx)(v.Z, {
                            dropsOptedOut: p,
                            dropsStatuses: O
                        })
                      : null,
                  (function () {
                      var e;
                      let s = t.find((e) => e.giftCodeBatchId === B.m8 && !e.consumed),
                          a = null !== (e = t.filter((e) => e.giftCodeBatchId === B.rX && !e.consumed)) && void 0 !== e ? e : [],
                          [o, c] = l().partition(a, (e) => {
                              let { subscriptionPlanId: s } = e;
                              return s === B.Xh.PREMIUM_YEAR_TIER_2;
                          }),
                          _ = K
                              ? (0, n.jsxs)('div', {
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
                                })
                              : (0, n.jsx)(d.Heading, {
                                    variant: 'heading-md/semibold',
                                    children: W ? U.Z.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
                                });
                      return (0, n.jsx)(x.Z, {
                          className: G.containerWithMargin,
                          isShown: K,
                          type: x.Y.PREMIUM,
                          hasBackground: !0,
                          children: (0, n.jsxs)(d.FormSection, {
                              className: r()({ [G.containerWithMargin]: !K }),
                              children: [
                                  _,
                                  W ? (0, n.jsx)(d.FormDivider, { className: G.divider }) : null,
                                  w.map((e) => {
                                      let { code: s, promotion: t } = e;
                                      return (0, n.jsx)(
                                          F,
                                          {
                                              outboundPromotion: t,
                                              code: s,
                                              addClaimedOutboundPromotionCode: H,
                                              disabled: !i
                                          },
                                          t.id
                                      );
                                  }),
                                  Y.map((e) =>
                                      (0, n.jsx)(
                                          F,
                                          {
                                              outboundPromotion: e,
                                              code: k[e.id],
                                              addClaimedOutboundPromotionCode: H,
                                              disabled: !i
                                          },
                                          e.id
                                      )
                                  ),
                                  null != s
                                      ? (0, n.jsx)(
                                            Z.Z,
                                            {
                                                className: G.skuCard,
                                                skuId: s.skuId,
                                                subscriptionPlanId: s.subscriptionPlanId,
                                                entitlements: [s],
                                                giftCodeBatchId: B.m8
                                            },
                                            (0, P.Bg)(s.skuId, s.subscriptionPlanId)
                                        )
                                      : null,
                                  o.length > 0
                                      ? (0, n.jsx)(
                                            Z.Z,
                                            {
                                                className: G.skuCard,
                                                skuId: o[0].skuId,
                                                subscriptionPlanId: o[0].subscriptionPlanId,
                                                entitlements: o,
                                                giftCodeBatchId: B.rX
                                            },
                                            (0, P.Bg)(o[0].skuId, o[0].subscriptionPlanId)
                                        )
                                      : null,
                                  c.length > 0
                                      ? (0, n.jsx)(
                                            Z.Z,
                                            {
                                                className: G.skuCard,
                                                skuId: c[0].skuId,
                                                subscriptionPlanId: c[0].subscriptionPlanId,
                                                entitlements: c,
                                                giftCodeBatchId: B.rX
                                            },
                                            (0, P.Bg)(c[0].skuId, c[0].subscriptionPlanId)
                                        )
                                      : null
                              ]
                          })
                      });
                  })(),
                  (0, n.jsx)(d.FormSection, {
                      className: G.containerWithMargin,
                      children: (0, n.jsxs)(d.HeadingLevel, {
                          component: (0, n.jsx)(d.Heading, {
                              variant: 'heading-md/semibold',
                              children: U.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
                          }),
                          children: [
                              (0, n.jsx)(d.FormDivider, { className: G.divider }),
                              0 === Object.keys(o).length
                                  ? (0, n.jsxs)('div', {
                                        className: G.emptyState,
                                        children: [
                                            (0, n.jsx)('div', { className: G.emptyStateImage }),
                                            (0, n.jsx)(d.H, {
                                                className: G.emptyStateHeader,
                                                children: U.Z.Messages.GIFT_INVENTORY_NO_GIFTS
                                            }),
                                            (0, n.jsx)('p', {
                                                className: G.emptyStateSubtext,
                                                children: U.Z.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({ onClick: z })
                                            })
                                        ]
                                    })
                                  : l()
                                        .keys(o)
                                        .map((e) => {
                                            let { skuId: s, subscriptionPlanId: t, giftStyle: a } = (0, P.Z0)(e);
                                            return (0, n.jsx)(
                                                Z.Z,
                                                {
                                                    className: G.skuCard,
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
        : (0, n.jsx)(d.Spinner, { className: G.loading });
};
