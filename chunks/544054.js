var n = r(524556),
  _ = Object.prototype.hasOwnProperty;
t.exports = function(t) {
  var e = this.__data__;
  if (n) {
var r = e[t];
return '__lodash_hash_undefined__' === r ? void 0 : r;
  }
  return _.call(e, t) ? e[t] : void 0;
};