"use strict";
n.r(t), n.d(t, {
  default: function() {
    return K
  }
}), n("222007");
var s = n("37983"),
  a = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("866227"),
  o = n.n(r),
  u = n("446674"),
  d = n("77078"),
  c = n("79112"),
  E = n("4919"),
  f = n("86621"),
  _ = n("737960"),
  T = n("206230"),
  I = n("491232"),
  m = n("210721"),
  N = n("583711"),
  p = n("65324"),
  S = n("393414"),
  C = n("271938"),
  A = n("55411"),
  h = n("686470"),
  g = n("697218"),
  M = n("10514"),
  O = n("552712"),
  R = n("145131"),
  L = n("880013"),
  v = n("943519"),
  P = n("181108"),
  D = n("599110"),
  x = n("659632"),
  y = n("719923"),
  U = n("380186"),
  j = n("158998"),
  b = n("501076"),
  G = n("49111"),
  B = n("646718"),
  k = n("782340"),
  F = n("120704");

function w(e) {
  let {
    onClick: t,
    libraryApplication: n
  } = e;
  return (0, s.jsxs)(d.Clickable, {
    className: F.libraryLink,
    onClick: t,
    children: [(0, s.jsx)(L.default, {
      className: F.libraryIcon
    }), (0, s.jsx)("div", {
      children: n.isHidden() ? k.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY_HIDDEN : k.default.Messages.APPLICATION_STORE_PURCHASE_IN_LIBRARY
    })]
  })
}
class H extends a.PureComponent {
  get isHorizontal() {
    let {
      width: e
    } = this.props;
    return e >= E.HORIZONTAL_EMBED_BREAKPOINT
  }
  handleViewInventory() {
    c.default.open(G.UserSettingsSections.INVENTORY)
  }
  render() {
    return (0, s.jsx)(E.ResponsiveEmbedTile, {
      isHorizontal: this.isHorizontal,
      renderTitle: this.renderTitle,
      renderTagline: this.renderTagline,
      renderMedia: this.renderMedia,
      renderActions: this.renderActions
    })
  }
  constructor(...e) {
    super(...e), this.renderMedia = () => (0, s.jsx)("div", {
      className: i(F.invalidPoop, {
        [F.invalidPoopHorizontal]: this.isHorizontal
      })
    }), this.renderTitle = () => this.props.isSelfGift ? k.default.Messages.GIFT_EMBED_INVALID_TITLE_SELF : k.default.Messages.GIFT_EMBED_INVALID_TITLE_OTHER, this.renderActions = () => this.props.isSelfGift ? (0, s.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleViewInventory,
      children: k.default.Messages.GIFT_INVENTORY
    }) : (0, s.jsx)(d.Button, {
      disabled: !0,
      size: d.Button.Sizes.SMALL,
      children: k.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
    }), this.renderTagline = () => this.props.isSelfGift ? k.default.Messages.GIFT_EMBED_INVALID_TAGLINE_SELF : k.default.Messages.GIFT_EMBED_INVALID_TAGLINE_OTHER
  }
}
class V extends a.Component {
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
    return (0, s.jsxs)(R.default, {
      justify: R.default.Justify.BETWEEN,
      children: [(0, s.jsxs)(R.default, {
        children: [this.renderButton(e), null == t || e.isSubscription ? null : (0, s.jsx)(w, {
          onClick: this.handleViewLibrary,
          libraryApplication: t
        })]
      }), (0, s.jsxs)(R.default, {
        align: R.default.Align.END,
        justify: R.default.Justify.END,
        className: F.metadata,
        direction: R.default.Direction.VERTICAL,
        children: [e.hasMultipleCopies ? (0, s.jsx)("div", {
          children: this.renderGiftCodeCopiesLeft(e)
        }) : null, e.redeemed || e.isClaimed || null != t || null == e.expiresAt ? null : (0, s.jsx)("div", {
          children: k.default.Messages.GIFT_EMBED_EXPIRATION.format({
            hours: e.expiresAt.diff(o(), "h")
          })
        })]
      })]
    })
  }
  renderGiftCodeCopiesLeft(e) {
    let t = e.isSubscription ? k.default.Messages.GIFT_EMBED_SUBSCRIPTIONS_LEFT : k.default.Messages.GIFT_EMBED_COPIES_LEFT;
    return t.format({
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
      className: (0, I.isCollectiblesGiftCode)(e) ? F.collectiblesAcceptButton : null,
      size: d.Button.Sizes.SMALL,
      children: e.redeemed ? k.default.Messages.GIFT_EMBED_BUTTON_CLAIMED : null != e.giftStyle ? k.default.Messages.SEASONAL_GIFTING_OPEN_GIFT : k.default.Messages.GIFT_EMBED_BUTTON_ACCEPT
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
    return this.isCustomGiftMessage() && !n ? k.default.Messages.GIFT_RECIPIENT_NOTIFICATION.format({
      recipientDisplayName: j.default.getName(t)
    }) : null == s ? null : e.isSubscription ? n ? k.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION_SELF : k.default.Messages.GIFT_EMBED_TITLE_SUBSCRIPTION : n ? k.default.Messages.GIFT_EMBED_TITLE_SELF : k.default.Messages.GIFT_EMBED_TITLE
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
    if (null == s) return k.default.Messages.LOADING;
    if (!n && this.isCustomGiftMessage() && !e.redeemed) return;
    let r = s.isPreorder() ? k.default.Messages.PREORDER_SKU_NAME.format({
      name: s.name
    }) : s.name;
    if (e.redeemed) return e.isSubscription || (0, I.isCollectiblesGiftCode)(e) ? k.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF_SUBSCRIPTION : k.default.Messages.GIFT_EMBED_BODY_CLAIMED_SELF.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (!e.isSubscription && null != t) return k.default.Messages.GIFT_EMBED_BODY_OWNED.format({
      skuName: r,
      onViewInLibrary: this.handleViewLibrary
    });
    if (e.isClaimed) return k.default.Messages.GIFT_EMBED_BODY_CLAIMED_OTHER;
    if (!i.verified) return k.default.Messages.GIFT_EMBED_BODY_REQUIRES_VERIFICATION.format({
      onClick: this.handleVerificationClick
    });
    if (n) return e.isSelfRedeemable ? k.default.Messages.GIFT_EMBED_BODY_SELF : k.default.Messages.GIFT_EMBED_BODY_SELF_NOT_REDEEMABLE.format({
      skuName: r
    });
    if (e.isExistingPremiumSubscriptionDisallowed) return k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_ALREADY_ACTIVE;
    if (e.hasMultipleCopies) return null != a ? e.isSubscription ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_GIVEAWAY.format({
      username: j.default.getUserTag(a),
      maxUses: e.maxUses,
      skuName: r
    }) : k.default.Messages.GIFT_EMBED_BODY_GIVEAWAY.format({
      username: j.default.getUserTag(a),
      totalCopies: e.maxUses,
      skuName: r
    }) : e.isSubscription ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_GIVEAWAY.format({
      maxUses: e.maxUses,
      skuName: r
    }) : k.default.Messages.GIFT_EMBED_BODY_NO_USER_GIVEAWAY.format({
      totalCopies: e.maxUses,
      skuName: r
    });
    if (e.isSubscription) {
      if (null == l) return k.default.Messages.LOADING;
      if (null != a) {
        let e = l.interval === B.SubscriptionIntervalTypes.MONTH ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_MONTHS : k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_DEFAULT_YEARS;
        return e.format({
          username: j.default.getUserTag(a),
          skuName: r,
          intervalCount: l.intervalCount
        })
      }
      let e = l.interval === B.SubscriptionIntervalTypes.MONTH ? k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_MONTHS : k.default.Messages.GIFT_EMBED_BODY_SUBSCRIPTION_NO_USER_DEFAULT_YEARS;
      return e.format({
        skuName: r,
        intervalCount: l.intervalCount
      })
    }
    return null != a ? k.default.Messages.GIFT_EMBED_BODY_DEFAULT.format({
      username: j.default.getUserTag(a)
    }) : k.default.Messages.GIFT_EMBED_BODY_NO_USER_DEFAULT
  }
  renderPromotionActions() {
    return (0, s.jsx)(d.Button, {
      size: d.Button.Sizes.SMALL,
      onClick: this.handleClaimPromotion,
      children: k.default.Messages.GIFT_EMBED_BUTTON_CLAIM
    })
  }
  renderEmbed() {
    let {
      giftCode: e,
      width: t
    } = this.props;
    return null == e ? null : (0, s.jsx)(b.StoreEmbedWithoutDimensions, {
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
    if (null != e && null != e.promotion) return (0, s.jsx)(b.StoreEmbedWithoutDimensions, {
      skuId: e.skuId,
      onEmbedClick: this.handleClaimPromotion,
      analyticsSection: G.AnalyticsSections.GIFT_CODE_EMBED,
      renderCustomActions: () => this.renderPromotionActions(),
      renderCustomTitle: () => k.default.Messages.GIFT_EMBED_TITLE_PROMOTION,
      renderCustomTagline: () => k.default.Messages.GIFT_EMBED_TAGLINE_PROMOTION,
      width: n
    });
    if (null == e || e.revoked) return t ? (0, s.jsx)(H, {
      isSelfGift: a,
      width: n
    }) : (0, s.jsx)(E.ResponsiveLoadingEmbedTile, {
      isHorizontal: n >= E.HORIZONTAL_EMBED_BREAKPOINT
    });
    return (0, I.isCollectiblesGiftCode)(e) ? (0, s.jsx)("div", {
      className: F.collectiblesEmbedWrapper,
      children: this.renderEmbed()
    }) : this.renderEmbed()
  }
  constructor(...e) {
    super(...e), this.handleViewLibrary = e => {
      let {
        libraryApplication: t
      } = this.props;
      e.preventDefault(), null != t && t.isHidden() ? (0, S.transitionTo)(G.Routes.APPLICATION_LIBRARY_SETTINGS) : (0, S.transitionTo)(G.Routes.APPLICATION_LIBRARY, {
        state: {
          applicationId: null != t ? t.id : null
        }
      })
    }, this.handleVerificationClick = e => {
      e.stopPropagation(), e.preventDefault(), c.default.open(G.UserSettingsSections.ACCOUNT)
    }, this.handleAccept = e => {
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
      (0, N.openGiftCodeAcceptModal)({
        processedCode: n,
        channelContext: t,
        customGiftMessage: i,
        giftInfo: l
      })
    }, this.handleEmbedClick = e => {
      let {
        giftCode: t
      } = this.props;
      null != t && t.isSubscription && (e.preventDefault(), c.default.open(G.UserSettingsSections.PREMIUM))
    }, this.handleClaimPromotion = e => {
      var t;
      e.stopPropagation(), e.preventDefault();
      let n = null === (t = this.props.giftCode) || void 0 === t ? void 0 : t.code;
      null != n && window.open(G.Routes.BILLING_PROMOTION_REDEMPTION(n))
    }, this.renderCustomGiftBox = e => {
      let {
        useReducedMotion: t,
        width: n
      } = this.props;
      if (null == e || null == e.giftStyle) return null;
      let a = B.LegacySeasonalGiftStyles.includes(e.giftStyle),
        l = i(F.customGiftEmbedWrapper, {
          [F.legacySeasonalGiftEmbedWrapper]: a,
          [F.giftEmbedWrapperHorizontal]: n >= E.HORIZONTAL_EMBED_BREAKPOINT
        }),
        r = i({
          [F.legacySeasonalGiftEmbedBox]: a,
          [F.legacySeasonalGiftEmbedBoxHorizontal]: a && n >= E.HORIZONTAL_EMBED_BREAKPOINT,
          [F.customGiftEmbedBox]: !a,
          [F.customGiftEmbedBoxHorizontal]: !a && n >= E.HORIZONTAL_EMBED_BREAKPOINT
        });
      return (0, s.jsxs)("div", {
        className: l,
        children: [!t && B.AllSeasonalGiftStyles.includes(e.giftStyle) && (0, s.jsx)(P.default, {
          className: F.snow,
          wind: 5
        }), a && (0, s.jsx)(v.default, {
          className: F.headerIcon
        }), null != e.giftStyle && (0, s.jsx)(p.default, {
          defaultAnimationState: e.redeemed ? m.AnimationState.LOOP : m.AnimationState.IDLE,
          giftStyle: e.giftStyle,
          className: r
        })]
      })
    }
  }
}
let Y = (0, _.default)((0, f.default)(V));
var K = u.default.connectStores([A.default, O.default, g.default, h.default, M.default, C.default, T.default], e => {
  let {
    code: t,
    author: n,
    currentUser: s
  } = e, a = A.default.get(t), l = null != a ? O.default.get(a.skuId) : null, i = null != a && null != a.userId ? g.default.getUser(a.userId) : null, r = T.default.useReducedMotion;
  return {
    sku: l,
    giftCode: a,
    gifter: i,
    currentUser: s,
    subscriptionPlan: null != a && null != a.subscriptionPlanId ? (0, U.getOrFetchSubscriptionPlan)(a.subscriptionPlanId) : null,
    isSelfGift: null != a ? C.default.getId() === a.userId : C.default.getId() === n.id,
    resolved: A.default.getIsResolved(t),
    libraryApplication: null != l && (null == a ? void 0 : a.entitlementBranches) != null ? x.firstLibraryApplicationForGiftCode(a.entitlementBranches, l, h.default) : null,
    useReducedMotion: r
  }
})(Y)