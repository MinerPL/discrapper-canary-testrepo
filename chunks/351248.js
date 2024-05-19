"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
}), n("653041"), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("748780"),
  o = n("442837"),
  u = n("215569"),
  d = n("780384"),
  c = n("481060"),
  f = n("410030"),
  h = n("451478"),
  m = n("421600"),
  p = n("354459"),
  E = n("335640"),
  C = n("961047"),
  g = n("139661");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let _ = {
    STEPS: 23,
    FRAME_DURATION: 17,
    FRAME_SIZE: 26
  },
  T = {
    SCALE_MIN: .7,
    SCALE_MAX: 1,
    DURATION_IN: 300,
    DURATION_OUT: 170,
    EASING_IN: r.default.Easing.inOut(r.default.Easing.back()),
    EASING_OUT: r.default.Easing.quad
  },
  I = {
    DURATION_IN: 200,
    DURATION_OUT: 125
  };
class A extends l.PureComponent {
  componentDidMount() {
    this.componentDidAppear()
  }
  componentDidAppear() {
    let {
      scaleAnimation: e,
      widthAnimation: t
    } = this;
    e.setValue(1), t.setValue(1)
  }
  componentWillEnter(e) {
    let {
      scaleAnimation: t,
      widthAnimation: n
    } = this;
    t.setValue(0), n.setValue(0), r.default.parallel([r.default.timing(t, {
      toValue: 1,
      duration: T.DURATION_IN,
      easing: T.EASING_IN
    }), r.default.timing(n, {
      toValue: 1,
      duration: 200
    })]).start(e)
  }
  componentWillLeave(e) {
    let {
      scaleAnimation: t,
      spriteAnimation: n,
      spriteOpacity: a,
      widthAnimation: l
    } = this;
    a.setValue(1), n.setValue(0);
    let s = [];
    for (let e = 0; e < _.STEPS; e++) s.push(r.default.timing(n, {
      toValue: -_.FRAME_SIZE * e,
      duration: _.FRAME_DURATION
    }));
    r.default.sequence([r.default.timing(t, {
      toValue: 0,
      duration: T.DURATION_OUT,
      easing: T.EASING_OUT
    }), r.default.sequence(s), r.default.timing(l, {
      toValue: 0,
      duration: 125
    })]).start(e)
  }
  getScaleStyle() {
    let {
      scaleAnimation: e
    } = this;
    return r.default.accelerate({
      transform: [{
        scale: e.interpolate({
          inputRange: [0, 1],
          outputRange: [T.SCALE_MIN, T.SCALE_MAX]
        })
      }],
      opacity: e
    })
  }
  getSpriteStyle() {
    let {
      spriteAnimation: e,
      spriteOpacity: t
    } = this;
    return {
      backgroundPosition: e,
      opacity: t
    }
  }
  getWidthStyle() {
    return {
      width: this.widthAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0px", "".concat(this.props.width, "px")]
      })
    }
  }
  render() {
    let {
      theme: e,
      children: t,
      className: n
    } = this.props, l = (0, d.isThemeDark)(e), s = i()(E.sprite, {
      [g.crossWhite]: l,
      [g.crossGrey]: !l
    });
    return (0, a.jsxs)(r.default.div, {
      className: i()(E.transition, n),
      style: this.getWidthStyle(),
      children: [(0, a.jsx)("div", {
        className: i()(E.spriteWrapper, C.horizontal, C.justifyCenter, C.alignCenter),
        children: (0, a.jsx)(r.default.div, {
          className: s,
          style: this.getSpriteStyle()
        })
      }), (0, a.jsx)(r.default.div, {
        style: this.getScaleStyle(),
        children: t
      })]
    })
  }
  constructor(...e) {
    super(...e), S(this, "scaleAnimation", new r.default.Value(0)), S(this, "spriteAnimation", new r.default.Value(0)), S(this, "spriteOpacity", new r.default.Value(0)), S(this, "widthAnimation", new r.default.Value(0))
  }
}

function N(e) {
  var t, n;
  let {
    participants: l,
    onContextMenu: s,
    className: r,
    onClick: d,
    width: C,
    guildId: g
  } = e, S = (0, f.default)();
  let _ = (t = C, n = l.length, ((0, c.getAvatarSize)(c.AvatarSizes.SIZE_80) + 16) * n > t ? c.AvatarSizes.SIZE_40 : c.AvatarSizes.SIZE_80),
    T = (0, o.useStateFromStores)([h.default], () => h.default.isFocused()),
    I = l.map(e => {
      var t, n;
      if (e.type !== p.ParticipantTypes.USER) return null;
      let {
        user: l,
        voiceState: i,
        speaking: r,
        ringing: o
      } = e;
      return (0, a.jsx)(A, {
        className: E.participant,
        width: (0, c.getAvatarSize)(_),
        theme: S,
        children: (0, a.jsx)(m.default, {
          src: l.getAvatarURL(g, (0, c.getAvatarSize)(_), r && T),
          size: _,
          muted: null !== (t = null == i ? void 0 : i.isVoiceMuted()) && void 0 !== t && t,
          deafen: null !== (n = null == i ? void 0 : i.isVoiceDeafened()) && void 0 !== n && n,
          speaking: r,
          ringing: o,
          onClick: t => null == d ? void 0 : d(e, t),
          onContextMenu: t => null == s ? void 0 : s(e, t)
        }, e.id)
      }, l.id)
    });
  return (0, a.jsx)(u.TransitionGroup, {
    component: "div",
    className: i()(E.root, r),
    children: I
  })
}