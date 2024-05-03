"use strict";
a.r(t), a("47120"), a("627341");
var l = a("735250"),
  s = a("470079"),
  r = a("120356"),
  n = a.n(r),
  i = a("278074"),
  o = a("979554"),
  u = a("399606"),
  c = a("692547"),
  d = a("663002"),
  f = a("481060"),
  m = a("37234"),
  C = a("727637"),
  p = a("100527"),
  h = a("906732"),
  E = a("1585"),
  g = a("125988"),
  x = a("333867"),
  S = a("197115"),
  b = a("300284"),
  T = a("876917"),
  L = a("642619"),
  v = a("210887"),
  I = a("594174"),
  N = a("725808"),
  _ = a("794358"),
  y = a("466111"),
  O = a("26290"),
  k = a("998502"),
  A = a("335131"),
  R = a("1870"),
  j = a("884697"),
  P = a("664018"),
  B = a("624377"),
  D = a("813083"),
  F = a("680942"),
  M = a("558060"),
  w = a("237031"),
  H = a("832149"),
  U = a("474936"),
  W = a("689938"),
  G = a("566249");
let V = k.default.getEnableHardwareAcceleration() ? f.AnimatedAvatar : f.Avatar,
  z = f.AvatarSizes.SIZE_152,
  K = (0, E.getDecorationSizeForAvatarSize)(z),
  Y = e => {
    let {
      children: t,
      onClick: a,
      ...s
    } = e;
    return (0, l.jsx)(f.Button, {
      fullWidth: !0,
      look: f.Button.Looks.FILLED,
      onClick: e => {
        e.stopPropagation(), a()
      },
      ...s,
      children: t
    })
  },
  X = e => {
    let {
      className: t,
      ...a
    } = e;
    return (0, l.jsx)(f.Button, {
      color: f.ButtonColors.BRAND,
      look: f.Button.Looks.FILLED,
      size: f.ButtonSizes.ICON,
      className: n()(G.previewButton, t),
      innerClassName: G.previewButtonInner,
      "aria-label": W.default.Messages.PREVIEW,
      ...a,
      children: (0, l.jsx)(_.default, {
        width: 24,
        height: 24
      })
    })
  };
