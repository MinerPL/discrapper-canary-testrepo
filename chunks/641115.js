t.d(n, {
  Z: function() {
return P;
  }
}), t(47120);
var l = t(735250),
  s = t(470079),
  a = t(120356),
  i = t.n(a),
  r = t(512722),
  o = t.n(r),
  u = t(848246),
  c = t(442837),
  d = t(481060),
  m = t(410575),
  E = t(2052),
  _ = t(924557),
  S = t(736871),
  g = t(1163),
  h = t(594174),
  C = t(285952),
  N = t(672752),
  Z = t(74538),
  I = t(451467),
  x = t(122186),
  f = t(37113),
  A = t(981631),
  R = t(474936),
  T = t(689938),
  v = t(1871),
  L = t(631083),
  M = t(549856);

function p(e) {
  let {
analyticsLocation: n,
onClose: s
  } = e;
  (0, d.openModalLazy)(async () => {
let {
  default: e
} = await t.e('28479').then(t.bind(t, 78865));
return t => (0, l.jsx)(e, {
  ...t,
  onCloseParent: s,
  analyticsSource: n
});
  });
}

function O() {
  return (0, l.jsxs)('div', {
className: L.toolTipTextContainer,
children: [
  (0, l.jsx)(d.NitroWheelIcon, {
    size: 'md',
    color: N.JX.PREMIUM_TIER_2,
    className: i()(L.premiumIcon)
  }),
  (0, l.jsx)(d.Text, {
    className: L.upsellText,
    variant: 'text-sm/medium',
    children: T.Z.Messages.UNLOCK_WITH_NITRO
  })
]
  });
}

function j(e) {
  let n, t, {
  type: s,
  selected: a,
  needsPremium: r,
  needsDemo: o,
  analyticsLocation: u,
  onClick: c,
  onClose: m,
  setIsHovering: E
} = e,
{
  value: _,
  label: S
} = s;
  return r ? (n = (0, l.jsx)(d.TooltipContainer, {
tooltipClassName: L.tooltip,
spacing: 6,
'aria-label': T.Z.Messages.UNLOCK_WITH_NITRO,
text: (0, l.jsx)(O, {}),
children: (0, l.jsx)('div', {
  className: L.textContainer,
  onMouseEnter: () => E(!0),
  onMouseLeave: () => E(!1),
  children: (0, l.jsx)(d.Text, {
    variant: 'text-xs/bold',
    className: i()(L.selectorNitroText, L.enhancedSelectorNitroText),
    children: S
  })
})
  }), t = () => p({
analyticsLocation: u,
onClose: m
  })) : (n = (0, l.jsx)('div', {
className: L.textContainer,
children: (0, l.jsx)(d.Text, {
  variant: 'text-xs/normal',
  className: i()(L.selectorText, {
    [L.enhancedSelectorNitroText]: o
  }),
  children: S
})
  }), t = () => c(_)), {
content: n,
className: i()(L.selectorButton, {
  [L.selectorButtonSelected]: a,
  [L.perksDemo]: o,
  [L.premiumUpsell]: r
}),
onClick: t
  };
}

function P(e) {
  let {
onClose: n,
selectedPreset: t,
selectedResolution: a,
selectedFPS: i,
onResolutionChange: r,
onFPSChange: N,
onPresetChange: O,
targetGuildPremiumTier: P,
captureDeviceSelected: D
  } = e, G = (0, c.e7)([h.default], () => {
let e = h.default.getCurrentUser();
return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
  }), U = Z.ZP.canStreamQuality(Z.U2.MID, G), {
location: b
  } = (0, E.O)(), w = (0, _.Zq)({
autoTrackExposure: !1
  }), B = (0, Z.I5)(G, R.p9.TIER_1), {
inPerksDemosExperiment: y
  } = S.Z.useExperiment({
location: 'Go Live Modal'
  }, {
autoTrackExposure: !0,
disable: B
  });
  g.Z.useExperiment({
location: 'Go Live Modal'
  }, {
autoTrackExposure: !0,
disable: !y || B
  });
  let V = (0, Z.So)(u.q.STREAM_HIGH_QUALITY),
k = !U && !w || V,
[H, W] = s.useState(!1),
F = D ? f.z8 : f.WC,
z = {
  ...b,
  section: A.jXE.STREAM_SETTINGS
},
K = (0, l.jsx)(d.ButtonGroup, {
  buttons: F.map(e => j({
    type: e,
    selected: e.value === a,
    needsPremium: !(0, I.Z)(t, e.value, i, G, P),
    needsDemo: V && e.value !== f.LY.RESOLUTION_720,
    analyticsLocation: z,
    onClick: () => r(e.value),
    onClose: n,
    setIsHovering: W
  }))
}),
Y = (0, l.jsx)(d.ButtonGroup, {
  buttons: f.k0.map(e => j({
    type: e,
    selected: e.value === i,
    needsPremium: !(0, I.Z)(t, a, e.value, G, P),
    needsDemo: V && e.value === f.ws.FPS_60,
    analyticsLocation: z,
    onClick: () => N(e.value),
    onClose: n,
    setIsHovering: W
  }))
}),
J = [{
    value: f.tI.PRESET_VIDEO,
    label: T.Z.Messages.STREAM_PRESET_VIDEO
  },
  ...D ? [] : [{
    value: f.tI.PRESET_DOCUMENTS,
    label: T.Z.Messages.STREAM_PRESET_DOCUMENTS
  }],
  {
    value: f.tI.PRESET_CUSTOM,
    label: T.Z.Messages.STREAM_PRESET_CUSTOM
  }
],
Q = t === f.tI.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsx)(C.Z, {
      children: (0, l.jsx)(d.FormItem, {
        title: T.Z.Messages.STREAM_RESOLUTION,
        titleClassName: v.formItemTitleSlim,
        className: L.documentModeGroup,
        children: (0, l.jsx)(d.Text, {
          variant: 'text-xs/normal',
          children: T.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: i
          })
        })
      })
    }),
    k ? (0, l.jsx)(x.Z, {
      message: T.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: n,
      openStreamUpsellModal: p
    }) : null
  ]
}) : (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsxs)(C.Z, {
      children: [
        (0, l.jsx)(d.FormItem, {
          title: T.Z.Messages.STREAM_RESOLUTION,
          className: L.settingsGroup,
          titleClassName: v.formItemTitleSlim,
          children: K
        }),
        (0, l.jsx)(d.FormItem, {
          title: T.Z.Messages.SCREENSHARE_FRAME_RATE,
          className: L.settingsGroup,
          titleClassName: v.formItemTitleSlim,
          children: Y
        })
      ]
    }),
    k ? (0, l.jsx)(x.Z, {
      onClose: n,
      openStreamUpsellModal: p,
      glow: H
    }) : null
  ]
});
  return (0, l.jsx)(m.Z, {
...z,
children: (0, l.jsx)(d.FormItem, {
  title: T.Z.Messages.STREAM_QUALITY,
  titleClassName: v.formItemTitle,
  className: v.modalContent,
  children: (0, l.jsxs)('div', {
    className: L.qualitySettingsContainer,
    children: [
      (0, l.jsx)(d.SingleSelect, {
        value: t,
        className: M.marginTop8,
        options: J,
        onChange: e => O(e)
      }),
      Q
    ]
  })
})
  });
}