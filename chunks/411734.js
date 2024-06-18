"use strict";
n.d(t, {
  R: function() {
    return a
  },
  n: function() {
    return o
  }
}), n(47120);
var i = n(735250),
  r = n(470079);
let s = 0;

function o(e, t) {
  let [n] = r.useState(() => s++), i = "".concat("data-focus-blocked", "-").concat(n);
  r.useLayoutEffect(() => {
    if (t) {
      let t = e.current;
      if (null != t) {
        var n;
        let e = (n = t, document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => e.tabIndex >= 0 && !e.disabled ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
          })),
          r = e.currentNode;
        for (; null !== r;) {
          let t = r,
            n = t.tabIndex;
          t.tabIndex = -1, t.setAttribute(i, String(n)), r = e.nextNode()
        }
        return () => {
          t.querySelectorAll("[".concat(i, "]")).forEach(e => {
            let t = e.getAttribute(i);
            if (null != t) {
              let n = parseInt(t, 10);
              e.tabIndex = n
            }
          })
        }
      }
    }
  }, [t])
}

function a(e) {
  let {
    children: t,
    className: n,
    enabled: s = !0
  } = e, a = r.useRef(null);
  return o(a, s), (0, i.jsx)("div", {
    ref: a,
    className: n,
    children: t
  })
}