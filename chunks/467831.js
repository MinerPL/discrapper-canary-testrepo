"use strict";
n.r(t), n.d(t, {
  PremiumPaymentAnimationTier0: function() {
    return C
  },
  PremiumPaymentAnimationTier1: function() {
    return N
  },
  PremiumPaymentAnimationTier2: function() {
    return x
  },
  PremiumPaymentGuildAnimation: function() {
    return P
  }
}), n("222007");
var s, r, a, l, i, o, u, d, c = n("37983"),
  f = n("884691"),
  m = n("414456"),
  E = n.n(m),
  p = n("146606"),
  I = n("458960"),
  _ = n("273108"),
  h = n("577567");
(i = s || (s = {})).NORMAL = "normal", i.SPEED_START = "speed_start", i.SPEED_LOOP = "speed_loop", i.FINISH = "finish", i.IDLE = "idle";
let S = {
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
class C extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case C.Scenes.SPEED_START:
        return C.Scenes.SPEED_LOOP;
      case C.Scenes.FINISH:
        return C.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return n.el("133541").then(n.t.bind(n, "133541", 19)).then(e => {
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
      onSceneComplete: s,
      pause: r,
      pauseWhileUnfocused: a
    } = this.props;
    return (0, c.jsx)(_.default, {
      className: E(h.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: r ? "idle" : t,
      sceneSegments: S,
      onScenePlay: n,
      onSceneComplete: s,
      pauseWhileUnfocused: a,
      pause: r
    })
  }
}
C.Scenes = s, (o = r || (r = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
let R = {
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
class N extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case N.Scenes.SPEED_START:
        return N.Scenes.SPEED_LOOP;
      case N.Scenes.FINISH:
        return N.Scenes.IDLE;
      default:
        return e
    }
  }
  importDefault() {
    return n.el("73902").then(n.t.bind(n, "73902", 19)).then(e => {
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
      onSceneComplete: s,
      pause: r,
      pauseWhileUnfocused: a
    } = this.props;
    return (0, c.jsx)(_.default, {
      className: E(h.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: r ? "idle" : t,
      sceneSegments: R,
      onScenePlay: n,
      onSceneComplete: s,
      pauseWhileUnfocused: a,
      pause: r
    })
  }
}
N.Scenes = r, (u = a || (a = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
let L = {
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
class g extends f.PureComponent {
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
    return (0, c.jsxs)("div", {
      className: h.panningAnimation,
      children: [(0, c.jsx)(I.default.div, {
        className: e,
        style: this.getStyle(!1)
      }), (0, c.jsx)(I.default.div, {
        className: e,
        style: this.getStyle(!0)
      })]
    })
  }
}
let T = Object.freeze({
  IDLE_ENTRY: {
    toValue: 1,
    duration: 1500
  },
  IDLE_LOOP: {
    toValue: 1,
    duration: 6e3,
    easing: I.default.Easing.linear
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
class x extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case x.Scenes.IDLE_ENTRY:
        return x.Scenes.IDLE_LOOP;
      case x.Scenes.BOOST_START:
        return x.Scenes.BOOST_LOOP;
      case x.Scenes.BOOST_END:
        return x.Scenes.VICTORY;
      case x.Scenes.VICTORY:
        return x.Scenes.IDLE_ENTRY;
      case x.Scenes.ERROR:
        return x.Scenes.IDLE_LOOP;
      default:
        return e
    }
  }
  componentWillUnmount() {
    this.didUnmount = !0
  }
  importData() {
    return n.el("475800").then(n.t.bind(n, "475800", 19)).then(e => {
      let {
        default: t
      } = e;
      return t
    })
  }
  animateEntry(e) {
    I.default.parallel([I.default.timing(this.foregroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration,
      delay: e.delay || 0
    }), I.default.timing(this.backgroundAnimation.y, {
      toValue: e.toValue,
      duration: 1.2 * e.duration,
      delay: e.delay || 0
    })]).start()
  }
  animateIdleEntry() {
    this.animateEntry(T.IDLE_ENTRY)
  }
  animateError() {
    this.animateEntry(T.ERROR)
  }
  animateIdleLoop() {
    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
  }
  animateBoostStart() {
    I.default.parallel([I.default.timing(this.foregroundAnimation.y, {
      toValue: T.BOOST_START.toValue,
      duration: T.BOOST_START.duration,
      delay: T.BOOST_START.delay
    }), I.default.timing(this.backgroundAnimation.y, {
      toValue: T.BOOST_START.toValue,
      duration: 1.2 * T.BOOST_START.duration,
      delay: T.BOOST_START.delay
    })]).start()
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onSceneComplete: s
    } = this.props;
    return (0, c.jsxs)("div", {
      className: E(h.tier2Animation, e),
      children: [n ? (0, c.jsx)(c.Fragment, {
        children: (0, c.jsxs)("div", {
          className: h.panningAnimation,
          children: [(0, c.jsx)("div", {
            className: h.tier2Background
          }), (0, c.jsx)("div", {
            className: h.tier2Foreground
          })]
        })
      }) : (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(g, {
          className: h.tier2Background,
          animation: this.backgroundAnimation
        }), (0, c.jsx)(g, {
          className: h.tier2Foreground,
          animation: this.foregroundAnimation
        })]
      }), (0, c.jsx)(_.default, {
        className: h.sequencedAnimation,
        importData: this.importData,
        nextScene: n ? "idle_loop" : t,
        sceneSegments: L,
        onScenePlay: this.handleScenePlay,
        onSceneComplete: s,
        pauseWhileUnfocused: !1,
        pause: n
      })]
    })
  }
  constructor(...e) {
    super(...e), this.backgroundAnimation = new I.default.ValueXY({
      x: 0,
      y: 0
    }), this.foregroundAnimation = new I.default.ValueXY({
      x: 0,
      y: 0
    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
      !this.didUnmount && (this.backgroundAnimation.x.setValue(0), I.default.timing(this.backgroundAnimation.x, {
        toValue: T.IDLE_LOOP.toValue,
        duration: 1.2 * T.IDLE_LOOP.duration,
        easing: I.default.Easing.linear
      }).start(this.animateIdleLoopBackground))
    }, this.animateIdleLoopForeground = () => {
      !this.didUnmount && (this.foregroundAnimation.x.setValue(0), I.default.timing(this.foregroundAnimation.x, {
        toValue: T.IDLE_LOOP.toValue,
        duration: T.IDLE_LOOP.duration,
        easing: T.IDLE_LOOP.easing
      }).start(this.animateIdleLoopForeground))
    }, this.handleScenePlay = e => {
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
    }
  }
}
x.Scenes = a, (d = l || (l = {})).ENTRY = "entry", d.IDLE = "idle", d.STARS = "stars", d.ERROR = "error", d.SUCCESS = "success";
let M = {
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
  v = Object.freeze({
    WHITE: "#ebf0f7",
    PINK: "#fa6ef6"
  }),
  U = [{
    left: 29,
    top: 100,
    color: v.WHITE
  }, {
    left: 245,
    top: 11,
    color: v.PINK
  }, {
    left: 393,
    top: 22,
    color: v.WHITE
  }, {
    left: 74,
    top: 30,
    color: v.PINK
  }, {
    left: 188,
    top: 9,
    color: v.WHITE
  }, {
    left: 379,
    top: 97,
    color: v.PINK
  }],
  D = Object.freeze({
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
    EASING_MIDDLE: I.default.Easing.bezier(.3, .01, 0, .99),
    EASING_END: I.default.Easing.bezier(0, -.01, .99, 0)
  });

function A(e) {
  let {
    animate: t
  } = e, [n, s] = f.useState(0), r = (0, p.useSprings)(U.length, U.map((e, r) => {
    let a = r > 0 ? D.DELAY_STAGGER * r + Math.random() * (D.DELAY_MAX - D.DELAY_MIN) + D.DELAY_MIN : 0,
      l = Math.random() * (D.SIZE_MAX - D.SIZE_MIN) + D.SIZE_MIN;
    return {
      from: {
        scale: D.SCALE_INITIAL,
        rotate: D.ROTATE_INITIAL,
        top: e.top,
        left: e.left,
        width: l,
        height: l
      },
      to: async e => {
        t ? (await e({
          scale: D.SCALE_MIDDLE,
          rotate: D.ROTATE_MIDDLE,
          delay: a,
          config: {
            duration: D.DURATION_MIDDLE,
            easing: D.EASING_MIDDLE
          }
        }), await e({
          scale: D.SCALE_END,
          rotate: D.ROTATE_END,
          config: {
            duration: D.DURATION_END,
            easing: D.EASING_END
          }
        }), await e({
          scale: D.SCALE_INITIAL,
          rotate: D.ROTATE_INITIAL,
          immediate: !0
        }), r === U.length - 1 && s(n + 1)) : await e({
          scale: D.SCALE_INITIAL,
          rotate: D.ROTATE_INITIAL
        })
      }
    }
  }));
  return (0, c.jsx)(c.Fragment, {
    children: r.map((e, t) => {
      let n = U[t];
      return (0, c.jsx)(p.animated.svg, {
        style: e,
        className: h.guildStar,
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 12.14 12.24",
        children: (0, c.jsx)("path", {
          d: "M5.62 10.22l-4 1.9a1.17 1.17 0 01-1.5-.5 1.7 1.7 0 010-1l1.9-4a.91.91 0 000-1l-1.9-4a1.14 1.14 0 01.5-1.5 1.39 1.39 0 01.9 0l4 1.9a.91.91 0 001 0l4-1.9a1.14 1.14 0 011.5.5 1.39 1.39 0 010 .9l-1.9 4a.91.91 0 000 1l1.9 4a1.17 1.17 0 01-.5 1.5 1.7 1.7 0 01-1 0l-4-1.9a1 1 0 00-.9.1z",
          fill: n.color
        })
      }, t)
    })
  })
}
class P extends f.PureComponent {
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
    return n.el("438967").then(n.t.bind(n, "438967", 19)).then(e => {
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
      onScenePlay: s,
      onSceneComplete: r,
      pauseWhileUnfocused: a
    } = this.props;
    return (0, c.jsxs)("div", {
      className: E(h.guildWrapper, e),
      children: [(0, c.jsx)(_.default, {
        className: h.guildBackground,
        importData: this.importData,
        nextScene: n ? "idle" : t,
        sceneSegments: M,
        onScenePlay: s,
        onSceneComplete: r,
        pauseWhileUnfocused: a,
        pause: n
      }), (0, c.jsx)(A, {
        animate: !n && "stars" === t
      })]
    })
  }
}
P.Scenes = l