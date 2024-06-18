var r = Object.prototype;
t.exports = function(t) {
  var e = t && t.constructor;
  return t === ("function" == typeof e && e.prototype || r)
}