"use strict";
n.r(t), n.d(t, {
  useHeadphonesLottie: function() {
    return r
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("709014");
let i = {
    deafen: {
      name: "deafen",
      start: 0,
      duration: 70
    },
    undeafen: {
      name: "undeafen",
      start: 110,
      duration: 70
    },
    hover_undeafened: {
      name: "hover_undeafened",
      start: 200,
      duration: 70
    },
    hover_deafened: {
      name: "hover_deafened",
      start: 300,
      duration: 70
    }
  },
  r = e => {
    let t = s.useRef(null),
      r = s.useRef(e),
      o = s.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      u = s.useCallback(() => {
        if (null == t.current) return;
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.play(n)
      }, [e]),
      d = s.useCallback(() => {
        if (null == t.current) return;
        let n = "deafen" === e ? "hover_undeafened" : "hover_deafened";
        t.current.stopIfPlaying(n)
      }, [e]);
    return {
      events: {
        onClick: o,
        onMouseEnter: u,
        onMouseLeave: d
      },
      play: o,
      Component: s.useCallback(e => (0, a.jsx)(l.LottieIcon, {
        ...e,
        src: () => n.e("68449").then(n.t.bind(n, "406785", 19)),
        ref: t,
        initialAnimation: r.current,
        markers: i
      }), [])
    }
  }