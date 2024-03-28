"use strict";
r.r(t);
var s = r("735250"),
  l = r("470079"),
  n = r("803997"),
  a = r.n(n),
  i = r("481060"),
  c = r("897353"),
  o = r("378233"),
  u = r("689938"),
  d = r("785347");
let S = e => {
  let {
    stickerPack: t
  } = e;
  return (0, s.jsx)("div", {
    className: d.features,
    children: (0, o.isStickerPackAnimated)(t) ? (0, s.jsx)(i.Tooltip, {
      tooltipClassName: d.featuresTooltip,
      position: "top",
      text: u.default.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
      children: e => (0, s.jsx)(c.default, {
        ...e,
        className: d.featureIcon
      })
    }) : null
  })
};
t.default = l.memo(e => {
  let {
    className: t,
    stickerPack: r,
    withDescription: l = !1
  } = e;
  return (0, s.jsxs)("div", {
    className: a()(d.header, t),
    children: [(0, s.jsxs)("div", {
      className: d.title,
      children: [(0, s.jsx)(i.Heading, {
        className: d.heading,
        variant: "heading-sm/semibold",
        children: r.name
      }), (0, s.jsx)(S, {
        stickerPack: r
      })]
    }), l && null != r.description && (0, s.jsx)(i.Text, {
      className: d.description,
      variant: "text-sm/normal",
      children: r.description
    }), (0, s.jsx)("div", {
      className: d.count,
      children: u.default.Messages.STICKER_PACK_STICKER_COUNT.format({
        numStickers: r.stickers.length
      })
    })]
  })
})