t.default = function(e) {
  let {
    product: t,
    category: a,
    onMount: r,
    isPremiumUser: _ = !1,
    isGiftEasterEggEnabled: k
  } = e, {
    analyticsLocations: Z
  } = (0, h.default)(p.default.COLLECTIBLES_SHOP_CARD), Q = s.useRef(null), q = (0, C.default)(Q), [$, J] = s.useState(!1), ee = q || $, et = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser()), [ea] = t.items, {
    avatarDecorationSrc: el,
    eventHandlers: es,
    avatarPlaceholderSrc: er
  } = (0, g.default)({
    user: et,
    avatarDecorationOverride: (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea : void 0,
    size: K,
    animateOnHover: !ee
  }), {
    backgroundColors: en
  } = (0, B.default)(t.styles), ei = (0, j.getFormattedPriceForCollectiblesProduct)(t, _, !1), eo = (0, j.isPremiumCollectiblesProduct)(t), eu = (0, j.isFreeCollectiblesProduct)(t), [ec, ed, ef] = (0, u.useStateFromStoresArray)([R.default], () => [R.default.getPurchase(t.skuId), R.default.isClaiming === t.skuId, null != R.default.isClaiming && R.default.isClaiming !== t.skuId]), em = (0, u.useStateFromStores)([v.default], () => (0, d.isThemeDark)(v.default.theme)), eC = (0, j.isProductNew)(t.skuId), {
    hoverVariant: ep
  } = (0, P.useShopCardHoverAnimationExperiment)("CollectiblesShopTallCard");
  s.useEffect(() => {
    let {
      current: e
    } = Q;
    if (null == e) return;
    let t = () => J(!0);
    return e.addEventListener("focusin", t), e.blur(), () => {
      e.removeEventListener("focusin", t)
    }
  }, []);
  let eh = (0, b.default)({
      analyticsLocations: Z
    }),
    eE = s.useRef(null),
    eg = () => {
      if ((0, m.popLayer)(), eh(), (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
        (0, E.openAvatarDecorationModal)({
          initialSelectedDecoration: ea,
          analyticsLocations: Z
        });
        return
      }(null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, L.openProfileEffectModal)({
        initialSelectedEffectId: ea.id,
        analyticsLocations: Z
      })
    },
    ex = e => l => {
      eE.current = l.currentTarget, (0, w.openCollectiblesShopProductDetailsModal)({
        product: t,
        category: a,
        analyticsLocations: Z,
        analyticsSource: e,
        returnRef: eE
      })
    },
    eS = ex(p.default.COLLECTIBLES_SHOP_CARD),
    eb = ex(p.default.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON),
    eT = () => (0, l.jsx)("div", {
      className: G.hoverUpsellContainer,
      children: (0, l.jsx)(S.default, {
        fullWidth: !0,
        className: G.__invalid_premiumSubscribeButton,
        disabled: ef,
        onClick: e => e.stopPropagation(),
        buttonText: W.default.Messages.UNLOCK_WITH_NITRO,
        subscriptionTier: U.PremiumSubscriptionSKUs.TIER_2
      })
    });
  s.useEffect(() => {
    null == r || r(Q)
  }, [r]);
  let eL = () => null != ec ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: G.priceTag,
      children: W.default.Messages.COLLECTIBLES_ALREADY_OWNED
    }) : eo ? (0, l.jsx)(f.Text, {
      variant: "text-md/semibold",
      className: G.priceTag,
      children: W.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
    }) : (0, l.jsx)(M.default, {
      alwaysWhiteText: !1,
      product: t,
      className: G.priceTag,
      disableTooltipPointerEvents: !0
    }),
    ev = () => eo ? null : eu ? (0, l.jsx)(X, {
      onClick: eb
    }) : (0, l.jsx)(F.default, {
      product: t,
      returnRef: Q,
      isGiftEasterEggEnabled: k,
      disableCustomColor: !0,
      tooltipDelay: 250
    }),
    eI = () => {
      if (eo && !_ && !eu) return eT();
      let e = eo ? {
        submitting: ed,
        submittingStartedLabel: W.default.Messages.COLLECTIBLES_COLLECTING,
        submittingFinishedLabel: W.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
        onClick: async () => {
          await (0, A.claimPremiumCollectiblesProduct)(t.skuId), (0, H.default)({
            product: t,
            analyticsLocations: Z
          })
        }
      } : {
        onClick: () => (0, x.default)({
          skuId: t.skuId,
          analyticsLocations: Z,
          returnRef: Q
        })
      };
      return (0, l.jsxs)("div", {
        className: G.buttonsContainer,
        children: [null == ec ? (0, l.jsx)(Y, {
          disabled: ef,
          className: G.purchaseButton,
          ...e,
          children: eo ? W.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION : W.default.Messages.COLLECTIBLES_PURCHASE.format({
            price: ei
          })
        }) : (0, l.jsx)(Y, {
          disabled: ef,
          onClick: eg,
          children: W.default.Messages.COLLECTIBLES_USE_NOW
        }), ev()]
      })
    },
    eN = em ? "0 0 15px 1px ".concat(c.default.unsafe_rawColors.PRIMARY_700.css) : "var(--elevation-high)";
  return (0, l.jsx)(f.FocusRing, {
    children: (0, l.jsxs)(f.Clickable, {
      innerRef: Q,
      className: n()(G.shopCard, (0, i.match)(ep).with(P.ShopCardHoverAnimationVariant.CONTROL, () => G.shopCardDefaultAnimation).with(P.ShopCardHoverAnimationVariant.TRANSFORMATION, () => G.shopCardTransformationAnimation).otherwise(() => void 0)),
      onBlur: () => J(!1),
      onClick: eS,
      style: null != en ? {
        backgroundColor: em ? "var(--background-floating)" : "var(--background-secondary)",
        borderColor: "var(--chat-border)",
        boxShadow: ee ? eN : "none"
      } : void 0,
      id: "shop-item-".concat(t.skuId),
      children: [eo && (0, l.jsx)(f.Tooltip, {
        tooltipContentClassName: G.premiumWheelTooltipContent,
        color: f.Tooltip.Colors.PRIMARY,
        text: W.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER,
        children: e => (0, l.jsx)(O.TextBadge, {
          ...e,
          className: G.premiumWheelBadge,
          text: (0, l.jsx)(y.default, {
            className: G.premiumWheel
          })
        })
      }), (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, l.jsx)("div", {
        className: G.profileEffectShopPreview,
        children: (0, l.jsx)(T.default, {
          isHovering: ee,
          profileEffectId: ea.id,
          isPurchased: null != ec,
          removeSetHeight: !0
        })
      }), (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, l.jsx)("div", {
        className: G.avatarContainer,
        children: (0, l.jsx)(V, {
          ...es,
          avatarDecoration: el,
          src: er,
          className: n()(G.avatar, {
            [G.avatarPurchased]: null != ec
          }),
          size: z,
          "aria-label": W.default.Messages.USER_SETTINGS_AVATAR
        })
      }), null != ec ? (0, l.jsx)("div", {
        className: G.checkmarkWrapper,
        children: (0, l.jsx)(N.default, {
          width: 38,
          height: 38,
          className: G.checkmark
        })
      }) : null, (0, l.jsxs)("div", {
        className: n()(G.cardText, {
          [G.cardTextBlur]: (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT
        }),
        children: [(0, l.jsx)("div", {
          className: n()(G.cardBackground, em ? G.darkCardBackground : G.lightCardBackground, (null == ea ? void 0 : ea.type) === o.CollectiblesItemType.PROFILE_EFFECT ? G.cardLowOpacity : null)
        }), (0, l.jsx)(f.Text, {
          variant: "text-lg/bold",
          className: G.productName,
          children: t.name
        }), (0, l.jsxs)("div", {
          className: G.detailsWrapper,
          children: [(0, l.jsx)("div", {
            className: G.innerBlur,
            children: eL()
          }), (0, l.jsx)("div", {
            className: G.innerHover,
            children: eI()
          })]
        })]
      }), (0, l.jsx)(D.default, {
        category: a,
        className: G.limitedTimeBadge,
        display: "card"
      }), eC && (0, l.jsx)(O.TextBadge, {
        text: W.default.Messages.NEW,
        disableColor: !0,
        className: G.newBadge
      })]
    })
  })
}