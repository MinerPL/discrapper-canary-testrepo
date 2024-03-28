"use strict";
l.r(t), l("47120");
var a = l("735250"),
  s = l("470079"),
  i = l("803997"),
  n = l.n(i),
  r = l("979554"),
  o = l("399606"),
  d = l("481060"),
  c = l("37234"),
  u = l("809206"),
  m = l("100527"),
  C = l("906732"),
  I = l("1585"),
  E = l("125988"),
  T = l("786761"),
  p = l("3148"),
  f = l("739566"),
  h = l("753206"),
  A = l("333867"),
  L = l("963249"),
  g = l("197115"),
  v = l("300284"),
  x = l("962746"),
  _ = l("642619"),
  O = l("318661"),
  N = l("25990"),
  R = l("594174"),
  S = l("642113"),
  b = l("466111"),
  y = l("151785"),
  P = l("626135"),
  j = l("74538"),
  M = l("335131"),
  D = l("1870"),
  B = l("884697"),
  k = l("624377"),
  F = l("141011"),
  U = l("426171"),
  w = l("224068"),
  V = l("813083"),
  z = l("823941"),
  H = l("680942"),
  W = l("558060"),
  G = l("409116"),
  Y = l("237031"),
  Z = l("372654"),
  K = l("832149"),
  X = l("414592"),
  q = l("981631"),
  J = l("474936"),
  Q = l("231338"),
  $ = l("689938"),
  ee = l("662553"),
  et = l("660097");
