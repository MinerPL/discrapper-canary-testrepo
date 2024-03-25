"use strict";
s.r(t), s.d(t, {
  useCardVariantsInfo: function() {
    return u
  }
});
var a = s("446674"),
  r = s("206230"),
  n = s("359499"),
  i = s("907648"),
  l = s("421046");
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
      s = (0, n.useShouldShowConfettiAndGlow)() && !t,
      u = {
        [i.CardVariants.DEFAULT]: o,
        [i.CardVariants.REWARD]: {
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
    return null != e ? u[e] : u[i.CardVariants.DEFAULT]
  }