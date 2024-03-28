"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("481060"),
  r = n("357727"),
  d = n("689938"),
  u = n("5674");

function o(e) {
  let {
    guild: t,
    speakers: n,
    speakerCount: s,
    className: o
  } = e, c = n.slice(0, 5), E = c.map(e => {
    var n, s;
    return (0, a.jsxs)("div", {
      className: u.speakerContainer,
      children: [(0, a.jsx)(i.Avatar, {
        src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
        size: i.AvatarSizes.SIZE_20,
        className: u.avatar,
        "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
      }), (0, a.jsx)("div", {
        className: u.textInGridContainer,
        children: (0, a.jsx)(i.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: u.textInGrid,
          children: null == e ? void 0 : e.userNick
        })
      })]
    }, null == e ? void 0 : null === (s = e.user) || void 0 === s ? void 0 : s.id)
  }), f = s - c.length;
  return (0, a.jsxs)("div", {
    className: l()(u.grid, o),
    children: [E, f > 0 && (0, a.jsxs)("div", {
      className: u.speakerContainer,
      children: [(0, a.jsx)("div", {
        className: u.iconMicrophone,
        children: (0, a.jsx)(r.default, {
          height: 12
        })
      }), (0, a.jsx)(i.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: u.textInGrid,
        children: d.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
          count: f
        })
      })]
    })]
  })
}