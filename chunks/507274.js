"use strict";
n.d(t, {
  M: function() {
    return u
  },
  V: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(597442),
  o = n(84735),
  a = n(337033),
  l = n(812663);
let u = r.createContext(void 0),
  _ = r.forwardRef(function(e, t) {
    let {
      children: n,
      impressionType: _,
      impression: d,
      disableTrack: c,
      returnRef: E,
      ...I
    } = e, T = r.useRef(null);
    return (0, s.T)(T, {
      returnRef: E
    }), r.useContext(l.Z)({
      type: _,
      name: null == d ? void 0 : d.impressionName,
      properties: null == d ? void 0 : d.impressionProperties
    }, {
      disableTrack: c
    }), r.useImperativeHandle(t, () => T.current), (0, i.jsx)(u.Provider, {
      value: !0,
      children: (0, i.jsx)("div", {
        ...I,
        ref: T,
        role: "dialog",
        tabIndex: -1,
        "aria-modal": !0,
        children: (0, i.jsx)(a.y, {
          forceLevel: 1,
          children: (0, i.jsx)(o.J, {
            containerRef: T,
            children: n
          })
        })
      })
    })
  })