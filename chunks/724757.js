"use strict";
r.r(e), r.d(e, {
  default: function() {
    return o
  }
});
var n = r("470079"),
  u = r("924826"),
  i = r("442837"),
  l = r("607070");

function o(t, e, r) {
  let o = (0, i.useStateFromStores)([l.default], () => l.default.keyboardModeEnabled),
    a = n.useCallback(t => {
      let r = document.querySelector(t),
        n = e.current;
      null != r && null != n && (r.focus(), n.scrollIntoViewNode({
        node: r,
        padding: 80
      }))
    }, [e]),
    c = n.useCallback(() => new Promise(t => {
      let r = e.current;
      if (null == r) return t();
      r.scrollTo({
        to: 0,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]),
    d = n.useCallback(() => new Promise(t => {
      let r = e.current;
      if (null == r) return t();
      r.scrollTo({
        to: Number.MAX_SAFE_INTEGER,
        callback: () => requestAnimationFrame(() => t())
      })
    }), [e]);
  return (0, u.default)({
    id: t,
    isEnabled: o,
    setFocus: a,
    scrollToStart: c,
    scrollToEnd: d,
    orientation: null == r ? void 0 : r.orientation
  })
}