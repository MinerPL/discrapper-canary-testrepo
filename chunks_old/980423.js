"use strict";
n.r(t), n.d(t, {
  LiveIndicatorLooks: function() {
    return a
  },
  LiveIndicatorShapes: function() {
    return f
  },
  default: function() {
    return T
  }
});
var s, a, l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("669491"),
  u = n("956089"),
  d = n("782340"),
  c = n("895925");
(s = a || (a = {})).RED = "RED", s.GRAY = "GRAY";
let E = {
    LARGE: c.liveLarge,
    SMALL: c.liveSmall
  },
  f = {
    [u.BadgeShapes.ROUND]: c.liveShapeRound,
    [u.BadgeShapes.ROUND_LEFT]: c.liveShapeRoundLeft,
    [u.BadgeShapes.ROUND_RIGHT]: c.liveShapeRoundRight,
    [u.BadgeShapes.SQUARE]: ""
  };

function _(e) {
  let {
    className: t,
    style: n,
    shape: s = u.BadgeShapes.ROUND,
    look: a = "RED",
    size: i = E.LARGE
  } = e;
  return "RED" === a ? (0, l.jsx)(u.TextBadge, {
    text: d.default.Messages.LIVE,
    className: r(t, c.live, i),
    color: o.default.unsafe_rawColors.RED_400.css,
    shape: f[s],
    style: n
  }) : (0, l.jsx)(u.TextBadge, {
    text: d.default.Messages.LIVE,
    className: r(t, c.live, i, c.grey),
    disableColor: !0,
    shape: f[s],
    style: n
  })
}
_.Looks = a, _.Sizes = E;
var T = _