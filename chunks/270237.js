"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var a = n("470079"),
  s = n("661111");

function l(e) {
  a.useEffect(() => {
    if (null != e) return s.default.lockChangeLog(e), () => {
      s.default.unlockChangeLog(e)
    }
  }, [e])
}