"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(627494), n(757143);
var i = n(470079),
  r = n(812236);

function s(e) {
  let {
    applicationId: t,
    channel: n
  } = e, s = (0, r.SY)(n, t).commands[0];
  return i.useMemo(() => {
    let e = null == s ? void 0 : s.name;
    if (null != e) return (e.charAt(0).toLocaleUpperCase() + e.slice(1)).replaceAll("_", " ")
  }, [s])
}