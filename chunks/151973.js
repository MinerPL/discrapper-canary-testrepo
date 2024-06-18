"use strict";
n.d(t, {
  Z: function() {
    return o
  }
}), n(47120);
var i = n(470079);

function r(e, t, n) {
  return [Math.floor(e / n) - 1, Math.ceil((e + t) / n) + 1]
}
let s = [0, 0];

function o(e) {
  let {
    chunkSize: t,
    getScrollerState: n,
    forceUpdate: o
  } = e, {
    dirty: a,
    scrollTop: l,
    offsetHeight: u
  } = n();
  (0, i.useLayoutEffect)(() => {
    a > 0 && o()
  }, [a, o]);
  let _ = (0, i.useRef)(s);
  _.current = r(l, u, t);
  let [d, c] = _.current;
  return {
    forceUpdateOnChunkChange: (0, i.useCallback)(e => {
      let {
        dirty: i,
        scrollTop: s,
        offsetHeight: a
      } = n();
      if (i > 0) return;
      let [l, u] = r(s, a, t);
      l !== _.current[0] ? o() : 2 === e && u !== _.current[1] && o()
    }, [o, t, n]),
    chunkStart: d,
    chunkEnd: c,
    dirty: a
  }
}