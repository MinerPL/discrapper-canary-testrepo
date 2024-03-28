"use strict";
l.r(t), l.d(t, {
  default: function() {
    return O
  }
}), l("47120");
var a = l("735250"),
  s = l("470079"),
  n = l("803997"),
  i = l.n(n),
  r = l("512722"),
  u = l.n(r),
  o = l("442837"),
  d = l("481060"),
  c = l("410575"),
  f = l("2052"),
  m = l("924557"),
  S = l("193878"),
  E = l("594174"),
  C = l("746124"),
  _ = l("285952"),
  g = l("466111"),
  N = l("74538"),
  h = l("451467"),
  x = l("122186"),
  I = l("37113"),
  p = l("981631"),
  A = l("689938"),
  R = l("223318"),
  T = l("138684"),
  v = l("794711");

function L(e) {
  let {
    analyticsLocation: t,
    onClose: s
  } = e;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await l.e("28479").then(l.bind(l, "78865"));
    return l => (0, a.jsx)(e, {
      ...l,
      onCloseParent: s,
      analyticsSource: t
    })
  })
}

function M() {
  return (0, a.jsxs)("div", {
    className: T.toolTipTextContainer,
    children: [(0, a.jsx)(g.default, {
      className: i()(T.premiumIcon)
    }), (0, a.jsx)(d.Text, {
      className: T.upsellText,
      variant: "text-sm/medium",
      children: A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK
    })]
  })
}

function j(e) {
  let t, l, {
      type: s,
      selected: n,
      needsPremium: r,
      analyticsLocation: u,
      useGradient: o = !1,
      onClick: c,
      onClose: f,
      setIsHovering: m
    } = e,
    {
      value: S,
      label: E
    } = s;
  return r ? (t = (0, a.jsx)(d.TooltipContainer, {
    tooltipClassName: T.tooltip,
    spacing: 12,
    "aria-label": A.default.Messages.STREAM_QUALITY_DISCORD_NITRO_UNLOCK,
    text: (0, a.jsx)(M, {}),
    children: (0, a.jsx)(_.default, {
      align: _.default.Align.CENTER,
      onMouseEnter: () => m(!0),
      onMouseLeave: () => m(!1),
      children: (0, a.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: i()(T.selectorNitroText, {
          [T.enhancedSelectorNitroText]: o
        }),
        children: E
      })
    })
  }), l = () => L({
    analyticsLocation: u,
    onClose: f
  })) : (t = (0, a.jsx)(d.Text, {
    variant: "text-xs/normal",
    className: n ? T.selectorTextSelected : T.selectorText,
    children: E
  }), l = () => c(S)), {
    content: t,
    className: i()(n ? T.selectorButtonSelected : T.selectorButton, {
      [T.selectorButtonPremiumRequired]: r
    }),
    onClick: l
  }
}

function O(e) {
  let {
    onClose: t,
    selectedPreset: l,
    selectedResolution: n,
    selectedFPS: i,
    onResolutionChange: r,
    onFPSChange: g,
    onPresetChange: M,
    targetGuildPremiumTier: O,
    captureDeviceSelected: D
  } = e, P = (0, o.useStateFromStores)([E.default], () => {
    let e = E.default.getCurrentUser();
    return u()(null != e, "StreamSettings: user cannot be undefined"), e
  }), G = N.default.canStreamQuality(N.StreamQuality.MID, P), {
    location: b
  } = (0, f.useAnalyticsContext)(), U = (0, m.useShouldSeeClipsPremiumEarlyAccessGoLiveRoadblock)({
    autoTrackExposure: !1
  }), F = !G && !U, {
    enabled: k,
    variant: y
  } = S.default.useExperiment({
    location: "StreamSettingsUpsellBanner"
  }, {
    autoTrackExposure: F
  }), w = k && S.GradientVariants.includes(y), [B, V] = s.useState(!1), H = D ? I.GoLiveDeviceResolutionButtons : I.ApplicationStreamResolutionButtons, W = {
    ...b,
    section: p.AnalyticsSections.STREAM_SETTINGS
  }, z = (0, a.jsx)(C.default, {
    buttons: H.map(e => j({
      type: e,
      selected: e.value === n,
      needsPremium: !(0, h.default)(l, e.value, i, P, O),
      analyticsLocation: W,
      useGradient: w,
      onClick: () => r(e.value),
      onClose: t,
      setIsHovering: V
    }))
  }), K = (0, a.jsx)(C.default, {
    buttons: I.ApplicationStreamFPSButtons.map(e => j({
      type: e,
      selected: e.value === i,
      needsPremium: !(0, h.default)(l, n, e.value, P, O),
      analyticsLocation: W,
      useGradient: w,
      onClick: () => g(e.value),
      onClose: t,
      setIsHovering: V
    }))
  }), Y = [{
    value: I.ApplicationStreamPresets.PRESET_VIDEO,
    label: A.default.Messages.STREAM_PRESET_VIDEO
  }, ...D ? [] : [{
    value: I.ApplicationStreamPresets.PRESET_DOCUMENTS,
    label: A.default.Messages.STREAM_PRESET_DOCUMENTS
  }], {
    value: I.ApplicationStreamPresets.PRESET_CUSTOM,
    label: A.default.Messages.STREAM_PRESET_CUSTOM
  }], Q = l === I.ApplicationStreamPresets.PRESET_DOCUMENTS ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(_.default, {
      children: (0, a.jsx)(d.FormItem, {
        title: A.default.Messages.STREAM_RESOLUTION,
        titleClassName: R.formItemTitleSlim,
        className: T.documentModeGroup,
        children: (0, a.jsx)(d.Text, {
          variant: "text-xs/normal",
          children: A.default.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: i
          })
        })
      })
    }), F ? (0, a.jsx)(x.default, {
      message: A.default.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: t,
      openStreamUpsellModal: L
    }) : null]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(_.default, {
      children: [(0, a.jsx)(d.FormItem, {
        title: A.default.Messages.STREAM_RESOLUTION,
        className: T.settingsGroup,
        titleClassName: R.formItemTitleSlim,
        children: z
      }), (0, a.jsx)(d.FormItem, {
        title: A.default.Messages.SCREENSHARE_FRAME_RATE,
        className: T.settingsGroup,
        titleClassName: R.formItemTitleSlim,
        children: K
      })]
    }), F ? (0, a.jsx)(x.default, {
      onClose: t,
      openStreamUpsellModal: L,
      glow: B && w
    }) : null]
  });
  return (0, a.jsx)(c.default, {
    ...W,
    children: (0, a.jsx)(d.FormItem, {
      title: A.default.Messages.STREAM_QUALITY,
      titleClassName: R.formItemTitle,
      className: R.modalContent,
      children: (0, a.jsxs)("div", {
        className: T.qualitySettingsContainer,
        children: [(0, a.jsx)(d.SingleSelect, {
          value: l,
          className: v.marginTop8,
          options: Y,
          onChange: e => M(e)
        }), Q]
      })
    })
  })
}