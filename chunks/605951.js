"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
});
var l = n("470079"),
  a = n("914010");

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