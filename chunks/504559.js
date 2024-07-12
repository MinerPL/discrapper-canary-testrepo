var e = n(97131).f;
t.exports = function(t, r, n) {
  n in t || e(t, n, {
configurable: !0,
get: function() {
  return r[n];
},
set: function(t) {
  r[n] = t;
}
  });
};