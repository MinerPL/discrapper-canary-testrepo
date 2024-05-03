"use strict";
l.r(t), l("47120"), l("627341");
var a = l("735250"),
  s = l("470079"),
  i = l("120356"),
  n = l.n(i),
  r = l("278074"),
  o = l("979554"),
  c = l("399606"),
  d = l("780384"),
  u = l("481060"),
  m = l("37234"),
  C = l("809206"),
  I = l("410030"),
  E = l("100527"),
  p = l("906732"),
  T = l("1585"),
  f = l("125988"),
  h = l("786761"),
  A = l("3148"),
  x = l("739566"),
  L = l("753206"),
  v = l("333867"),
  _ = l("963249"),
  g = l("197115"),
  O = l("300284"),
  N = l("962746"),
  R = l("731896"),
  S = l("642619"),
  b = l("318661"),
  P = l("25990"),
  y = l("594174"),
  j = l("642113"),
  M = l("466111"),
  D = l("151785"),
  F = l("626135"),
  B = l("74538"),
  k = l("335131"),
  U = l("1870"),
  w = l("884697"),
  V = l("141011"),
  z = l("426171"),
  H = l("224068"),
  W = l("813083"),
  G = l("823941"),
  Y = l("680942"),
  Z = l("558060"),
  K = l("409116"),
  X = l("237031"),
  q = l("372654"),
  J = l("832149"),
  Q = l("215023"),
  $ = l("981631"),
  ee = l("474936"),
  et = l("231338"),
  el = l("689938"),
  ea = l("512512"),
  es = l("689262"),
  ei = l("660097");
