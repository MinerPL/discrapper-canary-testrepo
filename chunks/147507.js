"use strict";
n.r(t), n.d(t, {
  default: function() {
    return w
  }
}), n("47120");
var s, a, l, i, r = n("735250"),
  o = n("470079"),
  u = n("120356"),
  d = n.n(u),
  c = n("236471"),
  f = n("153832"),
  E = n("468194"),
  _ = n("477690"),
  m = n("481060"),
  T = n("230711"),
  I = n("745510"),
  p = n("739566"),
  h = n("64078"),
  N = n("29270"),
  S = n("903958"),
  C = n("709586"),
  A = n("482207"),
  g = n("702346"),
  M = n("267642"),
  R = n("981631"),
  v = n("689938"),
  O = n("31949");
(l = s || (s = {})).ENTER = "enter", l.CONFETTI = "confetti", l.LEAF_PEEL = "leaf_peel", l.LEAF_FALL = "leaf_fall", l.EXIT = "exit";
let x = {
  enter: {
    BEG: 0,
    END: 22
  },
  confetti: {
    BEG: 23,
    END: 119
  },
  leaf_peel: {
    BEG: 120,
    END: 160
  },
  leaf_fall: {
    BEG: 161,
    END: 163
  },
  exit: {
    BEG: 164,
    END: 200
  }
};
(i = a || (a = {})).TOP_LEFT = "TOP_LEFT", i.TOP_RIGHT = "TOP_RIGHT", i.BOTTOM_LEFT = "BOTTOM_LEFT", i.BOTTOM_RIGHT = "BOTTOM_RIGHT";
let L = ["TOP_LEFT", "TOP_RIGHT"],
  D = (0, E.cssValueToNumber)(_.default.USER_PREMIUM_GUILD_SUBSCRIPTION_EASTER_EGG_SIZE),
  P = {
    leafPosition: {
      x: 85,
      y: 125
    },
    leafRotationDirection: 1
  },
  y = Object.freeze({
    TOP_LEFT: {
      getConfettiPosition: e => ({
        x: e - 11,
        y: e - 125
      }),
      confettiVelocityDirection: {
        x: 1,
        y: 1
      },
      leafPosition: {
        x: 100,
        y: 144
      },
      leafRotationDirection: 1
    },
    TOP_RIGHT: {
      getConfettiPosition: e => ({
        x: 11,
        y: e - 125
      }),
      confettiVelocityDirection: {
        x: -1,
        y: 1
      },
      leafPosition: {
        x: 90,
        y: 144
      },
      leafRotationDirection: -1
    },
    BOTTOM_LEFT: {
      ...P,
      getConfettiPosition: e => ({
        x: e - 11,
        y: 125
      }),
      confettiVelocityDirection: {
        x: 1,
        y: -1
      }
    },
    BOTTOM_RIGHT: {
      ...P,
      getConfettiPosition: e => ({
        x: 11,
        y: 125
      }),
      confettiVelocityDirection: {
        x: -1,
        y: -1
      }
    }
  }),
  U = "falling-leaf",
  j = ["#61D5B2"],
  b = n("303893"),
  B = n("808392"),
  G = [b, B];

function F() {
  return n.e("60005").then(n.t.bind(n, "931152", 19)).then(e => {
    let {
      default: t
    } = e;
    return t
  })
}

