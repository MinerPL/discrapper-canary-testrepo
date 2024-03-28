"use strict";
n.r(t), n.d(t, {
  SelectChannelOption: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var i = n("447003"),
  a = n("687352"),
  l = n("409216"),
  u = n("632184"),
  r = n("414896"),
  c = n("823379"),
  o = n("619915"),
  g = n("777076");

function d(e) {
  let {
    channel: t,
    users: n
  } = e, d = (0, o.default)(t);
  return (0, s.jsxs)("div", {
    className: g.channelInfo,
    children: [(0, i.default)(t) ? (0, s.jsx)(r.default, {
      className: g.speakerIcon
    }) : (0, s.jsx)(u.default, {
      className: g.speakerIcon
    }), (0, s.jsx)("div", {
      className: g.channelName,
      children: t.name
    }), d.length > 0 ? (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)("div", {
        className: g.divider
      }), (0, s.jsx)(a.default, {
        embeddedApps: d,
        className: g.channelItemActivities
      }), (0, s.jsx)("div", {
        className: g.channelActivitiesText,
        children: d.map(e => {
          var t;
          return null === (t = e.application) || void 0 === t ? void 0 : t.name
        }).filter(c.isNotNullish).join(", ")
      })]
    }) : null, (0, s.jsx)("div", {
      className: g.voiceUserContainer,
      children: (0, s.jsx)(l.default, {
        users: n,
        max: 4
      })
    })]
  })
}