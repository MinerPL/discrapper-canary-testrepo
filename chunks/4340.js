    "use strict";
    var r = e("230364"),
      o = e("97131");
    n.exports = function(n, t, e) {
      return e.get && r(e.get, t, {
        getter: !0
      }), e.set && r(e.set, t, {
        setter: !0
      }), o.f(n, t, e)
    }