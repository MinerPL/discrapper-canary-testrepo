"use strict";
n.d(t, {
  L: function() {
    return o
  }
}), n(315314), n(610138), n(216116), n(78328), n(815648), n(47120);
var i = n(470079),
  r = n(772848);
let s = new Worker(new URL(n.p + n.u("77459"), n.b));

function o(e, t, n) {
  let o = n && 1 === t && null != e,
    [a, l] = i.useState(void 0);
  return i.useEffect(() => {
    let t = !1;
    if (o) {
      var n;
      (n = e, new Promise(e => {
        let t = (0, r.Z)(),
          i = n => {
            let {
              data: {
                id: r,
                png: o
              }
            } = n;
            t === r && (e(o), s.removeEventListener("message", i))
          };
        s.addEventListener("message", i), s.postMessage({
          id: t,
          placeholderData: n
        })
      })).then(e => {
        if (!t) l(e)
      })
    }
    return () => {
      t = !0
    }
  }, [e, o]), a
}