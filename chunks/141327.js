var r = n(816569),
  i = 'object' == typeof exports && exports && !exports.nodeType && exports,
  a = i && 'object' == typeof module && module && !module.nodeType && module,
  s = a && a.exports === i && r.Z.process,
  o = function() {
try {
  var e = a && a.require && a.require('util').types;
  if (e)
    return e;
  return s && s.binding && s.binding('util');
} catch (e) {}
  }();
t.Z = o;