function k(e) {
  let {
    onAnimationComplete: t,
    onClick: n,
    position: s,
    size: l
  } = e, i = o.useRef(null), [u, E] = o.useState(null), [_] = o.useState(null != s ? s : function() {
    switch (Math.floor(Math.random() * Object.keys(a).length)) {
      case 0:
        return "TOP_LEFT";
      case 2:
        return "TOP_RIGHT";
      case 3:
        return "BOTTOM_LEFT";
      default:
        return "BOTTOM_RIGHT"
    }
  }()), {
    createMultipleConfettiAt: T,
    confettiCanvas: p
  } = o.useContext(I.ConfettiCannonContext), [h, N] = o.useState(null), C = (0, c.useConfettiCannon)(p, h), A = function(e, t) {
    if (null == e) return "enter";
    switch (e) {
      case "enter":
        return "confetti";
      case "confetti":
        if (L.includes(t)) return "leaf_peel";
        return "exit";
      case "leaf_peel":
        return "leaf_fall";
      case "leaf_fall":
        return "exit";
      case "exit":
        return "enter"
    }
  }(u, _), g = L.includes(_), M = g && "exit" === u, R = o.useCallback(e => {
    E(e)
  }, []), v = o.useCallback(() => {
    "exit" === u && (null == t || t())
  }, [t, u]), P = o.useCallback(e => {
    i.current = e
  }, []);
  return o.useEffect(() => {
    if ("confetti" === u) {
      let {
        confettiVelocityDirection: e
      } = y[_], t = function(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : D,
          s = null == e ? void 0 : e.getBoundingClientRect();
        if (null == s) return {
          x: 0,
          y: 0
        };
        let a = y[t].getConfettiPosition(n);
        return {
          x: s.left + a.x,
          y: s.top + a.y
        }
      }(i.current, _, l);
      T(t.x, t.y, {
        velocity: {
          type: "static-random",
          minValue: {
            x: 10 * e.x,
            y: 80 * e.y
          },
          maxValue: {
            x: 80 * e.x,
            y: 180 * e.y
          }
        }
      })
    }
  }, [T, _, u, l]), o.useEffect(() => {
    if (g && "leaf_fall" === u) {
      let e = y[_].leafRotationDirection;
      C.createConfetti({
        id: "".concat(U, "-").concat((0, f.v4)()),
        position: {
          type: "static",
          value: function(e, t) {
            let n = null == e ? void 0 : e.getBoundingClientRect();
            if (null == n) return {
              x: 0,
              y: 0
            };
            let s = y[t];
            return {
              x: n.left + s.leafPosition.x,
              y: n.top + s.leafPosition.y
            }
          }(i.current, _)
        },
        size: {
          type: "static",
          value: 45
        },
        rotation: {
          type: "linear-random",
          minValue: {
            x: 0,
            y: 0,
            z: 0
          },
          maxValue: {
            x: 0,
            y: 0,
            z: 0
          },
          minAddValue: {
            x: 0,
            y: 0,
            z: 8 * e
          },
          maxAddValue: {
            x: 0,
            y: 0,
            z: 12 * e
          }
        }
      }, {
        sprite: "TOP_LEFT" === _ ? b : B
      })
    }
  }, [g, C, _, u]), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(c.SpriteCanvas, {
      ref: N,
      sprites: G,
      colors: j,
      spriteWidth: 45,
      spriteHeight: 45
    }), (0, r.jsx)(m.Clickable, {
      onClick: n,
      className: d()(O.easterEggAnimationClickTarget, {
        [O.easterEggAnimationClickTargetTopLeft]: "TOP_LEFT" === _,
        [O.easterEggAnimationClickTargetTopRight]: "TOP_RIGHT" === _,
        [O.easterEggAnimationClickTargetBottomLeft]: "BOTTOM_LEFT" === _,
        [O.easterEggAnimationClickTargetBottomRight]: "BOTTOM_RIGHT" === _
      }),
      children: (0, r.jsx)(S.default, {
        animationRef: P,
        className: d()(O.easterEggAnimation, {
          [O.easterEggAnimationHideLeaf]: M
        }),
        nextScene: A,
        sceneSegments: x,
        onScenePlay: R,
        onSceneComplete: v,
        importData: F,
        pauseWhileUnfocused: !1
      })
    })]
  })
}

function w(e) {
  let t, {
      message: n,
      compact: s,
      guild: a,
      usernameHook: l,
      onClickMessage: i
    } = e,
    u = function(e) {
      switch (e.type) {
        case R.MessageTypes.GUILD_BOOST_TIER_1:
          return R.BoostedGuildTiers.TIER_1;
        case R.MessageTypes.GUILD_BOOST_TIER_2:
          return R.BoostedGuildTiers.TIER_2;
        case R.MessageTypes.GUILD_BOOST_TIER_3:
          return R.BoostedGuildTiers.TIER_3
      }
      return null
    }(n),
    d = (0, N.default)(n),
    {
      createMultipleConfettiAt: c,
      addClickListener: f
    } = o.useContext(I.ConfettiCannonContext),
    [E, _] = o.useState(!1),
    S = o.useRef(null),
    {
      reducedMotion: x
    } = o.useContext(m.AccessibilityPreferencesContext),
    L = (0, p.getMessageAuthor)(n),
    D = L.nick,
    P = l(L);
  t = null == u || null == a ? d > 1 ? v.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_HOOK.format({
    username: D,
    usernameHook: P,
    numSubscriptions: d
  }) : v.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_HOOK.format({
    username: D,
    usernameHook: P
  }) : d > 1 ? v.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_MANY_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: P,
    numSubscriptions: d,
    guildName: a.name,
    newTierName: (0, M.getTierName)(u)
  }) : v.default.Messages.SYSTEM_MESSAGE_GUILD_MEMBER_SUBSCRIBED_ACHIEVED_TIER_HOOK.format({
    username: D,
    usernameHook: P,
    guildName: a.name,
    newTierName: (0, M.getTierName)(u)
  });
  let y = o.useCallback(() => {
      if (!x.enabled) {
        if (E || 0 !== Math.floor(50 * Math.random())) {
          var e;
          let t = null === (e = S.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
          if (null != t) c(t.left + t.width / 2, t.top + t.height / 2)
        } else _(!0)
      }
    }, [c, x, E]),
    j = o.useCallback(() => {
      _(!1)
    }, []),
    b = o.useCallback(() => {
      (0, h.updatePoggermodeSettings)({
        settingsVisible: !0
      }), T.default.open(R.UserSettingsSections.POGGERMODE), _(!1)
    }, []),
    B = o.useCallback((e, t) => {
      (null == t ? void 0 : t.id.startsWith(U)) && b()
    }, [b]);
  o.useEffect(() => f(B));
  let G = (0, r.jsx)(m.Clickable, {
    className: O.iconWrapper,
    innerRef: S,
    onClick: i,
    children: (0, r.jsx)(C.default, {
      className: O.icon,
      onMouseEnter: y
    })
  });
  return (0, r.jsxs)(g.default, {
    iconNode: G,
    timestamp: n.timestamp,
    compact: s,
    children: [(0, r.jsx)("div", {
      onClick: i,
      className: O.message,
      children: t
    }), E ? (0, r.jsx)(A.default, {
      children: (0, r.jsx)("div", {
        className: O.cannonWrapper,
        children: (0, r.jsx)(k, {
          onAnimationComplete: j,
          onClick: b
        })
      })
    }) : null]
  })
}