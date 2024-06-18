"use strict";
n(47120);
var s = n(470079),
  l = n(796075),
  a = n(481060);
let i = "undefined" == typeof ResizeObserver ? l.d : ResizeObserver,
  r = new Map,
  o = new i(e => {
    e.forEach(e => {
      var t;
      let {
        target: n
      } = e;
      null === (t = r.get(n)) || void 0 === t || t(e)
    })
  });
t.Z = () => {
  let e = s.useRef(null),
    [t, n] = s.useState(400),
    l = s.useCallback(() => {
      null !== e.current && n(e.current.clientWidth)
    }, [n, e]);
  return (0, a.useResizeObserverSubscription)({
    ref: e,
    key: "forum-container",
    onUpdate: l,
    resizeObserver: o,
    listenerMap: r
  }), {
    containerRef: e,
    containerWidth: t
  }
}