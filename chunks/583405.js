"use strict";
var i = n(470079),
  r = n(979590),
  s = n.n(r),
  o = n(866442),
  a = n(442837),
  l = n(607070);
t.Z = e => {
  let t = (0, a.e7)([l.Z], () => l.Z.desaturateUserColors ? l.Z.saturation : 1);
  return (0, i.useMemo)(() => {
    let {
      h: n,
      s: i,
      l: r
    } = s()((0, o.Rf)(e)).toHsl(), a = s()({
      h: n,
      s: i * t,
      l: r
    });
    return {
      hex: a.toHexString(),
      hsl: a.toHslString()
    }
  }, [e, t])
}