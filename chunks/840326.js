"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
}), s("222007");
var a = s("37983"),
  r = s("884691"),
  n = s("77078"),
  l = s("290381"),
  i = s("812204"),
  u = s("685665"),
  o = s("594098"),
  d = s("599110"),
  c = s("706922"),
  _ = s("830648"),
  E = s("627474"),
  I = s("835618"),
  T = s("554083"),
  f = s("598739"),
  S = s("326881"),
  R = s("228967"),
  m = s("49111"),
  A = s("137537"),
  N = s("679324"),
  p = () => {
    let e = r.useRef(null),
      [t, s] = r.useState(!1),
      {
        enabled: p
      } = (0, c.default)(),
      {
        AnalyticsLocationProvider: g,
        analyticsLocations: C
      } = (0, u.default)(i.default.PREMIUM_SUBSCRIBER_NITRO_HOME),
      [P, O] = r.useState(!1);
    return (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(n.AdvancedScrollerAuto, {
        className: A.mainPageScroller,
        ref: e,
        children: (0, a.jsx)("div", {
          className: A.container,
          children: (0, a.jsxs)(g, {
            children: [(0, a.jsx)(T.default, {
              className: A.heroHeading
            }), (0, a.jsx)(E.default, {
              variant: f.PerksDiscoverabilityVariants.WHATS_NEW,
              className: A.whatsNew,
              noBackground: !0,
              leftAlignHeaders: !0
            }), (0, a.jsx)(E.default, {
              className: A.perksDiscoverability,
              noBackground: !0,
              leftAlignHeaders: !0,
              showAllPerksButton: p ? (0, a.jsx)(R.default, {
                setIsAllPerksVisible: s
              }) : void 0
            }), !p && (0, a.jsx)(_.default, {
              className: A.perksCards,
              isSubscriberNitroHome: !0
            }), (0, a.jsx)(I.default, {
              className: A.giftNitro
            }), (0, a.jsx)("div", {
              className: A.footerSpacing
            }), (0, a.jsx)(l.VisibilitySensor, {
              onChange: e => {
                e && !P && (d.default.track(m.AnalyticEvents.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
                  location_stack: C
                }), O(!0))
              },
              children: (0, a.jsx)("div", {
                className: A.bottomOfPageVisibilitySensor
              })
            }), (0, a.jsx)(o.default, {
              src: N,
              className: A.bottomIllustration,
              width: 112,
              height: 85,
              zoomable: !1
            })]
          })
        })
      }), p ? (0, a.jsx)(S.default, {
        isAllPerksVisible: t,
        setIsAllPerksVisible: s
      }) : null]
    })
  }