var n = e(807419),
  o = e(143283),
  i = e(706627),
  a = e(19235),
  u = /^\[object .+?Constructor\]$/,
  f = Object.prototype,
  c = Function.prototype.toString,
  s = f.hasOwnProperty,
  p = RegExp("^" + c.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
t.exports = function(t) {
  return !(!i(t) || o(t)) && (n(t) ? p : u).test(a(t))
}