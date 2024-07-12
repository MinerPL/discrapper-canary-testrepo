var n = r(585606),
  _ = r(443735),
  a = r(402428),
  i = r(207757),
  o = r(830911),
  E = r(556868),
  s = Object.prototype.hasOwnProperty;
t.exports = function(t, e) {
  var r = a(t),
c = !r && _(t),
I = !r && !c && i(t),
R = !r && !c && !I && E(t),
T = r || c || I || R,
u = T ? n(t.length, String) : [],
l = u.length;
  for (var A in t)
(e || s.call(t, A)) && !(T && ('length' == A || I && ('offset' == A || 'parent' == A) || R && ('buffer' == A || 'byteLength' == A || 'byteOffset' == A) || o(A, l))) && u.push(A);
  return u;
};