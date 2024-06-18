"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(47120);
var i = n(470079),
  r = n(439849);

function s(e, t) {
  let [n, s] = i.useState();
  return i.useEffect(() => {
    if (null == e || null != t) {
      s(void 0);
      return
    }(0, r.Z)().then(t => {
      if (null != t) t.identifyGame(e, (e, t) => {
        if (0 === e && null != t.icon && "" !== t.icon && null != t.name && "" !== t.name) s("data:image/png;base64,".concat(t.icon))
      })
    })
  }, [e, t]), null != t ? t : n
}