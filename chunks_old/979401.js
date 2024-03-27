"use strict";
n.r(t), n.d(t, {
  useSettingsLottie: function() {
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
        src: () => n.el("522870").then(n.t.bind(n, "522870", 19)),
        ref: e,
        markers: i
      }), []);
    return {
      events: {
        onMouseEnter: r,
        onMouseLeave: o
      },
      play: t,
      Component: u
    }
  }