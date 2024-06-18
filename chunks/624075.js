"use strict";
n.d(t, {
  Z: function() {
    return r
  }
}), n(47120);
var i = n(191532);

function r(e, t, n, r) {
  let s = (0, i.Z)(e, t, r),
    o = (e, t) => n.computeScrollPosition(e, t);
  return {
    ...s,
    getScrollPosition: o,
    isItemVisible(e, n) {
      let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        [r, s] = o(e, n),
        a = t();
      return i ? r >= a.scrollTop && r + s <= a.scrollTop + a.offsetHeight : r + s >= a.scrollTop && r <= a.scrollTop + a.offsetHeight
    },
    scrollToIndex(e) {
      let {
        section: t,
        row: n,
        animate: i,
        callback: r,
        padding: a = 0
      } = e, [l, u] = o(t, n);
      s.scrollIntoViewRect({
        start: l,
        end: l + u,
        padding: a,
        animate: i,
        callback: r
      })
    }
  }
}