"use strict";
var i = n(735250);
n(470079);
var r = n(399606),
  s = n(481060),
  o = n(607070),
  a = n(689938),
  l = n(440476),
  u = n(567949),
  _ = n(552781),
  d = n(952567),
  c = n(807159);

function E(e) {
  let {
    description: t,
    heading: n,
    imgSrc: r
  } = e;
  return (0, i.jsxs)("div", {
    className: l.topPerksCard,
    children: [(0, i.jsx)("img", {
      className: l.topPerksCardImage,
      src: r,
      alt: ""
    }), (0, i.jsx)(s.Heading, {
      className: l.topPerksCardHeading,
      variant: "heading-lg/extrabold",
      children: n
    }), (0, i.jsx)(s.Text, {
      className: l.topPerksCardDescription,
      variant: "text-sm/normal",
      children: t
    })]
  })
}
t.Z = function() {
  let e = (0, r.e7)([o.Z], () => o.Z.useReducedMotion);
  return (0, i.jsxs)("div", {
    className: l.wrapper,
    children: [(0, i.jsx)(s.Heading, {
      className: l.heading,
      variant: "heading-xxl/extrabold",
      children: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HEADING
    }), (0, i.jsxs)("div", {
      className: l.topPerksCards,
      children: [(0, i.jsx)(E, {
        description: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_DESCRIPTION,
        heading: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_HD_STREAMING_HEADING,
        imgSrc: d
      }), (0, i.jsx)(E, {
        description: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_DESCRIPTION,
        heading: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_CARDS_ANIMATED_GUILD_ICON_HEADING,
        imgSrc: e ? _ : u
      }), (0, i.jsx)(E, {
        description: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_DESCRIPTION,
        heading: a.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_TOP_PERKS_VANITY_URL_HEADING,
        imgSrc: c
      })]
    })]
  })
}