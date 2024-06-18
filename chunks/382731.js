"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(470079),
  r = n(699581);
let s = Object.freeze({
  box: "border-box"
});

function o(e) {
  let {
    ref: t,
    onUpdate: n,
    resizeObserver: o,
    listenerMap: a,
    key: l
  } = e;
  (0, i.useLayoutEffect)(() => {
    let {
      current: e
    } = t;
    return null != e && (a.set(e, e => {
      (0, r.flushSync)(() => {
        n(e, l)
      })
    }), o.observe(e, s)), () => {
      null != e && (o.unobserve(e), a.delete(e))
    }
  }, [n, o, t, a, l])
}