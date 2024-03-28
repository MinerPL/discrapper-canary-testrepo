"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("735250");
n("470079");
var l = n("27457"),
  s = n("131951"),
  i = n("581755");

function r(e) {
  let {
    aspectRatio: t,
    blocked: n,
    channel: r,
    className: o,
    focused: u,
    children: d,
    inCall: c,
    inPopout: f,
    noBorder: h,
    onClick: m,
    onContextMenu: p,
    onDoubleClick: E,
    onVideoResize: C,
    paused: g,
    pulseSpeakingIndicator: S,
    participant: _,
    width: T,
    ...I
  } = e, A = s.default.getVideoComponent();
  return (0, a.jsx)("div", {
    style: {
      width: T
    },
    className: i.spaceBetweenTiles,
    children: (0, a.jsxs)("div", {
      className: i.tileSizer,
      style: {
        aspectRatio: t
      },
      children: [(0, a.jsx)(l.default, {
        blocked: n,
        channel: r,
        className: o,
        focused: u,
        inCall: c,
        inPopout: f,
        noBorder: h,
        onClick: m,
        onContextMenu: p,
        onDoubleClick: E,
        onVideoResize: C,
        participant: _,
        paused: g,
        pulseSpeakingIndicator: S,
        videoComponent: A,
        width: T,
        ...I
      }), d]
    })
  })
}