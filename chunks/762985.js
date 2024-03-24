"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("77078"),
  r = n("782340"),
  o = n("513367"),
  u = function(e) {
    let {
      className: t,
      color: n = "header-primary",
      textOpacity: l = .9,
      bgOpacity: u = .2
    } = e;
    return (0, s.jsxs)(i.Text, {
      variant: "text-xxs/medium",
      color: n,
      className: a(o.promotedTag, t),
      children: [(0, s.jsx)("span", {
        className: o.promotedTagBackground,
        style: {
          opacity: u
        }
      }), (0, s.jsx)("span", {
        style: {
          opacity: l
        },
        children: r.default.Messages.QUESTS_PROMOTED
      })]
    })
  }