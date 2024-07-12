var r = n(867996),
  i = n(350780),
  a = n(661233),
  o = n(785775),
  s = /^\[object .+?Constructor\]$/,
  l = Object.prototype,
  u = Function.prototype.toString,
  c = l.hasOwnProperty,
  d = RegExp('^' + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
e.exports = function(e) {
  return !(!a(e) || i(e)) && (r(e) ? d : s).test(o(e));
};