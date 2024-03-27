"use strict";
n.r(t), n.d(t, {
  useActivityLottie: function() {
    return r
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414235");
let i = {
    hover: {
      name: "hover",
      start: 0,
      duration: 40
    },
    click: {
      name: "click",
      start: 50,
      duration: 65
    }
  },
  r = () => {
    let e = l.useRef(null),
      t = l.useCallback(() => {
        null != e.current && e.current.play("click")
      }, []),
      r = l.useCallback(() => {
        null != e.current && e.current.play("hover")
      }, []),
      u = l.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("hover")
      }, []),
      o = l.useCallback(t => (0, a.jsx)(s.LottieIcon, {
        ...t,
        src: () => n.el("565073").then(n.t.bind(n, "565073", 19)),
        ref: e,
        markers: i
      }), []);
    return {
      events: {
        onClick: t,
        onMouseEnter: r,
        onMouseLeave: u
      },
      play: t,
      Component: o
    }
  }