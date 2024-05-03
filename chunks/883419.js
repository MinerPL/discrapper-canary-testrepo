"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
}), n("47120"), n("789020");
var a = n("735250"),
  r = n("470079"),
  s = n("512722"),
  l = n.n(s),
  i = n("481060"),
  u = n("330726"),
  o = n("716534"),
  d = n("171246"),
  c = n("563132"),
  f = n("409813"),
  _ = n("45572"),
  P = n("51499"),
  S = n("678334"),
  A = n("456251"),
  E = n("614277"),
  p = n("698708"),
  C = n("43542"),
  I = n("689938"),
  m = n("397544");

function T(e) {
  var t;
  let {
    backButtonEligible: n,
    prevStep: s,
    showGuildPicker: T,
    handleStepChange: N,
    trialFooterMessageOverride: O,
    reviewWarningMessage: y,
    planGroup: R,
    openInvoiceId: b,
    analyticsData: g,
    analyticsLocation: h,
    eligibleApplicationSubscriptionGuilds: L,
    handleClose: M
  } = e, {
    activeSubscription: k,
    application: U,
    setUpdatedSubscription: v,
    contextMetadata: B,
    currencies: x,
    paymentSources: D,
    priceOptions: G,
    purchaseError: Y,
    purchaseTokenAuthState: j,
    selectedPlan: H,
    selectedSku: F,
    setCurrency: w,
    setPaymentSourceId: W,
    setPurchaseState: V,
    setPurchaseError: K,
    purchaseState: Z,
    subscriptionMetadataRequest: z,
    setSubscriptionMetadataRequest: X,
    setHasAcceptedTerms: J
  } = (0, c.usePaymentContext)();
  l()(null != H, "Expected plan to be selected"), l()(null != U, "Expected application");
  let Q = r.useRef(null),
    [q, $] = (0, u.default)(!1, 500),
    [ee, et] = r.useState(null == z ? void 0 : z.guild_id),
    en = (0, d.isApplicationUserSubscription)(null !== (t = null == F ? void 0 : F.flags) && void 0 !== t ? t : 0);
  r.useEffect(() => {
    null != Y && null != Q.current && Q.current.scrollIntoView({
      behavior: "smooth"
    })
  }, [Y]);
  let ea = r.useCallback(e => {
      v(e), N(f.Step.CONFIRM)
    }, [N, v]),
    er = r.useCallback(e => {
      et(e), X({
        ...z,
        guild_id: e
      })
    }, [et, X, z]),
    es = r.useRef(null);
  return Z === _.PurchaseState.PURCHASING ? (0, a.jsx)(A.default, {}) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(P.default, {
      className: m.breadcrumbs
    }), (0, a.jsxs)(E.PaymentPortalBody, {
      children: [(0, a.jsx)(p.default, {}), en && (0, a.jsxs)("div", {
        className: m.userSubscriptionDetailsContainer,
        children: [(0, a.jsx)(i.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: I.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
        }), (0, a.jsx)(i.Text, {
          variant: "text-xs/medium",
          color: "interactive-normal",
          children: I.default.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
            applicationName: U.name
          })
        })]
      }), T && !en && (0, a.jsxs)("div", {
        className: m.guildPickerContainer,
        children: [(0, a.jsx)(i.FormTitle, {
          tag: i.FormTitleTags.H5,
          children: I.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
        }), (0, a.jsx)(i.FormText, {
          type: i.FormText.Types.DESCRIPTION,
          className: m.guildPickerDescription,
          children: I.default.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
        }), (0, a.jsx)(C.GuildPickerDropdown, {
          selectedGuildId: ee,
          onGuildChange: er,
          eligibleApplicationSubscriptionGuilds: L
        })]
      }), (0, a.jsx)(o.default, {
        selectedPlanId: H.id,
        paymentSources: D,
        onPaymentSourceChange: e => W(null != e ? e.id : null),
        priceOptions: G,
        currencies: x,
        onCurrencyChange: e => w(e),
        handlePaymentSourceAdd: () => N(f.Step.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: J,
        legalTermsNodeRef: es,
        hasLegalTermsFlash: q,
        trialFooterMessageOverride: O,
        reviewWarningMessage: y,
        metadata: T || en ? void 0 : z,
        purchaseState: Z,
        hideSubscriptionDetails: !0,
        handleClose: M
      })]
    }), (0, a.jsx)(E.PaymentPortalFooter, {
      children: (0, a.jsx)(S.default, {
        premiumSubscription: null != k ? k : null,
        setPurchaseState: V,
        onBack: () => null != s && N(s),
        onNext: ea,
        onPurchaseError: e => K(e),
        legalTermsNodeRef: es,
        flashLegalTerms: () => $(!0),
        analyticsLocation: h,
        baseAnalyticsData: g,
        flowStartTime: B.startTime,
        planGroup: R,
        purchaseTokenAuthState: j,
        openInvoiceId: b,
        metadata: en ? void 0 : z,
        backButtonEligible: n,
        invoiceError: null,
        disablePurchase: (null == z ? void 0 : z.guild_id) == null && !en
      })
    })]
  })
}