let el = d.AvatarSizes.SIZE_152,
  ea = (0, I.getDecorationSizeForAvatarSize)(el),
  es = e => {
    let {
      text: t
    } = e, {
      analyticsLocations: l
    } = (0, C.default)(), i = s.useRef(null);
    return (0, a.jsx)(d.Clickable, {
      className: ee.subscribeNow,
      innerRef: i,
      onClick: () => {
        (0, L.default)({
          subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: l,
          returnRef: i
        })
      },
      children: t
    })
  },
  ei = e => {
    let {
      product: t,
      user: l,
      category: i,
      onClose: m,
      returnRef: T
    } = e, {
      analyticsLocations: p
    } = (0, C.default)(), f = j.default.canUseCollectibles(l), [h, L] = (0, o.useStateFromStoresArray)([D.default], () => [D.default.getPurchase(t.skuId), D.default.isClaiming === t.skuId]), x = (0, v.default)({
      analyticsLocations: p
    }), {
      buttonColors: O,
      backgroundColors: N,
      isDarkText: R
    } = (0, k.default)(t.styles), S = !0 === R, y = S ? ee.darkText : ee.lightText, P = null != O ? {
      background: (0, Z.getBackgroundGradient)(O, 90),
      color: O.text.toHslString()
    } : void 0, F = null != N ? {
      background: (0, Z.getBackgroundGradient)(N, 135)
    } : void 0, U = (0, B.isPremiumCollectiblesProduct)(t), X = (0, B.extractPriceByPurchaseTypes)(t, q.PriceSetAssignmentPurchaseTypes.DEFAULT), ei = (null == X ? void 0 : X.amount) === 0, [en] = t.items;
    s.useEffect(() => {
      if ((null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION) return (0, u.setPendingAvatarDecoration)(en), () => (0, u.setPendingAvatarDecoration)(void 0)
    }, [en]);
    let er = e => (0, a.jsx)(g.default, {
        subscriptionTier: J.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: Y.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, Y.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: i,
            returnRef: T,
            analyticsLocations: p
          })
        }
      }),
      {
        avatarDecorationSrc: eo,
        eventHandlers: ed
      } = (0, E.default)({
        user: l,
        avatarDecorationOverride: (null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION ? en : null,
        size: ea
      });
    return (0, a.jsxs)("div", {
      className: ee.collectibleInfoContainer,
      style: F,
      children: [(0, a.jsxs)("div", {
        className: ee.titleContainer,
        children: [(0, a.jsx)("div", {
          children: (0, a.jsx)("img", {
            className: ee.titleImage,
            src: (0, B.getCollectiblesAssetURL)(i.logo, {
              size: z.LOGO_SIZE
            }),
            alt: i.name
          })
        }), (0, a.jsx)(V.default, {
          category: i,
          display: "modal"
        })]
      }), (null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)("div", {
        className: ee.avatarPreviewContainer,
        children: (0, a.jsx)(d.Avatar, {
          ...ed,
          "aria-label": $.default.Messages.USER_SETTINGS_AVATAR,
          size: el,
          avatarDecoration: eo,
          src: et
        })
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: ee.description,
          children: [(0, a.jsx)(w.default, {
            item: en,
            isDarkText: S
          }), (0, a.jsx)(d.Heading, {
            variant: "heading-xl/extrabold",
            className: n()([ee.headingWithItemTypePill, y]),
            children: t.name
          }), (0, a.jsx)(d.Text, {
            variant: "text-sm/normal",
            className: y,
            children: t.summary
          }), (() => {
            if (null != h) return (0, a.jsx)(d.Text, {
              variant: "text-md/semibold",
              className: n()([ee.priceTag, y]),
              children: $.default.Messages.COLLECTIBLES_ALREADY_OWNED
            });
            if (U) return (0, a.jsx)(d.Text, {
              variant: "text-md/semibold",
              className: n()([ee.priceTag, y]),
              children: $.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
            });
            if (f) return (0, a.jsx)(W.default, {
              product: t,
              className: ee.priceTag,
              innerClassName: y,
              alwaysWhiteText: !S,
              nitroWheelColor: !0 === S ? "black" : "white"
            });
            if (null == X) return null;
            let e = (0, B.extractPriceByPurchaseTypes)(t, q.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
            return (0, a.jsxs)("div", {
              className: ee.priceTagContainer,
              children: [(0, a.jsx)(G.default, {
                price: X
              }), null != e && !ei && (0, a.jsx)(G.default, {
                price: e,
                variant: "text-xs/medium",
                alwaysWhiteText: !S,
                className: n()([ee.premiumPriceTag, y]),
                renderPrice: e => $.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                  price: e,
                  subscribeNowHook: e => (0, a.jsx)(es, {
                    text: e
                  })
                }),
                icon: (0, a.jsx)(d.Tooltip, {
                  text: $.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": $.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  children: e => {
                    let {
                      ...t
                    } = e;
                    return (0, a.jsx)(b.default, {
                      ...t,
                      className: ee.premiumPriceTagIcon,
                      color: "white"
                    })
                  }
                })
              })]
            })
          })()]
        }), (0, a.jsx)("div", {
          className: ee.buttonsContainer,
          children: (0, a.jsxs)("div", {
            className: ee.primaryButtons,
            children: [!U || f || ei ? null != h ? (0, a.jsx)(d.Button, {
              style: P,
              className: ee.button,
              look: d.Button.Looks.FILLED,
              onClick: () => {
                if (m(), (0, c.popLayer)(), x(), (null == en ? void 0 : en.type) === r.CollectiblesItemType.AVATAR_DECORATION) {
                  (0, I.openAvatarDecorationModal)({
                    initialSelectedDecoration: en,
                    analyticsLocations: p
                  });
                  return
                }(null == en ? void 0 : en.type) === r.CollectiblesItemType.PROFILE_EFFECT && (0, _.openProfileEffectModal)({
                  initialSelectedEffectId: en.id,
                  analyticsLocations: p
                })
              },
              children: $.default.Messages.COLLECTIBLES_USE_NOW
            }) : U ? (0, a.jsx)(d.Button, {
              style: P,
              className: ee.button,
              look: d.Button.Looks.FILLED,
              submitting: L,
              submittingStartedLabel: $.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: $.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, M.claimPremiumCollectiblesProduct)(t.skuId), m(), (0, K.default)({
                  product: t,
                  analyticsLocations: p
                })
              },
              children: $.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, a.jsx)(d.Button, {
              style: P,
              className: ee.button,
              look: d.Button.Looks.FILLED,
              onClick: () => (0, A.default)({
                skuId: t.skuId,
                analyticsLocations: p,
                onClose: e => e ? m() : (0, Q.NOOP)()
              }),
              children: (null == en ? void 0 : en.type) === r.CollectiblesItemType.PROFILE_EFFECT ? $.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : $.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : er($.default.Messages.UNLOCK_WITH_NITRO), !U && !ei && (0, a.jsx)(H.default, {
              product: t,
              onSuccess: m
            })]
          })
        }), (0, a.jsx)(d.Text, {
          className: n()([ee.disclaimer, y]),
          variant: "text-xxs/normal",
          children: null != h ? null : U ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == en ? void 0 : en.type) === r.CollectiblesItemType.PROFILE_EFFECT ? $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : $.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  en = e => {
    let {
      product: t,
      user: l
    } = e, s = j.default.canUsePremiumProfileCustomization(l), i = (0, o.useStateFromStoresObject)([N.default], () => N.default.getAllPending()), n = (0, O.default)(l.id), d = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [c] = t.items;
    return (0, a.jsxs)("div", {
      className: (null == c ? void 0 : c.type) === r.CollectiblesItemType.AVATAR_DECORATION ? ee.previewsContainerInner : ee.profileEffectPreviewsContainerInner,
      children: [(0, a.jsx)(x.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: s,
        onAvatarChange: Q.NOOP,
        onBannerChange: Q.NOOP,
        bodyClassName: ee.profileCustomizationBody,
        pendingAvatarDecoration: (null == c ? void 0 : c.type) === r.CollectiblesItemType.AVATAR_DECORATION ? c : void 0,
        pendingProfileEffectId: (null == c ? void 0 : c.type) === r.CollectiblesItemType.PROFILE_EFFECT ? c.id : void 0,
        forProfileEffectModal: (null == c ? void 0 : c.type) === r.CollectiblesItemType.PROFILE_EFFECT,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: (null == c ? void 0 : c.type) === r.CollectiblesItemType.AVATAR_DECORATION || d,
        hideBioSection: (null == c ? void 0 : c.type) === r.CollectiblesItemType.AVATAR_DECORATION,
        hideMemberStatusSection: (null == c ? void 0 : c.type) === r.CollectiblesItemType.AVATAR_DECORATION,
        useLargeBanner: !0
      }), (null == c ? void 0 : c.type) === r.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(eo, {
        user: l
      })]
    })
  },
  er = e => {
    let {
      author: t
    } = e;
    return (0, T.createMessageRecord)({
      ...(0, p.default)({
        author: t,
        channelId: "1337",
        content: $.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: q.MessageStates.SENT,
      id: "0"
    })
  },
  eo = e => {
    let {
      user: t
    } = e, l = er({
      author: t
    });
    return (0, a.jsx)(d.FocusBlock, {
      children: (0, a.jsxs)(d.Card, {
        className: ee.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, a.jsx)(h.default, {
          className: ee.mockMessage,
          author: (0, f.getMessageAuthor)(l),
          message: l
        }, l.id), (0, a.jsxs)("div", {
          className: ee.mockInput,
          children: [(0, a.jsx)(y.default, {
            className: ee.mockInputButton,
            width: 24,
            height: 24
          }), (0, a.jsx)(S.default, {
            className: ee.mockInputButton,
            width: 24,
            height: 24
          })]
        })]
      })
    })
  };
t.default = e => {
  var t, l;
  let {
    transitionState: i,
    onClose: n,
    product: c,
    category: u,
    returnRef: I,
    analyticsSource: E,
    analyticsLocations: T
  } = e, p = (0, o.useStateFromStores)([R.default], () => R.default.getCurrentUser()), {
    analyticsLocations: f
  } = (0, C.default)([...T, m.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, U.useProductDetailsLinkableRoute)(c);
  let [h] = c.items;
  return (s.useEffect(() => {
    let e = (null == h ? void 0 : h.type) === r.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    return P.default.track(q.AnalyticEvents.OPEN_MODAL, {
      type: q.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: E,
      location_stack: f,
      sku_id: c.skuId,
      product_type: e
    }), c.items.map(M.productDetailsOpened), () => {
      c.items.map(M.productDetailsClosed)
    }
  }, [E, f, c.skuId, c.items, null == h ? void 0 : h.type]), null == p) ? null : (0, a.jsx)(C.AnalyticsLocationProvider, {
    value: f,
    children: (0, a.jsx)(d.ModalRoot, {
      hideShadow: !0,
      className: ee.modalRoot,
      returnRef: I,
      transitionState: i,
      size: d.ModalSize.DYNAMIC,
      children: (0, a.jsxs)(d.ModalContent, {
        className: ee.modalContent,
        children: [(0, a.jsx)(ei, {
          user: p,
          product: c,
          category: u,
          onClose: n
        }), (0, a.jsxs)("div", {
          className: (null == h ? void 0 : h.type) === r.CollectiblesItemType.AVATAR_DECORATION ? ee.collectiblePreviewsContainerWithChat : ee.collectiblePreviewsContainerNoChat,
          children: [(0, a.jsx)(F.default, {
            assetUrlOverride: null === (t = X.categoryBannerOverrides[u.skuId]) || void 0 === t ? void 0 : t.assetUrlOverride,
            asset: c.banner,
            addGradient: null === (l = X.categoryBannerOverrides[u.skuId]) || void 0 === l ? void 0 : l.addGradient,
            size: (0, Z.getAssetSizeByHeight)(540),
            className: ee.categoryBanner
          }), (0, a.jsx)(en, {
            user: p,
            product: c
          })]
        }), (0, a.jsx)(d.ModalCloseButton, {
          onClick: n,
          className: ee.modalCloseButton,
          withCircleBackground: !0
        })]
      })
    })
  })
}