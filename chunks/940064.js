"use strict";
i.r(t), i.d(t, {
  default: function() {
    return c
  }
});
var l = i("735250");
i("470079");
var a = i("120356"),
  n = i.n(a),
  s = i("481060"),
  r = i("665692"),
  o = i("13646");

function c(e) {
  let {
    commands: t,
    className: i
  } = e;
  return (0, l.jsx)("div", {
    className: n()(o.list, i),
    children: t.map(e => (0, l.jsxs)("div", {
      className: o.row,
      children: [(0, l.jsxs)(s.Text, {
        className: o.commandName,
        variant: "text-md/semibold",
        color: "header-primary",
        children: [r.COMMAND_SENTINEL, e.displayName]
      }), (0, l.jsx)(s.Text, {
        variant: "text-md/normal",
        children: e.displayDescription
      })]
    }, e.id))
  })
}