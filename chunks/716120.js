"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var l = a("37983");
a("884691");
var s = a("414456"),
  r = a.n(s),
  n = a("65597"),
  i = a("854588"),
  o = a("206230"),
  c = a("284679"),
  u = a("491232"),
  d = a("408381"),
  f = a("467618"),
  m = e => {
    let {
      asset: t,
      assetUrlOverride: a,
      size: s = d.MAX_CONTENT_WIDTH,
      addGradient: m = !0,
      className: p,
      style: g,
      children: C
    } = e, h = (0, n.useStateFromStores)([o.default], () => o.default.saturation);
    return (0, l.jsx)("div", {
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
          backgroundImage: "url(".concat((0, u.getCollectiblesAssetURL)(t, {
            size: s,
            format: "jpg"
          }), ")"),
          backgroundSize: "cover"
        };
        let e = (0, c.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - h);
        return {
          ...g,
          backgroundImage: "linear-gradient(".concat(e, ", ").concat(e, "), url(").concat((0, u.getCollectiblesAssetURL)(t, {
            size: s,
            format: "jpg"
          }), ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: C
    })
  }