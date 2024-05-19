"use strict";
s.r(t), s("411104"), s("653041"), s("47120"), s("789020");
var n, a, r = s("735250"),
  l = s("470079"),
  i = s("153832"),
  o = s("442837"),
  d = s("481060"),
  u = s("570140"),
  c = s("447273"),
  p = s("16084"),
  h = s("224550"),
  f = s("382727"),
  S = s("609194"),
  P = s("546239"),
  A = s("115130"),
  _ = s("812206"),
  m = s("100159"),
  E = s("179118"),
  T = s("594174"),
  C = s("505649"),
  y = s("580130"),
  g = s("855775"),
  I = s("55563"),
  R = s("695103"),
  N = s("66579"),
  b = s("285952"),
  O = s("366695"),
  M = s("4912"),
  L = s("626135"),
  B = s("630388"),
  x = s("603421"),
  v = s("358085"),
  k = s("937615"),
  D = s("814225"),
  F = s("73346"),
  j = s("966305"),
  G = s("883571"),
  U = s("981631"),
  Y = s("689938"),
  w = s("780473");

function H(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(a = n || (n = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS", a.TEST_MODE = "TEST_MODE", a.GIFT_ONLY = "GIFT_ONLY", a.PREORDER = "PREORDER";
class V extends l.PureComponent {
  getSkuPrice() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
      t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.state,
      {
        prices: s
      } = e,
      {
        paymentSourceId: n
      } = t;
    return null == s ? null : s[null != n ? n : g.NO_PAYMENT_SOURCE]
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      applicationId: s
    } = this.props;
    null == e ? p.fetchPublishedSKU(s, t).catch(e => this.handleClose(e.message)) : L.default.track(U.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
  }
  componentDidUpdate(e, t) {
    null == e.sku && null != this.props.sku && L.default.track(U.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData()), this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
  }
  checkPriceChange(e, t) {
    let {
      sku: s,
      onClose: n
    } = this.props;
    null != e && null != t && e.discount_percent_off !== t.discount_percent_off && u.default.wait(() => {
      if (null == s) throw Error("Unexpected null SKU");
      n(U.PaymentModalPriceChangedError)
    })
  }
  get closable() {
    let e = this._paymentModalRef.current;
    return null != e && e.closable
  }
  get isGiftable() {
    let {
      sku: e
    } = this.props;
    return null != e && e.isGiftable(this.getPrice())
  }
  get isGift() {
    return this.props.isGift && this.isGiftable
  }
  getPrice() {
    let {
      sku: e,
      isFetchingSKU: t
    } = this.props;
    if (null == e || t) return null;
    let s = this.getSkuPrice();
    if (null != s) return {
      amount: s.amount,
      tax: s.tax,
      taxInclusive: s.tax_inclusive,
      currency: s.currency
    };
    let {
      paymentSourceId: n
    } = this.state;
    if (null == n) {
      let t = e.getPrice();
      if (null == t) throw Error("Sku Price cannot be null");
      return {
        amount: t.amount,
        tax: 0,
        taxInclusive: !1,
        currency: t.currency
      }
    }
    return null
  }
  getBaseAnalyticsData() {
    let {
      sku: e,
      analyticsLocation: t,
      appContext: s,
      promotionId: n
    } = this.props;
    if (null == e) return {};
    let a = this.getPrice();
    return {
      ...(0, m.default)(e),
      load_id: this._loadId,
      payment_type: U.PurchaseTypeToAnalyticsPaymentType[U.PurchaseTypes.ONE_TIME],
      is_gift: this.isGift,
      client_event_source: s === U.AppContext.OVERLAY ? U.AppContext.OVERLAY : null,
      location: t,
      price: null != a ? a.amount : null,
      currency: null != a ? a.currency : null,
      location_promotion_id: n
    }
  }
  renderPurchaseWarning() {
    let {
      sku: e,
      isInTestMode: t,
      isIAP: s,
      isUserEntitledToSku: n
    } = this.props;
    if (null == e) return null;
    let a = (0, F.nativePlatformTypeToSKUOperatingSystem)((0, v.getPlatform)()),
      i = [];
    return (null == a || !e.supportedOperatingSystems.includes(a)) && !s && i.push((0, r.jsx)(S.default, {
      icon: M.default,
      iconSize: S.default.Sizes.SMALL,
      color: S.default.Colors.WARNING,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
    }, "UNSUPPORTED_OS")), t && i.push((0, r.jsx)(S.default, {
      icon: M.default,
      iconSize: S.default.Sizes.SMALL,
      color: S.default.Colors.WARNING,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE")), !0 === n && this.isGiftable && i.push((0, r.jsx)(S.default, {
      icon: M.default,
      iconSize: S.default.Sizes.SMALL,
      color: S.default.Colors.PRIMARY,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
    }, "GIFT_ONLY")), e.isPreorder() && i.push((0, r.jsx)(S.default, {
      icon: M.default,
      iconSize: S.default.Sizes.SMALL,
      color: S.default.Colors.PRIMARY,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
        date: (0, D.getReadablePreorderReleaseDate)(e)
      })
    }, "PREORDER")), (0, r.jsx)(l.Fragment, {
      children: i
    })
  }
  renderGenericError(e, t) {
    return null == e && null == t ? null : (0, r.jsx)(d.FormErrorBlock, {
      className: w.errorBlock,
      children: null != e ? e.message : null != t ? t.message : null
    })
  }
  renderDefaultHeader(e, t, s) {
    let {
      isIAP: n,
      application: a,
      sku: l,
      purchaseError: i
    } = this.props;
    if (null == l || null == a) return null;
    let o = this.getPrice();
    return (0, r.jsxs)(d.ModalHeader, {
      direction: b.default.Direction.VERTICAL,
      align: b.default.Align.START,
      separator: !1,
      children: [(0, r.jsx)(P.default, {
        application: a,
        splashSize: 880
      }), (0, r.jsxs)(b.default, {
        align: b.default.Align.CENTER,
        className: w.headerHeader,
        children: [(0, r.jsx)(d.FormTitle, {
          tag: d.FormTitleTags.H4,
          children: (0, G.getSkuHeaderText)(n, l.type)
        }), (0, r.jsx)(d.ModalCloseButton, {
          onClick: () => this.handleClose()
        })]
      }), (0, r.jsxs)(b.default, {
        align: b.default.Align.CENTER,
        className: w.headerContent,
        children: [(0, r.jsxs)(b.default, {
          align: b.default.Align.CENTER,
          children: [(0, r.jsx)(O.default, {
            game: a
          }), (0, r.jsx)("div", {
            className: w.applicationName,
            children: l.name
          })]
        }), (0, r.jsx)("div", {
          className: w.price,
          children: null != o ? (0, k.formatPrice)(o.amount, o.currency) : (0, r.jsx)(d.Spinner, {
            type: d.Spinner.Type.PULSING_ELLIPSIS,
            className: w.priceSpinner
          })
        })]
      }), this.renderPurchaseWarning(), this.renderGenericError(i, s), t.length > 1 ? (0, r.jsx)(N.default, {
        activeId: e,
        breadcrumbs: t,
        className: w.breadcrumbs
      }) : null]
    })
  }
  render() {
    let {
      sku: e,
      isFetchingSKU: t,
      isPurchasing: s,
      isEmbeddedIAP: n,
      purchaseError: a,
      isUserEntitledToSku: l,
      forceConfirmationStepOnMount: i,
      transitionState: o
    } = this.props;
    return null == e || t ? (0, r.jsx)(d.Spinner, {}) : (0, r.jsx)(f.default, {
      ref: this._paymentModalRef,
      transitionState: o,
      canSubmit: null != this.getSkuPrice(),
      needsToBeGift: e.type === U.SKUTypes.DURABLE_PRIMARY && !0 === l,
      isGiftable: this.isGiftable,
      legalNotice: n ? (0, r.jsx)(h.default, {
        isEmbeddedIAP: n
      }) : null,
      isPurchasing: s,
      purchaseError: a,
      price: this.getPrice(),
      size: d.ModalSize.SMALL,
      onPurchase: this.handlePurchase,
      onIsGiftUpdate: p.updateSKUPaymentIsGift,
      onPaymentSourceChange: this.handlePaymentSourceChange,
      onClose: () => this.handleClose(),
      onClearError: p.clearPurchaseError,
      renderHeader: this.renderHeader,
      renderConfirmationBody: this.renderConfirmation,
      submitButtonText: this.isGift ? Y.default.Messages.APPLICATION_STORE_BUY_GIFT : Y.default.Messages.APPLICATION_STORE_BUY,
      initialStep: i ? x.Steps.CONFIRM : null,
      onStepChange: this.handleStepChange,
      isGift: this.isGift
    })
  }
  constructor(...e) {
    var t;
    super(...e), t = this, H(this, "state", {
      paymentSourceId: null
    }), H(this, "_loadId", (0, i.v4)()), H(this, "_stepStartTime", Date.now()), H(this, "_flowStartTime", Date.now()), H(this, "_paymentModalRef", l.createRef()), H(this, "handlePaymentSourceChange", e => {
      let {
        applicationId: t,
        skuId: s
      } = this.props;
      null != e ? (p.fetchPurchasePreview(t, s, e.id), this.setState({
        paymentSourceId: e.id
      })) : (p.fetchPurchasePreview(t, s, null), this.setState({
        paymentSourceId: null
      }))
    }), H(this, "handlePurchase", async e => {
      let {
        applicationId: t,
        sku: s
      } = this.props, n = this.getPrice(), a = null != n ? n.amount : 0, r = null != n ? n.currency : U.CurrencyCodes.USD;
      if (null == s) throw Error("SKU is null during purchase");
      if (!g.default.isPurchasingSKU) try {
        L.default.track(U.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
          ...this.getBaseAnalyticsData(),
          duration_ms: Date.now() - this._flowStartTime
        }), await p.purchaseSKU(t, s.id, {
          expectedAmount: a,
          expectedCurrency: r,
          paymentSource: e,
          analyticsLoadId: this._loadId,
          isGift: this.isGift
        }), (0, c.acceptPurchaseTerms)()
      } catch (t) {
        throw L.default.track(U.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...this.getBaseAnalyticsData(),
          payment_gateway: e.type === U.PaymentSourceTypes.CARD ? U.PaymentGateways.STRIPE : U.PaymentGateways.BRAINTREE,
          payment_source_id: e.id,
          duration_ms: Date.now() - this._flowStartTime,
          payment_error_code: t.code
        }), t
      }
    }), H(this, "handleClose", function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        {
          onClose: s
        } = t.props;
      s(e)
    }), H(this, "handleStepChange", (e, t) => {
      let s = Date.now();
      L.default.track(U.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...this.getBaseAnalyticsData(),
        from_step: e,
        to_step: t,
        step_duration_ms: s - this._stepStartTime,
        flow_duration_ms: s - this._flowStartTime
      }), this._stepStartTime = s, t === x.Steps.CONFIRM && p.showPurchaseConfirmationStep()
    }), H(this, "renderHeader", (e, t, s) => {
      let {
        application: n
      } = this.props;
      if (e === x.Steps.CONFIRM) return null != n ? (0, r.jsx)(P.default, {
        application: n,
        splashSize: 880
      }) : null;
      return this.renderDefaultHeader(e, t, s)
    }), H(this, "renderConfirmation", () => {
      let {
        application: e,
        sku: t,
        isIAP: s,
        giftCode: n
      } = this.props;
      if (null == t || null == e) throw Error("No SKU for confirmation step!");
      return (0, r.jsx)("div", {
        className: w.confirmContent,
        children: (0, r.jsxs)(b.default, {
          direction: b.default.Direction.VERTICAL,
          children: [(0, r.jsx)(d.ModalCloseButton, {
            onClick: () => this.handleClose(),
            className: w.confirmCloseButton
          }), null != n ? (0, r.jsx)(E.default, {
            giftCode: n,
            application: e,
            sku: t,
            onClose: () => this.handleClose()
          }) : (0, r.jsx)(j.default, {
            application: e,
            sku: t,
            isIAP: s,
            onClose: () => this.handleClose()
          })]
        })
      })
    })
  }
}
let W = l.forwardRef((e, t) => {
  var s, n;
  let {
    applicationId: a,
    skuId: l,
    ...i
  } = e, d = (0, o.useStateFromStores)([_.default], () => _.default.getApplication(a)), u = (0, B.hasFlag)(null !== (s = null == d ? void 0 : d.flags) && void 0 !== s ? s : 0, U.ApplicationFlags.EMBEDDED) && (0, B.hasFlag)(null !== (n = null == d ? void 0 : d.flags) && void 0 !== n ? n : 0, U.ApplicationFlags.EMBEDDED_IAP), [c, p, h, f, S, P, m, E, N] = (0, o.useStateFromStoresArray)([g.default], () => [g.default.getPricesForSku(l), g.default.isPurchasingSKU, g.default.error, g.default.analyticsLocation, g.default.promotionId, g.default.giftCode, g.default.isGift, g.default.isIAP, g.default.forceConfirmationStepOnMount]), [b, O] = (0, o.useStateFromStoresArray)([I.default], () => [I.default.get(l), I.default.isFetching(l)]), M = (0, o.useStateFromStores)([A.default, R.default], () => R.default.inTestModeForApplication(a) || A.default.inDevModeForApplication(a), [a]), L = (0, o.useStateFromStores)([y.default, T.default], () => y.default.isEntitledToSku(T.default.getCurrentUser(), l, a)), x = (0, o.useStateFromStores)([C.default], () => C.default.error);
  return (0, r.jsx)(V, {
    ...i,
    application: d,
    applicationId: a,
    skuId: l,
    prices: c,
    isPurchasing: p,
    purchaseError: null != x ? x : h,
    analyticsLocation: f,
    promotionId: S,
    isIAP: E,
    giftCode: P,
    isGift: m,
    forceConfirmationStepOnMount: N,
    sku: b,
    isFetchingSKU: O,
    isInTestMode: M,
    isUserEntitledToSku: L,
    isEmbeddedIAP: u,
    ref: t
  })
});
class z extends l.PureComponent {
  close() {
    null != this._skuPaymentModalRef.current && this._skuPaymentModalRef.current.closable && this.handleClose()
  }
  handleClose() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    this.props.onClose(e)
  }
  render() {
    return (0, r.jsx)(W, {
      ...this.props,
      ref: this._skuPaymentModalRef,
      onClose: () => this.handleClose()
    })
  }
  constructor(...e) {
    super(...e), H(this, "_skuPaymentModalRef", l.createRef())
  }
}
t.default = z