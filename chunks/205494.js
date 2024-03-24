"use strict";
n.r(t), n.d(t, {
  useHeadphonesLottie: function() {
    return r
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414235");
let i = {
    mute: {
      name: "mute",
      start: 0,
      duration: 70
    },
    unmute: {
      name: "unmute",
      start: 110,
      duration: 70
    },
    hover_unmuted: {
      name: "hover_unmuted",
      start: 200,
      duration: 70
    },
    hover_muted: {
      name: "hover_muted",
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
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.play(n)
      }, [e]),
      d = s.useCallback(() => {
        if (null == t.current) return;
        let n = "mute" === e ? "hover_unmuted" : "hover_muted";
        t.current.stopIfPlaying(n)
      }, [e]),
      c = s.useCallback(e => (0, a.jsx)(l.LottieIcon, {
        ...e,
        src: () => n.el("401439").then(n.t.bind(n, "401439", 19)),
        ref: t,
        initialAnimation: r.current,
        markers: i
      }), []);
    return {
      events: {
        onClick: o,
        onMouseEnter: u,
        onMouseLeave: d
      },
      play: o,
      Component: c
    }
  }