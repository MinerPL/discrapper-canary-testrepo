"use strict";
n.r(t), n.d(t, {
  GameTileSizes: function() {
    return l
  },
  default: function() {
    return E
  }
});
var s, l, a = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("819855"),
  u = n("227231"),
  d = n("49111"),
  c = n("194829");
(s = l || (l = {}))[s.SMALL = 24] = "SMALL", s[s.MEDIUM = 32] = "MEDIUM";
var E = function(e) {
  let {
    className: t,
    gameTileSize: n = 24,
    quest: s,
    theme: l = d.ThemeTypes.DARK
  } = e;
  return (0, a.jsxs)("div", {
    className: r(c.partnerBranding, t),
    children: [(0, a.jsx)("img", {
      className: c.partnerBrandingGameTile,
      alt: "",
      src: (0, u.getGameTileAssetUrl)(s.id),
      style: {
        borderRadius: function(e) {
          switch (e) {
            case 24:
              return 3;
            case 32:
              return 4
          }
        }(n),
        width: n,
        height: n
      }
    }), (0, a.jsx)("img", {
      className: c.partnerBrandingLogotype,
      alt: s.config.messages.gameTitle,
      src: (0, u.getGameLogotypeAssetUrl)(s.id, (0, o.isThemeDark)(l) ? d.ThemeTypes.DARK : d.ThemeTypes.LIGHT)
    })]
  })
}