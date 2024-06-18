"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(470079),
  r = n(519953),
  s = n(887490);

function o(e, t, n) {
  i.useEffect(() => {
    let i = r.F3.findDocumentOrShadowRoot(e).defaultView;
    if ((null == i ? void 0 : i.ResizeObserver) == null) return;
    let o = s.bN.toDOMNode(e, e),
      a = o.offsetHeight,
      l = new i.ResizeObserver(() => {
        let i = s.bN.toDOMNode(e, e).offsetHeight;
        a !== i && (null != t.current && (t.current.style.height = "".concat(i, "px")), a = i, null == n || n(i))
      });
    return l.observe(o), () => l.disconnect()
  }, [t, e, n])
}