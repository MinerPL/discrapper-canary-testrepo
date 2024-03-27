"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("913144"),
  S = s("316718"),
  E = s("79112"),
  T = s("841098"),
  f = s("376152"),
  _ = s("243632"),
  m = s("180273"),
  g = s("367376"),
  h = s("170788"),
  N = s("44678"),
  I = s("694540"),
  p = s("541840"),
  C = s("437712"),
  A = s("659632"),
  O = s("845579"),
  x = s("943927"),
  R = s("663952"),
  M = s("49111"),
  D = s("646718"),
  v = s("782340"),
  L = s("399953");

function P(e) {
  let t, {
      outboundPromotion: s,
      code: l,
      addClaimedOutboundPromotionCode: r
    } = e,
    [o, d] = n.useState(!1),
    [c, S] = n.useState(!1),
    E = () => d(e => !e),
    f = (0, T.default)(),
    _ = (0, N.getPromotionImageURL)(s.id, f),
    m = null != l,
    I = (0, h.default)(s, m);
  m && o ? t = v.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_EXPANDED_BODY.format({
    endDate: I,
    onClickDetails: E
  }) : m && !o ? t = v.default.Messages.OUTBOUND_PROMOTION_CARD_CLAIMED_UNEXPANDED_BODY.format({
    endDate: I,
    onClickDetails: E
  }) : !m && o ? t = v.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_EXPANDED_BODY.format({
    endDate: I,
    onClickDetails: E
  }) : !m && !o && (t = v.default.Messages.OUTBOUND_PROMOTION_CARD_UNCLAIMED_UNEXPANDED_BODY.format({
    endDate: I,
    onClickDetails: E
  }));
  let C = m ? v.default.Messages.OUTBOUND_PROMOTION_SEE_CODE : v.default.Messages.PROMOTION_CARD_ACTION_CLAIM,
    A = n.useCallback(() => S(!1), []),
    {
      outboundTitle: O,
      outboundTermsAndConditions: x
    } = s;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: i(L.skuCard, L.promotionCard),
      children: [(0, a.jsxs)("div", {
        className: L.mainPromotionCardContainer,
        children: [(0, a.jsxs)("div", {
          className: L.promotionCardLeftContainer,
          children: [(0, a.jsx)("div", {
            className: L.promotionIcon,
            children: (0, a.jsx)("img", {
              alt: "",
              src: _,
              className: L.promotionIconImage
            })
          }), (0, a.jsxs)("div", {
            children: [(0, a.jsx)(u.Heading, {
              variant: "heading-md/semibold",
              children: O
            }), (0, a.jsx)(u.Text, {
              variant: "text-sm/normal",
              color: "text-normal",
              className: L.promotionText,
              children: t
            })]
          })]
        }), (0, a.jsx)(u.Button, {
          className: L.promotionCardButton,
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.SMALL,
          onClick: () => S(!0),
          children: C
        })]
      }), o && (0, a.jsx)(u.Text, {
        className: L.promotionLegalese,
        variant: "text-xs/normal",
        color: "header-secondary",
        children: g.default.parse(x, !1, {
          allowLinks: !0
        })
      })]
    }), c && (0, a.jsx)(u.Modal, {
      renderModal: e => (0, a.jsx)(p.default, {
        ...e,
        onClose: A,
        onClaim: r,
        code: l,
        outboundPromotion: s
      }),
      onCloseRequest: A
    })]
  })
}
var j = function() {
  let e = (0, d.useStateFromStoresArray)([C.default], () => C.default.getGiftable()),
    [t, s] = o.partition(e, e => {
      let {
        giftCodeBatchId: t
      } = e;
      return null == t
    }),
    l = o.groupBy(t, e => (0, A.makeComboId)(e.skuId, e.subscriptionPlanId, e.giftStyle)),
    [i, r] = n.useState(!1),
    T = (0, d.useStateFromStores)([m.default], () => m.default.userStatus);
  n.useEffect(() => {
    c.default.wait(() => {
      (0, S.fetchGiftableEntitlements)().then(() => r(!0))
    })
  }, []);
  let g = (0, _.useAnyDropsEnabled)();
  n.useEffect(() => {
    g && c.default.wait(async () => {
      await (0, f.fetchDropsUserStatus)()
    })
  }, [g]);
  let h = O.DropsOptedOut.useSetting(),
    N = null != T || !g,
    {
      promotionsLoaded: p,
      activeOutboundPromotions: j,
      claimedEndedOutboundPromotions: b,
      claimedOutboundPromotionCodeMap: U,
      addClaimedOutboundPromotionCode: y
    } = (0, I.useOutboundPromotions)();

  function B() {
    E.default.open(M.UserSettingsSections.PREMIUM)
  }
  return i && p && N ? (0, a.jsxs)(a.Fragment, {
    children: [g ? (0, a.jsx)(R.default, {
      dropsOptedOut: h,
      dropsStatuses: T
    }) : null, function() {
      var e;
      let t = s.find(e => e.giftCodeBatchId === D.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID && !e.consumed),
        n = null !== (e = s.filter(e => e.giftCodeBatchId === D.STICKERS_GIFT_CODE_BATCH_ID && !e.consumed)) && void 0 !== e ? e : [],
        [l, i] = o.partition(n, e => {
          let {
            subscriptionPlanId: t
          } = e;
          return t === D.SubscriptionPlans.PREMIUM_YEAR_TIER_2
        }),
        r = j.length + b.length > 0;
      return (0, a.jsx)(u.FormSection, {
        children: (0, a.jsxs)(u.HeadingLevel, {
          component: (0, a.jsx)(u.Heading, {
            variant: "heading-md/semibold",
            children: r ? v.default.Messages.GIFT_INVENTORY_YOUR_GIFTS : void 0
          }),
          children: [r ? (0, a.jsx)(u.FormDivider, {
            className: L.divider
          }) : null, b.map(e => {
            let {
              code: t,
              promotion: s
            } = e;
            return (0, a.jsx)(P, {
              outboundPromotion: s,
              code: t,
              addClaimedOutboundPromotionCode: y
            }, s.id)
          }), j.map(e => (0, a.jsx)(P, {
            outboundPromotion: e,
            code: U[e.id],
            addClaimedOutboundPromotionCode: y
          }, e.id)), null != t ? (0, a.jsx)(x.default, {
            className: L.skuCard,
            skuId: t.skuId,
            subscriptionPlanId: t.subscriptionPlanId,
            entitlements: [t],
            giftCodeBatchId: D.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID
          }, (0, A.makeComboId)(t.skuId, t.subscriptionPlanId)) : null, l.length > 0 ? (0, a.jsx)(x.default, {
            className: L.skuCard,
            skuId: l[0].skuId,
            subscriptionPlanId: l[0].subscriptionPlanId,
            entitlements: l,
            giftCodeBatchId: D.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, A.makeComboId)(l[0].skuId, l[0].subscriptionPlanId)) : null, i.length > 0 ? (0, a.jsx)(x.default, {
            className: L.skuCard,
            skuId: i[0].skuId,
            subscriptionPlanId: i[0].subscriptionPlanId,
            entitlements: i,
            giftCodeBatchId: D.STICKERS_GIFT_CODE_BATCH_ID
          }, (0, A.makeComboId)(i[0].skuId, i[0].subscriptionPlanId)) : null]
        })
      })
    }(), (0, a.jsx)(u.FormSection, {
      children: (0, a.jsxs)(u.HeadingLevel, {
        component: (0, a.jsx)(u.Heading, {
          variant: "heading-md/semibold",
          children: v.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED
        }),
        children: [(0, a.jsx)(u.FormDivider, {
          className: L.divider
        }), 0 === Object.keys(l).length ? (0, a.jsxs)("div", {
          className: L.emptyState,
          children: [(0, a.jsx)("div", {
            className: L.emptyStateImage
          }), (0, a.jsx)(u.H, {
            className: L.emptyStateHeader,
            children: v.default.Messages.GIFT_INVENTORY_NO_GIFTS
          }), (0, a.jsx)("p", {
            className: L.emptyStateSubtext,
            children: v.default.Messages.GIFT_INVENTORY_NO_GIFTS_SUBTEXT.format({
              onClick: B
            })
          })]
        }) : o.keys(l).map(e => {
          let {
            skuId: t,
            subscriptionPlanId: s,
            giftStyle: n
          } = (0, A.parseComboId)(e);
          return (0, a.jsx)(x.default, {
            className: L.skuCard,
            skuId: t,
            subscriptionPlanId: s,
            entitlements: l[e],
            giftStyle: n
          }, e)
        })]
      })
    })]
  }) : (0, a.jsx)(u.Spinner, {
    className: L.loading
  })
}