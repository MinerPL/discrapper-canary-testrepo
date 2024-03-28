"use strict";
var r = n("67867"),
  a = n("414629"),
  o = n("197859"),
  i = n("821819"),
  l = n("294377"),
  u = n("735471"),
  s = n("992416"),
  c = n("607672"),
  d = n("691244"),
  f = o && o.prototype;
if (r({
    target: "Promise",
    proto: !0,
    real: !0,
    forced: !!o && i(function() {
      f.finally.call({
        then: function() {}
      }, function() {})
    })
  }, {
    finally: function(e) {
      var t = s(this, l("Promise")),
        n = u(e);
      return this.then(n ? function(n) {
        return c(t, e()).then(function() {
          return n
        })
      } : e, n ? function(n) {
        return c(t, e()).then(function() {
          throw n
        })
      } : e)
    }
  }), !a && u(o)) {
  var p = l("Promise").prototype.finally;
  f.finally !== p && d(f, "finally", p, {
    unsafe: !0
  })
}