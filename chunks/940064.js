"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var i = l("735250");
l("470079");
var a = l("803997"),
  n = l.n(a),
  s = l("481060"),
  r = l("665692"),
  c = l("416182");

function o(e) {
  let {
    commands: t,
    className: l
  } = e;
  return (0, i.jsx)("div", {
    className: n()(c.list, l),
    children: t.map(e => (0, i.jsxs)("div", {
      className: c.row,
      children: [(0, i.jsxs)(s.Text, {
        className: c.commandName,
        variant: "text-md/semibold",
        color: "header-primary",
        children: [r.COMMAND_SENTINEL, e.displayName]
      }), (0, i.jsx)(s.Text, {
        variant: "text-md/normal",
        children: e.displayDescription
      })]
    }, e.id))
  })
}