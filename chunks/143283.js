var n, o = e(54640);
var i = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
t.exports = function(t) {
  return !!i && i in t
}