"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var i = n(470079),
  r = n(81063);
let s = ["embedded_cover", "embedded_background"];

function o(e) {
  let {
    applicationId: t,
    size: n,
    names: o = s
  } = e, [a, l] = i.useState(null), [u, _] = i.useState(!0), d = (0, r.getAssetImage)(t, a, n);
  return i.useEffect(() => {
    (0, r.getAssets)(t).then(e => {
      for (let [t, n] of(_(!1), Object.entries(e)))
        if (null != n && "" !== n.id && o.includes(n.name)) {
          l(n.id);
          return
        }
    })
  }, [t]), {
    url: d,
    state: u ? "loading" : null != d ? "fetched" : "not-found"
  }
}