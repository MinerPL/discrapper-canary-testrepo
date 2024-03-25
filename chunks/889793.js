"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  l = n("265586"),
  s = n("446674"),
  o = n("77078"),
  u = n("812204"),
  a = n("685665"),
  c = n("21526"),
  d = n("491232"),
  f = n("984002"),
  h = n("161009"),
  v = n("635956"),
  m = n("906932"),
  C = n("697218"),
  E = n("599110"),
  g = n("719923"),
  p = n("717262"),
  S = n("598854"),
  _ = n("49111"),
  I = n("646718"),
  P = n("782340"),
  A = n("810473");

function T(e) {
  let {
    user: t,
    product: n,
    purchase: l,
    onApply: s,
    onClose: a,
    disableApplyButton: f,
    canUseCollectibles: h,
    selectedProfileEffectId: m,
    selectedProfileEffectItem: C,
    analyticsLocations: E
  } = e, p = r.useCallback(() => {
    a(), (0, c.openCollectiblesShop)({
      analyticsLocations: E,
      analyticsSource: u.default.EDIT_PROFILE_EFFECT_MODAL,
      initialProductSkuId: null != C ? C.skuId : void 0
    })
  }, [a, E, C]);
  return (0, i.jsx)(o.ModalFooter, {
    className: A.modalFooter,
    children: (0, i.jsxs)("div", {
      className: A.buttonsRight,
      children: [(0, i.jsx)(o.Button, {
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        onClick: a,
        children: P.default.Messages.CANCEL
      }), (() => {
        let e = null != l && (!(0, d.isPremiumCollectiblesPurchase)(l) || h);
        if (e || null === m) return (0, i.jsx)(o.Button, {
          onClick: s,
          disabled: f,
          children: P.default.Messages.AVATAR_DECORATION_MODAL_APPLY
        });
        let r = h || !(0, d.isPremiumCollectiblesProduct)(n);
        return r ? (0, i.jsx)(o.Button, {
          className: A.modalFooterShopButton,
          onClick: p,
          children: P.default.Messages.COLLECTIBLES_CTA_GO_TO_SHOP
        }) : (0, i.jsx)(v.default, {
          subscriptionTier: I.PremiumSubscriptionSKUs.TIER_2,
          buttonText: g.default.isPremium(t) ? P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPGRADE_UPSELL : P.default.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL
        })
      })()]
    })
  })
}

function N(e) {
  let {
    user: t,
    guild: n,
    categories: l,
    purchases: s,
    onClose: u,
    initialSelectedProfileEffectId: a,
    currentSavedEffectId: c,
    analyticsLocations: h
  } = e, {
    pendingProfileEffectId: v
  } = (0, m.useGlobalOrGuildIdentityPendingProfileEffect)(n), [C, E] = r.useMemo(() => {
    let e = (0, d.groupProfileEffects)(l, s);
    return [e.purchased, e.shopPreviews]
  }, [l, s]), [_, I] = r.useState(() => null != a ? a : void 0 !== v ? v : null == c ? null : null != c ? c : null), [N, x] = r.useMemo(() => {
    var e;
    let t = C.find(e => (null == e ? void 0 : e.id) === _),
      n = null != t || null === _,
      i = null !== (e = null != t ? t : E.find(e => (null == e ? void 0 : e.id) === _)) && void 0 !== e ? e : null;
    return [i, n]
  }, [_, C, E]), {
    product: M,
    purchase: R
  } = (0, f.default)(null == N ? void 0 : N.skuId), b = r.useRef(null), y = g.default.canUseCollectibles(t), L = _ === (void 0 === v ? null != c ? c : null : v), w = r.useCallback(e => {
    I(e)
  }, [I]);
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(o.ModalHeader, {
      separator: !1,
      className: A.modalHeader,
      children: [(0, i.jsx)(o.Heading, {
        variant: "heading-lg/semibold",
        children: P.default.Messages.PROFILE_EFFECT_MODAL_HEADER
      }), (0, i.jsx)(o.ModalCloseButton, {
        className: A.modalCloseButton,
        onClick: u
      })]
    }), (0, i.jsxs)(o.ModalContent, {
      className: A.modalContent,
      children: [(0, i.jsx)(S.default, {
        user: t,
        guild: n,
        pendingProfileEffect: _,
        selectedProfileEffectRef: b,
        onSelect: w,
        onClose: u
      }), (0, i.jsx)(p.default, {
        user: t,
        canApplySelectedChange: x,
        pendingProfileEffectRecord: N,
        product: M,
        purchase: R,
        guild: n
      })]
    }), (0, i.jsx)(T, {
      user: t,
      onApply: () => {
        (0, m.setNewPendingProfileEffectId)(_, c, n), u()
      },
      onClose: u,
      product: M,
      purchase: R,
      canUseCollectibles: y,
      selectedProfileEffectId: _,
      selectedProfileEffectItem: N,
      disableApplyButton: L,
      analyticsLocations: h
    })]
  })
}

function x(e) {
  let {
    transitionState: t,
    analyticsLocations: n,
    initialSelectedEffectId: d,
    guild: f,
    onClose: v
  } = e, {
    isFetching: g,
    categories: p,
    purchases: S
  } = (0, h.default)(), I = (0, s.useStateFromStores)([C.default], () => C.default.getCurrentUser()), {
    analyticsLocations: P
  } = (0, a.default)(n, u.default.EDIT_PROFILE_EFFECT_MODAL), T = (0, m.useGlobalOrGuildIdentityProfileEffect)(I, f);
  return r.useEffect(() => {
    E.default.track(_.AnalyticEvents.OPEN_MODAL, {
      type: _.AnalyticsSections.PROFILE_EFFECT_CUSTOMIZATION,
      location_stack: P
    })
  }, [P]), r.useEffect(() => () => {
    (0, c.setCollectiblesCategoryItemsViewed)({
      categories: [...p.values()],
      itemTypes: [l.CollectiblesItemType.PROFILE_EFFECT]
    })
  }, [p]), (0, i.jsx)(a.AnalyticsLocationProvider, {
    value: P,
    children: (0, i.jsx)(o.ModalRoot, {
      transitionState: t,
      size: o.ModalSize.DYNAMIC,
      className: A.modal,
      children: g ? (0, i.jsx)(o.Spinner, {
        className: A.spinner,
        type: o.Spinner.Type.SPINNING_CIRCLE
      }) : (0, i.jsx)(N, {
        user: I,
        guild: f,
        categories: p,
        purchases: S,
        initialSelectedProfileEffectId: d,
        currentSavedEffectId: T,
        onClose: v,
        analyticsLocations: P
      })
    })
  })
}