"use strict";
n.r(t), n.d(t, {
  useWaveformLottie: function() {
    return r
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("414235");
let i = {
    disable: {
      name: "disable",
      start: 0,
      duration: 70
    },
    enable: {
      name: "enable",
      start: 100,
      duration: 70
    },
    hover_enabled: {
      name: "hover_enabled",
      start: 200,
      duration: 70
    },
    hover_disabled: {
      name: "hover_disabled",
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
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.play(n)
      }, [e]),
      d = s.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.stopIfPlaying(n)
      }, [e]),
      c = s.useCallback(e => (0, a.jsx)(l.LottieIcon, {
        ...e,
        src: () => n.el("160421").then(n.t.bind(n, "160421", 19)),
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