"use strict";
n.r(t), n("47120");
var a = n("470079"),
  l = n("688619"),
  s = n.n(l),
  i = n("399606"),
  r = n("481060"),
  o = n("866442"),
  u = n("607070"),
  d = n("220082"),
  c = n("168631"),
  f = n("981631");
t.default = e => {
  let t = (0, i.useStateFromStores)([u.default], () => u.default.saturation),
    [n, l] = (0, d.useAvatarColors)(e, r.tokens.colors.BACKGROUND_FLOATING.resolve({
      theme: f.ThemeTypes.DARK,
      saturation: t
    }).hex());
  return a.useMemo(() => {
    let e = (0, o.hex2int)(n),
      t = (0, o.hex2int)(l),
      a = (0, o.getDarkness)(e) > .5 ? n : s()(n).darken(2).hex(),
      i = (0, o.getDarkness)(t) > .5 ? l : s()(l).darken(2).hex(),
      r = 1;
    for (;
      (0, c.getProfileTheme)((0, o.hex2int)(a)) === f.ThemeTypes.LIGHT && r < 8;) a = (0, o.getDarkness)(e) > .5 ? n : s()(n).darken(2 + r).hex(), r += 1;
    for (r = 1;
      (0, c.getProfileTheme)((0, o.hex2int)(i)) === f.ThemeTypes.LIGHT && r < 8;) i = (0, o.getDarkness)(t) > .5 ? l : s()(l).darken(2 + r).hex(), r += 1;
    return {
      primaryColor: a,
      secondaryColor: i
    }
  }, [n, l])
}