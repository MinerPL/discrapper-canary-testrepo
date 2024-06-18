"use strict";
n.d(t, {
  $: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(709014);
let o = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  a = () => {
    let e = r.useRef(null),
      t = r.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      a = r.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      l = r.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []);
    return {
      events: {
        onMouseEnter: a,
        onMouseLeave: l
      },
      play: t,
      Component: r.useCallback(t => (0, i.jsx)(s.L, {
        ...t,
        src: () => n.e("8286").then(n.t.bind(n, 893346, 19)),
        ref: e,
        markers: o
      }), [])
    }
  }