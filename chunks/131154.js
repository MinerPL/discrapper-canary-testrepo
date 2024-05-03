"use strict";
t.r(n), t.d(n, {
  default: function() {
    return u
  }
});
var l = t("735250");
t("470079");
var a = t("120356"),
  i = t.n(a),
  s = t("481060"),
  r = t("357727"),
  c = t("689938"),
  d = t("373140");

function u(e) {
  let {
    guild: n,
    speakers: t,
    speakerCount: a,
    className: u
  } = e, o = t.slice(0, 5), v = o.map(e => {
    var t, a;
    return (0, l.jsxs)("div", {
      className: d.speakerContainer,
      children: [(0, l.jsx)(s.Avatar, {
        src: null == e ? void 0 : null === (t = e.user) || void 0 === t ? void 0 : t.getAvatarURL(n.id, 20),
        size: s.AvatarSizes.SIZE_20,
        className: d.avatar,
        "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
      }), (0, l.jsx)("div", {
        className: d.textInGridContainer,
        children: (0, l.jsx)(s.Text, {
          color: "header-secondary",
          variant: "text-sm/normal",
          className: d.textInGrid,
          children: null == e ? void 0 : e.userNick
        })
      })]
    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
  }), h = a - o.length;
  return (0, l.jsxs)("div", {
    className: i()(d.grid, u),
    children: [v, h > 0 && (0, l.jsxs)("div", {
      className: d.speakerContainer,
      children: [(0, l.jsx)("div", {
        className: d.iconMicrophone,
        children: (0, l.jsx)(r.default, {
          height: 12
        })
      }), (0, l.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        className: d.textInGrid,
        children: c.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
          count: h
        })
      })]
    })]
  })
}