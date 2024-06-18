"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(735250);
n(470079);
var r = n(481060);

function s(e) {
  let {
    children: t,
    className: n,
    size: s = r.Button.Sizes.SMALL,
    ...o
  } = e;
  return (0, i.jsx)(r.Button, {
    ...o,
    color: r.Button.Colors.BRAND,
    size: s,
    className: n,
    children: t
  })
}