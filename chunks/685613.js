"use strict";
n.r(t), n.d(t, {
  GameTileSizes: function() {
    return a
  }
});
var s, a, l = n("735250");
n("470079");
var i = n("803997"),
  r = n.n(i),
  o = n("780384"),
  u = n("918701"),
  d = n("78826"),
  c = n("981631"),
  f = n("922809");
(s = a || (a = {}))[s.SMALL = 24] = "SMALL", s[s.MEDIUM = 32] = "MEDIUM";
t.default = function(e) {
  let {
    className: t,
    gameTileSize: n = 24,
    quest: s,
    theme: a = c.ThemeTypes.DARK
  } = e;
  return (0, l.jsxs)("div", {
    className: r()(f.partnerBranding, t),
    children: [(0, l.jsx)(d.QuestsAsset, {
      id: "QuestPartnerBranding_gameTile",
      children: e => (0, l.jsx)("img", {
        ref: e,
        className: f.partnerBrandingGameTile,
        alt: "",
        src: (0, u.getGameTileAssetUrl)(s),
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
      })
    }), (0, l.jsx)(d.QuestsAsset, {
      id: "QuestPartnerBranding_gameLogotype",
      children: e => (0, l.jsx)("img", {
        ref: e,
        className: f.partnerBrandingLogotype,
        alt: s.config.messages.gameTitle,
        src: (0, u.getGameLogotypeAssetUrl)(s, (0, o.isThemeDark)(a) ? c.ThemeTypes.DARK : c.ThemeTypes.LIGHT)
      })
    })]
  })
}