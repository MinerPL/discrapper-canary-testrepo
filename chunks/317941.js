"use strict";
s.r(t), s("47120"), s("411104");
var a = s("735250"),
  n = s("470079"),
  l = s("913527"),
  i = s.n(l),
  r = s("442837"),
  o = s("846519"),
  d = s("481060"),
  u = s("533307"),
  c = s("812206"),
  S = s("981632"),
  E = s("314897"),
  T = s("82142"),
  _ = s("246946"),
  f = s("509545"),
  m = s("55563"),
  g = s("15887"),
  h = s("581874"),
  N = s("285952"),
  I = s("366695"),
  p = s("259580"),
  C = s("572004"),
  A = s("669079"),
  O = s("296848"),
  x = s("474936"),
  R = s("689938"),
  M = s("888342");

function v(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}
class D extends n.PureComponent {
  componentWillUnmount() {
    this._copyModeTimeout.stop()
  }
  get copyButtonText() {
    switch (this.state.copyMode) {
      case h.CopyInputModes.SUCCESS:
        return R.default.Messages.BILLING_GIFT_COPIED;
      case h.CopyInputModes.ERROR:
        return R.default.Messages.FAILED;
      default:
        return R.default.Messages.COPY
    }
  }
  handleRevoke(e) {
    u.default.revokeGiftCode(e)
  }
  render() {
    let {
      hideCode: e,
      giftCode: t
    } = this.props, {
      copyMode: s
    } = this.state;
    return (0, a.jsxs)(N.default, {
      direction: N.default.Direction.VERTICAL,
      className: M.giftCodeRow,
      children: [(0, a.jsx)(h.default, {
        className: M.codeText,
        value: (0, A.getGiftCodeURL)(t.code),
        text: this.copyButtonText,
        mode: s,
        supportsCopy: C.SUPPORTS_COPY,
        hideMessage: e ? R.default.Messages.GIFT_INVENTORY_HIDDEN : null,
        onCopy: this.handleCopy,
        buttonColor: h.default.ButtonColors.BRAND,
        buttonLook: h.default.ButtonLooks.FILLED
      }), (0, a.jsxs)("div", {
        className: M.subTextRow,
        children: [null != t.expiresAt ? (0, a.jsxs)(n.Fragment, {
          children: [R.default.Messages.GIFT_INVENTORY_EXPIRES_IN.format({
            hours: t.expiresAt.diff(i()(), "h")
          }), " ", "—\xa0"]
        }) : null, (0, a.jsx)(d.Clickable, {
          tag: "a",
          onClick: () => this.handleRevoke(t.code),
          children: R.default.Messages.REVOKE
        })]
      })]
    })
  }
  constructor(...e) {
    super(...e), v(this, "_copyModeTimeout", new o.Timeout), v(this, "state", {
      copyMode: h.CopyInputModes.DEFAULT
    }), v(this, "handleCopy", e => {
      let {
        giftCode: t,
        sku: s
      } = this.props;
      (0, A.trackGiftCodeCopy)(t, s);
      try {
        (0, C.copy)(e), this.setState({
          copyMode: h.CopyInputModes.SUCCESS
        })
      } catch (e) {
        this.setState({
          copyMode: h.CopyInputModes.ERROR
        })
      }
      this._copyModeTimeout.start(1e3, () => {
        this.setState({
          copyMode: h.CopyInputModes.DEFAULT
        })
      })
    })
  }
}
class L extends n.PureComponent {
  componentDidMount() {
    this._loadedAt = Date.now()
  }
  renderTitle() {
    let e;
    let {
      sku: t,
      subscriptionPlan: s,
      giftCodeBatchId: n
    } = this.props;
    return e = n === x.BLACK_FRIDAY_2020_GIFT_CODE_BATCH_ID ? R.default.Messages.BLACK_FRIDAY_PROMOTION_GIFT_INVENTORY_TITLE : n === x.STICKERS_GIFT_CODE_BATCH_ID && null != s ? (s.interval === x.SubscriptionIntervalTypes.MONTH ? R.default.Messages.STICKERS_GIFT_INVENTORY_TITLE_MONTH : R.default.Messages.STICKERS_GIFT_INVENTORY_TITLE_YEAR).format({
      skuName: t.name,
      intervalCount: s.intervalCount
    }) : null == s ? t.name : (s.interval === x.SubscriptionIntervalTypes.MONTH ? R.default.Messages.GIFT_INVENTORY_SUBSCRIPTION_MONTHS : R.default.Messages.GIFT_INVENTORY_SUBSCRIPTION_YEARS).format({
      skuName: t.name,
      intervalCount: s.intervalCount
    }), (0, a.jsx)("div", {
      className: M.gameName,
      children: e
    })
  }
  renderGenerateGiftCodeRow() {
    return (0, a.jsxs)(N.default, {
      justify: N.default.Justify.BETWEEN,
      align: N.default.Align.CENTER,
      className: M.generateCodeRow,
      children: [(0, a.jsx)("div", {
        className: M.codeText,
        children: R.default.Messages.GIFT_INVENTORY_GENERATE_HELP
      }), (0, a.jsx)(d.Button, {
        submitting: this.state.isCreating,
        size: d.Button.Sizes.SMALL,
        color: d.Button.Colors.BRAND,
        onClick: this.handleGenerateGiftCode,
        children: R.default.Messages.GIFT_INVENTORY_GENERATE_LINK
      })]
    })
  }
  setIsHovered(e) {
    this.setState({
      isHovered: e
    })
  }
  render() {
    let {
      entitlements: e,
      application: t,
      giftCodes: s,
      className: l,
      sku: i,
      isFetching: r,
      hideCodes: o,
      giftStyle: u
    } = this.props, {
      isOpen: c
    } = this.state;
    return (0, a.jsxs)(g.default, {
      className: l,
      children: [(0, a.jsx)(d.Clickable, {
        onClick: this.handleToggleOpen,
        className: M.card,
        onMouseEnter: () => this.setIsHovered(!0),
        onMouseLeave: () => this.setIsHovered(!1),
        children: (0, a.jsx)(g.default.Header, {
          splashArtURL: t.getSplashURL(512),
          children: (0, a.jsxs)("div", {
            className: M.cardHeader,
            children: [(0, a.jsxs)(N.default, {
              align: N.default.Align.CENTER,
              children: [null != u ? (0, a.jsx)(S.default, {
                giftStyle: u,
                className: M.seasonalGiftBox,
                shouldAnimate: this.state.isHovered
              }) : (0, a.jsx)(I.default, {
                game: t,
                size: I.default.Sizes.MEDIUM,
                skuId: i.id
              }), (0, a.jsxs)("div", {
                className: M.headerText,
                children: [this.renderTitle(), (0, a.jsx)("div", {
                  className: M.subTextHeader,
                  children: R.default.Messages.GIFT_INVENTORY_COPIES.format({
                    copies: e.length
                  })
                })]
              })]
            }), (0, a.jsx)(p.default, {
              direction: c ? p.default.Directions.UP : p.default.Directions.DOWN,
              className: M.expandIcon
            })]
          })
        })
      }), c ? (0, a.jsx)(g.default.Body, {
        children: r ? (0, a.jsx)(d.Spinner, {
          className: M.spinner
        }) : (0, a.jsxs)(n.Fragment, {
          children: [s.length < e.length ? this.renderGenerateGiftCodeRow() : null, s.map(e => (0, a.jsx)(D, {
            giftCode: e,
            sku: i,
            hideCode: o
          }, e.code))]
        })
      }) : null]
    })
  }
  constructor(...e) {
    super(...e), v(this, "_loadedAt", null), v(this, "state", {
      isOpen: !1,
      isCreating: !1,
      isHovered: !1
    }), v(this, "handleGenerateGiftCode", async e => {
      e.stopPropagation();
      let {
        skuId: t,
        subscriptionPlanId: s,
        giftStyle: a
      } = this.props;
      this.setState({
        isCreating: !0
      }), await u.default.createGiftCode(t, s, a), this.setState({
        isCreating: !1,
        isOpen: !0
      })
    }), v(this, "handleToggleOpen", () => {
      let {
        skuId: e,
        subscriptionPlanId: t,
        loadedAt: s
      } = this.props, a = !this.state.isOpen;
      (null == s || null == this._loadedAt || s < this._loadedAt) && a && u.default.fetchUserGiftCodesForSKU(e, t), this.setState({
        isOpen: !this.state.isOpen
      })
    })
  }
}
t.default = r.default.connectStores([m.default, _.default, T.default, c.default, f.default, E.default], e => {
  let {
    skuId: t,
    subscriptionPlanId: s,
    giftStyle: a
  } = e, n = m.default.get(t);
  if (null == n) throw Error("SKU was unavailable while rendering gift.");
  let l = T.default.getForGifterSKUAndPlan(E.default.getId(), t, s).filter(e => !e.isClaimed).filter(e => e.giftStyle === a);
  return {
    sku: n,
    hideCodes: _.default.enabled,
    isFetching: T.default.getUserGiftCodesFetchingForSKUAndPlan(t, s),
    loadedAt: T.default.getUserGiftCodesLoadedAtForSKUAndPlan(t, s),
    application: c.default.getApplication(n.applicationId),
    subscriptionPlan: null != s ? (0, O.getOrFetchSubscriptionPlan)(s) : null,
    giftCodes: l
  }
})(L)