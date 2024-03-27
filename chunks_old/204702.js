"use strict";
n.r(t), n.d(t, {
  useSoundboardLottie: function() {
    return r
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414235");
let i = {
    all: {
      name: "all",
      start: 0,
      duration: 66
    }
  },
  r = () => {
    let e = s.useRef(null),
      t = s.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      r = s.useCallback(() => {
        null != e.current && e.current.play("all")
      }, []),
      o = s.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("all")
      }, []),
      u = s.useCallback(t => (0, a.jsx)(l.LottieIcon, {
        ...t,
        src: () => n.el("822747").then(n.t.bind(n, "822747", 19)),
        ref: e,
        markers: i
      }), []);
    return {
      events: {
        onClick: t,
        onMouseEnter: r,
        onMouseLeave: o
      },
      play: t,
      Component: u
    }
  }