"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var r = n(126387),
  i = n(632471),
  a = n(205208),
  o = n(740078);

function s(e) {
  var t, n = e.reference,
    s = e.element,
    u = e.placement,
    c = u ? (0, r.Z)(u) : null,
    l = u ? (0, i.Z)(u) : null,
    d = n.x + n.width / 2 - s.width / 2,
    f = n.y + n.height / 2 - s.height / 2;
  switch (c) {
    case o.we:
      t = {
        x: d,
        y: n.y - s.height
      };
      break;
    case o.I:
      t = {
        x: d,
        y: n.y + n.height
      };
      break;
    case o.F2:
      t = {
        x: n.x + n.width,
        y: f
      };
      break;
    case o.t$:
      t = {
        x: n.x - s.width,
        y: f
      };
      break;
    default:
      t = {
        x: n.x,
        y: n.y
      }
  }
  var p = c ? (0, a.Z)(c) : null;
  if (null != p) {
    var h = "y" === p ? "height" : "width";
    switch (l) {
      case o.BL:
        t[p] = t[p] - (n[h] / 2 - s[h] / 2);
        break;
      case o.ut:
        t[p] = t[p] + (n[h] / 2 - s[h] / 2)
    }
  }
  return t
}