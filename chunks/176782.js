"use strict";
s.r(t), s.d(t, {
  useCardVariantsInfo: function() {
    return u
  }
});
var a = s("442837"),
  i = s("607070"),
  r = s("314684"),
  n = s("391110"),
  l = s("518400");
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
    let t = (0, a.useStateFromStores)([i.default], () => i.default.useReducedMotion),
      s = (0, r.useShouldShowConfettiAndGlow)() && !t,
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