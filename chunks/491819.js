"use strict";
n.d(t, {
  Xr: function() {
    return r
  }
});
var i = n(474936);

function r(e, t, n) {
  let r = e.find(e => {
    let t = i.GP[e.planId];
    return null != t && null != t.premiumType
  });
  if (null == r) {
    if (e.length > 0) {
      let r = i.GP[e[0].planId];
      t = r.interval, n = r.intervalCount
    }
    return function(e) {
      let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        n = Object.keys(i.GP).find(n => {
          let r = i.GP[n];
          return null != r && r.skuId === i.Si.NONE && r.interval === e && r.intervalCount === t
        });
      return null != n ? n : i.Xh.NONE_MONTH
    }(t, n)
  }
  return r.planId
}