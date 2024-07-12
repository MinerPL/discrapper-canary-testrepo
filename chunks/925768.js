var e = n(821819);
t.exports = !e(function() {
  function t() {}
  return t.prototype.constructor = null, Object.getPrototypeOf(new t()) !== t.prototype;
});