"use strict";
n.r(t), n("47120");
var a = n("470079"),
  l = n("688619"),
  s = n.n(l),
  i = n("399606"),
  r = n("866442"),
  o = n("607070"),
  u = n("220082"),
  d = n("981631");
t.default = e => {
  var t, l, c, f, h, m;
  let p;
  p = n("481060").tokens;
  let E = (0, i.useStateFromStores)([o.default], () => o.default.saturation),
    [C, g] = (0, u.useAvatarColors)(e, null !== (m = null == p ? void 0 : null === (h = p.colors) || void 0 === h ? void 0 : null === (f = h.BACKGROUND_FLOATING) || void 0 === f ? void 0 : null === (c = f.resolve) || void 0 === c ? void 0 : null === (l = c.call(f, {
      theme: d.ThemeTypes.DARK,
      saturation: E
    })) || void 0 === l ? void 0 : null === (t = l.hex) || void 0 === t ? void 0 : t.call(l)) && void 0 !== m ? m : "#000");
  return a.useMemo(() => {
    let e = (0, r.hex2int)(C),
      t = (0, r.hex2int)(g);
    for (let t = 1; t < 8 && !((0, r.getDarkness)(e) >= .725); t++) e = s()(e).darken(.5).num();
    for (let e = 1; e < 8 && !((0, r.getDarkness)(t) >= .725); e++) t = s()(t).darken(.5).num();
    let n = (0, r.int2hex)(e);
    return {
      primaryColor: n,
      secondaryColor: (0, r.int2hex)(t)
    }
  }, [C, g])
}