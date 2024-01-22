"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  r = n("414456"),
  l = n.n(r),
  s = n("446674"),
  u = n("206230"),
  o = n("471671"),
  c = n("629758");
class d extends a.PureComponent {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: i,
      pause: a,
      isWindowFocused: r,
      useReducedMotion: l
    } = this.props, [s, {
      default: u
    }] = await Promise.all([e(), n.el("245749").then(n.t.bind(n, "245749", 23))]);
    null != this.animationRef && (this.animation = u.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: s
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (i && !r || a || l) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, i;
    let {
      nextScene: a,
      pauseWhileUnfocused: r,
      pause: l,
      isWindowFocused: s,
      useReducedMotion: u
    } = this.props;
    a !== this.currentScene && this.shouldForcePlayAfter() && !l && this.playScene(a), null != this.animation && (r && !e.isWindowFocused && s && !u && !0 !== l ? this.animation.play() : (u || r && e.isWindowFocused && !s) && this.animation.pause()), !e.pause && l ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !l && !u && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== a && l && (this.playScene(a), null === (i = this.animation) || void 0 === i || i.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: e
    } = this.props, t = e[this.currentScene];
    return !0 === t.shouldForcePlayAfter
  }
  playScene(e) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: t,
      sceneSegments: n,
      useReducedMotion: i
    } = this.props, a = n[e], r = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || a.BEG !== r.BEG || a.END !== r.END) && this.animation.playSegments([a.BEG, a.END], !0), this.currentScene = e, null != t && t(this.currentScene), i) {
      var l;
      null === (l = this.animation) || void 0 === l || l.pause()
    }
  }
  render() {
    return (0, i.jsx)("div", {
      ref: this.handleSetRef,
      className: l(this.props.className, c.wrapper)
    })
  }
  constructor(...e) {
    super(...e), this.animationRef = null, this.currentScene = this.props.nextScene, this.isUnmounted = !1, this.handleLoopComplete = () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }, this.handleComplete = () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }, this.handleSetRef = e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    }
  }
}
d.defaultProps = {
  pauseWhileUnfocused: !0,
  pause: !1
};
var p = e => {
  let {
    componentRef: t,
    ...n
  } = e, a = (0, s.useStateFromStores)([o.default], () => o.default.isFocused()), r = (0, s.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  return (0, i.jsx)(d, {
    ...n,
    isWindowFocused: a,
    useReducedMotion: r,
    ref: t
  })
}