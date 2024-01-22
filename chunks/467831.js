"use strict";
n.r(t), n.d(t, {
  PremiumPaymentAnimationTier0: function() {
    return _
  },
  PremiumPaymentAnimationTier1: function() {
    return L
  },
  PremiumPaymentAnimationTier2: function() {
    return x
  },
  PremiumPaymentGuildAnimation: function() {
    return O
  }
}), n("222007");
var l, s, i, r, a, o, u, d, c = n("37983"),
  f = n("884691"),
  p = n("414456"),
  m = n.n(p),
  h = n("907002"),
  E = n("458960"),
  I = n("273108"),
  S = n("635233");
(a = l || (l = {})).NORMAL = "normal", a.SPEED_START = "speed_start", a.SPEED_LOOP = "speed_loop", a.FINISH = "finish", a.IDLE = "idle";
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
class _ extends f.PureComponent {
  static getNextScene(e) {
    switch (e) {
      case _.Scenes.SPEED_START:
        return _.Scenes.SPEED_LOOP;
      case _.Scenes.FINISH:
        return _.Scenes.IDLE;
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
      onSceneComplete: l,
      pause: s,
      pauseWhileUnfocused: i
    } = this.props;
    return (0, c.jsx)(I.default, {
      className: m(S.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: s ? "idle" : t,
      sceneSegments: g,
      onScenePlay: n,
      onSceneComplete: l,
      pauseWhileUnfocused: i,
      pause: s
    })
  }
}
_.Scenes = l, (o = s || (s = {})).NORMAL = "normal", o.SPEED_START = "speed_start", o.SPEED_LOOP = "speed_loop", o.FINISH = "finish", o.IDLE = "idle";
let C = {
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
class L extends f.PureComponent {
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
      onSceneComplete: l,
      pause: s,
      pauseWhileUnfocused: i
    } = this.props;
    return (0, c.jsx)(I.default, {
      className: m(S.sequencedAnimation, e),
      importData: this.importDefault,
      nextScene: s ? "idle" : t,
      sceneSegments: C,
      onScenePlay: n,
      onSceneComplete: l,
      pauseWhileUnfocused: i,
      pause: s
    })
  }
}
L.Scenes = s, (u = i || (i = {})).IDLE_ENTRY = "idle_entry", u.IDLE_LOOP = "idle_loop", u.BOOST_START = "boost_start", u.BOOST_LOOP = "boost_loop", u.BOOST_END = "boost_end", u.VICTORY = "victory", u.ERROR = "error";
let R = {
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
class N extends f.PureComponent {
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
      className: S.panningAnimation,
      children: [(0, c.jsx)(E.default.div, {
        className: e,
        style: this.getStyle(!1)
      }), (0, c.jsx)(E.default.div, {
        className: e,
        style: this.getStyle(!0)
      })]
    })
  }
}
let v = Object.freeze({
  IDLE_ENTRY: {
    toValue: 1,
    duration: 1500
  },
  IDLE_LOOP: {
    toValue: 1,
    duration: 6e3,
    easing: E.default.Easing.linear
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
    E.default.parallel([E.default.timing(this.foregroundAnimation.y, {
      toValue: e.toValue,
      duration: e.duration,
      delay: e.delay || 0
    }), E.default.timing(this.backgroundAnimation.y, {
      toValue: e.toValue,
      duration: 1.2 * e.duration,
      delay: e.delay || 0
    })]).start()
  }
  animateIdleEntry() {
    this.animateEntry(v.IDLE_ENTRY)
  }
  animateError() {
    this.animateEntry(v.ERROR)
  }
  animateIdleLoop() {
    this.animateIdleLoopBackground(), this.animateIdleLoopForeground()
  }
  animateBoostStart() {
    E.default.parallel([E.default.timing(this.foregroundAnimation.y, {
      toValue: v.BOOST_START.toValue,
      duration: v.BOOST_START.duration,
      delay: v.BOOST_START.delay
    }), E.default.timing(this.backgroundAnimation.y, {
      toValue: v.BOOST_START.toValue,
      duration: 1.2 * v.BOOST_START.duration,
      delay: v.BOOST_START.delay
    })]).start()
  }
  render() {
    let {
      className: e,
      nextScene: t,
      pause: n,
      onSceneComplete: l
    } = this.props;
    return (0, c.jsxs)("div", {
      className: m(S.tier2Animation, e),
      children: [n ? (0, c.jsx)(c.Fragment, {
        children: (0, c.jsxs)("div", {
          className: S.panningAnimation,
          children: [(0, c.jsx)("div", {
            className: S.tier2Background
          }), (0, c.jsx)("div", {
            className: S.tier2Foreground
          })]
        })
      }) : (0, c.jsxs)(c.Fragment, {
        children: [(0, c.jsx)(N, {
          className: S.tier2Background,
          animation: this.backgroundAnimation
        }), (0, c.jsx)(N, {
          className: S.tier2Foreground,
          animation: this.foregroundAnimation
        })]
      }), (0, c.jsx)(I.default, {
        className: S.sequencedAnimation,
        importData: this.importData,
        nextScene: n ? "idle_loop" : t,
        sceneSegments: R,
        onScenePlay: this.handleScenePlay,
        onSceneComplete: l,
        pauseWhileUnfocused: !1,
        pause: n
      })]
    })
  }
  constructor(...e) {
    super(...e), this.backgroundAnimation = new E.default.ValueXY({
      x: 0,
      y: 0
    }), this.foregroundAnimation = new E.default.ValueXY({
      x: 0,
      y: 0
    }), this.didUnmount = !1, this.animateIdleLoopBackground = () => {
      !this.didUnmount && (this.backgroundAnimation.x.setValue(0), E.default.timing(this.backgroundAnimation.x, {
        toValue: v.IDLE_LOOP.toValue,
        duration: 1.2 * v.IDLE_LOOP.duration,
        easing: E.default.Easing.linear
      }).start(this.animateIdleLoopBackground))
    }, this.animateIdleLoopForeground = () => {
      !this.didUnmount && (this.foregroundAnimation.x.setValue(0), E.default.timing(this.foregroundAnimation.x, {
        toValue: v.IDLE_LOOP.toValue,
        duration: v.IDLE_LOOP.duration,
        easing: v.IDLE_LOOP.easing
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
x.Scenes = i, (d = r || (r = {})).ENTRY = "entry", d.IDLE = "idle", d.STARS = "stars", d.ERROR = "error", d.SUCCESS = "success";
let T = {
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
  A = Object.freeze({
    WHITE: "#ebf0f7",
    PINK: "#fa6ef6"
  }),
  M = [{
    left: 29,
    top: 100,
    color: A.WHITE
  }, {
    left: 245,
    top: 11,
    color: A.PINK
  }, {
    left: 393,
    top: 22,
    color: A.WHITE
  }, {
    left: 74,
    top: 30,
    color: A.PINK
  }, {
    left: 188,
    top: 9,
    color: A.WHITE
  }, {
    left: 379,
    top: 97,
    color: A.PINK
  }],
  U = Object.freeze({
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
    EASING_MIDDLE: E.default.Easing.bezier(.3, .01, 0, .99),
    EASING_END: E.default.Easing.bezier(0, -.01, .99, 0)
  });

function D(e) {
  let {
    animate: t
  } = e, [n, l] = f.useState(0), s = (0, h.useSprings)(M.length, M.map((e, s) => {
    let i = s > 0 ? U.DELAY_STAGGER * s + Math.random() * (U.DELAY_MAX - U.DELAY_MIN) + U.DELAY_MIN : 0,
      r = Math.random() * (U.SIZE_MAX - U.SIZE_MIN) + U.SIZE_MIN;
    return {
      from: {
        scale: U.SCALE_INITIAL,
        rotate: U.ROTATE_INITIAL,
        top: e.top,
        left: e.left,
        width: r,
        height: r
      },
      to: async e => {
        t ? (await e({
          scale: U.SCALE_MIDDLE,
          rotate: U.ROTATE_MIDDLE,
          delay: i,
          config: {
            duration: U.DURATION_MIDDLE,
            easing: U.EASING_MIDDLE
          }
        }), await e({
          scale: U.SCALE_END,
          rotate: U.ROTATE_END,
          config: {
            duration: U.DURATION_END,
            easing: U.EASING_END
          }
        }), await e({
          scale: U.SCALE_INITIAL,
          rotate: U.ROTATE_INITIAL,
          immediate: !0
        }), s === M.length - 1 && l(n + 1)) : await e({
          scale: U.SCALE_INITIAL,
          rotate: U.ROTATE_INITIAL
        })
      }
    }
  }));
  return (0, c.jsx)(c.Fragment, {
    children: s.map((e, t) => {
      let n = M[t];
      return (0, c.jsx)(h.animated.svg, {
        style: e,
        className: S.guildStar,
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
class O extends f.PureComponent {
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
      onScenePlay: l,
      onSceneComplete: s,
      pauseWhileUnfocused: i
    } = this.props;
    return (0, c.jsxs)("div", {
      className: m(S.guildWrapper, e),
      children: [(0, c.jsx)(I.default, {
        className: S.guildBackground,
        importData: this.importData,
        nextScene: n ? "idle" : t,
        sceneSegments: T,
        onScenePlay: l,
        onSceneComplete: s,
        pauseWhileUnfocused: i,
        pause: n
      }), (0, c.jsx)(D, {
        animate: !n && "stars" === t
      })]
    })
  }
}
O.Scenes = r