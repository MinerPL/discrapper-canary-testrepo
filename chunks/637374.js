"use strict";
n.r(t), n("47120");
var s = n("735250"),
  a = n("470079"),
  l = n("803997"),
  i = n.n(l),
  r = n("913527"),
  o = n.n(r),
  u = n("442837"),
  d = n("481060"),
  c = n("230711"),
  f = n("568836"),
  E = n("730749"),
  _ = n("112724"),
  T = n("607070"),
  m = n("884697"),
  I = n("479446"),
  p = n("930114"),
  h = n("981632"),
  N = n("703656"),
  S = n("314897"),
  C = n("82142"),
  A = n("283595"),
  g = n("594174"),
  M = n("509545"),
  R = n("55563"),
  O = n("285952"),
  v = n("427828"),
  L = n("199480"),
  x = n("70613"),
  D = n("626135"),
  P = n("669079"),
  y = n("74538"),
  U = n("296848"),
  b = n("51144"),
  j = n("626799"),
  G = n("981631"),
  B = n("474936"),
  F = n("689938"),
  k = n("742801");

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function H(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, s.jsxs)(d.Clickable, {
    className: k.libraryLink,
    onClick: t,
    children: [(0, s.jsx)(v.default, {
      className: k.libraryIcon
    }), (0, s.jsx)("div", {
      children: n.isHidden() ? F.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY_HIDDEN : F.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY
    })]
  })
}
class V extends a.PureComponent {
  get isHorizontal() {
    let {
      width: e
    } = this.props;
    return e >= f.HORIZONTAL_EMBED_BREAKPOINT
  }
  handleViewInventory() {
    c.default.open(G.UserSettingsSections.INVENTORY)
  }
  render() {
    return (0, s.jsx)(f.ResponsiveEmbedTile, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), w(this, "renderMedia", () => (0, s.jsx)("div", {
      className: i()(k.invalidPoop, {
        [k.invalidPoopHorizontal]: this.isHorizontal
      })
    })), w(this, "renderTitle", () => this.props.isSelfGift ? F.default.Messages.GIFT_EMBED_INVALID_TITLE_SELF : F.default.Messages.GIFT_EMBED_INVALID_TITLE_OTHER), w(this, "renderActions", () => this.props.isSelfGift ? (0, s.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleViewInventory,
      children: F.default.Messages.GIFT_INVENTORY
    }) : (0, s.jsx)(d.Button, {
      disabled: !0,
      size: d.Button.Sizes.SMALL,
      children: F.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
    })), w(this, "renderTagline", () => this.props.isSelfGift ? F.default.Messages.GIFT_EMBED_INVALID_TAGLINE_SELF : F.default.Messages.GIFT_EMBED_INVALID_TAGLINE_OTHER)
  }
}
class Y extends a.Component {
  get analyticsLocation() {
    let {
      analyticsContext: {
        location: e
      }
    } = this.props;
    return {
      ...e,
      section: G.AnalyticsSections.GIFT_CODE_EMBED
    }
  }
  renderActions(e) {
    let {
      libraryApplication: t
    } = this.props;
    return (0, s.jsxs)(O.default, {
      justify: O.default.Justify.BETWEEN,
      children: [(0, s.jsxs)(O.default, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, s.jsx)(H, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, s.jsxs)(O.default, {
        align: O.default.Align.END,
        justify: O.default.Justify.END,
        className: k.metadata,
        direction: O.default.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, s.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, s.jsx)("div", {
          children: F.default.Messages.GIFT_EMBED_EXPIRATION.format({
            hours: e.expiresAt.diff(o()(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    return (e.isSubscription ? F.default.Messages.GIFT_EMBED_SUBSCRIPTIONS_LEFT : F.default.Messages.GIFT_EMBED_COPIES_LEFT).format({
      remaining: e.remainingUses,
      total: e.maxUses
    })
  }
  renderButton(e) {
    let {
      libraryApplication: t,
      currentUser: n,
      isSelfGift: a
    } = this.props, l = {
      onClick: this.handleAccept,
      color: d.Button.Colors.BRAND
    }, i = !e.isSubscription && null != t || !e.isSelfRedeemable && a || e.isExistingPremiumSubscriptionDisallowed && (0, y.isPremium)(n);
    return (e.redeemed || i || e.isClaimed || !n.verified) && (l.color = d.Button.Colors.BRAND, l.disabled = !0), (0, s.jsx)(d.Button, {
      ...l,
      className: (0, m.isCollectiblesGiftCode)(e) ? k.collectiblesAcceptButton : null,
      size: d.Button.Sizes.SMALL,
      children: e.redeemed ? F.default.Messages.GIFT_EMBED_BUTTON_CLAIMED : null != e.giftStyle ? F.default.Messages.SEASONAL_GIFTING_OPEN_GIFT : F.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
    })
  }
  isCustomGiftMessage() {
    let {
      type: e
    } = this.props;
    return e === G.MessageTypes.CUSTOM_GIFT
  }
  renderTitle(e) {
    let {
      currentUser: t,
      isSelfGift: n,
      sku: s
    } = this.props;
    return this.isCustomGiftMessage() && !n ? F.default.Messages.GIFT_RECIPIENT_NOTIFICATION.format({
      recipientDisplayName: b.default.getName(t)
    }) : null == s ? null : e.isSubscription ? n ? F.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION_SELF : F.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION : n ? F.default.Messages.GIFT_EMBED_TITLE_SELF : F.default.Messages.GIFT_EMBED_TITLE
  }
  renderBody(e) {
    let {
      libraryApplication: t,
      isSelfGift: n,
      sku: s,
      gifter: a,
      subscriptionPlan: l,
      currentUser: i
    } = this.props;
    if (null == s) return F.default.Messages.LOADING;
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let r = s.isPreorder() ? F.default.Messages.PREORDER_SKU_NAME.format({
      name: s.name
    }) : s.name;
    if (e.redeemed) return e.isSubscription || (0, m.isCollectiblesGiftCode)(e) ? F.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF_SUBSCRIPTION : F.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return F.default.Messages.GIFT_EMBED_BODY_OWNED.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return F.default.Messages.GIFT_EMBED_BODY_CLAIMED_OTHER;
    if (!i.verified) return F.default.Messages.GIFT_EMBED_BODY_REQUIRES_VERIFICATION.format({
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? F.default.Messages.GIFT_EMBED_BODY_SELF : F.default.Messages.GIFT_EMBED_BODY_SELF_NOT_REDEEMABLE.format({
      skuName: r
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_ALREADY_ACTIVE;
    if (e.hasMultipleCopies) return null != a ? e.isSubscription ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_GIVEAWAY.format({
      username: b.default.getUserTag(a),
      maxUses: e.maxUses,
      skuName: r
    }) : F.default.Messages.GIFT_EMBED_BODY_GIVEAWAY.format({
      username: b.default.getUserTag(a),
      totalCopies: e.maxUses,
      skuName: r
    }) : e.isSubscription ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_GIVEAWAY.format({
      maxUses: e.maxUses,
      skuName: r
    }) : F.default.Messages.GIFT_EMBED_BODY_NO_USER_GIVEAWAY.format({
      totalCopies: e.maxUses,
      skuName: r
    });
    if (e.isSubscription) return null == l ? F.default.Messages.LOADING : null != a ? (l.interval === B.SubscriptionIntervalTypes.MONTH ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_MONTHS : F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_YEARS).format({
      username: b.default.getUserTag(a),
      skuName: r,
      intervalCount: l.intervalCount
    }) : (l.interval === B.SubscriptionIntervalTypes.MONTH ? F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_MONTHS : F.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_YEARS).format({
      skuName: r,
      intervalCount: l.intervalCount
    });
    return null != a ? F.default.Messages.GIFT_EMBED_BODY_DEFAULT.format({
      username: b.default.getUserTag(a)
    }) : F.default.Messages.GIFT_EMBED_BODY_NO_USER_DEFAULT
  }
  renderPromotionActions() {
    return (0, s.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleClaimPromotion,
      children: F.default.Messages.GIFT_EMBED_BUTTON_CLAIM
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t
    } = this.props;
    return null == e ? null : (0, s.jsx)(j.StoreEmbedWithoutDimensions, {
      skuId: e.skuId,
      onEmbedClick: this.handleEmbedClick,
      analyticsSection: G.AnalyticsSections.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderActions(e),
      renderCustomTitle: () => this.renderTitle(e),
      renderCustomTagline: () => this.renderBody(e),
      renderCustomMedia: null == e.giftStyle ? void 0 : () => this.renderCustomGiftBox(e),
      width: t
    })
  }
  render() {
    let {
      giftCode: e,
      resolved: t,
      width: n,
      isSelfGift: a
    } = this.props;
    if (null != e && null != e.promotion) return (0, s.jsx)(j.StoreEmbedWithoutDimensions, {
      skuId: e.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: G.AnalyticsSections.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => F.default.Messages.GIFT_EMBED_TITLE_PROMOTION,
      renderCustomTagline: () => F.default.Messages.GIFT_EMBED_TAGLINE_PROMOTION,
      width: n
    });
    if (null == e || e.revoked) return t ? (0, s.jsx)(V, {
      isSelfGift: a,
      width: n
    }) : (0, s.jsx)(f.ResponsiveLoadingEmbedTile, {
      isHorizontal: n >= f.HORIZONTAL_EMBED_BREAKPOINT
    });
    return (0, m.isCollectiblesGiftCode)(e) ? (0, s.jsx)("div", {
      className: k.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), w(this, "handleViewLibrary", e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, N.transitionTo)(G.Routes.APPLICATION_LIBRARY_SETTINGS) : (0, N.transitionTo)(G.Routes.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : null
        }
      })
    }), w(this, "handleVerificationClick", e => {
      e.stopPropagation(), e.preventDefault(), c.default.open(G.UserSettingsSections.ACCOUNT)
    }), w(this, "handleAccept", e => {
      let {
        channelId: t,
        code: n,
        content: s,
        type: a,
        giftInfo: l
      } = this.props;
      e.preventDefault(), e.stopPropagation(), D.default.track(G.AnalyticEvents.OPEN_MODAL, {
        type: "gift_accept",
        location: {
          ...this.analyticsLocation,
          object: G.AnalyticsObjects.BUTTON_CTA
        }
      });
      let i = a !== G.MessageTypes.CUSTOM_GIFT ? void 0 : s;
      (0, p.openGiftCodeAcceptModal)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: i,
        giftInfo: l
      })
    }), w(this, "handleEmbedClick", e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), c.default.open(G.UserSettingsSections.PREMIUM))
    }), w(this, "handleClaimPromotion", e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
      null != n && window.open(G.Routes.BILLING_PROMOTION_REDEMPTION(n))
    }), w(this, "renderCustomGiftBox", e => {
      let {
        useReducedMotion: t,
        width: n
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let a = B.LegacySeasonalGiftStyles.includes(e.giftStyle),
        l = i()(k.customGiftEmbedWrapper, {
          [k.legacySeasonalGiftEmbedWrapper]: a,
          [k.giftEmbedWrapperHorizontal]: n >= f.HORIZONTAL_EMBED_BREAKPOINT
        }),
        r = i()({
          [k.legacySeasonalGiftEmbedBox]: a,
          [k.legacySeasonalGiftEmbedBoxHorizontal]: a && n >= f.HORIZONTAL_EMBED_BREAKPOINT,
          [k.customGiftEmbedBox]: !a,
          [k.customGiftEmbedBoxHorizontal]: !a && n >= f.HORIZONTAL_EMBED_BREAKPOINT
        });
      return (0, s.jsxs)("div", {
        className: l,
        children: [!t && B.AllSeasonalGiftStyles.includes(e.giftStyle) && (0, s.jsx)(x.default, {
          className: k.snow,
          wind: 5
        }), a && (0, s.jsx)(L.default, {
          className: k.headerIcon
        }), null != e.giftStyle && (0, s.jsx)(h.default, {
          defaultAnimationState: e.redeemed ? I.AnimationState.LOOP : I.AnimationState.IDLE,
          giftStyle: e.giftStyle,
          className: r
        })]
      })
    })
  }
}
let K = (0, _.default)((0, E.default)(Y));
t.default = u.default.connectStores([C.default, R.default, g.default, A.default, M.default, S.default, T.default], e => {
  let {
    code: t,
    author: n,
    currentUser: s
  } = e, a = C.default.get(t), l = null != a ? R.default.get(a.skuId) : null, i = null != a && null != a.userId ? g.default.getUser(a.userId) : null, r = T.default.useReducedMotion;
  return {
    sku: l,
    giftCode: a,
    gifter: i,
    currentUser: s,
    subscriptionPlan: null != a && null != a.subscriptionPlanId ? (0, U.getOrFetchSubscriptionPlan)(a.subscriptionPlanId) : null,
    isSelfGift: null != a ? S.default.getId() === a.userId : S.default.getId() === n.id,
    resolved: C.default.getIsResolved(t),
    libraryApplication: null != l && (null == a ? void 0 : a.entitlementBranches) != null ? P.firstLibraryApplicationForGiftCode(a.entitlementBranches, l, A.default) : null,
    useReducedMotion: r
  }
})(K)