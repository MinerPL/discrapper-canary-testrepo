"use strict";
n.r(t), n.d(t, {
  useHasActiveEntitlement: function() {
    return l
  }
}), n("47120");
var i = n("442837"),
  r = n("580130");

function l(e) {
  return (0, i.useStateFromStores)([r.default], () => {
    let t = r.default.getForSku(e);
    if (null == t) return !1;
    let n = 0;
    for (let e of t) {
      var i, l;
      let t = null !== (l = null === (i = e.endsAt) || void 0 === i ? void 0 : i.getTime()) && void 0 !== l ? l : 1 / 0;
      t >= n && (n = t)
    }
    return n > new Date().getTime()
  }, [e])
}