"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("222007"), n("70102");
var l = n("37983"),
  a = n("884691"),
  u = n("446674"),
  r = n("819855"),
  i = n("77078"),
  s = n("596523"),
  o = n("798609"),
  c = n("841098"),
  _ = n("812204"),
  d = n("685665"),
  I = n("854381"),
  f = n("649844"),
  N = n("357957"),
  E = n("10514"),
  S = n("599110"),
  O = n("719923"),
  T = n("153160"),
  C = n("713518"),
  R = n("380186"),
  L = n("809071"),
  P = n("360262"),
  p = n("510928"),
  m = n("775155"),
  M = n("646718"),
  A = n("49111"),
  U = n("782340"),
  y = n("546831"),
  v = e => {
    var t, n, v, G;
    let {
      daysLeft: g,
      premiumType: b,
      premiumSubscription: D,
      analyticsSource: Y,
      ...B
    } = e, x = (0, c.default)(), [h, k] = a.useState(!1), {
      analyticsLocations: W
    } = (0, d.default)(_.default.PREMIUM_UNCANCEL_MODAL), H = (0, u.useStateFromStores)([N.default], () => (null == D ? void 0 : D.paymentSourceId) != null ? N.default.getPaymentSource(D.paymentSourceId) : null, [D]), F = D.items[0].planId, j = (0, O.castPremiumSubscriptionAsSkuId)(M.SubscriptionPlanInfo[F].skuId), {
      priceOptions: w
    } = (0, I.default)({
      activeSubscription: null,
      skuIDs: [j],
      paymentSourceId: null == D ? void 0 : D.paymentSourceId,
      isGift: !1
    }), [Z] = (0, L.useSubscriptionInvoicePreview)({
      subscriptionId: D.id,
      items: [{
        planId: F,
        quantity: 1
      }],
      renewal: !0,
      paymentSourceId: null == D ? void 0 : D.paymentSourceId,
      currency: w.currency,
      analyticsLocations: (0, d.default)(_.default.PREMIUM_UNCANCEL_MODAL),
      analyticsLocation: _.default.PREMIUM_UNCANCEL_MODAL
    }), K = (0, u.useStateFromStores)([E.default], () => (0, R.getOrFetchSubscriptionPlan)(F), [F]), z = (0, u.useStateFromStores)([E.default], () => E.default.isFetchingForSKU(j)), q = null == Z ? void 0 : null === (G = Z.invoiceItems) || void 0 === G ? void 0 : null === (v = G.find(e => e.subscriptionPlanId === F)) || void 0 === v ? void 0 : null === (n = v.discounts) || void 0 === n ? void 0 : null === (t = n.find(e => e.type === o.InvoiceDiscountTypes.SUBSCRIPTION_PLAN)) || void 0 === t ? void 0 : t.amount, J = null != K ? (0, O.getPrice)(K.id, !1, !1, w) : null, Q = null != J && null != q ? (0, T.formatPrice)(J.amount - (null != q ? q : 0), J.currency) : null, {
      intervalType: V,
      intervalCount: X
    } = O.default.getInterval(F), $ = b === M.PremiumTypes.TIER_1, ee = null != J ? (0, T.formatPrice)(J.amount, J.currency) : null;
    return a.useEffect(() => {
      S.default.track(A.AnalyticEvents.OPEN_MODAL, {
        type: "Premium Uncancel Winback",
        source: Y
      })
    }, [Y]), (0, l.jsx)(i.ModalRoot, {
      ...B,
      className: y.modal,
      children: h ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(p.default, {
          premiumType: b,
          onClose: B.onClose
        }), (0, l.jsx)(m.default, {
          planId: F,
          onClose: B.onClose,
          paymentSourceType: null == H ? void 0 : H.type
        })]
      }) : (0, l.jsx)(P.default, {
        premiumType: b,
        titleText: $ ? U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE_TIER_1.format({
          daysLeft: g
        }) : U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_TITLE.format({
          daysLeft: g
        }),
        subtitleText: $ ? U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE_TIER_1.format() : U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_SUBTITLE.format(),
        footer: (0, l.jsxs)("div", {
          children: [null !== ee ? (0, l.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: function(e) {
              switch (V) {
                case M.SubscriptionIntervalTypes.YEAR:
                  return $ ? U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY_TIER_1.format({
                    price: e
                  }) : U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_YEARLY.format({
                    price: e
                  });
                case M.SubscriptionIntervalTypes.MONTH:
                  if (null != Q) return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_DISCOUNT_PRICE_FOOTER.format({
                    discountPrice: Q,
                    defaultPrice: e
                  });
                  if ($) return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY_TIER_1.format({
                    price: e
                  });
                  if (1 === X) return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MONTHLY.format({
                    price: e
                  });
                  else return U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_MULTI_MONTH.format({
                    price: e,
                    intervalCount: X
                  });
                default:
                  throw Error("Unknown interval type ".concat(V))
              }
            }(ee)
          }) : (0, l.jsx)(i.Spinner, {
            type: i.SpinnerTypes.SPINNING_CIRCLE
          }), (0, l.jsxs)("div", {
            className: y.footer,
            children: [(0, l.jsx)(i.Button, {
              disabled: z,
              onClick: () => {
                if (null != D) {
                  let e = (0, C.planHasCurrency)(F, D.currency, null == H ? void 0 : H.id);
                  null != H && H.id === D.paymentSourceId && e ? (s.resubscribe(D, W, A.AnalyticsLocations.UNCANCEL_WINBACK_MODAL), k(!0)) : (B.onClose(), (0, f.default)({
                    initialPlanId: F,
                    analyticsLocations: W,
                    analyticsLocation: A.AnalyticsLocations.UNCANCEL_WINBACK_MODAL
                  }))
                }
              },
              children: U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_KEEP_NITRO
            }), (0, l.jsx)(i.Button, {
              look: i.Button.Looks.LINK,
              color: (0, r.isThemeDark)(x) ? i.Button.Colors.WHITE : i.Button.Colors.PRIMARY,
              onClick: B.onClose,
              children: U.default.Messages.PREMIUM_SUBSCRIPTION_ENDING_WHAT_YOU_LOSE_FOOTER_BUTTON_CANCEL
            })]
          })]
        }),
        onClose: B.onClose
      })
    })
  }