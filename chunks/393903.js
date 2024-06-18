"use strict";
n.d(t, {
  y: function() {
    return o
  }
});
var i = n(470079),
  r = n(863840),
  s = n(889711);

function o(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = (0, i.useRef)(null),
    o = (0, i.useRef)(null),
    a = (0, r.Z)(() => e(n.current));
  return (0, i.useLayoutEffect)(() => {
    if (!t) return;
    null == o.current && (o.current = (0, s.pP)(a.current));
    let e = n.current,
      i = o.current;
    if (null != e && null != i)(0, s.YP)(i, e)
  }, [t, e]), (0, i.useEffect)(() => {
    if (!t) return;
    let e = n.current,
      i = o.current;
    if (null != e && null != i) return () => {
      (0, s.UC)(i, e)
    }
  }, [t]), n
}