"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var a = n("735250");
n("470079");
var l = n("120356"),
  s = n.n(l),
  i = n("481060"),
  r = n("158010"),
  o = n("871499"),
  u = n("689938"),
  d = n("883393");

function c(e) {
  let {
    className: t,
    count: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s()(d.root, d.comboIcon, t),
    children: [(0, a.jsx)(r.default, {
      className: d.icon
    }), (0, a.jsx)(i.Text, {
      color: "none",
      className: d.count,
      variant: "text-md/normal",
      children: n
    })]
  })
}

function f(e) {
  let {
    count: t,
    ...n
  } = e;
  return (0, a.jsx)(o.default, {
    label: u.default.Messages.CHANNEL_CALL_PARTICIPANTS,
    iconComponent: e => {
      let {
        className: n
      } = e;
      return (0, a.jsx)(c, {
        className: n,
        count: t
      })
    },
    tooltipPosition: "bottom",
    ...n
  })
}