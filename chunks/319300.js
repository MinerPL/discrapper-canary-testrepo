"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(260034),
  s = n(900927),
  o = n(659101),
  a = n(689938),
  l = n(379916);

function u(e) {
  let {
    userId: t,
    guildId: n
  } = e;
  return (0, i.jsx)(o.Z, {
    children: (0, i.jsxs)("div", {
      children: [(0, i.jsx)(r.X, {
        variant: "eyebrow",
        className: l.title,
        children: a.Z.Messages.USER_PROFILE_MEMBER_SINCE
      }), (0, i.jsx)(s.Z, {
        userId: t,
        guildId: n,
        textClassName: l.body
      })]
    })
  })
}