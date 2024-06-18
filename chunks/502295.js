"use strict";
n.d(t, {
  Z: function() {
    return s
  }
});
var i = n(470079);
let r = Object.freeze({
  scrollTop: 0,
  scrollLeft: 0,
  scrollHeight: 0,
  scrollWidth: 0,
  offsetHeight: 0,
  offsetWidth: 0,
  dirty: 0
});

function s() {
  let e = (0, i.useRef)(null),
    t = (0, i.useCallback)(() => {
      let {
        current: t
      } = e;
      if (null != t) {
        let {
          scrollTop: e,
          scrollLeft: n,
          scrollHeight: i,
          scrollWidth: r,
          offsetHeight: s,
          offsetWidth: o
        } = t;
        return {
          scrollTop: e,
          scrollLeft: n,
          scrollHeight: i,
          scrollWidth: r,
          offsetHeight: s,
          offsetWidth: o,
          dirty: 0
        }
      }
      return r
    }, []);
  return {
    scrollerRef: e,
    getScrollerState: t
  }
}