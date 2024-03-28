"use strict";
r.r(t);
var a = r("735250");
r("470079");
var o = r("803997"),
  n = r.n(o),
  l = r("399606"),
  s = r("376345"),
  i = r("607070"),
  c = r("302221"),
  u = r("884697"),
  d = r("372654"),
  f = r("59712");
t.default = e => {
  let {
    asset: t,
    assetUrlOverride: r,
    size: o = d.MAX_CONTENT_WIDTH,
    addGradient: g = !0,
    className: C,
    style: p,
    children: b
  } = e, y = (0, l.useStateFromStores)([i.default], () => i.default.saturation);
  return (0, a.jsx)("div", {
    className: n()(f.banner, C),
    style: (() => {
      if (null == t) return p;
      if (1 === y) return null != r ? {
        ...p,
        backgroundImage: g ? "url(".concat(r, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(r, ")"),
        backgroundBlendMode: "multiply",
        backgroundSize: "cover"
      } : {
        ...p,
        backgroundImage: "url(".concat((0, u.getCollectiblesAssetURL)(t, {
          size: o,
          format: "jpg"
        }), ")"),
        backgroundSize: "cover"
      };
      let e = (0, c.hexOpacityToRgba)(s.default.unsafe_rawColors.BLACK_500, 1 - y);
      return {
        ...p,
        backgroundImage: "linear-gradient(".concat(e, ", ").concat(e, "), url(").concat((0, u.getCollectiblesAssetURL)(t, {
          size: o,
          format: "jpg"
        }), ")"),
        backgroundBlendMode: "saturation",
        backgroundSize: "cover"
      }
    })(),
    children: b
  })
}