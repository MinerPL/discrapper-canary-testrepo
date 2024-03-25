"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return a
  },
  default: function() {
    return q
  }
}), s("222007"), s("70102");
var a, n, i = s("37983"),
  l = s("884691"),
  r = s("414456"),
  u = s.n(r),
  o = s("516555"),
  d = s("627445"),
  c = s.n(d),
  E = s("446674"),
  f = s("819855"),
  _ = s("77078"),
  p = s("850068"),
  m = s("841098"),
  I = s("812204"),
  N = s("685665"),
  S = s("619935"),
  T = s("10514"),
  C = s("145131"),
  P = s("599110"),
  R = s("745279"),
  A = s("701909"),
  M = s("719923"),
  h = s("153160"),
  L = s("809071"),
  g = s("182650"),
  y = s("359499"),
  x = s("883662"),
  D = s("471131"),
  U = s("398309"),
  O = s("249718"),
  v = s("360262"),
  b = s("177998"),
  B = s("146163"),
  j = s("510928"),
  G = s("661128"),
  F = s("354588"),
  k = s("646718"),
  w = s("49111"),
  H = s("782340"),
  Y = s("871556");
(n = a || (a = {}))[n.WHAT_YOU_LOSE = 1] = "WHAT_YOU_LOSE", n[n.CONFIRM = 2] = "CONFIRM", n[n.PREVIEW = 3] = "PREVIEW", n[n.CONFIRM_DISCOUNT = 4] = "CONFIRM_DISCOUNT", n[n.DISCOUNT_APPLIED = 5] = "DISCOUNT_APPLIED", n[n.PAUSE_SELECT = 6] = "PAUSE_SELECT", n[n.PAUSE_CONFIRM = 7] = "PAUSE_CONFIRM";
async function W(e) {
  let {
    premiumSubscription: t,
    onClose: s,
    setHasError: a,
    setIsCancelling: n,
    analyticsLocations: i,
    analyticsLocation: l
  } = e;
  try {
    n(!0), a(!1);
    let e = [w.SubscriptionStatusTypes.PAST_DUE, w.SubscriptionStatusTypes.PAUSED];
    if (e.includes(t.status)) await (0, p.cancelSubscription)(t.id, i, l);
    else {
      var r, u;
      let e = null !== (u = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== u ? u : t.items;
      await (0, p.updateSubscription)(t, {
        items: (0, M.getItemsWithoutPremiumPlanItem)(e)
      }, i, l)
    }
    s()
  } catch {
    a(!0), n(!1)
  }
}

function V(e) {
  var t;
  let {
    premiumSubscription: s,
    premiumType: a,
    setStep: n,
    onClose: r,
    whatYouLoseExperienceEnabled: u,
    analyticsLocation: o
  } = e, d = (0, S.useBlockedPaymentsConfig)(), [c, E] = l.useState(!1), [p, I] = l.useState(!1), T = (0, m.default)(), {
    analyticsLocations: P
  } = (0, N.default)(), R = null;
  switch (s.status) {
    case w.SubscriptionStatusTypes.PAST_DUE:
    case w.SubscriptionStatusTypes.PAUSED:
      R = H.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
      break;
    default:
      switch (a) {
        case k.PremiumTypes.TIER_0:
          R = d ? H.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : H.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
            date: s.currentPeriodEnd
          });
          break;
        case k.PremiumTypes.TIER_1:
          R = d ? H.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : H.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
            date: s.currentPeriodEnd
          });
          break;
        default:
          R = d ? H.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(w.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : H.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
            date: s.currentPeriodEnd
          })
      }
  }
  let h = s.items.some(e => {
      let {
        planId: t
      } = e;
      return !k.PREMIUM_PLANS.has(t)
    }),
    L = h && null == s.renewalMutations || (null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !k.PREMIUM_PLANS.has(t)
    })) != null,
    g = L ? (0, i.jsx)(_.Button, {
      onClick: () => n(3),
      children: H.default.Messages.NEXT
    }) : (0, i.jsx)(_.Button, {
      color: _.Button.Colors.RED,
      disabled: c,
      onClick: async () => {
        await W({
          setHasError: I,
          onClose: r,
          premiumSubscription: s,
          setIsCancelling: E,
          analyticsLocations: P,
          analyticsLocation: o
        })
      },
      children: u ? H.default.Messages.CONFIRM : H.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: M.default.getDisplayPremiumType(s.planId)
      })
    }),
    y = (0, i.jsx)(_.Button, {
      look: _.Button.Looks.LINK,
      color: (0, f.isThemeLight)(T) ? _.Button.Colors.PRIMARY : _.Button.Colors.WHITE,
      onClick: r,
      children: u ? H.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : H.default.Messages.CANCEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [u ? (0, i.jsx)(j.default, {
      premiumType: a,
      className: Y.cancellationHeader,
      onClose: r
    }) : (0, i.jsxs)(_.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(_.FormTitle, {
        tag: _.FormTitleTags.H4,
        children: H.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: M.default.getDisplayPremiumType(s.planId)
        })
      }), (0, i.jsx)(_.ModalCloseButton, {
        onClick: r
      })]
    }), (0, i.jsxs)(_.ModalContent, {
      className: Y.body,
      children: [p ? (0, i.jsx)(_.FormErrorBlock, {
        className: Y.errorBlock,
        children: H.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)("div", {
        className: Y.cancelImage
      }), (0, i.jsx)("div", {
        children: R
      })]
    }), (0, i.jsxs)(_.ModalFooter, {
      justify: C.default.Justify.START,
      children: [g, y]
    })]
  })
}

