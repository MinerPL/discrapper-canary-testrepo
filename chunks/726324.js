"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("47120");
var a = n("735250");
n("470079");
var s = n("481060"),
  l = n("695346"),
  i = n("346656"),
  r = n("506071"),
  o = n("353254"),
  u = n("66693");

function d(e) {
  let {
    coverImageAsset: t,
    title: n,
    guild: d,
    description: c,
    children: f
  } = e, E = l.GifAutoPlay.useSetting(), h = (0, r.useIsWindowFocused)(), [_, C] = (0, o.default)(t, h && E);
  return (0, a.jsxs)("div", {
    className: u.container,
    children: [(0, a.jsx)("div", {
      ref: _,
      className: u.coverImageContainer,
      children: null != C && (0, a.jsx)("img", {
        src: C,
        alt: "",
        className: u.coverImage
      })
    }), (0, a.jsx)("div", {
      className: u.guildIconContainer,
      children: (0, a.jsx)(i.default, {
        guild: d,
        size: i.default.Sizes.XLARGE
      })
    }), (0, a.jsx)(s.Heading, {
      variant: "heading-xl/semibold",
      className: u.ctaTitle,
      children: n
    }), (0, a.jsx)(s.Text, {
      className: u.ctaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: c
    }), f]
  })
}