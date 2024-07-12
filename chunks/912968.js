var r = n(484155),
  i = n(841566),
  a = n(290677),
  o = n(551023),
  s = n(682653),
  l = n(454745),
  u = Object.prototype.hasOwnProperty;
e.exports = function(e, t) {
  var n = a(e),
c = !n && i(e),
d = !n && !c && o(e),
_ = !n && !c && !d && l(e),
E = n || c || d || _,
f = E ? r(e.length, String) : [],
h = f.length;
  for (var p in e)
(t || u.call(e, p)) && !(E && ('length' == p || d && ('offset' == p || 'parent' == p) || _ && ('buffer' == p || 'byteLength' == p || 'byteOffset' == p) || s(p, h))) && f.push(p);
  return f;
};