n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(338545),
  o = n(468194),
  c = n(442837),
  d = n(692547),
  u = n(477690),
  h = n(481060),
  p = n(2052),
  m = n(906732),
  _ = n(484459),
  f = n(594174),
  E = n(368666),
  C = n(626135),
  g = n(74538),
  I = n(557457),
  x = n(475674),
  T = n(981631),
  v = n(474936),
  N = n(689938),
  S = n(102572);
let Z = (0, o.Mg)(u.Z.LIVE_INDICATOR_BORDER_RADIUS),
  A = {
opacity: 0,
transform: 'translate3d(100%, 0, 0)'
  },
  M = {
opacity: 1,
transform: 'translate3d(0%, 0, 0)'
  },
  b = {
opacity: 0
  },
  R = {
opacity: 1
  },
  j = {
borderRadius: ''.concat(Z, 'px ').concat(Z, 'px ').concat(Z, 'px ').concat(Z, 'px')
  },
  L = {
borderRadius: '0px '.concat(Z, 'px ').concat(Z, 'px 0px')
  },
  P = {
mass: 1,
tension: 500,
friction: 18,
clamp: !0
  },
  O = e => {
let t, l, {
    participant: r,
    isUpsellEnabled: o,
    shape: u,
    size: _,
    didTrackUpsellViewed: Z,
    setDidTrackUpsellViewed: A,
    className: M,
    premiumIndicator: b
  } = e,
  R = (0, I.Wc)(r),
  {
    analyticsLocations: j
  } = (0, m.ZP)(),
  L = null != (0, x.Z)(r);
try {
  t = (0, I.nG)(R);
} catch (e) {
  t = !1;
}
try {
  l = (0, I.tR)(R);
} catch (e) {
  l = !1;
}
let P = t || l,
  {
    location: O
  } = (0, p.O)(),
  y = (0, c.e7)([f.default], () => f.default.getCurrentUser()),
  D = o && !g.ZP.isPremium(y, v.p9.TIER_1) && !g.ZP.canStreamQuality(g.ZP.StreamQuality.MID, y),
  k = a.useCallback(() => {
    D && P && (0, h.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e('28479').then(n.bind(n, 78865));
      return t => (0, i.jsx)(e, {
        ...t,
        analyticsSource: O
      });
    });
  }, [
    D,
    P,
    O
  ]);
if (a.useEffect(() => {
    !Z && P && (C.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
      type: v.cd.STREAM_QUALITY_INDICATOR,
      has_premium_stream_fps: t,
      has_premium_stream_resolution: l,
      location_stack: j
    }), A(!0));
  }, [
    t,
    l,
    P,
    Z,
    A,
    j
  ]), null == R)
  return null;
let U = (0, i.jsx)(h.Tooltip, {
  text: L ? N.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_REDUCED : P ? N.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_PREMIUM : N.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_NORMAL,
  position: 'bottom',
  color: h.Tooltip.Colors.GREY,
  children: e => (0, i.jsxs)(h.Clickable, {
    ...e,
    onClick: k,
    className: s()(S.qualityIndicator, _, E.eE[u], L ? S.qualityIndicatorLowQuality : S.qualityIndicatorFullQuality, {
      [S.clickable]: D && P
    }),
    children: [
      P ? (0, i.jsx)(h.NitroWheelIcon, {
        size: 'md',
        color: 'currentColor',
        className: S.premiumStreamIcon
      }) : null,
      (0, i.jsx)('span', {
        className: S.qualityResolution,
        children: (0, I.ml)(R.maxResolution)
      }),
      (0, i.jsx)('span', {
        children: (0, I.bp)(R.maxFrameRate)
      })
    ]
  })
});
return (0, i.jsx)(h.TextBadge, {
  text: U,
  className: s()(M, S.qualityIndicatorBadge, {
    [S.qualityIndicatorBadgePremium]: b
  }),
  color: d.Z.unsafe_rawColors.PRIMARY_500.css,
  shape: u
});
  };
t.Z = e => {
  let {
participant: t,
showQuality: n,
isUpsellEnabled: l = !0,
size: o,
className: c,
premiumIndicator: d
  } = e, [u, p] = a.useState(!1), m = (0, I.Wc)(t), {
reducedMotion: f
  } = a.useContext(h.AccessibilityPreferencesContext), C = n && null != m;
  a.useEffect(() => {
(0, _.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
  dispatchWait: !0
});
  }, [t]);
  let g = (0, r.useTransition)(C, {
  enter: {
    from: f.enabled ? b : A,
    to: f.enabled ? R : M
  },
  leave: f.enabled ? b : A,
  config: P
}),
x = (0, r.useSpring)({
  to: C ? L : j,
  config: P
});
  return (e => {
let {
  className: n,
  popoutProps: a
} = e;
return (0, i.jsxs)('div', {
  className: s()(S.streamQualityIndicator, n),
  ...a,
  children: [
    g((e, n) => n ? (0, i.jsx)(r.animated.div, {
      style: e,
      children: (0, i.jsx)(O, {
        className: S.liveQualityIndicator,
        participant: t,
        size: o,
        shape: h.BadgeShapes.ROUND_LEFT,
        isUpsellEnabled: l,
        didTrackUpsellViewed: u,
        setDidTrackUpsellViewed: p,
        premiumIndicator: d
      })
    }) : null),
    (0, i.jsx)(r.animated.div, {
      style: x,
      className: S.liveIndicator,
      children: (0, i.jsx)(E.ZP, {
        look: E.jZ.RED,
        size: o,
        shape: C ? h.BadgeShapes.ROUND_RIGHT : h.BadgeShapes.ROUND
      })
    })
  ]
});
  })({
className: c
  });
};