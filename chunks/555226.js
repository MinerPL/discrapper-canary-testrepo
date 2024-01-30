"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var s = n("414456"),
  i = n.n(s),
  l = n("227231"),
  r = n("49111"),
  o = n("978724"),
  u = function(e) {
    let {
      className: t,
      quest: n
    } = e;
    return (0, a.jsxs)("div", {
      className: i(o.partnerBranding, t),
      children: [(0, a.jsx)("img", {
        className: o.partnerBrandingGameTile,
        alt: "",
        src: (0, l.getGameTileAssetUrl)(n.id)
      }), (0, a.jsx)("img", {
        className: o.partnerBrandingLogotype,
        alt: n.config.messages.gameTitle,
        src: (0, l.getGameLogotypeAssetUrl)(n.id, r.ThemeTypes.DARK)
      })]
    })
  }