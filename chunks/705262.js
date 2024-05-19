"use strict";
n.r(t), n.d(t, {
  ThemeSelectionGroupType: function() {
    return i
  },
  trackClientThemeUpdated: function() {
    return j
  }
}), n("627341"), n("47120");
var i, r, a = n("735250"),
  s = n("470079"),
  o = n("120356"),
  l = n.n(o),
  u = n("278074"),
  d = n("442837"),
  _ = n("524437"),
  c = n("481060"),
  E = n("153867"),
  I = n("607070"),
  T = n("100527"),
  f = n("906732"),
  S = n("540059"),
  h = n("605236"),
  A = n("837741"),
  m = n("98278"),
  N = n("639119"),
  p = n("165583"),
  O = n("587446"),
  C = n("781391"),
  R = n("210887"),
  g = n("740492"),
  L = n("301822"),
  v = n("153124"),
  D = n("626135"),
  M = n("238302"),
  y = n("514361"),
  P = n("110577"),
  U = n("469115"),
  b = n("981631"),
  G = n("921944"),
  w = n("474936"),
  k = n("874893"),
  B = n("526761"),
  V = n("231338"),
  x = n("689938"),
  F = n("737679");
(r = i || (i = {})).EDITOR = "EDITOR", r.SETTINGS = "SETTINGS";
let H = Object.freeze({
    EDITOR: B.UserSettingsDelay.SLOW_USER_ACTION,
    SETTINGS: B.UserSettingsDelay.INFREQUENT_USER_ACTION
  }),
  Y = s.createContext({}),
  j = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: i
    } = e;
    D.default.track(b.AnalyticEvents.CLIENT_THEME_UPDATED, {
      feature_name: w.AnalyticsPremiumFeatureNames.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: i
    })
  },
  W = e => {
    let {
      type: t,
      isPreview: n,
      isCoachmark: i
    } = e, r = (0, u.match)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: !0,
      isPreview: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => x.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
    return (0, a.jsxs)("div", {
      className: F.title,
      children: [(0, a.jsx)(c.Heading, {
        "aria-label": r,
        variant: "text-md/medium",
        children: r
      }), (0, a.jsx)(O.default, {
        className: F.premiumIcon
      })]
    })
  },
  K = e => {
    var t, n;
    let {
      type: i,
      isPreview: r,
      isCoachmark: s
    } = e;
    if ((null === (n = (0, N.usePremiumTrialOffer)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.PremiumSubscriptionSKUs.TIER_2 && r) return null;
    let o = (0, u.match)({
      type: i,
      isPreview: r,
      isCoachmark: s
    }).with({
      type: "EDITOR",
      isPreview: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
      onPremiumClick: m.navigateToPremiumMarketingPage
    })).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
      type: "EDITOR",
      isPreview: !1
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
      isPreview: !0
    }, () => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
      onPremiumClick: m.navigateToPremiumMarketingPage
    })).otherwise(() => x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
    return (0, a.jsx)(c.Heading, {
      variant: "text-sm/normal",
      children: o
    })
  },
  z = e => {
    let {
      type: t,
      children: n
    } = e, i = (0, v.useUID)(), r = (0, c.useRadioGroup)({
      orientation: "horizontal",
      labelledBy: i
    }), o = s.useMemo(() => ({
      type: t,
      delay: H[t]
    }), [t]);
    return (0, a.jsx)(Y.Provider, {
      value: o,
      children: (0, a.jsx)("div", {
        ...r,
        className: F.__invalid_container,
        children: n
      })
    })
  };
