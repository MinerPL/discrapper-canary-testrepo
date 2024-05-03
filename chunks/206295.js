"use strict";
n.r(t), n("47120");
var a = n("470079"),
  l = n("688619"),
  s = n.n(l),
  i = n("399606"),
  r = n("866442"),
  o = n("607070"),
  u = n("220082"),
  d = n("168631"),
  c = n("981631");
t.default = e => {
  var t, l, f, h, m, p;
  let E;
  E = n("481060").tokens;
  let C = (0, i.useStateFromStores)([o.default], () => o.default.saturation),
    [g, S] = (0, u.useAvatarColors)(e, null !== (p = null == E ? void 0 : null === (m = E.colors) || void 0 === m ? void 0 : null === (h = m.BACKGROUND_FLOATING) || void 0 === h ? void 0 : null === (f = h.resolve) || void 0 === f ? void 0 : null === (l = f.call(h, {
      theme: c.ThemeTypes.DARK,
      saturation: C
    })) || void 0 === l ? void 0 : null === (t = l.hex) || void 0 === t ? void 0 : t.call(l)) && void 0 !== p ? p : "#000");
  return a.useMemo(() => {
    let e = (0, r.hex2int)(g),
      t = (0, r.hex2int)(S),
      n = (0, r.getDarkness)(e) > .5 ? g : s()(g).darken(2).hex(),
      a = (0, r.getDarkness)(t) > .5 ? S : s()(S).darken(2).hex(),
      l = 1;
    for (;
      (0, d.getProfileTheme)((0, r.hex2int)(n)) === c.ThemeTypes.LIGHT && l < 8;) n = (0, r.getDarkness)(e) > .5 ? g : s()(g).darken(2 + l).hex(), l += 1;
    for (l = 1;
      (0, d.getProfileTheme)((0, r.hex2int)(a)) === c.ThemeTypes.LIGHT && l < 8;) a = (0, r.getDarkness)(t) > .5 ? S : s()(S).darken(2 + l).hex(), l += 1;
    return {
      primaryColor: n,
      secondaryColor: a
    }
  }, [g, S])
}