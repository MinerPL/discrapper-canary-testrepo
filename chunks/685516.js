"use strict";
n.d(t, {
  Z: function() {
    return b
  }
});
var r = n(740078),
  i = n(365100),
  a = n(558376),
  o = n(620720),
  s = n(343713),
  u = n(285363),
  c = n(874900),
  l = n(882159),
  d = n(175922),
  f = n(660027),
  p = n(67966),
  h = n(316138),
  m = n(6138),
  g = n(894417);

function _(e, t, n) {
  var o, s, c;
  return t === r.Pj ? (0, m.Z)((0, i.Z)(e, n)) : (0, l.kK)(t) ? (o = t, s = n, (c = (0, d.Z)(o, !1, "fixed" === s)).top = c.top + o.clientTop, c.left = c.left + o.clientLeft, c.bottom = c.top + o.clientHeight, c.right = c.left + o.clientWidth, c.width = o.clientWidth, c.height = o.clientHeight, c.x = c.left, c.y = c.top, c) : (0, m.Z)((0, a.Z)((0, u.Z)(e)))
}

function b(e, t, n, r) {
  var i, a, u, d = [].concat("clippingParents" === t ? (i = e, a = (0, o.Z)((0, f.Z)(i)), u = ["absolute", "fixed"].indexOf((0, c.Z)(i).position) >= 0 && (0, l.Re)(i) ? (0, s.Z)(i) : i, (0, l.kK)(u) ? a.filter(function(e) {
      return (0, l.kK)(e) && (0, p.Z)(e, u) && "body" !== (0, h.Z)(e)
    }) : []) : [].concat(t), [n]),
    m = d[0],
    b = d.reduce(function(t, n) {
      var i = _(e, n, r);
      return t.top = (0, g.Fp)(i.top, t.top), t.right = (0, g.VV)(i.right, t.right), t.bottom = (0, g.VV)(i.bottom, t.bottom), t.left = (0, g.Fp)(i.left, t.left), t
    }, _(e, m, r));
  return b.width = b.right - b.left, b.height = b.bottom - b.top, b.x = b.left, b.y = b.top, b
}