"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("884691"),
  a = n("162771");

function s(e) {
  l.useLayoutEffect(() => {
    let t = null;

    function n() {
      let n = a.default.getGuildId();
      n !== t && (t = null != n ? n : null, e(null != n ? n : null, !1))
    }
    return a.default.addChangeListener(n), n(), () => {
      a.default.removeChangeListener(n)
    }
  }, [e])
}