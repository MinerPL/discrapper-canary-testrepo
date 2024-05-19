"use strict";
s.r(t), s.d(t, {
  Steps: function() {
    return a
  },
  default: function() {
    return X
  }
}), s("47120"), s("411104");
var a, n, i = s("735250"),
  l = s("470079"),
  r = s("120356"),
  u = s.n(r),
  o = s("887024"),
  d = s("512722"),
  c = s.n(d),
  p = s("442837"),
  m = s("780384"),
  f = s("481060"),
  E = s("355467"),
  _ = s("410030"),
  I = s("100527"),
  S = s("906732"),
  N = s("211242"),
  P = s("509545"),
  C = s("285952"),
  h = s("626135"),
  T = s("122289"),
  A = s("63063"),
  R = s("74538"),
  y = s("937615"),
  M = s("374649"),
  L = s("140465"),
  g = s("314684"),
  x = s("653798"),
  D = s("625881"),
  b = s("440984"),
  U = s("398775"),
  v = s("973159"),
  B = s("311821"),
  O = s("42818"),
  j = s("798769"),
  G = s("459965"),
  k = s("119269"),
  w = s("474936"),
  F = s("981631"),
  Y = s("689938"),
  H = s("50604");
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
    if (n(!0), a(!1), [F.SubscriptionStatusTypes.PAST_DUE, F.SubscriptionStatusTypes.PAUSED].includes(t.status)) await (0, E.cancelSubscription)(t.id, i, l);
    else {
      var r, u;
      let e = null !== (u = null === (r = t.renewalMutations) || void 0 === r ? void 0 : r.items) && void 0 !== u ? u : t.items;
      await (0, E.updateSubscription)(t, {
        items: (0, R.getItemsWithoutPremiumPlanItem)(e)
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
  } = e, d = (0, N.useBlockedPaymentsConfig)(), [c, p] = l.useState(!1), [E, I] = l.useState(!1), P = (0, _.default)(), {
    analyticsLocations: h
  } = (0, S.default)(), T = null;
  switch (s.status) {
    case F.SubscriptionStatusTypes.PAST_DUE:
    case F.SubscriptionStatusTypes.PAUSED:
      T = Y.default.Messages.PREMIUM_CANCEL_PAST_DUE_CONFIRM_BODY;
      break;
    default:
      switch (a) {
        case w.PremiumTypes.TIER_0:
          T = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(F.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_0.format({
            date: s.currentPeriodEnd
          });
          break;
        case w.PremiumTypes.TIER_1:
          T = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(F.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_1.format({
            date: s.currentPeriodEnd
          });
          break;
        default:
          T = d ? Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2_PAYMENT_BLOCKED_RUSSIA.format({
            date: s.currentPeriodEnd,
            helpdeskArticle: A.default.getArticleURL(F.HelpdeskArticles.BLOCKED_PAYMENTS)
          }) : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_BODY_TIER_2.format({
            date: s.currentPeriodEnd
          })
      }
  }
  let y = s.items.some(e => {
      let {
        planId: t
      } = e;
      return !w.PREMIUM_PLANS.has(t)
    }) && null == s.renewalMutations || (null === (t = s.renewalMutations) || void 0 === t ? void 0 : t.items.find(e => {
      let {
        planId: t
      } = e;
      return !w.PREMIUM_PLANS.has(t)
    })) != null,
    M = y ? (0, i.jsx)(f.Button, {
      onClick: () => n(3),
      children: Y.default.Messages.NEXT
    }) : (0, i.jsx)(f.Button, {
      color: f.Button.Colors.RED,
      disabled: c,
      onClick: async () => {
        await W({
          setHasError: I,
          onClose: r,
          premiumSubscription: s,
          setIsCancelling: p,
          analyticsLocations: h,
          analyticsLocation: o
        })
      },
      children: u ? Y.default.Messages.CONFIRM : Y.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
        planPremiumType: R.default.getDisplayPremiumType(s.planId)
      })
    }),
    L = (0, i.jsx)(f.Button, {
      look: f.Button.Looks.LINK,
      color: (0, m.isThemeLight)(P) ? f.Button.Colors.PRIMARY : f.Button.Colors.WHITE,
      onClick: r,
      children: u ? Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK : Y.default.Messages.CANCEL
    });
  return (0, i.jsxs)(i.Fragment, {
    children: [u ? (0, i.jsx)(j.default, {
      premiumType: a,
      className: H.cancellationHeader,
      onClose: r
    }) : (0, i.jsxs)(f.ModalHeader, {
      separator: !1,
      children: [(0, i.jsx)(f.FormTitle, {
        tag: f.FormTitleTags.H4,
        children: Y.default.Messages.PREMIUM_CANCEL_CONFIRM_TITLE.format({
          planPremiumType: R.default.getDisplayPremiumType(s.planId)
        })
      }), (0, i.jsx)(f.ModalCloseButton, {
        onClick: r
      })]
    }), (0, i.jsxs)(f.ModalContent, {
      className: H.body,
      children: [E ? (0, i.jsx)(f.FormErrorBlock, {
        className: H.errorBlock,
        children: Y.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)("div", {
        className: H.cancelImage
      }), (0, i.jsx)("div", {
        children: T
      })]
    }), (0, i.jsxs)(f.ModalFooter, {
      justify: C.default.Justify.START,
      children: [M, L]
    })]
  })
}

function K(e) {
  var t, s;
  let {
    premiumSubscription: a
  } = e, {
    analyticsLocations: n
  } = (0, S.default)(), [l] = (0, M.useSubscriptionInvoicePreview)({
    subscriptionId: a.id,
    items: (0, R.getItemsWithoutPremiumPlanItem)(null !== (s = null === (t = a.renewalMutations) || void 0 === t ? void 0 : t.items) && void 0 !== s ? s : a.items),
    renewal: !0,
    analyticsLocations: n,
    analyticsLocation: I.default.CANCEL_INVOICE_PREVIEW
  }), r = (0, p.useStateFromStores)([P.default], () => P.default.get(a.planId));
  if (null == l || null == r) return (0, i.jsx)(f.Spinner, {
    className: H.loading
  });
  let {
    intervalType: u,
    intervalCount: o
  } = R.default.getIntervalForInvoice(l);
  return (0, i.jsxs)("div", {
    className: H.__invalid_bodyText,
    children: [(0, i.jsx)("div", {
      className: H.renewalInvoiceDate,
      children: 0 !== l.total ? Y.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE_WITH_CHARGE.format({
        renewalDate: l.subscriptionPeriodStart,
        rate: (0, y.formatRate)((0, y.formatPrice)(l.total, l.currency), u, o)
      }) : Y.default.Messages.BILLING_SWITCH_PLAN_CHANGE_DATE.format({
        renewalDate: l.subscriptionPeriodStart
      })
    }), (0, i.jsxs)(x.PremiumInvoiceTable, {
      children: [(0, i.jsx)(x.PremiumInvoiceTableHeader, {
        children: Y.default.Messages.PREMIUM_SUBSCRIPTION_UPDATES
      }), (0, i.jsx)(x.PremiumInvoiceTableRow, {
        label: Y.default.Messages.PREMIUM_SUBSCRIPTION_CANCELLED.format({
          planName: R.default.getDisplayName(r.id)
        }),
        value: (0, R.getFormattedRateForPlan)(r),
        className: H.invoiceCancelRow
      }), (0, i.jsx)(x.PremiumInvoiceTableDivider, {}), (0, i.jsx)(O.SubscriptionInvoiceFooter, {
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
  } = e, [o, d] = l.useState(!1), [c, p] = l.useState(!1), {
    analyticsLocations: m
  } = (0, S.default)();
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(j.default, {
      premiumType: s,
      onClose: n
    }), (0, i.jsxs)(f.ModalContent, {
      className: u()(H.previewStep, H.body),
      children: [c ? (0, i.jsx)(f.FormErrorBlock, {
        className: H.errorBlock,
        children: Y.default.Messages.BILLING_ERROR_GENERIC
      }) : null, (0, i.jsx)(K, {
        premiumSubscription: t
      })]
    }), (0, i.jsxs)(f.ModalFooter, {
      align: C.default.Align.CENTER,
      justify: C.default.Justify.BETWEEN,
      children: [(0, i.jsx)(f.Button, {
        color: f.Button.Colors.RED,
        disabled: o,
        onClick: async () => {
          await W({
            setHasError: p,
            onClose: n,
            premiumSubscription: t,
            setIsCancelling: d,
            analyticsLocations: m,
            analyticsLocation: r
          })
        },
        children: Y.default.Messages.PREMIUM_CANCEL_CONFIRM_NEW.format({
          planPremiumType: R.default.getDisplayPremiumType(t.planId)
        })
      }), (0, i.jsx)(B.default, {
        onClick: a
      })]
    })]
  })
}

function q(e) {
  var t;
  return {
    subscription_id: e.id,
    subscription_type: e.type,
    subscription_plan_id: null === (t = (0, R.getPremiumPlanItem)(e)) || void 0 === t ? void 0 : t.id,
    subscription_plan_gateway_plan_id: e.paymentGatewayPlanId,
    subscription_status: e.status
  }
}
let Z = {
  1: "What You're Losing",
  2: "Confirm Cancellation",
  3: "Preview Updated Subscription",
  4: "Redeem Churn Discount Started",
  5: "Redeem Churn Discount Completed",
  6: "Select Pause Duration",
  7: "Confirm Pause Duration"
};

function X(e) {
  var t;
  let s, {
      premiumSubscription: a,
      transitionState: n,
      onClose: r,
      analyticsLocations: u,
      analyticsLocation: d,
      initialStep: p
    } = e,
    E = l.useRef(new o.Environment),
    [N, P] = l.useState(null),
    C = (0, g.useFreeBoostUserTenureReward)(),
    A = (null == C ? void 0 : C.showCard) === !0,
    y = null === (t = (0, R.getPremiumPlanItem)(a)) || void 0 === t ? void 0 : t.planId,
    M = null != y ? R.default.getPremiumType(y) : null;
  c()(null != M, "Should not be cancelling Nitro without premiumType");
  let x = (0, _.default)();
  l.useEffect(() => {
    h.default.track(F.AnalyticEvents.CANCELLATION_FLOW_STARTED, q(a))
  }, [a]);
  let B = M === w.PremiumTypes.TIER_0 || M === w.PremiumTypes.TIER_1 || M === w.PremiumTypes.TIER_2;
  null == p && (p = B ? 1 : 2);
  let {
    analyticsLocations: O
  } = (0, S.default)(u, I.default.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL), [j, W, K, X] = function(e, t, s) {
    let [a, n] = l.useState(e), [i, r] = l.useState(Date.now()), [u] = l.useState(Date.now()), o = l.useCallback(e => {
      h.default.track(F.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: Z[a],
        to_step: Z[e],
        step_duration_ms: Date.now() - i,
        flow_duration_ms: Date.now() - u,
        location_stack: s,
        ...q(t)
      }), n(e), r(Date.now())
    }, [s, u, i, a, t]);
    return [a, o, i, u]
  }(p, a, u), [J, Q] = l.useState(null);
  (0, G.useUnsupportedExternalSubscriptionModalHandler)(a, r, !1);
  let $ = e => {
      r(), h.default.track(F.AnalyticEvents.CANCELLATION_FLOW_STEP, {
        from_step: Z[e],
        to_step: null,
        step_duration_ms: Date.now() - K,
        flow_duration_ms: Date.now() - X,
        location_stack: u,
        ...q(a)
      })
    },
    ee = (0, L.useShouldFetchChurnOffer)(),
    {
      churnUserDiscountOffer: et,
      isFetchingChurnDiscountOffer: es
    } = (0, L.useFetchChurnUserDiscountOffer)(!ee || 1 !== j);
  switch (j) {
    case 6:
      s = (0, i.jsx)(U.PremiumSubscriptionPauseModalSelect, {
        premiumSubscription: a,
        premiumType: M,
        setStep: W,
        onClose: () => $(j),
        pauseDuration: J,
        setPauseDuration: Q,
        footer: (0, i.jsxs)("div", {
          className: H.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(f.Button, {
            disabled: null === J,
            onClick: () => {
              0 === J ? W(1) : W(7)
            },
            children: Y.default.Messages.CONTINUE
          }), (0, i.jsx)(f.Button, {
            look: f.Button.Looks.LINK,
            color: (0, m.isThemeDark)(x) ? f.Button.Colors.WHITE : f.Button.Colors.PRIMARY,
            onClick: r,
            children: Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        analyticsLocation: d
      });
      break;
    case 7:
      if (null == J) {
        let e = Error("No pause duration to set");
        throw (0, T.captureBillingException)(e, {
          extra: {
            subscriptionId: a.id,
            status: a.status
          }
        }), e
      }
      s = (0, i.jsx)(U.PremiumSubscriptionPauseModalConfirm, {
        premiumSubscription: a,
        premiumType: M,
        setStep: W,
        onClose: () => $(j),
        analyticsLocation: d,
        pauseDuration: J
      });
      break;
    case 1:
      s = (0, i.jsx)(v.default, {
        premiumType: M,
        titleText: Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_TITLE,
        subtitleText: A ? Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE_TENURE_REWARD : Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_SUBTITLE.format(),
        subtitleClassName: A ? H.subtitleSection : void 0,
        subtitleIcon: A && (0, i.jsx)("div", {
          className: H.subtitleIcon,
          children: (0, i.jsx)(k.default, {
            staticPercentage: 100,
            iconClassName: H.iconClassName,
            showAnimations: !1,
            innerCircleClassName: H.innerCircle,
            progressCircleStrokeSize: 5,
            backgroundCircleSize: "38%"
          })
        }),
        footer: (0, i.jsxs)("div", {
          className: H.whatYouLoseButtonContainer,
          children: [(0, i.jsx)(f.Button, {
            onClick: () => W(2),
            children: Y.default.Messages.CONTINUE
          }), (0, i.jsx)(f.Button, {
            look: f.Button.Looks.LINK,
            color: (0, m.isThemeDark)(x) ? f.Button.Colors.WHITE : f.Button.Colors.PRIMARY,
            onClick: () => $(j),
            children: Y.default.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
          })]
        }),
        onClose: () => $(j),
        onDiscountClaim: () => W(4),
        onContinue: () => W(2),
        isLoading: ee && es,
        churnUserDiscountOffer: et,
        analyticsLocations: O
      });
      break;
    case 2:
      s = (0, i.jsx)(V, {
        premiumSubscription: a,
        premiumType: M,
        setStep: W,
        onClose: () => $(j),
        whatYouLoseExperienceEnabled: B,
        analyticsLocation: d
      });
      break;
    case 3:
      s = (0, i.jsx)(z, {
        premiumSubscription: a,
        premiumType: M,
        onBack: () => W(2),
        onClose: () => $(j),
        analyticsLocation: d
      });
      break;
    case 4:
      s = (0, i.jsx)(D.default, {
        premiumSubscription: a,
        premiumType: M,
        onClose: () => $(j),
        onConfirm: () => W(5),
        userDiscountOffer: et
      });
      break;
    case 5:
      s = (0, i.jsx)(b.PremiumSubscritionDiscountAppliedModal, {
        premiumSubscription: a,
        premiumType: M,
        onClose: () => $(j),
        confettiCanvas: N,
        userDiscountOffer: et
      });
      break;
    default:
      throw Error("Unexpected step: ".concat(j))
  }
  return (0, i.jsxs)(S.AnalyticsLocationProvider, {
    value: O,
    children: [(0, i.jsx)(o.ConfettiCanvas, {
      ref: P,
      className: H.confettiCanvas,
      environment: E.current
    }), (0, i.jsx)(f.ModalRoot, {
      transitionState: n,
      children: s
    })]
  })
}