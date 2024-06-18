"use strict";
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(481060),
  a = n(973675),
  l = n(666272),
  u = n(348258),
  _ = n(689938),
  d = n(443587),
  c = n(247844);

function E(e) {
  let {
    className: t,
    icon: n,
    children: r
  } = e;
  return (0, i.jsxs)("li", {
    className: s()(d.card, t),
    children: [(0, i.jsx)(n, {
      className: d.icon
    }), (0, i.jsx)(o.Text, {
      className: d.__invalid_description,
      variant: "text-sm/medium",
      children: r
    })]
  })
}
t.Z = function(e) {
  let {
    cardClassName: t
  } = e;
  return (0, i.jsxs)("div", {
    className: d.wrapper,
    children: [(0, i.jsxs)("div", {
      className: d.content,
      children: [(0, i.jsx)(o.Heading, {
        className: d.heading,
        color: "always-white",
        variant: "heading-xxl/bold",
        children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_HEADING
      }), (0, i.jsxs)("ul", {
        className: d.cards,
        children: [(0, i.jsx)(E, {
          className: t,
          icon: a.Z,
          children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_MEMBER_LIST_ICON
        }), (0, i.jsx)(E, {
          className: t,
          icon: e => (0, i.jsx)("img", {
            className: s()(e.className, d.iconImage),
            src: c,
            alt: ""
          }),
          children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_PROFILE_BADGE
        }), (0, i.jsx)(E, {
          className: t,
          icon: u.Z,
          children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_BOOSTER_ROLE
        }), (0, i.jsx)(E, {
          className: t,
          icon: l.Z,
          children: _.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_BOOSTER_RECOGNITION_COMMUNITY_SUPPORT
        })]
      })]
    }), (0, i.jsx)("div", {
      className: d.backgroundImages
    })]
  })
}