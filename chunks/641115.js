"use strict";
l.r(t), l.d(t, {
  default: function() {
    return k
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("512722"),
  u = l.n(r),
  o = l("848246"),
  d = l("442837"),
  c = l("481060"),
  f = l("410575"),
  m = l("2052"),
  S = l("924557"),
  E = l("736871"),
  _ = l("351742"),
  C = l("386542"),
  g = l("193878"),
  N = l("594174"),
  h = l("746124"),
  A = l("285952"),
  I = l("466111"),
  x = l("74538"),
  p = l("451467"),
  T = l("200445"),
  R = l("122186"),
  v = l("37113"),
  L = l("981631"),
  M = l("474936"),
  O = l("689938"),
  j = l("809928"),
  D = l("335392"),
  P = l("949086");

function b(e) {
  let {
    analyticsLocation: t,
    onClose: n
  } = e;
  (0, c.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e("28479").then(l.bind(l, "78865"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: n,
      analyticsSource: t
    })
  })
}

function G() {
  return (0, a.jsxs)("div", {
    className: D.toolTipTextContainer,
    children: [(0, a.jsx)(I.default, {
      className: i()(D.premiumIcon)
    }), (0, a.jsx)(c.Text, {
      className: D.upsellText,
      variant: "text-sm/medium",
      children: O.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function U(e) {
  let t, l, {
      type: n,
      selected: s,
      needsPremium: r,
      needsDemo: u,
      analyticsLocation: o,
      useGradient: d = !1,
      onClick: f,
      onClose: m,
      setIsHovering: S
    } = e,
    {
      value: E,
      label: _
    } = n;
  return u ? (t = (0, a.jsx)("div", {
    className: D.textContainer,
    onMouseEnter: () => S(!0),
    onMouseLeave: () => S(!1),
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/bold",
      className: i()(D.selectorText, {
        [D.enhancedSelectorNitroText]: !s
      }),
      children: _
    })
  }), l = () => f(E)) : r ? (t = (0, a.jsx)(c.TooltipContainer, {
    tooltipClassName: D.tooltip,
    spacing: 6,
    "aria-label": O.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(G, {}),
    children: (0, a.jsx)("div", {
      className: D.textContainer,
      onMouseEnter: () => S(!0),
      onMouseLeave: () => S(!1),
      children: (0, a.jsx)(c.Text, {
        variant: "text-xs/bold",
        className: i()(D.selectorNitroText, {
          [D.enhancedSelectorNitroText]: d
        }),
        children: _
      })
    })
  }), l = () => b({
    analyticsLocation: o,
    onClose: m
  })) : (t = (0, a.jsx)("div", {
    className: D.textContainer,
    children: (0, a.jsx)(c.Text, {
      variant: "text-xs/normal",
      className: D.selectorText,
      children: _
    })
  }), l = () => f(E)), {
    content: t,
    className: i()(D.selectorButton, {
      [D.selectorButtonSelected]: s,
      [D.perksDemo]: u,
      [D.premiumUpsell]: r
    }),
    onClick: l
  }
}

function k(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: l,
    onClose: s,
    selectedPreset: i,
    selectedResolution: r,
    selectedFPS: I,
    onResolutionChange: G,
    onFPSChange: k,
    onPresetChange: y,
    targetGuildPremiumTier: F,
    captureDeviceSelected: V
  } = e, w = (0, d.useStateFromStores)([N.default], () => {
    let e = N.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), B = x.default.canStreamQuality(x.StreamQuality.MID, w), {
    location: H
  } = (0, m.useAnalyticsContext)(), W = (0, S.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), K = (0, x.isPremium)(w, M.PremiumTypes.TIER_1), {
    inPerksDemosExperiment: z
  } = E.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: K
  });
  _.default.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !z || K
  });
  let {
    available: Y,
    hqStreamingState: Q
  } = (0, C.usePerksDemo)(o.EntitlementFeatureNames.STREAM_HIGH_QUALITY), q = !B && !W && !Y, {
    enabled: Z,
    variant: J
  } = g.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: q
  }), X = Z && g.GradientVariants.includes(J), [$, ee] = n.useState(!1), [et, el] = n.useState(!1);
  n.useEffect(() => {
    let e = 0;
    return Y && Q.hqStreamingUnlockAnimationPlayed && (e = setTimeout(() => {
      el(!0)
    }, 750)), () => {
      clearTimeout(e)
    }
  }, [Y, Q.hqStreamingUnlockAnimationPlayed]);
  let ea = n.useCallback(() => {
      G(v.ApplicationStreamResolutions.RESOLUTION_1080), k(v.ApplicationStreamFPS.FPS_60)
    }, [G, k]),
    en = V ? v.GoLiveDeviceResolutionButtons : v.ApplicationStreamResolutionButtons,
    es = {
      ...H,
      section: L.AnalyticsSections.STREAM_SETTINGS
    },
    ei = (0, a.jsx)(h.default, {
      buttons: en.map(e => U({
        type: e,
        selected: e.value === r,
        needsPremium: !(0, p.default)(i, e.value, I, w, F),
        needsDemo: Y && e.value !== v.ApplicationStreamResolutions.RESOLUTION_720,
        analyticsLocation: es,
        useGradient: X,
        onClick: () => G(e.value),
        onClose: s,
        setIsHovering: ee
      }))
    }),
    er = (0, a.jsx)(h.default, {
      buttons: v.ApplicationStreamFPSButtons.map(e => U({
        type: e,
        selected: e.value === I,
        needsPremium: !(0, p.default)(i, r, e.value, w, F),
        needsDemo: Y && e.value === v.ApplicationStreamFPS.FPS_60,
        analyticsLocation: es,
        useGradient: X,
        onClick: () => k(e.value),
        onClose: s,
        setIsHovering: ee
      }))
    }),
    eu = [{
      value: v.ApplicationStreamPresets.PRESET_VIDEO,
      label: O.default.Messages.STREAM_PRESET_VIDEO
    }, ...V ? [] : [{
      value: v.ApplicationStreamPresets.PRESET_DOCUMENTS,
      label: O.default.Messages.STREAM_PRESET_DOCUMENTS
    }], {
      value: v.ApplicationStreamPresets.PRESET_CUSTOM,
      label: O.default.Messages.STREAM_PRESET_CUSTOM
    }],
    eo = i === v.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(A.default, {
        children: (0, a.jsx)(c.FormItem, {
          title: O.default.Messages.STREAM_RESOLUTION,
          titleClassName: j.formItemTitleSlim,
          className: D.documentModeGroup,
          children: (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            children: O.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
              fps: I
            })
          })
        })
      }), q ? (0, a.jsx)(R.default, {
        message: O.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
        onClose: s,
        openStreamUpsellModal: b
      }) : null]
    }) : (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)(A.default, {
        style: {
          "--custom-transition-duration": Y && !et ? "".concat(750, "ms") : 0
        },
        children: [(0, a.jsx)(c.FormItem, {
          title: O.default.Messages.STREAM_RESOLUTION,
          className: D.settingsGroup,
          titleClassName: j.formItemTitleSlim,
          children: ei
        }), (0, a.jsx)(c.FormItem, {
          title: O.default.Messages.SCREENSHARE_FRAME_RATE,
          className: D.settingsGroup,
          titleClassName: j.formItemTitleSlim,
          children: er
        })]
      }), q ? (0, a.jsx)(R.default, {
        onClose: s,
        openStreamUpsellModal: b,
        glow: $ && X
      }) : null, Y ? (0, a.jsx)(T.default, {
        selectedGuildId: t,
        selectedChannelId: l,
        glow: $,
        playIntroTransition: !Q.hqStreamingUnlockAnimationPlayed,
        onUnlocked: ea
      }) : null]
    });
  return (0, a.jsx)(f.default, {
    ...es,
    children: (0, a.jsx)(c.FormItem, {
      title: O.default.Messages.STREAM_QUALITY,
      titleClassName: j.formItemTitle,
      className: j.modalContent,
      children: (0, a.jsxs)("div", {
        className: D.qualitySettingsContainer,
        children: [(0, a.jsx)(c.SingleSelect, {
          value: i,
          className: P.marginTop8,
          options: eu,
          onChange: e => y(e)
        }), eo]
      })
    })
  })
}