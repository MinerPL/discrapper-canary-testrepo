"use strict";
n.d(t, {
  $: function() {
    return _
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(803997),
  o = n.n(s),
  a = n(84735),
  l = n(780900),
  u = n(274641);

function _(e, t) {
  let n = new Map,
    s = new t(e => {
      e.forEach(e => {
        var t;
        let {
          target: i
        } = e;
        null === (t = n.get(i)) || void 0 === t || t(e)
      })
    });
  return r.forwardRef(function(t, _) {
    let {
      children: d,
      className: c,
      onResize: E,
      contentClassName: I,
      onScroll: T,
      dir: h = "ltr",
      fade: S = !1,
      customTheme: f = !1,
      style: N,
      ...A
    } = t, m = r.useRef(null), O = r.useRef(null), [R, C] = r.useState(!1), {
      scrollerRef: p,
      getScrollerState: g
    } = (0, l.Ke)(), L = (0, l.t2)(p);
    r.useImperativeHandle(_, () => ({
      getScrollerNode: () => p.current,
      isScrolling: () => null != m.current,
      getScrollerState: g,
      ...(0, l.Ue)(p, g, L)
    }), [p, g, L]);
    let v = r.useCallback(e => {
      null == m.current ? C(!0) : clearTimeout(m.current), m.current = setTimeout(() => {
        m.current = null, C(!1)
      }, 200), null != T && T(e)
    }, [T]);
    return r.useEffect(() => () => clearTimeout(m.current), []), (0, l.zn)({
      ref: p,
      key: "container",
      onUpdate: E,
      resizeObserver: s,
      listenerMap: n
    }), (0, l.zn)({
      ref: O,
      key: "content",
      onUpdate: E,
      resizeObserver: s,
      listenerMap: n
    }), (0, i.jsx)("div", {
      ref: p,
      className: o()(c, {
        [u.fade]: S,
        [u.customTheme]: f,
        [e]: !0,
        [u.managedReactiveScroller]: !0,
        [u.scrolling]: R && S
      }),
      style: N,
      dir: h,
      onScroll: v,
      ...A,
      children: (0, i.jsx)(a.J, {
        containerRef: O,
        children: (0, i.jsxs)("div", {
          ref: O,
          className: o()(I, u.content),
          children: [d, R && (0, i.jsx)("div", {
            className: u.pointerCover
          })]
        })
      })
    })
  })
}