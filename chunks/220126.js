t = r.nmd(t);
var n = r(940151),
  _ = e && !e.nodeType && e,
  a = _ && t && !t.nodeType && t,
  i = a && a.exports === _ && n.process,
  o = function() {
try {
  var t = a && a.require && a.require('util').types;
  if (t)
    return t;
  return i && i.binding && i.binding('util');
} catch (t) {}
  }();
t.exports = o;