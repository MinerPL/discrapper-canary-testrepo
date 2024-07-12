t.d(n, {
  Z: function() {
return g;
  }
}), t(47120), t(789020);
var i = t(735250),
  r = t(470079),
  o = t(512722),
  a = t.n(o),
  s = t(481060),
  l = t(330726),
  c = t(716534),
  d = t(171246),
  u = t(598),
  _ = t(409813),
  p = t(45572),
  f = t(51499),
  I = t(678334),
  m = t(456251),
  C = t(614277),
  S = t(698708),
  T = t(43542),
  b = t(689938),
  h = t(736569);

function g(e) {
  var n;
  let {
backButtonEligible: t,
prevStep: o,
showGuildPicker: g,
handleStepChange: E,
trialFooterMessageOverride: N,
reviewWarningMessage: P,
planGroup: O,
openInvoiceId: A,
analyticsData: x,
analyticsLocation: v,
eligibleApplicationSubscriptionGuilds: R,
handleClose: M
  } = e, {
activeSubscription: L,
application: B,
setUpdatedSubscription: y,
contextMetadata: k,
currencies: j,
paymentSources: U,
priceOptions: Z,
purchaseError: D,
purchaseTokenAuthState: H,
selectedPlan: w,
selectedSku: F,
setCurrency: W,
setPaymentSourceId: G,
setPurchaseState: V,
setPurchaseError: K,
purchaseState: Y,
subscriptionMetadataRequest: z,
setSubscriptionMetadataRequest: X,
setHasAcceptedTerms: J
  } = (0, u.usePaymentContext)();
  a()(null != w, 'Expected plan to be selected'), a()(null != B, 'Expected application');
  let q = r.useRef(null),
[Q, $] = (0, l.Z)(!1, 500),
[ee, en] = r.useState(null == z ? void 0 : z.guild_id),
et = (0, d.KW)(null !== (n = null == F ? void 0 : F.flags) && void 0 !== n ? n : 0);
  r.useEffect(() => {
null != D && null != q.current && q.current.scrollIntoView({
  behavior: 'smooth'
});
  }, [D]);
  let ei = r.useCallback(e => {
  y(e), E(_.h8.CONFIRM);
}, [
  E,
  y
]),
er = r.useCallback(e => {
  en(e), X({
    ...z,
    guild_id: e
  });
}, [
  en,
  X,
  z
]),
eo = r.useRef(null);
  return Y === p.A.PURCHASING ? (0, i.jsx)(m.Z, {}) : (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(f.Z, {
    className: h.breadcrumbs
  }),
  (0, i.jsxs)(C.C3, {
    children: [
      (0, i.jsx)(S.Z, {}),
      et && (0, i.jsxs)('div', {
        className: h.userSubscriptionDetailsContainer,
        children: [
          (0, i.jsx)(s.Text, {
            variant: 'eyebrow',
            color: 'header-secondary',
            children: b.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_TITLE
          }),
          (0, i.jsx)(s.Text, {
            variant: 'text-xs/medium',
            color: 'interactive-normal',
            children: b.Z.Messages.APPLICATION_USER_SUBSCRIPTION_PURCHASE_SUBTITLE.format({
              applicationName: B.name
            })
          })
        ]
      }),
      g && !et && (0, i.jsxs)('div', {
        className: h.guildPickerContainer,
        children: [
          (0, i.jsx)(s.FormTitle, {
            tag: s.FormTitleTags.H5,
            children: b.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_TITLE
          }),
          (0, i.jsx)(s.FormText, {
            type: s.FormText.Types.DESCRIPTION,
            className: h.guildPickerDescription,
            children: b.Z.Messages.APPLICATION_SUBSCRIPTION_PAYMENT_CHOOSE_SERVER_SUBTITLE
          }),
          (0, i.jsx)(T.y, {
            selectedGuildId: ee,
            onGuildChange: er,
            eligibleApplicationSubscriptionGuilds: R
          })
        ]
      }),
      (0, i.jsx)(c.Z, {
        selectedPlanId: w.id,
        paymentSources: U,
        onPaymentSourceChange: e => G(null != e ? e.id : null),
        priceOptions: Z,
        currencies: j,
        onCurrencyChange: e => W(e),
        handlePaymentSourceAdd: () => E(_.h8.ADD_PAYMENT_STEPS),
        setHasAcceptedTerms: J,
        legalTermsNodeRef: eo,
        hasLegalTermsFlash: Q,
        trialFooterMessageOverride: N,
        reviewWarningMessage: P,
        metadata: g || et ? void 0 : z,
        purchaseState: Y,
        hideSubscriptionDetails: !0,
        handleClose: M
      })
    ]
  }),
  (0, i.jsx)(C.O3, {
    children: (0, i.jsx)(I.Z, {
      premiumSubscription: null != L ? L : null,
      setPurchaseState: V,
      onBack: () => null != o && E(o),
      onNext: ei,
      onPurchaseError: e => K(e),
      legalTermsNodeRef: eo,
      flashLegalTerms: () => $(!0),
      analyticsLocation: v,
      baseAnalyticsData: x,
      flowStartTime: k.startTime,
      planGroup: O,
      purchaseTokenAuthState: H,
      openInvoiceId: A,
      metadata: et ? void 0 : z,
      backButtonEligible: t,
      invoiceError: null,
      disablePurchase: (null == z ? void 0 : z.guild_id) == null && !et
    })
  })
]
  });
}