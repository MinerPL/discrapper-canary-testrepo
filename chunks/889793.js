"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("222007");
var r = n("37983"),
  i = n("884691"),
  s = n("265586"),
  l = n("446674"),
  a = n("77078"),
  o = n("812204"),
  u = n("685665"),
  c = n("21526"),
  d = n("491232"),
  f = n("984002"),
  h = n("161009"),
  E = n("635956"),
  v = n("906932"),
  m = n("697218"),
  C = n("599110"),
  p = n("719923"),
  S = n("717262"),
  g = n("598854"),
  _ = n("49111"),
  I = n("646718"),
  T = n("782340"),
  N = n("810473");

function A(e) {
  let {
    user: t,
    product: n,
    purchase: s,
    onApply: l,
    onClose: u,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: v,
    selectedProfileEffectItem: m,
    analyticsLocations: C
  } = e, S = i.useCallback(() => {
    u(), (0, c.openCollectiblesShop)({
      analyticsLocations: C,
      analyticsSource: o.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != m ? m.skuId : void 0
    })
  }, [u, C, m]);
  return (0, r.jsx)(a.ModalFooter, {
    className: N.modalFooter,
    children: (0, r.jsxs)("div", {
      className: N.buttonsRight,
      children: [(0, r.jsx)(a.Button, {
        look: a.Button.Looks.LINK,
        color: a.Button.Colors.PRIMARY,
        onClick: u,
        children: T.default.Messages.CANCEL
      }), (() => {
        let e = null != s && (!(0, d.isPremiumCollectiblesPurchase)(s) || h);
        if (e || null === v) return (0, r.jsx)(a.Button, {
          onClick: l,
          disabled: f,
          children: T.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let i = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return i ? (0, r.jsx)(a.Button, {
          className: N.modalFooterShopButton,
          onClick: S,
          children: T.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, r.jsx)(E.default, {
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
          buttonText: p.default.isPremium(t) ? T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : T.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function x(e) {
  let {
    user: t,
    guild: n,
    categories: s,
    purchases: l,
    onClose: o,
    initialSelectedProfileEffectId: u,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, {
    pendingProfileEffectId: E
  } = (0, v.useGlobalOrGuildIdentityPendingProfileEffect)(n), [m, C] = i.useMemo(() => {
    let e = (0, d.groupProfileEffects)(s, l);
    return [e.purchased, e.shopPreviews]
  }, [s, l]), [_, I] = i.useState(() => null != u ? u : void 0 !== E ? E : null == c ? null : null != c ? c : null), [x, P] = i.useMemo(() => {
    var e;
    let t = m.find(e => (null == e ? void 0 : e.id) === _),
      n = null != t || null === _,
      r = null !== (e = null != t ? t : C.find(e => (null == e ? void 0 : e.id) === _)) && void 0 !== e ? e : null;
    return [r, n]
  }, [_, m, C]), {
    product: R,
    purchase: M
  } = (0, f.default)(null == x ? void 0 : x.skuId), L = i.useRef(null), y = p.default.canUseCollectibles(t), b = _ === (void 0 === E ? null != c ? c : null : E), w = i.useCallback(e => {
    I(e)
  }, [I]);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalHeader, {
      separator: !1,
      className: N.modalHeader,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: T.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, r.jsx)(a.ModalCloseButton, {
        className: N.modalCloseButton,
        onClick: o
      })]
    }), (0, r.jsxs)(a.ModalContent, {
      className: N.modalContent,
      children: [(0, r.jsx)(g.default, {
        user: t,
        guild: n,
        pendingProfileEffect: _,
        selectedProfileEffectRef: L,
        onSelect: w,
        onClose: o
      }), (0, r.jsx)(S.default, {
        user: t,
        canApplySelectedChange: P,
        pendingProfileEffectRecord: x,
        product: R,
        purchase: M,
        guild: n
      })]
    }), (0, r.jsx)(A, {
      user: t,
      onApply: () => {
        (0, v.setNewPendingProfileEffectId)(_, c, n), o()
      },
      onClose: o,
      product: R,
      purchase: M,
      canUseCollectibles: y,
      selectedProfileEffectId: _,
      selectedProfileEffectItem: x,
      disableApplyButton: b,
      analyticsLocations: h
    })]
  })
}

function P(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffectId: d,
    guild: f,
    onClose: E
  } = e, {
    isFetching: p,
    categories: S,
    purchases: g
  } = (0, h.default)(), I = (0, l.useStateFromStores)([m.default], () => m.default.getCurrentUser()), {
    AnalyticsLocationProvider: T,
    analyticsLocations: A
  } = (0, u.default)(n, o.default.EDIT_PROFILE_EFFECT_MODAL), P = (0, v.useGlobalOrGuildIdentityProfileEffect)(I, f);
  return i.useEffect(() => {
    C.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: _.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: A
    })
  }, [A]), i.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...S.values()],
      itemTypes: [s.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [S]), (0, r.jsx)(T, {
    children: (0, r.jsx)(a.ModalRoot, {
      transitionState: t,
      size: a.ModalSize.DYNAMIC,
      className: N.modal,
      children: p ? (0, r.jsx)(a.Spinner, {
        className: N.spinner,
        type: a.Spinner.Type.SPINNING_CIRCLE
      }) : (0, r.jsx)(x, {
        user: I,
        guild: f,
        categories: S,
        purchases: g,
        initialSelectedProfileEffectId: d,
        currentSavedEffectId: P,
        onClose: E,
        analyticsLocations: A
      })
    })
  })
}