z.Basic = e => {
  let {
    className: t
  } = e, {
    delay: n
  } = s.useContext(Y), {
    analyticsLocations: i
  } = (0, f.default)(T.default.CLIENT_THEMES_THEME_SELECTOR), [r, o, u] = (0, d.useStateFromStoresArray)([R.default, g.default, y.default], () => [R.default.theme, null == y.default.gradientPreset, g.default.useSystemTheme === k.SystemThemeState.ON]), _ = e => {
    (0, M.resetBackgroundGradientPreset)(), j({
      isPersisted: !0,
      analyticsLocations: i,
      themeName: "default ".concat(e)
    }), (0, E.saveClientTheme)({
      theme: e
    }, n)
  }, c = (0, S.useIsDesktopVisualRefreshEnabled)("appearance_settings");
  return (0, a.jsxs)("section", {
    className: l()(F.presets, t),
    children: [(0, a.jsx)(P.DefaultThemeSelection, {
      theme: V.ThemeTypes.LIGHT,
      isSelected: o && !u && r === V.ThemeTypes.LIGHT,
      onSelect: () => _(V.ThemeTypes.LIGHT)
    }), (0, a.jsx)(P.DefaultThemeSelection, {
      theme: V.ThemeTypes.DARK,
      isSelected: o && !u && r === V.ThemeTypes.DARK,
      onSelect: () => _(V.ThemeTypes.DARK)
    }), c && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(P.DefaultThemeSelection, {
        theme: V.ThemeTypes.DARKER,
        isSelected: o && !u && r === V.ThemeTypes.DARKER,
        onSelect: () => _(V.ThemeTypes.DARKER)
      }), (0, a.jsx)(P.DefaultThemeSelection, {
        theme: V.ThemeTypes.MIDNIGHT,
        isSelected: o && !u && r === V.ThemeTypes.MIDNIGHT,
        onSelect: () => _(V.ThemeTypes.MIDNIGHT)
      })]
    }), (0, a.jsx)(P.DefaultThemeSelection, {
      theme: "system",
      isSelected: o && u,
      onSelect: () => _("system")
    })]
  })
}, z.Gradient = e => {
  var t, i;
  let {
    className: r,
    renderCTAButtons: o,
    disabled: l = !1
  } = e, {
    type: u,
    delay: c
  } = s.useContext(Y), {
    analyticsLocations: S
  } = (0, f.default)(T.default.CLIENT_THEMES_THEME_SELECTOR), [O, R, g] = (0, d.useStateFromStoresArray)([y.default], () => {
    var e;
    return [y.default.isPreview, y.default.isCoachmark, null === (e = y.default.gradientPreset) || void 0 === e ? void 0 : e.id]
  }), [v, D] = s.useState(!1), [b, B] = s.useState(-1), V = (0, d.useStateFromStores)([I.default], () => I.default.useReducedMotion), {
    enabled: H
  } = (0, A.useBrandRefreshPerksExperiment)({
    location: "GradientSelectors"
  }), z = (null === (i = (0, N.usePremiumTrialOffer)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === w.PremiumSubscriptionSKUs.TIER_2, Z = s.useMemo(() => e => {
    let t = U.CLIENT_THEME_DC_MAP.get(e.id),
      n = null != t && !(0, h.isDismissibleContentDismissed)(t);
    return l && n && setTimeout(() => (0, h.markDismissibleContentAsDismissed)(t, {
      dismissAction: G.ContentDismissActionType.AUTO_DISMISS
    }), 5e3), n
  }, [l]);
  s.useEffect(() => {
    (b === U.BACKGROUND_GRADIENT_PRESETS.length - (H ? 2 : 3) && "EDITOR" === u || g === _.BackgroundGradientPresetId.EASTER_EGG) && D(!0)
  }, [b, u, g, H]);
  let X = (e, t) => {
    (0, M.updateBackgroundGradientPreset)(e.id), j({
      isPersisted: !O,
      analyticsLocations: S,
      themeName: _.BackgroundGradientPresetId[e.id]
    });
    let n = U.CLIENT_THEME_DC_MAP.get(e.id);
    if (null != n && !(0, h.isDismissibleContentDismissed)(n) && (0, h.markDismissibleContentAsDismissed)(n, {
        dismissAction: G.ContentDismissActionType.TAKE_ACTION
      }), O) {
      (0, C.setUseSystemTheme)(k.SystemThemeState.OFF);
      return
    }
    if ((0, E.saveClientTheme)({
        backgroundGradientPresetId: e.id,
        theme: e.theme
      }, c), null != t) {
      if (v && D(!1), t <= b || 0 === t) {
        B(0);
        return
      }
      B(e => e + 1)
    }
  };
  return (0, a.jsxs)("section", {
    className: r,
    children: ["EDITOR" === u && O && z ? (0, a.jsx)(p.default, {
      type: w.PremiumUpsellTypes.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: w.PremiumSubscriptionSKUs.TIER_2,
      children: x.default.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
        onPremiumClick: m.navigateToPremiumMarketingPage
      })
    }) : (0, a.jsxs)("div", {
      className: F.header,
      children: [(0, a.jsxs)("div", {
        className: F.headings,
        children: [(0, a.jsx)(W, {
          type: u,
          isPreview: O,
          isCoachmark: R
        }), (0, a.jsx)(K, {
          type: u,
          isPreview: O,
          isCoachmark: R
        })]
      }), null == o ? void 0 : o()]
    }), (0, a.jsxs)("div", {
      className: F.presets,
      children: [U.BACKGROUND_GRADIENT_PRESETS.filter(e => {
        let {
          id: t
        } = e;
        return t !== _.BackgroundGradientPresetId.EASTER_EGG && (t !== _.BackgroundGradientPresetId.BLURPLE_TWILIGHT || H)
      }).map((e, t) => (0, a.jsx)(P.GradientThemeSelection, {
        preset: e,
        isSelected: g === e.id,
        onSelect: () => X(e, t),
        disabled: l,
        tabIndex: 0 !== t || l ? void 0 : 0,
        showBadge: Z(e)
      }, e.id)), (() => {
        if (!v) return null;
        let e = U.BACKGROUND_GRADIENT_PRESETS_MAP[_.BackgroundGradientPresetId.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, "801048", 19));
          return e
        }
        return (0, a.jsxs)("div", {
          className: F.easterEggSelection,
          children: [(0, a.jsx)(P.GradientThemeSelection, {
            preset: e,
            isSelected: g === _.BackgroundGradientPresetId.EASTER_EGG,
            onSelect: () => X(e)
          }), (0, a.jsx)(L.default, {
            importData: t,
            shouldAnimate: !V,
            className: F.sparkles
          })]
        })
      })()]
    })]
  })
}, t.default = z