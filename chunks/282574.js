"use strict";
s.r(t), s("411104"), s("653041"), s("47120"), s("789020");
var n, r, a = s("735250"),
  l = s("470079"),
  i = s("153832"),
  o = s("442837"),
  d = s("481060"),
  u = s("570140"),
  c = s("447273"),
  p = s("16084"),
  h = s("224550"),
  S = s("382727"),
  f = s("609194"),
  E = s("546239"),
  P = s("115130"),
  A = s("812206"),
  _ = s("100159"),
  m = s("179118"),
  T = s("594174"),
  I = s("505649"),
  C = s("580130"),
  R = s("855775"),
  N = s("55563"),
  g = s("695103"),
  y = s("66579"),
  O = s("285952"),
  M = s("366695"),
  L = s("4912"),
  x = s("626135"),
  B = s("630388"),
  D = s("603421"),
  b = s("358085"),
  F = s("937615"),
  v = s("814225"),
  j = s("73346"),
  U = s("966305"),
  G = s("883571"),
  k = s("981631"),
  Y = s("689938"),
  w = s("292174");

function H(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}(r = n || (n = {})).UNSUPPORTED_OS = "UNSUPPORTED_OS", r.TEST_MODE = "TEST_MODE", r.GIFT_ONLY = "GIFT_ONLY", r.PREORDER = "PREORDER";
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
    return null == s ? null : s[null != n ? n : R.NO_PAYMENT_SOURCE]
  }
  componentDidMount() {
    let {
      sku: e,
      skuId: t,
      applicationId: s
    } = this.props;
    null == e ? p.fetchSKU(s, t).catch(e => this.handleClose(e.message)) : x.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData())
  }
  componentDidUpdate(e, t) {
    null == e.sku && null != this.props.sku && x.default.track(k.AnalyticEvents.PAYMENT_FLOW_STARTED, this.getBaseAnalyticsData()), this.checkPriceChange(this.getSkuPrice(e, t), this.getSkuPrice())
  }
  checkPriceChange(e, t) {
    let {
      sku: s,
      onClose: n
    } = this.props;
    null != e && null != t && e.discount_percent_off !== t.discount_percent_off && u.default.wait(() => {
      if (null == s) throw Error("Unexpected null SKU");
      n(k.PaymentModalPriceChangedError)
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
    let r = this.getPrice();
    return {
      ...(0, _.default)(e),
      load_id: this._loadId,
      payment_type: k.PurchaseTypeToAnalyticsPaymentType[k.PurchaseTypes.ONE_TIME],
      is_gift: this.isGift,
      client_event_source: s === k.AppContext.OVERLAY ? k.AppContext.OVERLAY : null,
      location: t,
      price: null != r ? r.amount : null,
      currency: null != r ? r.currency : null,
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
    let r = (0, j.nativePlatformTypeToSKUOperatingSystem)((0, b.getPlatform)()),
      i = [];
    return (null == r || !e.supportedOperatingSystems.includes(r)) && !s && i.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.WARNING,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_GAME_CURRENT_OS_UNSUPPORTED
    }, "UNSUPPORTED_OS")), t && i.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.WARNING,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_TEST_MODE
    }, "TEST_MODE")), !0 === n && this.isGiftable && i.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.PRIMARY,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_GIFT_ONLY
    }, "GIFT_ONLY")), e.isPreorder() && i.push((0, a.jsx)(f.default, {
      icon: L.default,
      iconSize: f.default.Sizes.SMALL,
      color: f.default.Colors.PRIMARY,
      className: w.errorBlock,
      children: Y.default.Messages.APPLICATION_STORE_PURCHASE_WARNING_PREORDER.format({
        date: (0, v.getReadablePreorderReleaseDate)(e)
      })
    }, "PREORDER")), (0, a.jsx)(l.Fragment, {
      children: i
    })
  }
  renderGenericError(e, t) {
    return null == e && null == t ? null : (0, a.jsx)(d.FormErrorBlock, {
      className: w.errorBlock,
      children: null != e ? e.message : null != t ? t.message : null
    })
  }
  renderDefaultHeader(e, t, s) {
    let {
      isIAP: n,
      application: r,
      sku: l,
      purchaseError: i
    } = this.props;
    if (null == l || null == r) return null;
    let o = this.getPrice();
    return (0, a.jsxs)(d.ModalHeader, {
      direction: O.default.Direction.VERTICAL,
      align: O.default.Align.START,
      separator: !1,
      children: [(0, a.jsx)(E.default, {
        application: r,
        splashSize: 880
      }), (0, a.jsxs)(O.default, {
        align: O.default.Align.CENTER,
        className: w.headerHeader,
        children: [(0, a.jsx)(d.FormTitle, {
          tag: d.FormTitleTags.H4,
          children: (0, G.getSkuHeaderText)(n, l.type)
        }), (0, a.jsx)(d.ModalCloseButton, {
          onClick: () => this.handleClose()
        })]
      }), (0, a.jsxs)(O.default, {
        align: O.default.Align.CENTER,
        className: w.headerContent,
        children: [(0, a.jsxs)(O.default, {
          align: O.default.Align.CENTER,
          children: [(0, a.jsx)(M.default, {
            game: r
          }), (0, a.jsx)("div", {
            className: w.applicationName,
            children: l.name
          })]
        }), (0, a.jsx)("div", {
          className: w.price,
          children: null != o ? (0, F.formatPrice)(o.amount, o.currency) : (0, a.jsx)(d.Spinner, {
            type: d.Spinner.Type.PULSING_ELLIPSIS,
            className: w.priceSpinner
          })
        })]
      }), this.renderPurchaseWarning(), this.renderGenericError(i, s), t.length > 1 ? (0, a.jsx)(y.default, {
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
      purchaseError: r,
      isUserEntitledToSku: l,
      forceConfirmationStepOnMount: i,
      transitionState: o
    } = this.props;
    return null == e || t ? (0, a.jsx)(d.Spinner, {}) : (0, a.jsx)(S.default, {
      ref: this._paymentModalRef,
      transitionState: o,
      canSubmit: null != this.getSkuPrice(),
      needsToBeGift: e.type === k.SKUTypes.DURABLE_PRIMARY && !0 === l,
      isGiftable: this.isGiftable,
      legalNotice: n ? (0, a.jsx)(h.default, {
        isEmbeddedIAP: n
      }) : null,
      isPurchasing: s,
      purchaseError: r,
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
      initialStep: i ? D.Steps.CONFIRM : null,
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
      } = this.props, n = this.getPrice(), r = null != n ? n.amount : 0, a = null != n ? n.currency : k.CurrencyCodes.USD;
      if (null == s) throw Error("SKU is null during purchase");
      if (!R.default.isPurchasingSKU) try {
        x.default.track(k.AnalyticEvents.PAYMENT_FLOW_COMPLETED, {
          ...this.getBaseAnalyticsData(),
          duration_ms: Date.now() - this._flowStartTime
        }), await p.purchaseSKU(t, s.id, {
          expectedAmount: r,
          expectedCurrency: a,
          paymentSource: e,
          analyticsLoadId: this._loadId,
          isGift: this.isGift
        }), (0, c.acceptPurchaseTerms)()
      } catch (t) {
        throw x.default.track(k.AnalyticEvents.PAYMENT_FLOW_FAILED, {
          ...this.getBaseAnalyticsData(),
          payment_gateway: e.type === k.PaymentSourceTypes.CARD ? k.PaymentGateways.STRIPE : k.PaymentGateways.BRAINTREE,
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
      x.default.track(k.AnalyticEvents.PAYMENT_FLOW_STEP, {
        ...this.getBaseAnalyticsData(),
        from_step: e,
        to_step: t,
        step_duration_ms: s - this._stepStartTime,
        flow_duration_ms: s - this._flowStartTime
      }), this._stepStartTime = s, t === D.Steps.CONFIRM && p.showPurchaseConfirmationStep()
    }), H(this, "renderHeader", (e, t, s) => {
      let {
        application: n
      } = this.props;
      if (e === D.Steps.CONFIRM) return null != n ? (0, a.jsx)(E.default, {
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
      return (0, a.jsx)("div", {
        className: w.confirmContent,
        children: (0, a.jsxs)(O.default, {
          direction: O.default.Direction.VERTICAL,
          children: [(0, a.jsx)(d.ModalCloseButton, {
            onClick: () => this.handleClose(),
            className: w.confirmCloseButton
          }), null != n ? (0, a.jsx)(m.default, {
            giftCode: n,
            application: e,
            sku: t,
            onClose: () => this.handleClose()
          }) : (0, a.jsx)(U.default, {
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
    applicationId: r,
    skuId: l,
    ...i
  } = e, d = (0, o.useStateFromStores)([A.default], () => A.default.getApplication(r)), u = (0, B.hasFlag)(null !== (s = null == d ? void 0 : d.flags) && void 0 !== s ? s : 0, k.ApplicationFlags.EMBEDDED) && (0, B.hasFlag)(null !== (n = null == d ? void 0 : d.flags) && void 0 !== n ? n : 0, k.ApplicationFlags.EMBEDDED_IAP), [c, p, h, S, f, E, _, m, y] = (0, o.useStateFromStoresArray)([R.default], () => [R.default.getPricesForSku(l), R.default.isPurchasingSKU, R.default.error, R.default.analyticsLocation, R.default.promotionId, R.default.giftCode, R.default.isGift, R.default.isIAP, R.default.forceConfirmationStepOnMount]), [O, M] = (0, o.useStateFromStoresArray)([N.default], () => [N.default.get(l), N.default.isFetching(l)]), L = (0, o.useStateFromStores)([P.default, g.default], () => g.default.inTestModeForApplication(r) || P.default.inDevModeForApplication(r), [r]), x = (0, o.useStateFromStores)([C.default, T.default], () => C.default.isEntitledToSku(T.default.getCurrentUser(), l, r)), D = (0, o.useStateFromStores)([I.default], () => I.default.error);
  return (0, a.jsx)(V, {
    ...i,
    application: d,
    applicationId: r,
    skuId: l,
    prices: c,
    isPurchasing: p,
    purchaseError: null != D ? D : h,
    analyticsLocation: S,
    promotionId: f,
    isIAP: m,
    giftCode: E,
    isGift: _,
    forceConfirmationStepOnMount: y,
    sku: O,
    isFetchingSKU: M,
    isInTestMode: L,
    isUserEntitledToSku: x,
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
    return (0, a.jsx)(W, {
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