"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var a = n("735250");
n("470079");
var s = n("442837"),
  l = n("524437"),
  i = n("481060"),
  r = n("410575"),
  o = n("100527"),
  u = n("906732"),
  d = n("243778"),
  c = n("352455"),
  f = n("480294"),
  E = n("153124"),
  h = n("791359"),
  _ = n("981631"),
  C = n("689938"),
  m = n("333130");

function S() {
  let {
    analyticsLocations: e
  } = (0, u.default)(o.default.ACTIVE_NOW_COLUMN), t = (0, s.useStateFromStores)([f.default], () => f.default.hasConsented(_.Consents.PERSONALIZATION)) ? [] : [l.DismissibleContent.NOW_PLAYING_CONSENT_CARD], n = (0, E.useUID)();
  return (0, a.jsx)(u.AnalyticsLocationProvider, {
    value: e,
    children: (0, a.jsx)(r.default, {
      section: _.AnalyticsSections.ACTIVE_NOW_COLUMN,
      children: (0, a.jsx)("aside", {
        className: m.container,
        "aria-labelledby": n,
        children: (0, a.jsxs)(i.Scroller, {
          className: m.scroller,
          children: [(0, a.jsx)(i.Heading, {
            variant: "heading-lg/semibold",
            className: m.header,
            id: n,
            children: C.default.Messages.GAME_FEED_CURRENT_HEADER_TITLE
          }), (0, a.jsx)(d.default, {
            contentTypes: t,
            children: e => {
              let {
                visibleContent: t,
                markAsDismissed: n
              } = e;
              if (t === l.DismissibleContent.NOW_PLAYING_CONSENT_CARD) return (0, a.jsx)(c.default, {
                className: m.__invalid_consentCard,
                markAsDismissed: n
              })
            }
          }), (0, a.jsx)(h.default, {})]
        })
      })
    })
  })
}