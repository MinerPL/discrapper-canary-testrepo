"use strict";
n.r(t), n.d(t, {
  CenterControlTrayActivityButton: function() {
    return N
  }
}), n("653041");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("524437"),
  r = n("481060"),
  o = n("2052"),
  u = n("40851"),
  d = n("317381"),
  c = n("683921"),
  f = n("588580"),
  h = n("374065"),
  m = n("451576"),
  p = n("526846"),
  E = n("938655"),
  C = n("403404"),
  g = n("906732"),
  S = n("243778"),
  _ = n("579185"),
  T = n("301076"),
  I = n("981631"),
  A = n("921944"),
  v = n("984324");

function N(e) {
  let {
    channel: t
  } = e, n = (0, s.useStateFromStores)([d.default], () => d.default.isLaunchingActivity()), N = (0, h.useEmbeddedActivityLaunchability)(t.id), x = (0, h.getEmbeddedActivityLaunchabilityLabel)(N), M = N !== h.EmbeddedActivityLaunchability.CAN_LAUNCH || n, {
    isHovered: R,
    setIsHovered: L,
    onMouseEnter: y,
    onMouseLeave: O
  } = (0, _.default)(200, 300), j = (0, f.useShowActivityIndicator)(), P = (0, c.default)({
    channelId: t.id
  }), D = !M, b = l.useCallback(e => {
    "focus" !== e.type && y()
  }, [y]), U = (0, o.useAnalyticsContext)(), F = (0, u.useAppContext)() === I.AppContext.POPOUT, {
    analyticsLocations: w
  } = (0, g.default)(), k = l.useCallback(() => {
    (0, C.default)({
      channel: t,
      guildId: t.guild_id,
      locationObject: U.location,
      openInPopout: F,
      analyticsLocations: w
    })
  }, [U.location, w, t, F]), H = [];
  return !M && H.push(i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES), (0, m.default)(t.id) && !M && H.push(i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE), (0, a.jsx)(S.default, {
    contentTypes: H,
    children: e => {
      let {
        visibleContent: n,
        markAsDismissed: l
      } = e;
      return (0, a.jsx)(r.Popout, {
        fixed: !0,
        shouldShow: R,
        animationPosition: "bottom",
        position: "bottom",
        align: "center",
        spacing: 16,
        onRequestClose: () => {
          L(!1)
        },
        renderPopout: e => {
          let {
            closePopout: n,
            setPopoutRef: s
          } = e;
          return D ? (0, a.jsx)(p.ActivitiesMiniShelf, {
            ref: s,
            channel: t,
            closePopout: n,
            onMouseEnter: y,
            onMouseLeave: O,
            isHovered: R,
            onClick: () => l(A.ContentDismissActionType.UNKNOWN)
          }) : (0, a.jsx)(a.Fragment, {})
        },
        children: () => (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)(T.default, {
            disabled: M,
            "aria-label": x,
            label: D ? void 0 : x,
            isActivityActive: P || R,
            className: v.controlButton,
            onClick: () => {
              k(), (n === i.DismissibleContent.ACTIVITIES_MINI_SHELF_SPARKLES || n === i.DismissibleContent.ACTIVITY_GDM_ROCKET_SPARKLE || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_1_SPARKLES || n === i.DismissibleContent.ACTIVITIES_WATCH_TOGETHER_APRIL_2023_WEEK_2_SPARKLES) && l(A.ContentDismissActionType.UNKNOWN)
            },
            onMouseEnter: b,
            onMouseLeave: O
          }), j ? (0, a.jsx)(E.FreeActivityIndicatorDot, {
            top: 4,
            right: 10,
            size: 12,
            maskColor: E.MaskColor.BLACK
          }) : null]
        })
      })
    }
  })
}