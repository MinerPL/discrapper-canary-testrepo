"use strict";
s.r(t), s.d(t, {
  default: function() {
    return l
  }
});
var a = s("735250");
s("470079");
var n = s("481060"),
  i = s("32118");

function l(e) {
  let {
    children: t,
    ...s
  } = e;
  return (0, a.jsx)(n.Button, {
    ...s,
    size: n.Button.Sizes.SMALL,
    look: n.Button.Looks.INVERTED,
    className: i.button,
    children: t
  })
}