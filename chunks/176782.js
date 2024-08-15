n.d(t, {
  _: function() {
return c;
  }
});
var s = n(442837),
  a = n(607070),
  r = n(314684),
  i = n(391110),
  l = n(607194);
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
  c = e => {
let t = (0, s.e7)([a.Z], () => a.Z.useReducedMotion),
  n = (0, r.IB)() && !t,
  c = {
    [i.zW.DEFAULT]: o,
    [i.zW.REWARD]: {
      subtitle: {
        onlyShowOnHover: !0,
        textVariant: 'text-sm/semibold'
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
        className: n ? l.glowingCardContainer : void 0
      }
    }
  };
return null != e ? c[e] : c[i.zW.DEFAULT];
  };