let en = u.AvatarSizes.SIZE_152,
  er = (0, T.getDecorationSizeForAvatarSize)(en),
  eo = e => {
    let {
      text: t
    } = e, {
      analyticsLocations: l
    } = (0, p.default)(), i = s.useRef(null);
    return (0, a.jsx)(u.Clickable, {
      className: ea.subscribeNow,
      innerRef: i,
      onClick: () => {
        (0, _.default)({
          subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
          analyticsLocations: l,
          returnRef: i
        })
      },
      children: t
    })
  },
  ec = e => {
    let {
      product: t,
      user: l,
      category: i,
      onClose: E,
      returnRef: h
    } = e, {
      analyticsLocations: A
    } = (0, p.default)(), x = B.default.canUseCollectibles(l), [L, _] = (0, c.useStateFromStoresArray)([U.default], () => [U.default.getPurchase(t.skuId), U.default.isClaiming === t.skuId]), N = (0, O.default)({
      analyticsLocations: A
    }), b = (0, I.default)(), P = (0, d.isThemeDark)(b), y = (0, w.isPremiumCollectiblesProduct)(t), j = (0, w.extractPriceByPurchaseTypes)(t, $.PriceSetAssignmentPurchaseTypes.DEFAULT), D = (null == j ? void 0 : j.amount) === 0, [F] = t.items;
    s.useEffect(() => {
      if ((null == F ? void 0 : F.type) === o.CollectiblesItemType.AVATAR_DECORATION) return (0, C.setPendingAvatarDecoration)(F), () => (0, C.setPendingAvatarDecoration)(void 0)
    }, [F]);
    let V = e => (0, a.jsx)(g.default, {
        subscriptionTier: ee.PremiumSubscriptionSKUs.TIER_2,
        fullWidth: !0,
        buttonText: e,
        onClick: X.closeCollectiblesShopProductDetailsModal,
        onSubscribeModalClose: () => {
          (0, X.openCollectiblesShopProductDetailsModal)({
            product: t,
            category: i,
            returnRef: h,
            analyticsLocations: A
          })
        }
      }),
      {
        avatarDecorationSrc: z,
        eventHandlers: G
      } = (0, f.default)({
        user: l,
        avatarDecorationOverride: (null == F ? void 0 : F.type) === o.CollectiblesItemType.AVATAR_DECORATION ? F : null,
        size: er
      }),
      q = (0, R.useProfileEffectPreset)(t.items[0].id);
    return (0, a.jsxs)("div", {
      className: ea.collectibleInfoContainer,
      children: [(0, a.jsx)("div", {
        className: ea.titleContainer,
        children: (0, a.jsx)(W.default, {
          category: i,
          display: "modal"
        })
      }), (0, r.match)(F.type).with(o.CollectiblesItemType.AVATAR_DECORATION, () => (0, a.jsx)("div", {
        className: ea.avatarPreviewContainer,
        children: (0, a.jsx)(u.Avatar, {
          ...G,
          "aria-label": el.default.Messages.USER_SETTINGS_AVATAR,
          size: en,
          avatarDecoration: z,
          src: ei
        })
      })).with(o.CollectiblesItemType.PROFILE_EFFECT, () => (0, a.jsxs)("div", {
        className: ea.pfxPreviewContainer,
        children: [(0, a.jsx)("img", {
          src: es,
          alt: "",
          className: ea.sampleProfileAsset
        }), null != q && (0, a.jsx)("img", {
          src: q.config.thumbnailPreviewSrc,
          alt: "profile_effect_preview",
          className: ea.staticPfxPreview
        })]
      })).otherwise(() => null), (0, a.jsxs)("div", {
        children: [(0, a.jsxs)("div", {
          className: ea.description,
          children: [(0, a.jsx)(H.default, {
            item: F,
            isDarkText: !P
          }), (0, a.jsx)(u.Heading, {
            variant: "heading-xl/extrabold",
            className: ea.headingWithItemTypePill,
            children: t.name
          }), (0, a.jsx)(u.Text, {
            variant: "text-sm/normal",
            children: t.summary
          }), (() => {
            if (null != L) return (0, a.jsx)(u.Text, {
              variant: "text-md/semibold",
              className: ea.priceTag,
              children: el.default.Messages.COLLECTIBLES_ALREADY_OWNED
            });
            if (y) return (0, a.jsx)(u.Text, {
              variant: "text-md/semibold",
              className: ea.priceTag,
              children: el.default.Messages.COLLECTIBLES_INCLUDED_WITH_PREMIUM
            });
            if (x) return (0, a.jsx)(Z.default, {
              product: t,
              className: ea.priceTag,
              alwaysWhiteText: P
            });
            if (null == j) return null;
            let e = (0, w.extractPriceByPurchaseTypes)(t, $.PriceSetAssignmentPurchaseTypes.PREMIUM_TIER_2);
            return (0, a.jsxs)("div", {
              className: ea.priceTagContainer,
              children: [(0, a.jsx)(K.default, {
                price: j,
                alwaysWhiteText: P
              }), null != e && !D && (0, a.jsx)(K.default, {
                price: e,
                variant: "text-xs/medium",
                alwaysWhiteText: P,
                className: ea.premiumPriceTag,
                renderPrice: e => el.default.Messages.COLLECTIBLES_NON_PREMIUM_PRICE_SUBSCRIBE_NOW.format({
                  price: e,
                  subscribeNowHook: e => (0, a.jsx)(eo, {
                    text: e
                  })
                }),
                icon: (0, a.jsx)(u.Tooltip, {
                  text: el.default.Messages.COLLECTIBLES_PREMIUM_DISCOUNT_TOOLTIP_TEXT,
                  "aria-label": el.default.Messages.COLLECTIBLES_NITRO_EXCLUSIVE,
                  children: e => {
                    let {
                      ...t
                    } = e;
                    return (0, a.jsx)(M.default, {
                      ...t,
                      className: ea.premiumPriceTagIcon,
                      color: P ? "white" : "black"
                    })
                  }
                })
              })]
            })
          })()]
        }), (0, a.jsx)("div", {
          className: ea.buttonsContainer,
          children: (0, a.jsxs)("div", {
            className: ea.primaryButtons,
            children: [!y || x || D ? null != L ? (0, a.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: () => {
                if (E(), (0, m.popLayer)(), N(), (null == F ? void 0 : F.type) === o.CollectiblesItemType.AVATAR_DECORATION) {
                  (0, T.openAvatarDecorationModal)({
                    initialSelectedDecoration: F,
                    analyticsLocations: A
                  });
                  return
                }(null == F ? void 0 : F.type) === o.CollectiblesItemType.PROFILE_EFFECT && (0, S.openProfileEffectModal)({
                  initialSelectedEffectId: F.id,
                  analyticsLocations: A
                })
              },
              children: el.default.Messages.COLLECTIBLES_USE_NOW
            }) : y ? (0, a.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              submitting: _,
              submittingStartedLabel: el.default.Messages.COLLECTIBLES_COLLECTING,
              submittingFinishedLabel: el.default.Messages.COLLECTIBLES_COLLECTING_FINISHED,
              onClick: async () => {
                await (0, k.claimPremiumCollectiblesProduct)(t.skuId), E(), (0, J.default)({
                  product: t,
                  analyticsLocations: A
                })
              },
              children: el.default.Messages.COLLECTIBLES_ADD_TO_YOUR_COLLECTION
            }) : (0, a.jsx)(u.Button, {
              className: ea.button,
              look: u.Button.Looks.FILLED,
              onClick: () => (0, v.default)({
                skuId: t.skuId,
                analyticsLocations: A,
                onClose: e => e ? E() : (0, et.NOOP)()
              }),
              children: (null == F ? void 0 : F.type) === o.CollectiblesItemType.PROFILE_EFFECT ? el.default.Messages.COLLECTIBLES_BUY_PROFILE_EFFECT : el.default.Messages.COLLECTIBLES_BUY_DECORATION
            }) : V(el.default.Messages.UNLOCK_WITH_NITRO), !y && !D && (0, a.jsx)(Y.default, {
              product: t,
              onSuccess: E,
              disableCustomColor: !0
            })]
          })
        }), (0, a.jsx)(u.Text, {
          className: n()(ea.disclaimer, !P && ea.disclaimerLight),
          variant: "text-xxs/normal",
          children: null != L ? null : y ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_INCLUDED_WITH_PREMIUM_DISCLAIMER : (null == F ? void 0 : F.type) === o.CollectiblesItemType.PROFILE_EFFECT ? el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PROFILE_EFFECT_PREMIUM_PURCHASE_DISCLAIMER : el.default.Messages.COLLECTIBLES_DETAILS_MODAL_PREMIUM_PURCHASE_DISCLAIMER
        })]
      })]
    })
  },
  ed = e => {
    let {
      product: t,
      user: l
    } = e, s = B.default.canUsePremiumProfileCustomization(l), i = (0, c.useStateFromStoresObject)([P.default], () => P.default.getAllPending()), n = (0, b.useDisplayProfileWithFetchEffect)(l.id), r = !!(null == n ? void 0 : n.getPreviewBio(i.pendingBio).value), [d] = t.items;
    return (0, a.jsxs)("div", {
      className: (null == d ? void 0 : d.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea.previewsContainerInner : ea.profileEffectPreviewsContainerInner,
      children: [(0, a.jsx)(N.default, {
        ...i,
        user: l,
        canUsePremiumCustomization: s,
        onAvatarChange: et.NOOP,
        onBannerChange: et.NOOP,
        bodyClassName: ea.profileCustomizationBody,
        pendingAvatarDecoration: (null == d ? void 0 : d.type) === o.CollectiblesItemType.AVATAR_DECORATION ? d : void 0,
        pendingProfileEffectId: (null == d ? void 0 : d.type) === o.CollectiblesItemType.PROFILE_EFFECT ? d.id : void 0,
        forProfileEffectModal: (null == d ? void 0 : d.type) === o.CollectiblesItemType.PROFILE_EFFECT,
        disabledInputs: !0,
        hideExampleButton: !0,
        hideFakeActivity: (null == d ? void 0 : d.type) === o.CollectiblesItemType.AVATAR_DECORATION || r,
        hideBioSection: (null == d ? void 0 : d.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        hideMemberStatusSection: (null == d ? void 0 : d.type) === o.CollectiblesItemType.AVATAR_DECORATION,
        hideRecentGames: !0,
        useLargeBanner: !0
      }), (null == d ? void 0 : d.type) === o.CollectiblesItemType.AVATAR_DECORATION && (0, a.jsx)(em, {
        user: l
      })]
    })
  },
  eu = e => {
    let {
      author: t
    } = e;
    return (0, h.createMessageRecord)({
      ...(0, A.default)({
        author: t,
        channelId: "1337",
        content: el.default.Messages.COLLECTIBLES_CHAT_PREVIEW_TEXT
      }),
      state: $.MessageStates.SENT,
      id: "0"
    })
  },
  em = e => {
    let {
      user: t
    } = e, l = eu({
      author: t
    });
    return (0, a.jsx)(u.FocusBlock, {
      children: (0, a.jsxs)(u.Card, {
        className: ea.chatPreview,
        outline: !0,
        "aria-hidden": !0,
        children: [(0, a.jsx)(L.default, {
          className: ea.mockMessage,
          author: (0, x.getMessageAuthor)(l),
          message: l
        }, l.id), (0, a.jsxs)("div", {
          className: ea.mockInput,
          children: [(0, a.jsx)(D.default, {
            className: ea.mockInputButton,
            width: 24,
            height: 24
          }), (0, a.jsx)(j.default, {
            className: ea.mockInputButton,
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
    product: r,
    category: d,
    returnRef: m,
    analyticsSource: C,
    analyticsLocations: I
  } = e, T = (0, c.useStateFromStores)([y.default], () => y.default.getCurrentUser()), {
    analyticsLocations: f
  } = (0, p.default)([...I, E.default.COLLECTIBLES_SHOP_DETAILS_MODAL]);
  (0, z.useProductDetailsLinkableRoute)(r);
  let [h] = r.items;
  return (s.useEffect(() => {
    let e = (null == h ? void 0 : h.type) === o.CollectiblesItemType.AVATAR_DECORATION ? "avatar decoration" : "profile effect";
    F.default.track($.AnalyticEvents.OPEN_MODAL, {
      type: $.AnalyticsSections.COLLECTIBLES_SHOP_DETAILS_MODAL,
      source: C,
      location_stack: f,
      sku_id: r.skuId,
      product_type: e
    }), r.items.map(k.productDetailsOpened)
  }, [C, f, r.skuId, r.items, null == h ? void 0 : h.type]), null == T) ? null : (0, a.jsx)(p.AnalyticsLocationProvider, {
    value: f,
    children: (0, a.jsx)(u.ModalRoot, {
      hideShadow: !0,
      className: ea.modalRoot,
      returnRef: m,
      transitionState: i,
      size: u.ModalSize.DYNAMIC,
      children: (0, a.jsxs)(u.ModalContent, {
        className: ea.modalContent,
        children: [(0, a.jsx)(ec, {
          user: T,
          product: r,
          category: d,
          onClose: n
        }), (0, a.jsxs)("div", {
          className: (null == h ? void 0 : h.type) === o.CollectiblesItemType.AVATAR_DECORATION ? ea.collectiblePreviewsContainerWithChat : ea.collectiblePreviewsContainerNoChat,
          children: [(0, a.jsx)(V.default, {
            asset: null !== (l = d.pdpBg) && void 0 !== l ? l : r.banner,
            addGradient: null === (t = Q.categoryBannerOverrides[d.skuId]) || void 0 === t ? void 0 : t.addGradient,
            size: (0, q.getAssetSizeByHeight)(540),
            className: ea.categoryBanner,
            blur: !0
          }), (0, a.jsx)(ed, {
            user: T,
            product: r
          }), (0, a.jsxs)("div", {
            className: ea.profilePreviewHeader,
            children: [(0, a.jsx)("div", {
              className: ea.titleImageContainer,
              children: (0, a.jsx)("img", {
                className: ea.titleImage,
                src: (0, w.getCollectiblesAssetURL)(d.logo, {
                  size: G.LOGO_SIZE
                }),
                alt: d.name
              })
            }), (0, a.jsx)(u.ModalCloseButton, {
              onClick: n,
              className: ea.modalCloseButton,
              withCircleBackground: !0
            })]
          })]
        })]
      })
    })
  })
}