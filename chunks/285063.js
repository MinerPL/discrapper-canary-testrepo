"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(481060),
  s = n(916752),
  o = n(946278);

function a(e) {
  let {
    node: t
  } = e, n = (0, s.Z)(t);
  return (0, i.jsx)(r.Tooltip, {
    text: t.full,
    tooltipClassName: o.timestampTooltip,
    children: e => (0, i.jsx)("span", {
      ...e,
      className: o.timestamp,
      children: n
    })
  })
}