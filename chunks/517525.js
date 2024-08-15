n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(338545),
  o = n(468194),
  c = n(442837),
  u = n(692547),
  d = n(477690),
  h = n(481060),
  m = n(2052),
  p = n(906732),
  _ = n(194082),
  f = n(484459),
  E = n(594174),
  g = n(626135),
  C = n(74538),
  I = n(557457),
  x = n(475674),
  T = n(981631),
  N = n(474936),
  v = n(689938),
  S = n(517103);
let Z = (0, o.Mg)(d.Z.LIVE_INDICATOR_BORDER_RADIUS),
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
let t, s, {
    participant: r,
    isUpsellEnabled: o,
    shape: d,
    size: f,
    didTrackUpsellViewed: Z,
    setDidTrackUpsellViewed: A,
    className: M,
    premiumIndicator: b
  } = e,
  R = (0, I.Wc)(r),
  {
    analyticsLocations: j
  } = (0, p.ZP)(),
  L = null != (0, x.Z)(r);
try {
  t = (0, I.nG)(R);
} catch (e) {
  t = !1;
}
try {
  s = (0, I.tR)(R);
} catch (e) {
  s = !1;
}
let P = t || s,
  {
    location: O
  } = (0, m.O)(),
  y = (0, c.e7)([E.default], () => E.default.getCurrentUser()),
  D = o && !C.ZP.isPremium(y, N.p9.TIER_1) && !C.ZP.canStreamQuality(C.ZP.StreamQuality.MID, y),
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
    !Z && P && (g.default.track(T.rMx.PREMIUM_UPSELL_VIEWED, {
      type: N.cd.STREAM_QUALITY_INDICATOR,
      has_premium_stream_fps: t,
      has_premium_stream_resolution: s,
      location_stack: j
    }), A(!0));
  }, [
    t,
    s,
    P,
    Z,
    A,
    j
  ]), null == R)
  return null;
let U = (0, i.jsx)(h.Tooltip, {
  text: L ? v.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_REDUCED : P ? v.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_PREMIUM : v.Z.Messages.SCREENSHARE_QUALITY_TOOLTIP_NORMAL,
  position: 'bottom',
  color: h.Tooltip.Colors.GREY,
  children: e => (0, i.jsxs)(h.Clickable, {
    ...e,
    onClick: k,
    className: l()(S.qualityIndicator, f, _.eE[d], L ? S.qualityIndicatorLowQuality : S.qualityIndicatorFullQuality, {
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
  className: l()(M, S.qualityIndicatorBadge, {
    [S.qualityIndicatorBadgePremium]: P && b
  }),
  color: u.Z.unsafe_rawColors.PRIMARY_500.css,
  shape: d
});
  };
t.Z = e => {
  let {
participant: t,
showQuality: n,
isUpsellEnabled: s = !0,
size: o,
className: c,
premiumIndicator: u
  } = e, [d, m] = a.useState(!1), p = (0, I.Wc)(t), {
reducedMotion: E
  } = a.useContext(h.AccessibilityPreferencesContext), g = n && null != p;
  a.useEffect(() => {
(0, f.Z)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
  dispatchWait: !0
});
  }, [t]);
  let C = (0, h.useTransition)(g, {
  enter: {
    from: E.enabled ? b : A,
    to: E.enabled ? R : M
  },
  leave: E.enabled ? b : A,
  config: P
}, 'animate-always'),
x = (0, h.useSpring)({
  to: g ? L : j,
  config: P
}, 'animate-always');
  return (e => {
let {
  className: n,
  popoutProps: a
} = e;
return (0, i.jsxs)('div', {
  className: l()(S.streamQualityIndicator, n),
  ...a,
  children: [
    C((e, n) => n ? (0, i.jsx)(r.animated.div, {
      style: e,
      children: (0, i.jsx)(O, {
        className: S.liveQualityIndicator,
        participant: t,
        size: o,
        shape: h.BadgeShapes.ROUND_LEFT,
        isUpsellEnabled: s,
        didTrackUpsellViewed: d,
        setDidTrackUpsellViewed: m,
        premiumIndicator: u
      })
    }) : null),
    (0, i.jsx)(r.animated.div, {
      style: x,
      className: S.liveIndicator,
      children: (0, i.jsx)(_.ZP, {
        look: _.jZ.RED,
        size: o,
        shape: g ? h.BadgeShapes.ROUND_RIGHT : h.BadgeShapes.ROUND
      })
    })
  ]
});
  })({
className: c
  });
};