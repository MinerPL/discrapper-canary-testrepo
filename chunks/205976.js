"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var a = n("735250");
n("470079");
var s = n("692547"),
  l = n("481060"),
  i = n("436088"),
  r = n("770471"),
  o = n("143614"),
  u = n("106674"),
  d = n("787740"),
  c = n("689938"),
  f = n("802827");

function E() {
  let {
    canViewBroadcasts: e
  } = r.default.useExperiment({
    location: "broadcast_list_no_track"
  }, {
    autoTrackExposure: !1
  }), t = (0, o.default)();
  return 0 === t.length ? null : (r.default.trackExposure({
    location: "broadcast_list"
  }), e) ? (0, a.jsxs)("div", {
    className: f.container,
    children: [(0, a.jsx)("div", {
      className: f.header,
      children: (0, a.jsxs)("div", {
        className: f.inline,
        children: [(0, a.jsx)(i.default, {
          color: s.default.colors.HEADER_PRIMARY.css,
          height: 20,
          width: 20
        }), (0, a.jsx)(l.Heading, {
          variant: "heading-md/semibold",
          children: c.default.Messages.LIVE_BROADCASTS
        }), (0, a.jsx)(d.default, {}), (0, a.jsxs)(l.Heading, {
          variant: "heading-md/semibold",
          children: ["— ", t.length.toLocaleString()]
        })]
      })
    }), t.map(e => (0, a.jsx)(u.default, {
      broadcast: e
    }, e.userId))]
  }) : null
}