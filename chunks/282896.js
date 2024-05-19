"use strict";
r.r(t);
var l = r("735250"),
  n = r("470079"),
  s = r("120356"),
  i = r.n(s),
  a = r("481060"),
  o = r("897353"),
  c = r("378233"),
  u = r("689938"),
  d = r("48875");
let m = e => {
  let {
    stickerPack: t
  } = e;
  return (0, l.jsx)("div", {
    className: d.features,
    children: (0, c.isStickerPackAnimated)(t) ? (0, l.jsx)(a.Tooltip, {
      tooltipClassName: d.featuresTooltip,
      position: "top",
      text: u.default.Messages.STICKER_PICKER_PACK_DETAILS_ANIMATED,
      children: e => (0, l.jsx)(o.default, {
        ...e,
        className: d.featureIcon
      })
    }) : null
  })
};
t.default = n.memo(e => {
  let {
    className: t,
    stickerPack: r,
    withDescription: n = !1
  } = e;
  return (0, l.jsxs)("div", {
    className: i()(d.header, t),
    children: [(0, l.jsxs)("div", {
      className: d.title,
      children: [(0, l.jsx)(a.Heading, {
        className: d.heading,
        variant: "heading-sm/semibold",
        children: r.name
      }), (0, l.jsx)(m, {
        stickerPack: r
      })]
    }), n && null != r.description && (0, l.jsx)(a.Text, {
      className: d.description,
      variant: "text-sm/normal",
      children: r.description
    }), (0, l.jsx)("div", {
      className: d.count,
      children: u.default.Messages.STICKER_PACK_STICKER_COUNT.format({
        numStickers: r.stickers.length
      })
    })]
  })
})