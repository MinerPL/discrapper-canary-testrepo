"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("222007");
var i = l("884691"),
  a = l("550368");
let n = ["embedded_cover", "embedded_background"];

function s(e) {
  let {
    applicationId: t,
    size: l,
    names: s = n
  } = e, [r, c] = i.useState(null), [o, d] = i.useState(!0), u = (0, a.getAssetImage)(t, r, l);
  return i.useEffect(() => {
    (0, a.getAssets)(t).then(e => {
      for (let [t, l] of(d(!1), Object.entries(e)))
        if (null != l && "" !== l.id && s.includes(l.name)) {
          c(l.id);
          return
        }
    })
  }, [t]), {
    url: u,
    state: o ? "loading" : null != u ? "fetched" : "not-found"
  }
}