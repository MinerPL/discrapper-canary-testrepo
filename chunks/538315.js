var r = Array.prototype.slice,
  i = n(560640),
  a = Object.keys,
  s = a ? function(e) {
return a(e);
  } : n(973351),
  o = Object.keys;
s.shim = function() {
  return Object.keys ? ! function() {
var e = Object.keys(arguments);
return e && e.length === arguments.length;
  }(1, 2) && (Object.keys = function(e) {
return i(e) ? o(r.call(e)) : o(e);
  }) : Object.keys = s, Object.keys || s;
}, e.exports = s;