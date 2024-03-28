"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("803997"),
  s = n.n(l),
  i = n("481060"),
  r = n("521370");

function o(e) {
  let {
    hasMentions: t,
    truncatedCount: n,
    className: l
  } = e;
  return (0, a.jsx)(i.Text, {
    className: s()(r.unreadCount, l, {
      [r.mention]: t
    }),
    variant: "text-xs/normal",
    children: n
  })
}