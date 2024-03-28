"use strict";
n.r(t), n.d(t, {
  useActivityLottie: function() {
    return r
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("709014");
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
      o = l.useCallback(() => {
        null != e.current && e.current.stopIfPlaying("hover")
      }, []);
    return {
      events: {
        onClick: t,
        onMouseEnter: r,
        onMouseLeave: o
      },
      play: t,
      Component: l.useCallback(t => (0, a.jsx)(s.LottieIcon, {
        ...t,
        src: () => n.e("8631").then(n.t.bind(n, "105262", 19)),
        ref: e,
        markers: i
      }), [])
    }
  }