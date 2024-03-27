"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a, s, l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  o = n("394846"),
  u = n("77078"),
  d = n("940675");

function c(e) {
  let {
    icon: t,
    tooltip: n,
    onClick: a,
    actionType: s = 2,
    shouldHighlight: i
  } = e;
  return (0, l.jsx)(u.Tooltip, {
    text: n,
    children: e => (0, l.jsx)(u.Clickable, {
      ...e,
      "aria-label": n,
      onClick: a,
      className: r(d.actionButton, {
        [d.actionAccept]: 0 === s,
        [d.actionDeny]: 1 === s,
        [d.highlight]: i,
        [d.actionButtonMobile]: o.isMobile
      }),
      children: (0, l.jsx)(t, {
        className: d.icon
      })
    })
  })
}(a = s || (s = {}))[a.ACCEPT = 0] = "ACCEPT", a[a.DENY = 1] = "DENY", a[a.DEFAULT = 2] = "DEFAULT", c.ActionTypes = s;
var f = c