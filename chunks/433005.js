e.exports = function(e) {
  var t = -1,
r = Array(e.size);
  return e.forEach(function(e) {
r[++t] = e;
  }), r;
};