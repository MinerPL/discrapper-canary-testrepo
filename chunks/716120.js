"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var r = a("37983");
a("884691");
var n = a("414456"),
  o = a.n(n),
  s = a("65597"),
  i = a("854588"),
  l = a("206230"),
  c = a("284679"),
  d = a("491232"),
  u = a("408381"),
  f = a("467618"),
  C = e => {
    let {
      asset: t,
      assetUrlOverride: a,
      size: n = u.MAX_CONTENT_WIDTH,
      addGradient: C = !0,
      className: g,
      style: p,
      children: b
    } = e, E = (0, s.useStateFromStores)([l.default], () => l.default.saturation);
    return (0, r.jsx)("div", {
      className: o(f.banner, g),
      style: (() => {
        if (null == t) return p;
        if (1 === E) return null != a ? {
          ...p,
          backgroundImage: C ? "url(".concat(a, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(a, ")"),
          backgroundBlendMode: "multiply",
          backgroundSize: "cover"
        } : {
          ...p,
          backgroundImage: "url(".concat((0, d.getCollectiblesAssetURL)(t, {
            size: n,
            format: "jpg"
          }), ")"),
          backgroundSize: "cover"
        };
        let e = (0, c.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - E);
        return {
          ...p,
          backgroundImage: "linear-gradient(".concat(e, ", ").concat(e, "), url(").concat((0, d.getCollectiblesAssetURL)(t, {
            size: n,
            format: "jpg"
          }), ")"),
          backgroundBlendMode: "saturation",
          backgroundSize: "cover"
        }
      })(),
      children: b
    })
  }