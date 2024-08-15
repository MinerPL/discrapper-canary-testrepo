var n = Function.prototype.toString;
t.Z = function(e) {
  if (null != e) {
try {
  return n.call(e);
} catch (e) {}
try {
  return e + '';
} catch (e) {}
  }
  return '';
};