var n = e(900624),
  o = e(117973),
  i = e(302767);
t.exports = function(t, r) {
  var e = this.__data__;
  if (e instanceof n) {
    var a = e.__data__;
    if (!o || a.length < 199) return a.push([t, r]), this.size = ++e.size, this;
    e = this.__data__ = new i(a)
  }
  return e.set(t, r), this.size = e.size, this
}