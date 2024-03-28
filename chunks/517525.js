"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("803997"),
  i = n.n(s),
  r = n("718017"),
  o = n("468194"),
  u = n("442837"),
  d = n("692547"),
  c = n("477690"),
  f = n("481060"),
  h = n("2052"),
  m = n("906732"),
  p = n("484459"),
  E = n("594174"),
  C = n("466111"),
  g = n("26290"),
  S = n("368666"),
  _ = n("626135"),
  T = n("74538"),
  I = n("557457"),
  A = n("475674"),
  v = n("981631"),
  N = n("474936"),
  x = n("689938"),
  M = n("526144");
let R = (0, o.cssValueToNumber)(c.default.LIVE_INDICATOR_BORDER_RADIUS),
  L = {
    opacity: 0,
    transform: "translate3d(100%, 0, 0)"
  },
  y = {
    opacity: 1,
    transform: "translate3d(0%, 0, 0)"
  },
  O = {
    opacity: 0
  },
  j = {
    opacity: 1
  },
  P = {
    borderRadius: "".concat(R, "px ").concat(R, "px ").concat(R, "px ").concat(R, "px")
  },
  D = {
    borderRadius: "0px ".concat(R, "px ").concat(R, "px 0px")
  },
  b = {
    mass: 1,
    tension: 500,
    friction: 18,
    clamp: !0
  },
  U = e => {
    let t, s, {
        participant: r,
        isUpsellEnabled: o,
        shape: c,
        size: p,
        didTrackUpsellViewed: R,
        setDidTrackUpsellViewed: L,
        className: y
      } = e,
      O = (0, I.getMaxQuality)(r),
      {
        analyticsLocations: j
      } = (0, m.default)(),
      P = null != (0, A.default)(r);
    try {
      t = (0, I.isPremiumFPS)(O)
    } catch (e) {
      t = !1
    }
    try {
      s = (0, I.isPremiumResolution)(O)
    } catch (e) {
      s = !1
    }
    let D = t || s,
      {
        location: b
      } = (0, h.useAnalyticsContext)(),
      U = (0, u.useStateFromStores)([E.default], () => E.default.getCurrentUser()),
      F = o && !T.default.isPremium(U, N.PremiumTypes.TIER_1) && !T.default.canStreamQuality(T.default.StreamQuality.MID, U),
      w = l.useCallback(() => {
        F && D && (0, f.openModalLazy)(async () => {
          let {
            default: e
          } = await n.e("28479").then(n.bind(n, "78865"));
          return t => (0, a.jsx)(e, {
            ...t,
            analyticsSource: b
          })
        })
      }, [F, D, b]);
    if (l.useEffect(() => {
        !R && D && (_.default.track(v.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
          type: N.PremiumUpsellTypes.STREAM_QUALITY_INDICATOR,
          has_premium_stream_fps: t,
          has_premium_stream_resolution: s,
          location_stack: j
        }), L(!0))
      }, [t, s, D, R, L, j]), null == O) return null;
    let k = (0, a.jsx)(f.Tooltip, {
      text: P ? x.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_REDUCED : D ? x.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_PREMIUM : x.default.Messages.SCREENSHARE_QUALITY_TOOLTIP_NORMAL,
      position: "bottom",
      color: f.Tooltip.Colors.GREY,
      children: e => (0, a.jsxs)(f.Clickable, {
        ...e,
        onClick: w,
        className: i()(M.qualityIndicator, p, S.LiveIndicatorShapes[c], P ? M.qualityIndicatorLowQuality : M.qualityIndicatorFullQuality, {
          [M.clickable]: F && D
        }),
        children: [D ? (0, a.jsx)(C.default, {
          className: M.premiumStreamIcon
        }) : null, (0, a.jsx)("span", {
          className: M.qualityResolution,
          children: (0, I.getResolutionText)(O.maxResolution)
        }), (0, a.jsx)("span", {
          children: (0, I.getFPSText)(O.maxFrameRate)
        })]
      })
    });
    return (0, a.jsx)(g.TextBadge, {
      text: k,
      className: i()(y, M.qualityIndicatorBadge),
      color: d.default.unsafe_rawColors.PRIMARY_500.css,
      shape: c
    })
  };
t.default = e => {
  let {
    participant: t,
    showQuality: n,
    isUpsellEnabled: s = !0,
    size: o,
    className: u
  } = e, [d, c] = l.useState(!1), h = (0, I.getMaxQuality)(t), {
    reducedMotion: m
  } = l.useContext(f.AccessibilityPreferencesContext), E = n && null != h;
  l.useEffect(() => {
    (0, p.default)(t.stream.ownerId, t.user.getAvatarURL(t.stream.guildId, 80), {
      dispatchWait: !0
    })
  }, [t]);
  let C = (0, r.useTransition)(E, {
      enter: {
        from: m.enabled ? O : L,
        to: m.enabled ? j : y
      },
      leave: m.enabled ? O : L,
      config: b
    }),
    _ = (0, r.useSpring)({
      to: E ? D : P,
      config: b
    });
  return (e => {
    let {
      className: n,
      popoutProps: l
    } = e;
    return (0, a.jsxs)("div", {
      className: i()(M.streamQualityIndicator, n),
      ...l,
      children: [C((e, n) => n ? (0, a.jsx)(r.animated.div, {
        style: e,
        children: (0, a.jsx)(U, {
          className: M.liveQualityIndicator,
          participant: t,
          size: o,
          shape: g.BadgeShapes.ROUND_LEFT,
          isUpsellEnabled: s,
          didTrackUpsellViewed: d,
          setDidTrackUpsellViewed: c
        })
      }) : null), (0, a.jsx)(r.animated.div, {
        style: _,
        className: M.liveIndicator,
        children: (0, a.jsx)(S.default, {
          look: S.LiveIndicatorLooks.RED,
          size: o,
          shape: E ? g.BadgeShapes.ROUND_RIGHT : g.BadgeShapes.ROUND
        })
      })]
    })
  })({
    className: u
  })
}