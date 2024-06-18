"use strict";
n.d(t, {
  P: function() {
    return s
  },
  Z: function() {
    return r
  }
}), n(47120);
var i = n(470079);

function r() {
  for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  let [r, o] = i.useState(void 0), [a, l] = i.useState(void 0), [u, _] = i.useState(void 0), [d, c] = i.useState(void 0), E = i.useRef(null);
  return s(E, e => {
    let {
      width: t,
      height: n,
      scrollWidth: i,
      scrollHeight: r
    } = e;
    l(n), o(t), _(i), c(r)
  }, t), {
    ref: E,
    width: r,
    height: a,
    scrollHeight: d,
    scrollWidth: u
  }
}

function s(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
  i.useLayoutEffect(() => {
    let n = e.current,
      i = null == n ? void 0 : n.ownerDocument.defaultView;
    if (null != n && null != i) {
      let r = new i.ResizeObserver(n => {
        var i, r, s, o, a, l;
        let u = n[0],
          _ = null == u ? void 0 : null === (r = u.borderBoxSize) || void 0 === r ? void 0 : null === (i = r[0]) || void 0 === i ? void 0 : i.inlineSize,
          d = null == u ? void 0 : null === (o = u.borderBoxSize) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : s.blockSize;
        if (null == _ || null == d) {
          let t = e.current;
          if (null != t) {
            let e = window.getComputedStyle(t);
            null == _ && (_ = parseFloat(null !== (a = e.width) && void 0 !== a ? a : "0")), null == d && (d = parseFloat(null !== (l = e.height) && void 0 !== l ? l : "0"))
          }
        }
        t({
          width: _,
          height: d,
          scrollHeight: u.target.scrollHeight,
          scrollWidth: u.target.scrollWidth
        })
      });
      return r.observe(n), () => r.disconnect()
    }
  }, [e.current, ...n])
}