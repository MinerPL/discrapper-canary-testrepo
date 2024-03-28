"use strict";
var r = n("67867"),
  a = n("414629"),
  o = n("732116").CONSTRUCTOR,
  i = n("197859"),
  l = n("294377"),
  u = n("735471"),
  s = n("691244"),
  c = i && i.prototype;
if (r({
    target: "Promise",
    proto: !0,
    forced: o,
    real: !0
  }, {
    catch: function(e) {
      return this.then(void 0, e)
    }
  }), !a && u(i)) {
  var d = l("Promise").prototype.catch;
  c.catch !== d && s(c, "catch", d, {
    unsafe: !0
  })
}