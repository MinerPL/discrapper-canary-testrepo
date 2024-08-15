n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(126387),
  i = n(632471),
  a = n(205208),
  s = n(740078);

function o(e) {
  var t, n = e.reference,
o = e.element,
l = e.placement,
u = l ? (0, r.Z)(l) : null,
c = l ? (0, i.Z)(l) : null,
d = n.x + n.width / 2 - o.width / 2,
_ = n.y + n.height / 2 - o.height / 2;
  switch (u) {
case s.we:
  t = {
    x: d,
    y: n.y - o.height
  };
  break;
case s.I:
  t = {
    x: d,
    y: n.y + n.height
  };
  break;
case s.F2:
  t = {
    x: n.x + n.width,
    y: _
  };
  break;
case s.t$:
  t = {
    x: n.x - o.width,
    y: _
  };
  break;
default:
  t = {
    x: n.x,
    y: n.y
  };
  }
  var E = u ? (0, a.Z)(u) : null;
  if (null != E) {
var f = 'y' === E ? 'height' : 'width';
switch (c) {
  case s.BL:
    t[E] = t[E] - (n[f] / 2 - o[f] / 2);
    break;
  case s.ut:
    t[E] = t[E] + (n[f] / 2 - o[f] / 2);
}
  }
  return t;
}