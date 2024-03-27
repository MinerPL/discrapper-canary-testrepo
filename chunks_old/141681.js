"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("424973"), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("458960"),
  u = n("446674"),
  o = n("266491"),
  d = n("819855"),
  c = n("77078"),
  f = n("841098"),
  h = n("471671"),
  m = n("823050"),
  p = n("99795"),
  E = n("133006"),
  g = n("125047"),
  S = n("403693");
let C = {
    STEPS: 23,
    FRAME_DURATION: 17,
    FRAME_SIZE: 26
  },
  _ = {
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
class T extends l.PureComponent {
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
      duration: _.DURATION_IN,
      easing: _.EASING_IN
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
    for (let e = 0; e < C.STEPS; e++) s.push(r.default.timing(n, {
      toValue: -C.FRAME_SIZE * e,
      duration: C.FRAME_DURATION
    }));
    r.default.sequence([r.default.timing(t, {
      toValue: 0,
      duration: _.DURATION_OUT,
      easing: _.EASING_OUT
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
          outputRange: [_.SCALE_MIN, _.SCALE_MAX]
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
    } = this.props, l = (0, d.isThemeDark)(e), s = i(E.sprite, {
      [S.crossWhite]: l,
      [S.crossGrey]: !l
    });
    return (0, a.jsxs)(r.default.div, {
      className: i(E.transition, n),
      style: this.getWidthStyle(),
      children: [(0, a.jsx)("div", {
        className: i(E.spriteWrapper, g.horizontal, g.justifyCenter, g.alignCenter),
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
    super(...e), this.scaleAnimation = new r.default.Value(0), this.spriteAnimation = new r.default.Value(0), this.spriteOpacity = new r.default.Value(0), this.widthAnimation = new r.default.Value(0)
  }
}

function v(e) {
  var t, n;
  let {
    participants: l,
    onContextMenu: s,
    className: r,
    onClick: d,
    width: g,
    guildId: S
  } = e, C = (0, f.default)();
  let _ = (t = g, n = l.length, ((0, c.getAvatarSize)(c.AvatarSizes.SIZE_80) + 16) * n > t ? c.AvatarSizes.SIZE_40 : c.AvatarSizes.SIZE_80),
    I = (0, u.useStateFromStores)([h.default], () => h.default.isFocused()),
    v = l.map(e => {
      var t, n;
      if (e.type !== p.ParticipantTypes.USER) return null;
      let {
        user: l,
        voiceState: i,
        speaking: r,
        ringing: u
      } = e;
      return (0, a.jsx)(T, {
        className: E.participant,
        width: (0, c.getAvatarSize)(_),
        theme: C,
        children: (0, a.jsx)(m.default, {
          src: l.getAvatarURL(S, (0, c.getAvatarSize)(_), r && I),
          size: _,
          muted: null !== (t = null == i ? void 0 : i.isVoiceMuted()) && void 0 !== t && t,
          deafen: null !== (n = null == i ? void 0 : i.isVoiceDeafened()) && void 0 !== n && n,
          speaking: r,
          ringing: u,
          onClick: t => null == d ? void 0 : d(e, t),
          onContextMenu: t => null == s ? void 0 : s(e, t)
        }, e.id)
      }, l.id)
    });
  return (0, a.jsx)(o.TransitionGroup, {
    component: "div",
    className: i(E.root, r),
    children: v
  })
}