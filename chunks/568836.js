"use strict";
n.r(t), n.d(t, {
  HORIZONTAL_EMBED_BREAKPOINT: function() {
    return o
  },
  ResponsiveEmbedTile: function() {
    return u
  },
  ResponsiveLoadingEmbedTile: function() {
    return d
  }
});
var s = n("735250");
n("470079");
var a = n("803997"),
  l = n.n(a),
  i = n("345898"),
  r = n("240056");
let o = 660,
  u = e => (0, s.jsx)(i.default, {
    ...e,
    className: l()(e.className, {
      [r.embedVertical]: !e.isHorizontal,
      [r.embedHorizontal]: e.isHorizontal
    })
  }),
  d = e => {
    let {
      isHorizontal: t
    } = e;
    return (0, s.jsx)(u, {
      ...e,
      media: () => (0, s.jsx)("div", {
        className: l()(r.loadingDescription),
        children: (0, s.jsx)("div", {
          className: l()(r.loadingBackgroundWrapper, {
            [r.loadingBackgroundWrapperHorizontal]: t
          }),
          children: (0, s.jsx)("div", {
            className: r.loadingBackground
          })
        })
      }),
      title: () => (0, s.jsx)("div", {
        className: l()(r.loadingImage, {
          [r.loadingImageHorizontal]: t
        })
      })
    })
  }