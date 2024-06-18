"use strict";
t.d(s, {
  Z: function() {
    return a
  }
}), t(47120);
var n = t(470079),
  i = t(584825),
  l = t(14263);

function a(e) {
  let s = (0, i.qi)(e),
    t = (0, l.Z)(e);
  return n.useMemo(() => {
    let e = 0;
    for (let n of s) {
      let s = null == n ? void 0 : n.role_id;
      if (null != s) {
        let n = null == t ? void 0 : t[s];
        null != n && (e += n)
      }
    }
    return e
  }, [s, t])
}