"use strict";
n.d(t, {
  V: function() {
    return s
  }
});
var i = n(735250),
  r = n(470079);
let s = r.forwardRef(function(e, t) {
  let {
    className: n,
    children: s
  } = e, o = r.useRef(null), a = r.useRef(null);
  return r.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      let t = o.current;
      null != t && (null == a.current && (a.current = t.querySelector('[tabindex="0"]')), null === (e = a.current) || void 0 === e || e.focus())
    },
    blur: () => {
      var e;
      return null === (e = a.current) || void 0 === e ? void 0 : e.blur()
    },
    activate: () => !1
  }), []), r.useLayoutEffect(() => {
    let e = o.current;
    if (null != e) return e.addEventListener("focusin", t), () => {
      e.removeEventListener("focusin", t)
    };

    function t(e) {
      a.current = e.target
    }
  }, []), (0, i.jsx)("div", {
    ref: o,
    className: n,
    style: {
      position: "relative"
    },
    children: s
  })
})