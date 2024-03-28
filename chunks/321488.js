"use strict";
n.r(t);
var a, s, l = n("735250");
n("470079");
var i = n("803997"),
  r = n.n(i),
  o = n("873546"),
  u = n("481060"),
  d = n("503179");

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
      className: r()(d.actionButton, {
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
}(a = s || (s = {}))[a.ACCEPT = 0] = "ACCEPT", a[a.DENY = 1] = "DENY", a[a.DEFAULT = 2] = "DEFAULT", c.ActionTypes = s, t.default = c