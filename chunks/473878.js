"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007"), n("702976");
var i = n("37983"),
  r = n("884691"),
  a = n("627445"),
  l = n.n(a),
  s = n("77078"),
  u = n("612039"),
  o = n("527866"),
  c = n("129408"),
  d = n("642906"),
  f = n("85336"),
  E = n("286350"),
  S = n("153727"),
  I = n("39065"),
  _ = n("628738"),
  h = n("650484"),
  m = n("367767"),
  C = n("680439"),
  T = n("782340"),
  N = n("965576");

function A(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: a,
    showGuildPicker: A,
    handleStepChange: p,
    trialFooterMessageOverride: P,
    reviewWarningMessage: v,
    planGroup: O,
    openInvoiceId: g,
    analyticsData: R,
    analyticsLocation: L,
    eligibleApplicationSubscriptionGuilds: M,
    handleClose: x
  } = e, {
    activeSubscription: b,
    application: y,
    setUpdatedSubscription: U,
    contextMetadata: D,
    currencies: j,
    paymentSources: B,
    priceOptions: w,
    purchaseError: V,
    purchaseTokenAuthState: H,
    selectedPlan: k,
    selectedSku: F,
    setCurrency: G,
    setPaymentSourceId: W,
    setPurchaseState: Y,
    setPurchaseError: Z,
    purchaseState: K,
    subscriptionMetadataRequest: z,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: J
  } = (0, d.usePaymentContext)();
  l(null != k, "Expected plan to be selected"), l(null != y, "Expected application");
  let q = r.useRef(null),
    [Q, $] = (0, u.default)(!1, 500),
    [ee, et] = r.useState(null == z ? void 0 : z.guild_id),
    en = (0, c.isApplicationUserSubscription)(null !== (t = null == F ? void 0 : F.flags) && void 0 !== t ? t : 0);
  r.useEffect(() => {
    null != V && null != q.current && q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [V]);
  let ei = r.useCallback(e => {
      U(e), p(f.Step.CONFIRM)
    }, [p, U]),
    er = r.useCallback(e => {
      et(e), X({
        ...z,
        guild_id: e
      })
    }, [et, X, z]),
    ea = r.useRef(null);
  return K === E.PurchaseState.PURCHASING ? (0, i.jsx)(_.default, {}) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(S.default, {
      className: N.breadcrumbs
    }), (0, i.jsxs)(h.PaymentPortalBody, {
      children: [(0, i.jsx)(m.default, {}), en && (0, i.jsxs)("div", {
        className: N.userSubscriptionDetailsContainer,
        children: [(0, i.jsx)(s.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, i.jsx)(s.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: T.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: y.name
          })
        })]
      }), A && !en && (0, i.jsxs)("div", {
        className: N.guildPickerContainer,
        children: [(0, i.jsx)(s.FormTitle, {
          tag: s.FormTitleTags.H5,
          children: T.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, i.jsx)(s.FormText, {
          type: s.FormText.Types.DESCRIPTION,
          className: N.guildPickerDescription,
          children: T.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, i.jsx)(C.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: er,
          eligibleApplicationSubscriptionGuilds: M
        })]
      }), (0, i.jsx)(o.default, {
        selectedPlanId: k.id,
        paymentSources: B,
        onPaymentSourceChange: e => W(null != e ? e.id : null),
        priceOptions: w,
        currencies: j,
        onCurrencyChange: e => G(e),
        handlePaymentSourceAdd: () => p(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: J,
        legalTermsNodeRef: ea,
        hasLegalTermsFlash: Q,
        trialFooterMessageOverride: P,
        reviewWarningMessage: v,
        metadata: A || en ? void 0 : z,
        purchaseState: K,
        hideSubscriptionDetails: !0,
        handleClose: x
      })]
    }), (0, i.jsx)(h.PaymentPortalFooter, {
      children: (0, i.jsx)(I.default, {
        premiumSubscription: null != b ? b : null,
        setPurchaseState: Y,
        onBack: () => null != a && p(a),
        onNext: ei,
        onPurchaseError: e => Z(e),
        legalTermsNodeRef: ea,
        flashLegalTerms: () => $(!0),
        analyticsLocation: L,
        baseAnalyticsData: R,
        flowStartTime: D.startTime,
        planGroup: O,
        purchaseTokenAuthState: H,
        openInvoiceId: g,
        metadata: en ? void 0 : z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == z ? void 0 : z.guild_id) == null && !en
      })
    })]
  })
}