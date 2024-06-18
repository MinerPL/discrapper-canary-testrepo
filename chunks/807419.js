var n = e(657398),
  o = e(706627);
t.exports = function(t) {
  if (!o(t)) return !1;
  var r = n(t);
  return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
}