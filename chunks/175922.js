n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(882159),
  i = n(894417),
  a = n(49691),
  o = n(436857);

function s(e, t, n) {
  void 0 === t && (t = !1), void 0 === n && (n = !1);
  var s = e.getBoundingClientRect(),
l = 1,
u = 1;
  t && (0, r.Re)(e) && (l = e.offsetWidth > 0 && (0, i.NM)(s.width) / e.offsetWidth || 1, u = e.offsetHeight > 0 && (0, i.NM)(s.height) / e.offsetHeight || 1);
  var c = ((0, r.kK)(e) ? (0, a.Z)(e) : window).visualViewport,
d = !(0, o.Z)() && n,
_ = (s.left + (d && c ? c.offsetLeft : 0)) / l,
E = (s.top + (d && c ? c.offsetTop : 0)) / u,
f = s.width / l,
h = s.height / u;
  return {
width: f,
height: h,
top: E,
right: _ + f,
bottom: E + h,
left: _,
x: _,
y: E
  };
}