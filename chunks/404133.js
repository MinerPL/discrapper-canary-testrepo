"use strict";
n.r(t), n("789020"), n("47120"), n("411104");
var s, a = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("593473"),
  u = n("442837"),
  d = n("481060"),
  c = n("668781"),
  f = n("401131"),
  E = n("16084"),
  _ = n("558381"),
  T = n("230711"),
  m = n("72924"),
  I = n("2052"),
  p = n("115130"),
  h = n("812206"),
  N = n("646288"),
  S = n("703656"),
  C = n("706454"),
  A = n("594174"),
  g = n("580130"),
  M = n("855775"),
  R = n("55563"),
  O = n("695103"),
  v = n("451478"),
  L = n("976644"),
  x = n("466111"),
  D = n("626135"),
  P = n("630388"),
  y = n("74538"),
  U = n("814225"),
  b = n("981631"),
  j = n("689938"),
  G = n("53970");

function B(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class F extends(s = l.Component) {
  get analyticsLocation() {
    let {
      storeListingAnalyticsProperties: e,
      asGift: t
    } = this.props, n = null != e ? e.promotionId : null;
    return {
      ...this.props.analyticsContext.location,
      object: b.AnalyticsObjects.BUTTON_CTA,
      objectType: t ? b.AnalyticsObjectTypes.GIFT : b.AnalyticsObjectTypes.BUY,
      promotionId: n
    }
  }
  get hover() {
    let {
      hover: e,
      color: t
    } = this.props;
    return null != e ? e : null != t ? d.Button.Hovers.GREEN : d.Button.Hovers.DEFAULT
  }
  componentDidMount() {
    let {
      sku: e,
      applicationId: t,
      targetSkuId: n
    } = this.props;
    null == e && null != n && E.fetchSKU(t, n).catch(() => {})
  }
  componentDidUpdate(e) {
    this.props.locale !== e.locale && null != this.props.targetSkuId && E.fetchSKU(this.props.applicationId, this.props.targetSkuId).catch(() => {})
  }
  async purchaseOrGrantSKU(e) {
    let {
      channelId: t,
      entitlementBranchId: n,
      analyticsContext: s
    } = this.props;
    return null != t && null != n ? await E.grantChannelBranchEntitlement(e.applicationId, t, e.id) : (await E.purchaseSKU(e.applicationId, e.id, {
      analyticsLoadId: s.loadId
    })).entitlements
  }
  wrapWithDisabledTooltip(e, t) {
    let {
      className: n,
      tooltipPosition: s
    } = this.props;
    return (0, a.jsxs)("div", {
      className: r()(G.disabledButtonWrapper, n),
      children: [e, (0, a.jsx)(d.Tooltip, {
        text: t,
        position: s,
        children: e => (0, a.jsx)("div", {
          className: G.disabledButtonOverlay,
          ...e
        })
      })]
    })
  }
  renderButton(e) {
    let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}),
      {
        isPurchasing: s,
        wrapperClassName: l,
        className: i,
        fullWidth: o,
        size: u,
        isWindowFocused: c,
        color: f,
        customDisabledColor: E,
        pauseAnimation: _,
        isEntitled: T,
        asGift: m,
        sku: I,
        entitlementBranchId: p,
        isInTestMode: h,
        innerClassName: N
      } = this.props,
      S = !0 === T && (null == I || I.type !== b.SKUTypes.CONSUMABLE),
      C = !0 === n.disabled || null != I && !I.available && !(null != p) && !h || S && !m,
      A = n.disabledTooltipText,
      g = {
        wrapperClassName: l,
        className: i,
        fullWidth: o,
        size: u,
        color: C && null != E ? E : null != f ? f : d.Button.Colors.GREEN,
        hover: this.hover,
        innerClassName: r()(null != N ? N : null, G.applicationBuyButton),
        disabled: C,
        submitting: s || !0 === n.submitting,
        onClick: null != n.onClick ? n.onClick : this.handleClick
      };
    return (t = !0 === n.useShinyButton ? (0, a.jsxs)(L.default, {
      ...g,
      pauseAnimation: !c || _,
      children: [n.buttonIcon, e]
    }) : (0, a.jsxs)(d.Button, {
      ...g,
      children: [n.buttonIcon, e]
    }), null != A) ? this.wrapWithDisabledTooltip(t, A) : t
  }
  renderFreeButton(e, t) {
    let {
      isEntitled: n,
      isUserPremium: s,
      isInTestMode: a,
      forceDistribution: l,
      entitlementBranchId: i
    } = this.props;
    if (null != i) return (0, U.canUserInstall)(e) && !n ? this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY);
    let r = e.getPrice();
    if (e.premium && !l && (s || a)) return (0, U.canUserInstall)(e) && !n ? this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_INSTALL, t) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY, t);
    if (null != r && 0 === r.amount && (!e.premium || (0, P.hasFlag)(e.flags, b.SKUFlags.PREMIUM_AND_DISTRIBUTION))) return (0, U.canUserInstall)(e) && !n ? this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_INSTALL) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_ADD_TO_LIBRARY)
  }
  render() {
    let {
      isAuthenticated: e,
      sku: t,
      onStoreListing: n,
      shouldRenderPrice: s,
      forceDistribution: l,
      asGift: i,
      isInTestMode: r
    } = this.props, o = {
      useShinyButton: !0,
      buttonIcon: (0, a.jsx)(x.default, {
        className: G.premiumIcon
      })
    };
    if (null == t) return this.renderButton(null, {
      submitting: !0
    });
    if (i) return t.isPreorder() ? this.renderButton(j.default.Messages.APPLICATION_STORE_PREORDER_AS_GIFT) : this.renderButton(j.default.Messages.APPLICATION_STORE_BUY_AS_GIFT);
    let u = this.renderFreeButton(t, o);
    if (null != u) return u;
    if (!n) return this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_VIEW_IN_STORE, {
      onClick: this.handleViewInStore
    });
    let d = t.getPrice();
    return (t.available || r) && (t.premium || null != d) ? t.restricted ? this.renderButton(j.default.Messages.APPLICATION_STORE_BUY, {
      disabledTooltipText: j.default.Messages.GAME_ACTION_BUTTON_RESTRICTED_IN_REGION
    }) : t.premium && !l ? this.renderButton(j.default.Messages.APPLICATION_STORE_GET_PREMIUM, o) : e || null != t.externalPurchaseUrl ? t.isPreorder() ? this.renderButton(s ? j.default.Messages.APPLICATION_STORE_PREORDER_FOR_PRICE.format({
      price: (0, N.default)(t, !0, !0)
    }) : j.default.Messages.APPLICATION_STORE_PREORDER) : this.renderButton(s ? j.default.Messages.APPLICATION_STORE_BUY_FOR_PRICE.format({
      price: (0, N.default)(t, !0, !0)
    }) : j.default.Messages.APPLICATION_STORE_BUY) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_LOGIN_TO_BUY) : this.renderButton(j.default.Messages.GAME_ACTION_BUTTON_UNAVAILABLE, {
      disabled: !0
    })
  }
  constructor(...e) {
    super(...e), B(this, "handleViewInStore", e => {
      let {
        sku: t,
        skuId: n,
        application: s,
        onClick: a
      } = this.props;
      if (null == t) throw Error("Unexpected missing sku");
      null != a && a(e), null != n ? (0, _.goToSKUStoreListing)(t.id, {
        analyticsSource: this.analyticsLocation,
        slug: t.slug
      }) : null != s && (0, _.goToApplicationStoreListing)(s.id, {
        analyticsSource: this.analyticsLocation,
        slug: s.slug
      })
    }), B(this, "handleClick", async e => {
      let {
        isAuthenticated: t,
        applicationId: n,
        sku: s,
        targetSkuId: a,
        entitlementBranchId: l,
        isUserPremium: i,
        onClick: r,
        isInTestMode: u,
        storeListingAnalyticsProperties: d,
        asGift: E,
        forceDistribution: _
      } = this.props;
      if (null == s) throw Error("should not be able to buy without sku");
      if (null != r && null != e && r(e), null != s.externalPurchaseUrl) {
        window.open(s.externalPurchaseUrl);
        return
      }
      if (!t) {
        let e = {
          redirect_to: b.Routes.APPLICATION_STORE_LISTING_SKU(s.id, s.slug)
        };
        (0, S.transitionTo)(b.Routes.LOGIN, {
          search: (0, o.stringify)(e)
        });
        return
      }
      let I = null != l;
      if (!s.premium || _ || i || u || I) {
        if ((s.requiresPayment || _) && !I) {
          if (null != a) try {
            await (0, m.openSKUPaymentModal)(n, a, this.analyticsLocation, {
              promotionId: null != d ? d.promotionId : null,
              isGift: E
            })
          } catch (e) {
            e === b.PaymentModalPriceChangedError && c.default.show({
              title: j.default.Messages.PAYMENT_PRICE_CHANGE_TITLE,
              body: j.default.Messages.PAYMENT_PRICE_CHANGE_BODY,
              confirmText: j.default.Messages.OKAY
            })
          }
        } else try {
          let e = await this.purchaseOrGrantSKU(s);
          (0, f.openPurchaseConfirmationModal)(s.applicationId, s.id, e, {
            analyticsSource: this.analyticsLocation
          })
        } catch (e) {}
      } else {
        var p;
        p = this.analyticsLocation, D.default.track(b.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
          location: p
        }), T.default.open(b.UserSettingsSections.PREMIUM)
      }
    })
  }
}
B(F, "defaultProps", {
  tooltipPosition: "top",
  onStoreListing: !1,
  shouldRenderPrice: !1,
  pauseAnimation: !1,
  asGift: !1,
  forceDistribution: !1
}), t.default = l.forwardRef((e, t) => {
  let {
    entitlementBranchId: n,
    applicationId: s,
    channelId: l,
    skuId: i,
    ...r
  } = e, o = (0, u.useStateFromStores)([p.default, O.default], () => O.default.inTestModeForApplication(s) || p.default.inDevModeForApplication(s), [s]), [d, c, f, E, _, T] = (0, u.useStateFromStoresArray)([h.default, A.default, R.default, g.default], () => {
    let e = h.default.getApplication(s),
      t = A.default.getCurrentUser(),
      a = null == i && null != e ? e.destinationSkuId : i,
      l = null != a ? R.default.get(a) : null,
      r = null != n ? n : s,
      o = null != a ? g.default.isEntitledToSku(t, a, s, r) : null,
      u = y.default.canInstallPremiumApplications(t);
    return [e, t, l, o, u, a]
  }), m = (0, u.useStateFromStores)([v.default], () => v.default.isFocused()), N = (0, u.useStateFromStores)([M.default], () => M.default.isPurchasingSKU), S = (0, u.useStateFromStores)([C.default], () => C.default.locale), L = (0, I.useAnalyticsContext)();
  if (null != n && null == l) throw Error("Unexpected entitlementBranchId without a channelId");
  return (0, a.jsx)(F, {
    ...r,
    applicationId: s,
    skuId: i,
    entitlementBranchId: n,
    channelId: l,
    application: d,
    sku: f,
    isAuthenticated: null != c,
    isInTestMode: o,
    isEntitled: E,
    isUserPremium: _,
    isWindowFocused: m,
    isPurchasing: N,
    locale: S,
    analyticsContext: L,
    ref: t,
    targetSkuId: T
  })
})