function K(e) {
  var t, s;
  let {
    premiumSubscription: a
  } = e, {
    analyticsLocations: n
  } = (0, N.default)(), [l] = (0, L.useSubscriptionInvoicePreview)({
    subscriptionId: a.id,
    items: (0, M.getItemsWithoutPremiumPlanItem)(null !== (s = null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== s ? s : a.items),
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: I.default.CANCEL_INVOICE_PREVIEW
  }), r = (0, E.useStateFromStores)([T.default], () => T.default.get(a.planId));
  if (null == l || null == r) return (0, i.jsx)(_.Spinner, {
    className: Y.loading
  });
  let {
    intervalType: u,
    intervalCount: o
  } = M.default.getIntervalForInvoice(l);
  return (0, i.jsxs)("div", {
    className: Y.bodyText,
    children: [(0, i.jsx)("div", {
      className: Y.renewalInvoiceDate,
      children: 0 !== l.total ? H.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: l.subscriptionPeriodStart,
        rate: (0, h.formatRate)((0, h.formatPrice)(l.total, l.currency), u, o)
      }) : H.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: l.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(x.PremiumInvoiceTable, {
      children: [(0, i.jsx)(x.PremiumInvoiceTableHeader, {
        children: H.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(x.PremiumInvoiceTableRow, {
        label: H.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: M.default.getDisplayName(r.id)
        }),
        value: (0, M.getFormattedRateForPlan)(r),
        className: Y.invoiceCancelRow
      }), (0, i.jsx)(x.PremiumInvoiceTableDivider, {}), (0, i.jsx)(B.SubscriptionInvoiceFooter, {
        premiumSubscription: a,
        renewalInvoice: l,
        isUpdate: !0
      })]
    })]
  })
}

function z(e) {
  let {
    premiumSubscription: t,
    premiumType: s,
    onBack: a,
    onClose: n,
    analyticsLocation: r
  } = e, [o, d] = l.useState(!1), [c, E] = l.useState(!1), {
    analyticsLocations: f
  } = (0, N.default)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(j.default, {
      premiumType: s,
      onClose: n
    }), (0, i.jsxs)(_.ModalContent, {
      className: u(Y.previewStep, Y.body),
      children: [c ? (0, i.jsx)(_.FormErrorBlock, {
        className: Y.errorBlock,
        children: H.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)(K, {
        premiumSubscription: t
      })]
    }), (0, i.jsxs)(_.ModalFooter, {
      align: C.default.Align.CENTER,
      justify: C.default.Justify.BETWEEN,
      children: [(0, i.jsx)(_.Button, {
        color: _.Button.Colors.RED,
        disabled: o,
        onClick: async () => {
          await W({
            setHasError: E,
            onClose: n,
            premiumSubscription: t,
            setIsCancelling: d,
            analyticsLocations: f,
            analyticsLocation: r
          })
        },
        children: H.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: M.default.getDisplayPremiumType(t.planId)
        })
      }), (0, i.jsx)(b.default, {
        onClick: a
      })]
    })]
  })
}

function Z(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (t = (0, M.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId
  }
}
let X = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Redeem Churn Discount Started",
  5: "Redeem Churn Discount Completed",
  6: "Select Pause Duration",
  7: "Confirm Pause Duration"
};

