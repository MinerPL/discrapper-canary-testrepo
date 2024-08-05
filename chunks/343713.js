n.d(t, {
  Z: function() {
return d;
  }
});
var r = n(49691),
  i = n(316138),
  a = n(874900),
  s = n(882159),
  o = n(953177),
  l = n(660027),
  u = n(408431);

function c(e) {
  return (0, s.Re)(e) && 'fixed' !== (0, a.Z)(e).position ? e.offsetParent : null;
}

function d(e) {
  for (var t = (0, r.Z)(e), n = c(e); n && (0, o.Z)(n) && 'static' === (0, a.Z)(n).position;)
n = c(n);
  return n && ('html' === (0, i.Z)(n) || 'body' === (0, i.Z)(n) && 'static' === (0, a.Z)(n).position) ? t : n || function(e) {
var t = /firefox/i.test((0, u.Z)());
if (/Trident/i.test((0, u.Z)()) && (0, s.Re)(e) && 'fixed' === (0, a.Z)(e).position)
  return null;
var n = (0, l.Z)(e);
for ((0, s.Zq)(n) && (n = n.host);
  (0, s.Re)(n) && 0 > [
    'html',
    'body'
  ].indexOf((0, i.Z)(n));) {
  var r = (0, a.Z)(n);
  if ('none' !== r.transform || 'none' !== r.perspective || 'paint' === r.contain || -1 !== [
      'transform',
      'perspective'
    ].indexOf(r.willChange) || t && 'filter' === r.willChange || t && r.filter && 'none' !== r.filter)
    return n;
  n = n.parentNode;
}
return null;
  }(e) || t;
}