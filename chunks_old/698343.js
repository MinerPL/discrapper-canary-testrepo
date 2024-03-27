"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  l = n("151426"),
  i = n("77078"),
  r = n("901582"),
  o = n("812204"),
  u = n("685665"),
  d = n("384997"),
  c = n("911574"),
  f = n("350522"),
  E = n("476765"),
  h = n("386133"),
  _ = n("49111"),
  C = n("782340"),
  S = n("754569");

function I() {
  let {
    analyticsLocations: e
  } = (0, u.default)(o.default.ACTIVE_NOW_COLUMN), t = (0, s.useStateFromStores)([f.default], () => f.default.hasConsented(_.Consents.PERSONALIZATION)), n = t ? [] : [l.DismissibleContent.NOW_PLAYING_CONSENT_CARD], I = (0, E.useUID)();
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: e,
    children: (0, a.jsx)(r.default, {
      section: _.AnalyticsSections.ACTIVE_NOW_COLUMN,
      children: (0, a.jsx)("aside", {
        className: S.container,
        "aria-labelledby": I,
        children: (0, a.jsxs)(i.Scroller, {
          className: S.scroller,
          children: [(0, a.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: S.header,
            id: I,
            children: C.default.Messages.GAME_FEED_CURRENT_HEADER_TITLE
          }), (0, a.jsx)(d.default, {
            contentTypes: n,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === l.DismissibleContent.NOW_PLAYING_CONSENT_CARD) return (0, a.jsx)(c.default, {
                className: S.consentCard,
                markAsDismissed: n
              })
            }
          }), (0, a.jsx)(h.default, {})]
        })
      })
    })
  })
}