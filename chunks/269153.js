Object.defineProperty(t, '__esModule', {
  value: !0
}), t.calculateChange = function(e, t, n) {
  var r = n.getBoundingClientRect(),
i = r.width,
a = r.height,
o = 'number' == typeof e.pageX ? e.pageX : e.touches[0].pageX,
s = 'number' == typeof e.pageY ? e.pageY : e.touches[0].pageY,
l = o - (n.getBoundingClientRect().left + window.pageXOffset),
u = s - (n.getBoundingClientRect().top + window.pageYOffset);
  l < 0 ? l = 0 : l > i && (l = i), u < 0 ? u = 0 : u > a && (u = a);
  var c = l / i,
d = 1 - u / a;
  return {
h: t.h,
s: c,
v: d,
a: t.a,
source: 'hsv'
  };
};