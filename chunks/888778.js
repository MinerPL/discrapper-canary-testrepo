"use strict";
n.d(t, {
  Z: function() {
    return l
  },
  s: function() {
    return i
  }
}), n(47120);
var i, r, s = n(470079),
  o = n(695346),
  a = n(768581);

function l(e) {
  let {
    displayProfile: t,
    size: n,
    canAnimate: i,
    pendingBanner: r
  } = e, l = o.QK.getSetting(), u = null == t ? void 0 : t.getPreviewBanner(r, i, n), [_, d] = (0, s.useState)((null == t ? void 0 : t.banner) == null ? 2 : 0);
  return (0, s.useEffect)(() => {
    if (null == u || 0 !== _) return;
    d(1);
    let e = new Image;
    e.src = u, e.onload = () => d(2)
  }, [u, _]), (0, s.useEffect)(() => {
    if (l) return;
    let e = null == t ? void 0 : t.getPreviewBanner(r, !0, n);
    if (null != e && !!(0, a.F8)(e)) new Image().src = e
  }, [l, t, n, r]), {
    bannerSrc: u,
    status: _
  }
}(r = i || (i = {}))[r.SHOULD_LOAD = 0] = "SHOULD_LOAD", r[r.LOADING = 1] = "LOADING", r[r.COMPLETE = 2] = "COMPLETE"