var r = n(816569),
  i = 'object' == typeof exports && exports && !exports.nodeType && exports,
  a = i && 'object' == typeof module && module && !module.nodeType && module,
  o = a && a.exports === i && r.Z.process,
  s = function() {
try {
  var e = a && a.require && a.require('util').types;
  if (e)
    return e;
  return o && o.binding && o.binding('util');
} catch (e) {}
  }();
t.Z = s;