function q(e) {
  var t;
  let s, {
      premiumSubscription: a,
      transitionState: n,
      onClose: r,
      analyticsLocations: u,
      analyticsLocation: d,
      initialStep: E
    } = e,
    p = l.useRef(new o.Environment),
    [S, T] = l.useState(null),
    C = (0, y.useFreeBoostUserTenureReward)(),
    A = (null == C ? void 0 : C.showNotification) === !0,
    h = null === (t = (0, M.getPremiumPlanItem)(a)) || void 0 === t ? void 0 : t.planId,
    L = null != h ? M.default.getPremiumType(h) : null;
  c(null != L, "Should not be cancelling Nitro without premiumType");
  let x = (0, m.default)();
  l.useEffect(() => {
    P.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STARTED, Z(a))
  }, [a]);
  let b = L === k.PremiumTypes.TIER_0 || L === k.PremiumTypes.TIER_1 || L === k.PremiumTypes.TIER_2;
  null == E && (E = b ? 1 : 2);
  let {
    analyticsLocations: B
  } = (0, N.default)(u, I.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [j, W, K, q] = function(e, t, s) {
    let [a, n] = l.useState(e), [i, r] = l.useState(Date.now()), [u] = l.useState(Date.now()), o = l.useCallback(e => {
      P.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: X[a],
        to_step: X[e],
        step_duration_ms: Date.now() - i,
        flow_duration_ms: Date.now() - u,
        location_stack: s,
        ...Z(t)
      }), n(e), r(Date.now())
    }, [s, u, i, a, t]);
    return [a, o, i, u]
  }(E, a, u), [J, Q] = l.useState(null);
  (0, G.useUnsupportedExternalSubscriptionModalHandler)(a, r, !1);
  let $ = e => {
      r(), P.default.track(w.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: X[e],
        to_step: null,
        step_duration_ms: Date.now() - K,
        flow_duration_ms: Date.now() - q,
        location_stack: u,
        ...Z(a)
      })
    },
    ee = (0, g.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: et,
      isFetchingChurnDiscountOffer: es
    } = (0, g.useFetchChurnUserDiscountOffer)(!ee || 1 !== j);
  switch (j) {
    case 6:
      s = (0, i.jsx)(O.PremiumSubscriptionPauseModalSelect, {
        premiumSubscription: a,
        premiumType: L,
        setStep: W,
        onClose: () => $(j),
        pauseDuration: J,
        setPauseDuration: Q,
        footer: (0, i.jsxs)("div", {
          className: Y.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(_.Button, {
            disabled: null === J,
            onClick: () => {
              0 === J ? W(1) : W(7)
            },
            children: H.default.Messages.CONTINUE
          }), (0, i.jsx)(_.Button, {
            look: _.Button.Looks.LINK,
            color: (0, f.isThemeDark)(x) ? _.Button.Colors.WHITE : _.Button.Colors.PRIMARY,
            onClick: r,
            children: H.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        analyticsLocation: d
      });
      break;
    case 7:
      if (null == J) {
        let e = Error("No pause duration to set");
        throw (0, R.captureBillingException)(e, {
          extra: {
            subscriptionId: a.id,
            status: a.status
          }
        }), e
      }
      s = (0, i.jsx)(O.PremiumSubscriptionPauseModalConfirm, {
        premiumSubscription: a,
        premiumType: L,
        setStep: W,
        onClose: () => $(j),
        analyticsLocation: d,
        pauseDuration: J
      });
      break;
    case 1:
      s = (0, i.jsx)(v.default, {
        premiumType: L,
        titleText: H.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: A ? H.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE_TENURE_REWARD : H.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        subtitleClassName: A ? Y.subtitleSection : void 0,
        subtitleIcon: A && (0, i.jsx)("div", {
          className: Y.subtitleIcon,
          children: (0, i.jsx)(F.default, {
            staticPercentage: 100,
            iconClassName: Y.iconClassName,
            showAnimations: !1,
            innerCircleClassName: Y.innerCircle,
            progressCircleStrokeSize: 5,
            gemBackgroundCircleSize: "38%"
          })
        }),
        footer: (0, i.jsxs)("div", {
          className: Y.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(_.Button, {
            onClick: () => W(2),
            children: H.default.Messages.CONTINUE
          }), (0, i.jsx)(_.Button, {
            look: _.Button.Looks.LINK,
            color: (0, f.isThemeDark)(x) ? _.Button.Colors.WHITE : _.Button.Colors.PRIMARY,
            onClick: () => $(j),
            children: H.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => $(j),
        onDiscountClaim: () => W(4),
        onContinue: () => W(2),
        isLoading: ee && es,
        churnUserDiscountOffer: et,
        analyticsLocations: B
      });
      break;
    case 2:
      s = (0, i.jsx)(V, {
        premiumSubscription: a,
        premiumType: L,
        setStep: W,
        onClose: () => $(j),
        whatYouLoseExperienceEnabled: b,
        analyticsLocation: d
      });
      break;
    case 3:
      s = (0, i.jsx)(z, {
        premiumSubscription: a,
        premiumType: L,
        onBack: () => W(2),
        onClose: () => $(j),
        analyticsLocation: d
      });
      break;
    case 4:
      s = (0, i.jsx)(D.default, {
        premiumSubscription: a,
        premiumType: L,
        onClose: () => $(j),
        onConfirm: () => W(5),
        userDiscountOffer: et
      });
      break;
    case 5:
      s = (0, i.jsx)(U.PremiumSubscritionDiscountAppliedModal, {
        premiumSubscription: a,
        premiumType: L,
        onClose: () => $(j),
        confettiCanvas: S,
        userDiscountOffer: et
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(j))
  }
  return (0, i.jsxs)(N.AnalyticsLocationProvider, {
    value: B,
    children: [(0, i.jsx)(o.ConfettiCanvas, {
      ref: T,
      className: Y.confettiCanvas,
      environment: p.current
    }), (0, i.jsx)(_.ModalRoot, {
      transitionState: n,
      children: s
    })]
  })
}