let n;
r.d(t, {
  C: function() {
return E;
  }
});
var a = r(370336),
  o = r(263449),
  i = r(151122);
let _ = new WeakMap(),
  E = (0, i._I)(() => ({
name: 'FunctionToString',
setupOnce() {
  n = Function.prototype.toString;
  try {
    Function.prototype.toString = function(...e) {
      let t = (0, a.HK)(this),
        r = _.has((0, o.s3)()) && void 0 !== t ? t : this;
      return n.apply(r, e);
    };
  } catch (e) {}
},
setup(e) {
  _.set(e, !0);
}
  }));