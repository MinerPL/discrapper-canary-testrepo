"use strict";
n.d(t, {
  T: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(952265),
  o = n(813197);
let a = r.forwardRef(function(e, t) {
  let a = r.useRef(null);
  return r.useImperativeHandle(t, () => ({
    focus: () => null,
    activate: () => {
      var e;
      return null === (e = a.current) || void 0 === e || e.activateUploadDialogue(), !1
    }
  }), []), (0, i.jsx)("div", {
    style: {
      position: "relative"
    },
    children: (0, i.jsx)(o.ZP, {
      ...e,
      ref: a,
      onChange: function(t, r) {
        (0, s.ZD)(async () => {
          let {
            default: s
          } = await Promise.all([n.e("99387"), n.e("48017")]).then(n.bind(n, 850085));
          return n => (0, i.jsx)(s, {
            imgURI: t,
            file: r,
            onCrop: e.onChange,
            ...n
          })
        })
      }
    })
  })
})