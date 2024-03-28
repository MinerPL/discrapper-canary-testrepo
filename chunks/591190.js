"use strict";
n.r(t);
var a = n("735250");
n("470079");
var s = n("803997"),
  l = n.n(s),
  i = n("691312");
let r = () => (0, a.jsx)("div", {
    className: i.spacer
  }),
  o = () => (0, a.jsx)("div", {
    className: i.category
  }),
  u = e => {
    let {
      width: t
    } = e;
    return (0, a.jsxs)("div", {
      className: i.channel,
      children: [(0, a.jsx)("div", {
        className: i.channelIcon
      }), (0, a.jsx)("div", {
        className: i.channelName,
        style: {
          width: "".concat(t, "px")
        }
      })]
    })
  };
t.default = e => {
  let {
    withBannerPadding: t
  } = e;
  return (0, a.jsxs)("div", {
    className: l()(i.container, {
      [i.bannerPadding]: t
    }),
    children: [(0, a.jsx)(o, {}), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 74
    }), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 70
    }), (0, a.jsx)(u, {
      width: 112
    }), (0, a.jsx)(u, {
      width: 175
    }), (0, a.jsx)(r, {}), (0, a.jsx)(o, {}), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 74
    }), (0, a.jsx)(u, {
      width: 100
    }), (0, a.jsx)(u, {
      width: 70
    }), (0, a.jsx)(u, {
      width: 112
    }), (0, a.jsx)(u, {
      width: 56
    })]
  })
}