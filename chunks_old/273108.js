"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("414456"),
  l = n.n(a),
  i = n("446674"),
  o = n("206230"),
  u = n("471671"),
  d = n("708721");
class c extends r.PureComponent {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: s,
      pause: r,
      isWindowFocused: a,
      useReducedMotion: l
    } = this.props, [i, {
      default: o
    }] = await Promise.all([e(), n.el("865981").then(n.t.bind(n, "865981", 23))]);
    null != this.animationRef && (this.animation = o.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: i
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(t), (s && !a || r || l) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, s;
    let {
      nextScene: r,
      pauseWhileUnfocused: a,
      pause: l,
      isWindowFocused: i,
      useReducedMotion: o
    } = this.props;
    r !== this.currentScene && this.shouldForcePlayAfter() && !l && this.playScene(r), null != this.animation && (a && !e.isWindowFocused && i && !o && !0 !== l ? this.animation.play() : (o || a && e.isWindowFocused && !i) && this.animation.pause()), !e.pause && l ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !l && !o && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && l && (this.playScene(r), null === (s = this.animation) || void 0 === s || s.pause())
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
      useReducedMotion: s
    } = this.props, r = n[e], a = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || r.BEG !== a.BEG || r.END !== a.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), s) {
      var l;
      null === (l = this.animation) || void 0 === l || l.pause()
    }
  }
  render() {
    return (0, s.jsx)("div", {
      ref: this.handleSetRef,
      className: l(this.props.className, d.wrapper)
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
c.defaultProps = {
  pauseWhileUnfocused: !0,
  pause: !1
};
var f = e => {
  let {
    componentRef: t,
    ...n
  } = e, r = (0, i.useStateFromStores)([u.default], () => u.default.isFocused()), a = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion);
  return (0, s.jsx)(c, {
    ...n,
    isWindowFocused: r,
    useReducedMotion: a,
    ref: t
  })
}