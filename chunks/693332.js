var r = n(593007),
  i = n(382855),
  a = n(675717),
  o = n(526389),
  s = /^\[object .+?Constructor\]$/,
  l = Object.prototype,
  u = Function.prototype.toString,
  c = l.hasOwnProperty,
  d = RegExp('^' + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
t.Z = function(e) {
  return !(!(0, a.Z)(e) || (0, i.Z)(e)) && ((0, r.Z)(e) ? d : s).test((0, o.Z)(e));
};