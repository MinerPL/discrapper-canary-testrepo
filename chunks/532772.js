"use strict";
n.d(t, {
  z: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(709014);
let o = {
    click: {
      name: "click",
      start: 0,
      duration: 66
    },
    hover: {
      name: "hover",
      start: 90,
      duration: 40
    }
  },
  a = () => {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        null != e.current && e.current.play("click")
      }, []),
      a = r.useCallback(() => {
        null != e.current && e.current.play("hover")
      }, []),
      l = r.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("hover")
      }, []);
    return {
      events: {
        onMouseEnter: a,
        onMouseLeave: l
      },
      play: t,
      Component: r.useCallback(t => (0, i.jsx)(s.L, {
        ...t,
        src: () => n.e("36995").then(n.t.bind(n, 737962, 19)),
        ref: e,
        markers: o
      }), [])
    }
  }