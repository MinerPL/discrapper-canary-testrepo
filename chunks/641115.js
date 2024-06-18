"use strict";
n.d(t, {
  Z: function() {
    return G
  }
}), n(47120);
var l = n(735250),
  s = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(512722),
  o = n.n(r),
  u = n(848246),
  c = n(442837),
  d = n(481060),
  m = n(410575),
  E = n(2052),
  _ = n(924557),
  S = n(736871),
  h = n(351742),
  g = n(386542),
  Z = n(594174),
  C = n(285952),
  f = n(466111),
  N = n(74538),
  x = n(451467),
  I = n(200445),
  A = n(122186),
  T = n(37113),
  v = n(981631),
  R = n(474936),
  L = n(689938),
  p = n(555066),
  M = n(182972),
  j = n(611273);

function O(e) {
  let {
    analyticsLocation: t,
    onClose: s
  } = e;
  (0, d.openModalLazy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("99387"), n.e("28479")]).then(n.bind(n, 78865));
    return n => (0, l.jsx)(e, {
      ...n,
      onCloseParent: s,
      analyticsSource: t
    })
  })
}

function P() {
  return (0, l.jsxs)("div", {
    className: M.toolTipTextContainer,
    children: [(0, l.jsx)(f.Z, {
      className: i()(M.premiumIcon)
    }), (0, l.jsx)(d.Text, {
      className: M.upsellText,
      variant: "text-sm/medium",
      children: L.Z.Messages.UNLOCK_WITH_NITRO
    })]
  })
}

function D(e) {
  let t, n, {
      type: s,
      selected: a,
      needsPremium: r,
      needsDemo: o,
      analyticsLocation: u,
      useGradient: c = !1,
      onClick: m,
      onClose: E,
      setIsHovering: _
    } = e,
    {
      value: S,
      label: h
    } = s;
  return o ? (t = (0, l.jsx)("div", {
    className: M.textContainer,
    onMouseEnter: () => _(!0),
    onMouseLeave: () => _(!1),
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/bold",
      className: i()(M.selectorText, {
        [M.enhancedSelectorNitroText]: !a
      }),
      children: h
    })
  }), n = () => m(S)) : r ? (t = (0, l.jsx)(d.TooltipContainer, {
    tooltipClassName: M.tooltip,
    spacing: 6,
    "aria-label": L.Z.Messages.UNLOCK_WITH_NITRO,
    text: (0, l.jsx)(P, {}),
    children: (0, l.jsx)("div", {
      className: M.textContainer,
      onMouseEnter: () => _(!0),
      onMouseLeave: () => _(!1),
      children: (0, l.jsx)(d.Text, {
        variant: "text-xs/bold",
        className: i()(M.selectorNitroText, {
          [M.enhancedSelectorNitroText]: c
        }),
        children: h
      })
    })
  }), n = () => O({
    analyticsLocation: u,
    onClose: E
  })) : (t = (0, l.jsx)("div", {
    className: M.textContainer,
    children: (0, l.jsx)(d.Text, {
      variant: "text-xs/normal",
      className: M.selectorText,
      children: h
    })
  }), n = () => m(S)), {
    content: t,
    className: i()(M.selectorButton, {
      [M.selectorButtonSelected]: a,
      [M.perksDemo]: o,
      [M.premiumUpsell]: r
    }),
    onClick: n
  }
}

