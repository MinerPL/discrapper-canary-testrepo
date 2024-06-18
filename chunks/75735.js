"use strict";
n.d(t, {
  o: function() {
    return a
  }
});
var i = n(735250),
  r = n(470079),
  s = n(709014);
let o = {
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
      start: 180,
      duration: 70
    },
    hover_disabled: {
      name: "hover_disabled",
      start: 280,
      duration: 70
    }
  },
  a = e => {
    let t = r.useRef(null),
      a = r.useRef(e),
      l = r.useMemo(() => () => {
        null != t.current && t.current.play(e)
      }, [e]),
      u = r.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.play(n)
      }, [e]),
      _ = r.useCallback(() => {
        if (null == t.current) return;
        let n = "enable" === e ? "hover_disabled" : "hover_enabled";
        t.current.stopIfPlaying(n)
      }, [e]);
    return {
      events: {
        onClick: l,
        onMouseEnter: u,
        onMouseLeave: _
      },
      play: l,
      Component: r.useCallback(e => (0, i.jsx)(s.L, {
        ...e,
        src: () => n.e("8366").then(n.t.bind(n, 553427, 19)),
        ref: t,
        initialAnimation: a.current,
        markers: o
      }), [])
    }
  }