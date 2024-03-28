"use strict";
n.r(t), n("411104");
var u = n("470079"),
  l = n("960048");
t.default = (e, t, n, i, a) => {
  let r = (0, u.useRef)(!1);
  (0, u.useEffect)(() => {
    if (t && !r.current) {
      r.current = !0;
      let t = setTimeout(() => {
        let t = Error("".concat(e, " is taking too long to load."));
        l.default.setExtra({
          loadingState: i,
          loadingTimeSeconds: n
        }), l.default.captureException(t, {
          ...a,
          tags: {
            ...null == a ? void 0 : a.tags
          }
        })
      }, 1e3 * n);
      return () => {
        clearTimeout(t)
      }
    }
  }, [t, n])
}