"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var s = a("37983");
a("884691");
var l = a("414456"),
  r = a.n(l),
  n = a("65597"),
  o = a("854588"),
  i = a("206230"),
  u = a("284679"),
  c = a("491232"),
  d = a("408381"),
  f = a("467618"),
  m = e => {
    let {
      asset: t,
      assetUrlOverride: a,
      size: l = d.MAX_CONTENT_WIDTH,
      addGradient: m = !0,
      className: p,
      style: g,
      children: C
    } = e, h = (0, n.useStateFromStores)([i.default], () => i.default.saturation);
    return (0, s.jsx)("div", {
      className: r(f.banner, p),
      style: (() => {
        if (null == t) return g;
        if (1 === h) return null != a ? {
          ...g,
          backgroundImage: m ? "url(".concat(a, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(a, ")"),
          backgroundBlendMode: "multiply",
          backgroundSize: "cover"
        } : {
          ...g,
          backgroundImage: "url(".concat((0, c.getCollectiblesAssetURL)(t, {
            size: l,
            format: "jpg"
          }), ")"),
          backgroundSize: "cover"
        };
        let e = (0, u.hexOpacityToRgba)(o.default.unsafe_rawColors.BLACK_500, 1 - h);
        return {
          ...g,
          backgroundImage: "linear-gradient(".concat(e, ", ").concat(e, "), url(").concat((0, c.getCollectiblesAssetURL)(t, {
            size: l,
            format: "jpg"
          }), ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: C
    })
  }