"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("15542"),
  o = n("458960"),
  u = n("355262"),
  d = n("685665"),
  c = n("401642"),
  f = n("49111"),
  E = n("161950"),
  h = e => {
    let {
      userId: t,
      children: n,
      isLast: l,
      className: h
    } = e, [_, C] = s.useState(!1), {
      analyticsLocations: S
    } = (0, d.default)(), I = s.useCallback(() => {
      (0, c.openUserProfileModal)({
        userId: t,
        sourceAnalyticsLocations: S,
        analyticsLocation: {
          section: f.AnalyticsSections.FAMILY_CENTER
        }
      })
    }, [t, S]), m = () => {
      C(!0)
    }, p = () => {
      C(!1)
    };
    return (0, a.jsx)(u.ListNavigatorItem, {
      id: t,
      children: e => (0, a.jsx)(r.FocusRing, {
        offset: {
          left: -8,
          right: -8
        },
        children: (0, a.jsx)(o.default.div, {
          style: {
            opacity: 1
          },
          className: i(E.rowItem, h, {
            [E.last]: l,
            [E.active]: _
          }),
          onMouseEnter: m,
          onMouseLeave: p,
          onClick: I,
          ...e,
          children: n(_)
        })
      })
    })
  }