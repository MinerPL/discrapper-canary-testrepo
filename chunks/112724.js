"use strict";
n.d(t, {
  Z: function() {
    return o
  }
});
var i = n(735250),
  r = n(470079),
  s = n(794037);

function o(e) {
  return r.forwardRef(function(t, n) {
    let o = r.useRef();
    return r.useImperativeHandle(n, () => ({
      triggerResize: () => {
        var e;
        null === (e = o.current) || void 0 === e || e.onResize()
      }
    })), (0, i.jsx)(s.default, {
      ref: o,
      children: n => {
        let {
          width: r,
          height: s
        } = n;
        return (0, i.jsx)(e, {
          ...t,
          width: r,
          height: s
        })
      }
    })
  })
}