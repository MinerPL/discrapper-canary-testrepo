"use strict";
n.d(t, {
  y: function() {
    return i
  }
}), n(47120);
var i, r, s, o, a = n(470079),
  l = n(392711);

function u(e) {
  return 2 === e || 3 === e ? 1 : 0
}(s = i || (i = {}))[s.VERTICAL_TOP = 0] = "VERTICAL_TOP", s[s.VERTICAL_BOTTOM = 1] = "VERTICAL_BOTTOM", s[s.HORIZONTAL_LEFT = 2] = "HORIZONTAL_LEFT", s[s.HORIZONTAL_RIGHT = 3] = "HORIZONTAL_RIGHT", (o = r || (r = {}))[o.VERTICAL = 0] = "VERTICAL", o[o.HORIZONTAL = 1] = "HORIZONTAL";
t.Z = e => {
  let {
    initialElementDimension: t,
    resizableDomNodeRef: n,
    maxDimension: i,
    minDimension: r,
    onElementResize: s,
    onElementResizeEnd: o,
    throttleDuration: _ = 300,
    orientation: d,
    usePointerEvents: c = !1
  } = e, [E, I] = a.useState(!1), T = a.useRef(0), h = a.useRef(null == t ? 0 : t);
  return a.useLayoutEffect(() => {
    if (!E || null == n.current) return;

    function e(e) {
      let t = 1 === u(d) ? e.screenX : e.screenY,
        n = 0 === d || 2 === d,
        s = (t - T.current) * (n ? -1 : 1),
        o = h.current + s;
      return (0, l.clamp)(o, null != r ? r : 0, null != i ? i : o)
    }
    let t = (0, l.throttle)(s, _),
      a = i => {
        if (null == n.current) return null;
        let r = e(i),
          s = 1 === u(d) ? "width" : "height";
        n.current.style[s] = "".concat(r, "px"), t(r)
      },
      S = t => {
        I(!1);
        let n = e(t);
        s(n), null == o || o(n)
      },
      f = c ? "pointerup" : "mouseup",
      N = c ? "pointermove" : "mousemove",
      A = n.current.ownerDocument;
    return A.addEventListener(f, S), A.addEventListener(N, a), () => {
      A.removeEventListener(f, S), A.removeEventListener(N, a), t.cancel()
    }
  }, [E, s, r, i, d, n, _, o, c]), a.useCallback(e => {
    let t = 1 === u(d);
    null != n.current && (h.current = t ? n.current.offsetWidth : n.current.offsetHeight), T.current = t ? e.screenX : e.screenY, I(!0)
  }, [d, n])
}