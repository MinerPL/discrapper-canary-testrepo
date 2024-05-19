"use strict";
n.r(t);
var s = n("735250");
n("470079");
var a = n("120356"),
  l = n.n(a),
  i = n("481060"),
  r = n("689938"),
  o = n("93943");
t.default = function(e) {
  let {
    className: t,
    color: n = "header-primary",
    textOpacity: a = .9,
    bgOpacity: u = .4
  } = e;
  return (0, s.jsxs)(i.Text, {
    variant: "text-xxs/medium",
    color: n,
    className: l()(o.promotedTag, t),
    children: [(0, s.jsx)("span", {
      className: o.promotedTagBackground,
      style: {
        opacity: u
      }
    }), (0, s.jsx)("span", {
      style: {
        opacity: a
      },
      children: r.default.Messages.QUESTS_PROMOTED
    })]
  })
}