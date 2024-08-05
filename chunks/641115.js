t.d(n, {
  Z: function() {
return j;
  }
}), t(47120);
var l = t(735250),
  s = t(470079),
  a = t(120356),
  r = t.n(a),
  i = t(512722),
  o = t.n(i),
  c = t(848246),
  u = t(442837),
  d = t(481060),
  m = t(410575),
  E = t(2052),
  _ = t(924557),
  S = t(1163),
  g = t(594174),
  C = t(285952),
  h = t(672752),
  N = t(74538),
  Z = t(451467),
  I = t(122186),
  x = t(37113),
  f = t(981631),
  R = t(474936),
  A = t(689938),
  T = t(1871),
  v = t(631083),
  L = t(549856);

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

function M() {
  return (0, l.jsxs)('div', {
className: v.toolTipTextContainer,
children: [
  (0, l.jsx)(d.NitroWheelIcon, {
    size: 'md',
    color: h.JX.PREMIUM_TIER_2,
    className: r()(v.premiumIcon)
  }),
  (0, l.jsx)(d.Text, {
    className: v.upsellText,
    variant: 'text-sm/medium',
    children: A.Z.Messages.UNLOCK_WITH_NITRO
  })
]
  });
}

function O(e) {
  let n, t, {
  type: s,
  selected: a,
  needsPremium: i,
  needsDemo: o,
  analyticsLocation: c,
  onClick: u,
  onClose: m,
  setIsHovering: E
} = e,
{
  value: _,
  label: S
} = s;
  return i ? (n = (0, l.jsx)(d.TooltipContainer, {
tooltipClassName: v.tooltip,
spacing: 6,
'aria-label': A.Z.Messages.UNLOCK_WITH_NITRO,
text: (0, l.jsx)(M, {}),
children: (0, l.jsx)('div', {
  className: v.textContainer,
  onMouseEnter: () => E(!0),
  onMouseLeave: () => E(!1),
  children: (0, l.jsx)(d.Text, {
    variant: 'text-xs/bold',
    className: r()(v.selectorNitroText, v.enhancedSelectorNitroText),
    children: S
  })
})
  }), t = () => p({
analyticsLocation: c,
onClose: m
  })) : (n = (0, l.jsx)('div', {
className: v.textContainer,
children: (0, l.jsx)(d.Text, {
  variant: 'text-xs/normal',
  className: r()(v.selectorText, {
    [v.enhancedSelectorNitroText]: o
  }),
  children: S
})
  }), t = () => u(_)), {
content: n,
className: r()(v.selectorButton, {
  [v.selectorButtonSelected]: a,
  [v.perksDemo]: o,
  [v.premiumUpsell]: i
}),
onClick: t
  };
}

function j(e) {
  let {
onClose: n,
selectedPreset: t,
selectedResolution: a,
selectedFPS: r,
onResolutionChange: i,
onFPSChange: h,
onPresetChange: M,
targetGuildPremiumTier: j,
captureDeviceSelected: P
  } = e, D = (0, u.e7)([g.default], () => {
let e = g.default.getCurrentUser();
return o()(null != e, 'StreamSettings: user cannot be undefined'), e;
  }), G = N.ZP.canStreamQuality(N.U2.MID, D), {
location: U
  } = (0, E.O)(), b = (0, _.Zq)({
autoTrackExposure: !1
  }), w = (0, N.I5)(D, R.p9.TIER_1);
  S.Z.useExperiment({
location: 'Go Live Modal'
  }, {
autoTrackExposure: !0,
disable: w
  });
  let k = (0, N.So)(c.q.STREAM_HIGH_QUALITY),
B = !G && !b || k,
[V, y] = s.useState(!1),
W = P ? x.z8 : x.WC,
H = {
  ...U,
  section: f.jXE.STREAM_SETTINGS
},
F = (0, l.jsx)(d.ButtonGroup, {
  buttons: W.map(e => O({
    type: e,
    selected: e.value === a,
    needsPremium: !(0, Z.Z)(t, e.value, r, D, j),
    needsDemo: k && e.value !== x.LY.RESOLUTION_720,
    analyticsLocation: H,
    onClick: () => i(e.value),
    onClose: n,
    setIsHovering: y
  }))
}),
z = (0, l.jsx)(d.ButtonGroup, {
  buttons: x.k0.map(e => O({
    type: e,
    selected: e.value === r,
    needsPremium: !(0, Z.Z)(t, a, e.value, D, j),
    needsDemo: k && e.value === x.ws.FPS_60,
    analyticsLocation: H,
    onClick: () => h(e.value),
    onClose: n,
    setIsHovering: y
  }))
}),
K = [{
    value: x.tI.PRESET_VIDEO,
    label: A.Z.Messages.STREAM_PRESET_VIDEO
  },
  ...P ? [] : [{
    value: x.tI.PRESET_DOCUMENTS,
    label: A.Z.Messages.STREAM_PRESET_DOCUMENTS
  }],
  {
    value: x.tI.PRESET_CUSTOM,
    label: A.Z.Messages.STREAM_PRESET_CUSTOM
  }
],
Y = t === x.tI.PRESET_DOCUMENTS ? (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsx)(C.Z, {
      children: (0, l.jsx)(d.FormItem, {
        title: A.Z.Messages.STREAM_RESOLUTION,
        titleClassName: T.formItemTitleSlim,
        className: v.documentModeGroup,
        children: (0, l.jsx)(d.Text, {
          variant: 'text-xs/normal',
          children: A.Z.Messages.STREAM_PRESET_DOCUMENTS_DESCRIPTION_NITRO.format({
            fps: r
          })
        })
      })
    }),
    B ? (0, l.jsx)(I.Z, {
      message: A.Z.Messages.STREAM_PREMIUM_UPSELL_BANNER_PRESET_DOCUMENTS,
      onClose: n,
      openStreamUpsellModal: p
    }) : null
  ]
}) : (0, l.jsxs)(l.Fragment, {
  children: [
    (0, l.jsxs)(C.Z, {
      children: [
        (0, l.jsx)(d.FormItem, {
          title: A.Z.Messages.STREAM_RESOLUTION,
          className: v.settingsGroup,
          titleClassName: T.formItemTitleSlim,
          children: F
        }),
        (0, l.jsx)(d.FormItem, {
          title: A.Z.Messages.SCREENSHARE_FRAME_RATE,
          className: v.settingsGroup,
          titleClassName: T.formItemTitleSlim,
          children: z
        })
      ]
    }),
    B ? (0, l.jsx)(I.Z, {
      onClose: n,
      openStreamUpsellModal: p,
      glow: V
    }) : null
  ]
});
  return (0, l.jsx)(m.Z, {
...H,
children: (0, l.jsx)(d.FormItem, {
  title: A.Z.Messages.STREAM_QUALITY,
  titleClassName: T.formItemTitle,
  className: T.modalContent,
  children: (0, l.jsxs)('div', {
    className: v.qualitySettingsContainer,
    children: [
      (0, l.jsx)(d.SingleSelect, {
        value: t,
        className: L.marginTop8,
        options: K,
        onChange: e => M(e)
      }),
      Y
    ]
  })
})
  });
}