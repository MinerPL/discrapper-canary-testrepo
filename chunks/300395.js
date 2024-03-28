"use strict";
n.r(t), n.d(t, {
  PremiumPaymentAnimationTier0: function() {
    return L
  },
  PremiumPaymentAnimationTier1: function() {
    return R
  },
  PremiumPaymentAnimationTier2: function() {
    return B
  },
  PremiumPaymentGuildAnimation: function() {
    return V
  }
}), n("47120");
var a, r, s, i, o, l, u, d, c, E, m, S, p = n("735250"),
  I = n("470079"),
  D = n("803997"),
  _ = n.n(D),
  h = n("718017"),
  N = n("748780"),
  A = n("903958"),
  T = n("503503");

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(c = a || (a = {})).NORMAL = "normal", c.SPEED_START = "speed_start", c.SPEED_LOOP = "speed_loop", c.FINISH = "finish", c.IDLE = "idle";
let O = {
  normal: {
    BEG: 0,
    END: 600,
    shouldForcePlayAfter: !0
  },
  speed_start: {
    BEG: 601,
    END: 636
  },
  speed_loop: {
    BEG: 637,
    END: 668
  },
  finish: {
    BEG: 669,
    END: 870
  },
  idle: {
    BEG: 871,
    END: 878
  }
};
class L extends(r = I.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case L.Scenes.SPEED_START:
        return L.Scenes.SPEED_LOOP;
      case L.Scenes.FINISH:
        return L.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return n.e("12817").then(n.t.bind(n, "92668", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      onScenePlay: n,
      onSceneComplete: a,
      pause: r,
      pauseWhileUnfocused: s
    } = this.props;
    return (0, p.jsx)(A.default, {
      className: _()(T.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: r ? "idle" : t,
      sceneSegments: O,
      onScenePlay: n,
      onSceneComplete: a,
      pauseWhileUnfocused: s,
      pause: r
    })
  }
}
f(L, "Scenes", a), (E = s || (s = {})).NORMAL = "normal", E.SPEED_START = "speed_start", E.SPEED_LOOP = "speed_loop", E.FINISH = "finish", E.IDLE = "idle";
let g = {
  normal: {
    BEG: 0,
    END: 600,
    shouldForcePlayAfter: !0
  },
  speed_start: {
    BEG: 601,
    END: 636
  },
  speed_loop: {
    BEG: 637,
    END: 668
  },
  finish: {
    BEG: 669,
    END: 870
  },
  idle: {
    BEG: 871,
    END: 878
  }
};
class R extends(i = I.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case R.Scenes.SPEED_START:
        return R.Scenes.SPEED_LOOP;
      case R.Scenes.FINISH:
        return R.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return n.e("46896").then(n.t.bind(n, "35065", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      onScenePlay: n,
      onSceneComplete: a,
      pause: r,
      pauseWhileUnfocused: s
    } = this.props;
    return (0, p.jsx)(A.default, {
      className: _()(T.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: r ? "idle" : t,
      sceneSegments: g,
      onScenePlay: n,
      onSceneComplete: a,
      pauseWhileUnfocused: s,
      pause: r
    })
  }
}
f(R, "Scenes", s), (m = o || (o = {})).IDLE_ENTRY = "idle_entry", m.IDLE_LOOP = "idle_loop", m.BOOST_START = "boost_start", m.BOOST_LOOP = "boost_loop", m.BOOST_END = "boost_end", m.VICTORY = "victory", m.ERROR = "error";
let y = {
  idle_entry: {
    BEG: 0,
    END: 50
  },
  idle_loop: {
    BEG: 50,
    END: 230,
    shouldForcePlayAfter: !0
  },
  boost_start: {
    BEG: 230,
    END: 275
  },
  boost_loop: {
    BEG: 275,
    END: 290
  },
  boost_end: {
    BEG: 386,
    END: 455
  },
  victory: {
    BEG: 470,
    END: 525
  },
  error: {
    BEG: 290,
    END: 375
  }
};
class P extends I.PureComponent {
  getStyle(e) {
    let {
      animation: t
    } = this.props;
    return {
      transform: [{
        translateX: t.x.interpolate({
          inputRange: [0, 1],
          outputRange: e ? ["100%", "0%"] : ["0%", "-100%"]
        })
      }, {
        translateY: t.y.interpolate({
          inputRange: [0, 1],
          outputRange: ["100%", "0%"]
        })
      }]
    }
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, p.jsxs)("div", {
      className: T.panningAnimation,
      children: [(0, p.jsx)(N.default.div, {
        className: e,
        style: this.getStyle(!1)
      }), (0, p.jsx)(N.default.div, {
        className: e,
        style: this.getStyle(!0)
      })]
    })
  }
}
let x = Object.freeze({
  IDLE_ENTRY: {
    toValue: 1,
    duration: 1500
  },
  IDLE_LOOP: {
    toValue: 1,
    duration: 6e3,
    easing: N.default.Easing.linear
  },
  BOOST_START: {
    toValue: 0,
    duration: 2e3,
    delay: 500
  },
  ERROR: {
    toValue: 1,
    duration: 1500,
    delay: 1e3
  }
});
class B extends(l = I.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case B.Scenes.IDLE_ENTRY:
        return B.Scenes.IDLE_LOOP;
      case B.Scenes.BOOST_START:
        return B.Scenes.BOOST_LOOP;
      case B.Scenes.BOOST_END:
        return B.Scenes.VICTORY;
      case B.Scenes.VICTORY:
        return B.Scenes.IDLE_ENTRY;
      case B.Scenes.ERROR:
        return B.Scenes.IDLE_LOOP;
      default:
        return e
    }
  }
  componentWillUnmount() {
    this.didUnmount = !0
  }
  importData() {
    return n.e("70253").then(n.t.bind(n, "88032", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  animateEntry(e) {
    N.default.parallel([N.default.timing(this.foregroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration,
      delay: e.delay || 0
    }), N.default.timing(this.backgroundAnimation.y, {
      toValue: e.toValue,
      duration: 1.2 * e.duration,
      delay: e.delay || 0
    })]).start()
  }
  animateIdleEntry() {
    this.animateEntry(x.IDLE_ENTRY)
  }
  animateError() {
    this.animateEntry(x.ERROR)
  }
  animateIdleLoop() {
    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
  }
  animateBoostStart() {
    N.default.parallel([N.default.timing(this.foregroundAnimation.y, {
      toValue: x.BOOST_START.toValue,
      duration: x.BOOST_START.duration,
      delay: x.BOOST_START.delay
    }), N.default.timing(this.backgroundAnimation.y, {
      toValue: x.BOOST_START.toValue,
      duration: 1.2 * x.BOOST_START.duration,
      delay: x.BOOST_START.delay
    })]).start()
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onSceneComplete: a
    } = this.props;
    return (0, p.jsxs)("div", {
      className: _()(T.tier2Animation, e),
      children: [n ? (0, p.jsx)(p.Fragment, {
        children: (0, p.jsxs)("div", {
          className: T.panningAnimation,
          children: [(0, p.jsx)("div", {
            className: T.tier2Background
          }), (0, p.jsx)("div", {
            className: T.tier2Foreground
          })]
        })
      }) : (0, p.jsxs)(p.Fragment, {
        children: [(0, p.jsx)(P, {
          className: T.tier2Background,
          animation: this.backgroundAnimation
        }), (0, p.jsx)(P, {
          className: T.tier2Foreground,
          animation: this.foregroundAnimation
        })]
      }), (0, p.jsx)(A.default, {
        className: T.sequencedAnimation,
        importData: this.importData,
        nextScene: n ? "idle_loop" : t,
        sceneSegments: y,
        onScenePlay: this.handleScenePlay,
        onSceneComplete: a,
        pauseWhileUnfocused: !1,
        pause: n
      })]
    })
  }
  constructor(...e) {
    super(...e), f(this, "backgroundAnimation", new N.default.ValueXY({
      x: 0,
      y: 0
    })), f(this, "foregroundAnimation", new N.default.ValueXY({
      x: 0,
      y: 0
    })), f(this, "didUnmount", !1), f(this, "animateIdleLoopBackground", () => {
      !this.didUnmount && (this.backgroundAnimation.x.setValue(0), N.default.timing(this.backgroundAnimation.x, {
        toValue: x.IDLE_LOOP.toValue,
        duration: 1.2 * x.IDLE_LOOP.duration,
        easing: N.default.Easing.linear
      }).start(this.animateIdleLoopBackground))
    }), f(this, "animateIdleLoopForeground", () => {
      !this.didUnmount && (this.foregroundAnimation.x.setValue(0), N.default.timing(this.foregroundAnimation.x, {
        toValue: x.IDLE_LOOP.toValue,
        duration: x.IDLE_LOOP.duration,
        easing: x.IDLE_LOOP.easing
      }).start(this.animateIdleLoopForeground))
    }), f(this, "handleScenePlay", e => {
      switch (e) {
        case "idle_entry":
          this.animateIdleEntry(), this.animateIdleLoop();
          break;
        case "error":
          this.animateError();
          break;
        case "boost_start":
          this.animateBoostStart()
      }
      let {
        onScenePlay: t
      } = this.props;
      null != t && t(e)
    })
  }
}
f(B, "Scenes", o), (S = u || (u = {})).ENTRY = "entry", S.IDLE = "idle", S.STARS = "stars", S.ERROR = "error", S.SUCCESS = "success";
let b = {
    entry: {
      BEG: 0,
      END: 180
    },
    idle: {
      BEG: 180,
      END: 360,
      shouldForcePlayAfter: !0
    },
    stars: {
      BEG: 180,
      END: 360,
      shouldForcePlayAfter: !0
    },
    error: {
      BEG: 360,
      END: 540
    },
    success: {
      BEG: 540,
      END: 778
    }
  },
  G = Object.freeze({
    WHITE: "#ebf0f7",
    PINK: "#fa6ef6"
  }),
  j = [{
    left: 29,
    top: 100,
    color: G.WHITE
  }, {
    left: 245,
    top: 11,
    color: G.PINK
  }, {
    left: 393,
    top: 22,
    color: G.WHITE
  }, {
    left: 74,
    top: 30,
    color: G.PINK
  }, {
    left: 188,
    top: 9,
    color: G.WHITE
  }, {
    left: 379,
    top: 97,
    color: G.PINK
  }],
  C = Object.freeze({
    SCALE_INITIAL: 0,
    SCALE_MIDDLE: 1,
    SCALE_END: 0,
    ROTATE_INITIAL: 0,
    ROTATE_MIDDLE: 180,
    ROTATE_END: 360,
    DELAY_MIN: 200,
    DELAY_MAX: 500,
    DELAY_STAGGER: 200,
    DURATION_MIDDLE: 400,
    DURATION_END: 250,
    SIZE_MIN: 7,
    SIZE_MAX: 15,
    EASING_MIDDLE: N.default.Easing.bezier(.3, .01, 0, .99),
    EASING_END: N.default.Easing.bezier(0, -.01, .99, 0)
  });

