"use strict";
s.r(t), s.d(t, {
  useCardVariantsInfo: function() {
    return u
  }
});
var a = s("442837"),
  r = s("607070"),
  i = s("314684"),
  n = s("391110"),
  l = s("53549");
let o = {
    subtitle: {
      onlyShowOnHover: !1
    },
    description: {
      onlyShowOnHover: !0,
      className: l.cardDescription
    },
    descriptionCta: {
      onlyShowOnHover: !0
    }
  },
  u = e => {
    let t = (0, a.useStateFromStores)([r.default], () => r.default.useReducedMotion),
      s = (0, i.useShouldShowConfettiAndGlow)() && !t,
      u = {
        [n.CardVariants.DEFAULT]: o,
        [n.CardVariants.REWARD]: {
          subtitle: {
            onlyShowOnHover: !0,
            textVariant: "text-sm/semibold"
          },
          description: {
            onlyShowOnHover: !0,
            className: l.cardDescriptionTenureReward
          },
          descriptionCta: {
            onlyShowOnHover: !1,
            hideOnHoverComponent: !0,
            className: l.descriptionCTATenureReward
          },
          cardContainer: {
            className: s ? l.glowingCardContainer : void 0
          }
        }
      };
    return null != e ? u[e] : u[n.CardVariants.DEFAULT]
  }