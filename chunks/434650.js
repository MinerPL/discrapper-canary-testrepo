"use strict";
n.d(t, {
  O: function() {
    return l
  }
}), n(47120);
var i = n(470079),
  r = n(863840),
  s = n(266338);
let o = {},
  a = new Map([
    [1, {
      threshold: 1
    }]
  ]);

function l(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    l = (0, r.Z)(t => {
      e(t.isIntersecting)
    }),
    u = (0, i.useMemo)(() => {
      var e;
      let n;
      return e = t, null != (n = a.get(e)) ? n : (n = {
        threshold: e
      }, a.set(e, n), n)
    }, [t]);
  return function(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
      a = (0, i.useRef)(null),
      l = (0, r.Z)(null != t ? t : o),
      u = (0, i.useRef)(null);
    return (0, i.useLayoutEffect)(() => {
      if (!n) return;
      null == u.current && (u.current = (0, s.c)(l.current));
      let t = a.current,
        i = u.current;
      if (null != t && null != i)(0, s.YP)(i, t, e)
    }, [n, e]), (0, i.useEffect)(() => {
      if (!n) return;
      let e = a.current,
        t = u.current;
      if (null != e && null != t) return () => {
        (0, s.UC)(t, e)
      }
    }, [n, t]), a
  }(l.current, u, n)
}