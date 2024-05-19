"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("481060"),
  r = n("918701"),
  o = n("644646"),
  u = n("456030");
t.default = function(e) {
  let {
    className: t,
    autoplay: n,
    quest: l,
    questContent: d,
    questExperimentLocation: c
  } = e, f = (0, r.getQuestsInstructionsToWinReward)({
    quest: l,
    location: c
  });
  return (0, a.jsxs)("div", {
    className: s()(u.wrapper, t),
    style: {
      color: l.config.colors.primary
    },
    children: [(0, a.jsx)(o.default, {
      autoplay: n,
      className: u.rewardTile,
      quest: l,
      questContent: d
    }), (0, a.jsx)(i.Text, {
      className: u.instructions,
      variant: "text-sm/normal",
      color: "text-normal",
      children: f
    })]
  })
}