function G(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: n,
    onClose: a,
    selectedPreset: i,
    selectedResolution: r,
    selectedFPS: f,
    onResolutionChange: P,
    onFPSChange: G,
    onPresetChange: U,
    targetGuildPremiumTier: w,
    captureDeviceSelected: b
  } = e, y = (0, c.e7)([Z.default], () => {
    let e = Z.default.getCurrentUser();
    return o()(null != e, "StreamSettings: user cannot be undefined"), e
  }), k = N.ZP.canStreamQuality(N.U2.MID, y), {
    location: B
  } = (0, E.O)(), H = (0, _.Zq)({
    autoTrackExposure: !1
  }), V = (0, N.I5)(y, R.p9.TIER_1), {
    inPerksDemosExperiment: F
  } = S.Z.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: V
  });
  h.Z.useExperiment({
    location: "Go Live Modal"
  }, {
    autoTrackExposure: !0,
    disable: !F || V
  });
  let {
    available: W,
    hqStreamingState: z
  } = (0, g.k)(u.q.STREAM_HIGH_QUALITY), K = !k && !H && !W, [Y, q] = s.useState(!1), [Q, J] = s.useState(!1);
  s.useEffect(() => {
    let e = 0;
    return W && z.hqStreamingUnlockAnimationPlayed && (e = setTimeout(() => {
      J(!0)
    }, 750)), () => {
      clearTimeout(e)
    }
  }, [W, z.hqStreamingUnlockAnimationPlayed]);
  let X = s.useCallback(() => {
      P(T.LY.RESOLUTION_1080), G(T.ws.FPS_60)
    }, [P, G]),
    $ = b ? T.z8 : T.WC,
    ee = {
      ...B,
      section: v.jXE.STREAM_SETTINGS
    },
    et = (0, l.jsx)(d.ButtonGroup, {
      buttons: $.map(e => D({
        type: e,
        selected: e.value === r,
        needsPremium: !(0, x.Z)(i, e.value, f, y, w),
        needsDemo: W && e.value !== T.LY.RESOLUTION_720,
        analyticsLocation: ee,
        useGradient: !0,
        onClick: () => P(e.value),
        onClose: a,
        setIsHovering: q
      }))
    }),
    en = (0, l.jsx)(d.ButtonGroup, {
      buttons: T.k0.map(e => D({
        type: e,
        selected: e.value === f,
        needsPremium: !(0, x.Z)(i, r, e.value, y, w),
        needsDemo: W && e.value === T.ws.FPS_60,
        analyticsLocation: ee,
        useGradient: !0,
        onClick: () => G(e.value),
        onClose: a,
        setIsHovering: q
      }))
    }),
    el = [{
      value: T.tI.PRESET_VIDEO,
      label: L.Z.Messages.STREAM_PRESET_VIDEO
    }, ...b ? [] : [{
      value: T.tI.PRESET_DOCUMENTS,
      label: L.Z.Messages.STREAM_PRESET_DOCUMENTS
    }], {
      value: T.tI.PRESET_CUSTOM,
      label: L.Z.Messages.STREAM_PRESET_CUSTOM
    }],
    es = i === T.tI.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(C.Z, {
        children: (0, l.jsx)(d.FormItem, {
          title: L.Z.Messages.STREAM_RESOLUTION,
          titleClassName: p.formItemTitleSlim,
          className: M.documentModeGroup,
          children: (0, l.jsx)(d.Text, {
            variant: "text-xs/normal",
            children: L.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
              fps: f
            })
          })
        })
      }), K ? (0, l.jsx)(A.Z, {
        message: L.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
        onClose: a,
        openStreamUpsellModal: O
      }) : null]
    }) : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(C.Z, {
        style: {
          "--custom-transition-duration": W && !Q ? "".concat(750, "ms") : 0
        },
        children: [(0, l.jsx)(d.FormItem, {
          title: L.Z.Messages.STREAM_RESOLUTION,
          className: M.settingsGroup,
          titleClassName: p.formItemTitleSlim,
          children: et
        }), (0, l.jsx)(d.FormItem, {
          title: L.Z.Messages.SCREENSHARE_FRAME_RATE,
          className: M.settingsGroup,
          titleClassName: p.formItemTitleSlim,
          children: en
        })]
      }), K ? (0, l.jsx)(A.Z, {
        onClose: a,
        openStreamUpsellModal: O,
        glow: Y
      }) : null, W ? (0, l.jsx)(I.Z, {
        selectedGuildId: t,
        selectedChannelId: n,
        glow: Y,
        playIntroTransition: !z.hqStreamingUnlockAnimationPlayed,
        onUnlocked: X
      }) : null]
    });
  return (0, l.jsx)(m.Z, {
    ...ee,
    children: (0, l.jsx)(d.FormItem, {
      title: L.Z.Messages.STREAM_QUALITY,
      titleClassName: p.formItemTitle,
      className: p.modalContent,
      children: (0, l.jsxs)("div", {
        className: M.qualitySettingsContainer,
        children: [(0, l.jsx)(d.SingleSelect, {
          value: i,
          className: j.marginTop8,
          options: el,
          onChange: e => U(e)
        }), es]
      })
    })
  })
}