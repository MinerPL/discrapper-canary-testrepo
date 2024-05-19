"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("735250");
n("470079");
var r = n("260034"),
  a = n("81334"),
  s = n("659101"),
  o = n("689938"),
  l = n("379916");

function u(e) {
  let {
    userId: t,
    guildId: n
  } = e;
  return (0, i.jsx)(s.default, {
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsx)(r.Heading, {
        variant: "eyebrow",
        className: l.title,
        children: o.default.Messages.USER_PROFILE_MEMBER_SINCE
      }), (0, i.jsx)(a.default, {
        userId: t,
        guildId: n,
        textClassName: l.body
      })]
    })
  })
}