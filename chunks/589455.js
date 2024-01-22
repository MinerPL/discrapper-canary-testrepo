"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007");
var a = s("884691"),
  n = s("405665"),
  l = s("77078");
let r = "undefined" == typeof ResizeObserver ? n.ResizeObserver : ResizeObserver,
  i = new Map,
  o = new r(e => {
    e.forEach(e => {
      var t;
      let {
        target: s
      } = e;
      null === (t = i.get(s)) || void 0 === t || t(e)
    })
  });
var u = () => {
  let e = a.useRef(null),
    [t, s] = a.useState(400),
    n = a.useCallback(() => {
      null !== e.current && s(e.current.clientWidth)
    }, [s, e]);
  return (0, l.useResizeObserverSubscription)({
    ref: e,
    key: "forum-container",
    onUpdate: n,
    resizeObserver: o,
    listenerMap: i
  }), {
    containerRef: e,
    containerWidth: t
  }
}