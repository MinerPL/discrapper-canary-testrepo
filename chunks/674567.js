"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var a = n("884691"),
  l = n("10371"),
  s = n.n(l),
  i = n("65597"),
  r = n("77078"),
  u = n("509043"),
  o = n("206230"),
  d = n("462274"),
  c = n("388491"),
  f = n("49111"),
  h = e => {
    let t = (0, i.useStateFromStores)([o.default], () => o.default.saturation),
      [n, l] = (0, d.useAvatarColors)(e, r.tokens.colors.BACKGROUND_FLOATING.resolve({
        theme: f.ThemeTypes.DARK,
        saturation: t
      }).hex());
    return a.useMemo(() => {
      let e = (0, u.hex2int)(n),
        t = (0, u.hex2int)(l),
        a = (0, u.getDarkness)(e) > .5 ? n : s(n).darken(2).hex(),
        i = (0, u.getDarkness)(t) > .5 ? l : s(l).darken(2).hex(),
        r = 1;
      for (;
        (0, c.getProfileTheme)((0, u.hex2int)(a)) === f.ThemeTypes.LIGHT && r < 8;) a = (0, u.getDarkness)(e) > .5 ? n : s(n).darken(2 + r).hex(), r += 1;
      for (r = 1;
        (0, c.getProfileTheme)((0, u.hex2int)(i)) === f.ThemeTypes.LIGHT && r < 8;) i = (0, u.getDarkness)(t) > .5 ? l : s(l).darken(2 + r).hex(), r += 1;
      return {
        primaryColor: a,
        secondaryColor: i
      }
    }, [n, l])
  }