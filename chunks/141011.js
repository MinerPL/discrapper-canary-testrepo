"use strict";
r.r(t);
var o = r("735250"),
  n = r("470079"),
  a = r("120356"),
  l = r.n(a),
  s = r("399606"),
  i = r("376345"),
  c = r("607070"),
  u = r("302221"),
  d = r("884697"),
  f = r("372654"),
  C = r("106556");
t.default = e => {
  let {
    asset: t,
    size: r = f.MAX_CONTENT_WIDTH,
    addGradient: a = !1,
    className: g,
    style: p,
    children: b,
    blur: m = !1
  } = e, v = (0, s.useStateFromStores)([c.default], () => c.default.saturation), y = n.useMemo(() => {
    if (null == t) return p;
    let e = (0, d.getCollectiblesAssetURL)(t, {
        size: r,
        format: "jpg"
      }),
      o = m ? {
        filter: "blur(2px)",
        transform: "scale(1.02)"
      } : {};
    if (1 === v) return {
      ...p,
      backgroundImage: a ? "url(".concat(e, "), linear-gradient(180deg, rgba(0, 71, 94, 0.6) 5%, rgba(9, 33, 65, 0.6) 95%)") : "url(".concat(e, ")"),
      backgroundBlendMode: "multiply",
      backgroundSize: "cover",
      ...o
    };
    let n = (0, u.hexOpacityToRgba)(i.default.unsafe_rawColors.BLACK_500, 1 - v);
    return {
      ...p,
      backgroundImage: "linear-gradient(".concat(n, ", ").concat(n, "), url(").concat(e, ")"),
      backgroundBlendMode: "saturation",
      backgroundSize: "cover",
      ...o
    }
  }, [t, r, v, p, m, a]);
  return (0, o.jsx)("div", {
    className: l()(C.banner, g),
    style: y,
    children: b
  })
}