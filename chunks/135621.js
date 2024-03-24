"use strict";
n.r(t), n.d(t, {
  useMicrophoneLottie: function() {
    return r
  }
});
var a = n("37983"),
  l = n("884691"),
  s = n("414235");
let i = {
    mute: {
      name: "mute",
      start: 0,
      duration: 70
    },
    unmute: {
      name: "unmute",
      start: 100,
      duration: 70
    },
    hover_unmuted: {
      name: "hover_unmuted",
      start: 180,
      duration: 40
    },
    hover_muted: {
      name: "hover_muted",
      start: 240,
      duration: 40
    }
  },
  r = e => {
    let t = l.useRef(null),
      r = l.useRef(e),
      u = l.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      o = l.useCallback(() => {
        if (null == t.current) return;
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.play(n)
      }, [e]),
      d = l.useCallback(() => {
        if (null == t.current) return;
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.stopIfPlaying(n)
      }, [e]),
      c = l.useCallback(e => (0, a.jsx)(s.LottieIcon, {
        ...e,
        src: () => n.el("187030").then(n.t.bind(n, "187030", 19)),
        ref: t,
        initialAnimation: r.current,
        markers: i
      }), []);
    return {
      events: {
        onClick: u,
        onMouseEnter: o,
        onMouseLeave: d
      },
      play: u,
      Component: c
    }
  }