function M(e) {
  let {
    animate: t
  } = e, [n, a] = I.useState(0), r = (0, h.useSprings)(j.length, j.map((e, r) => {
    let s = r > 0 ? C.DELAY_STAGGER * r + Math.random() * (C.DELAY_MAX - C.DELAY_MIN) + C.DELAY_MIN : 0,
      i = Math.random() * (C.SIZE_MAX - C.SIZE_MIN) + C.SIZE_MIN;
    return {
      from: {
        scale: C.SCALE_INITIAL,
        rotate: C.ROTATE_INITIAL,
        top: e.top,
        left: e.left,
        width: i,
        height: i
      },
      to: async e => {
        t ? (await e({
          scale: C.SCALE_MIDDLE,
          rotate: C.ROTATE_MIDDLE,
          delay: s,
          config: {
            duration: C.DURATION_MIDDLE,
            easing: C.EASING_MIDDLE
          }
        }), await e({
          scale: C.SCALE_END,
          rotate: C.ROTATE_END,
          config: {
            duration: C.DURATION_END,
            easing: C.EASING_END
          }
        }), await e({
          scale: C.SCALE_INITIAL,
          rotate: C.ROTATE_INITIAL,
          immediate: !0
        }), r === j.length - 1 && a(n + 1)) : await e({
          scale: C.SCALE_INITIAL,
          rotate: C.ROTATE_INITIAL
        })
      }
    }
  }));
  return (0, p.jsx)(p.Fragment, {
    children: r.map((e, t) => {
      let n = j[t];
      return (0, p.jsx)(h.animated.svg, {
        style: e,
        className: T.guildStar,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12.14 12.24",
        children: (0, p.jsx)("path", {
          d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
          fill: n.color
        })
      }, t)
    })
  })
}
class V extends(d = I.PureComponent) {
  static getNextScene(e) {
    switch (e) {
      case "entry":
      case "error":
      case "success":
        return "idle";
      default:
        return e
    }
  }
  importData() {
    return n.e("37586").then(n.t.bind(n, "134072", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onScenePlay: a,
      onSceneComplete: r,
      pauseWhileUnfocused: s
    } = this.props;
    return (0, p.jsxs)("div", {
      className: _()(T.guildWrapper, e),
      children: [(0, p.jsx)(A.default, {
        className: T.guildBackground,
        importData: this.importData,
        nextScene: n ? "idle" : t,
        sceneSegments: b,
        onScenePlay: a,
        onSceneComplete: r,
        pauseWhileUnfocused: s,
        pause: n
      }), (0, p.jsx)(M, {
        animate: !n && "stars" === t
      })]
    })
  }
}
f(V, "Scenes", u)