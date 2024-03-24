"use strict";
l.r(t), l.d(t, {
  default: function() {
    return p
  }
});
var a = l("37983");
l("884691");
var s = l("414456"),
  n = l.n(s),
  i = l("227422"),
  r = l("476263"),
  c = l("547620"),
  u = l("646718"),
  o = l("782340"),
  d = l("877670");
let h = {
    XXSMALL: d.xxsmall,
    XSMALL: d.xsmall,
    SMALL: d.small,
    MEDIUM: d.medium,
    LARGE: d.large
  },
  f = e => {
    let t, {
      game: s,
      guild: f,
      skuId: p,
      pid: I,
      className: A,
      guildClassName: L,
      size: m = h.MEDIUM
    } = e;
    if (null != p && (t = function(e) {
        if (null == e) return null;
        switch (e) {
          case u.PremiumSubscriptionSKUs.GUILD:
            return l("229806");
          case u.PremiumSubscriptionSKUs.TIER_0:
            return l("654125");
          case u.PremiumSubscriptionSKUs.TIER_1:
            return l("108647");
          case u.PremiumSubscriptionSKUs.TIER_2:
          case u.PremiumSubscriptionSKUs.LEGACY:
            return l("943005");
          default:
            return null
        }
      }(p)), null != s && null == t && (t = s.getIconURL(function(e) {
        switch (e) {
          case h.XXSMALL:
            return 16;
          case h.XSMALL:
            return 24;
          case h.SMALL:
            return 30;
          case h.MEDIUM:
            return 40;
          case h.LARGE:
            return 60;
          default:
            return 80
        }
      }(m))), null == (t = (0, i.default)(I, t)) && null != f) {
      let e = function(e) {
        switch (e) {
          case h.XSMALL:
            return r.default.Sizes.SMALLER;
          case h.SMALL:
            return r.default.Sizes.SMALL;
          case h.LARGE:
            return r.default.Sizes.LARGE;
          default:
          case h.MEDIUM:
            return r.default.Sizes.MEDIUM
        }
      }(m);
      return (0, a.jsx)(r.default, {
        className: n(d.gameIcon, L, A),
        guild: f,
        size: e
      })
    }
    if (null == t) return (0, a.jsx)(c.default, {
      className: n(d.gameIcon, m, A)
    });
    let g = null == s ? void 0 : s.name,
      S = null != g && "" !== g ? o.default.Messages.APPLICATION_ICON_A11Y_LABEL.format({
        applicationName: g
      }) : o.default.Messages.APPLICATION_ICON_NO_NAME_A11Y_LABEL;
    return (0, a.jsx)("img", {
      alt: S,
      src: t,
      className: n(d.gameIcon, m, A)
    })
  };
f.Sizes = h;
var p = f