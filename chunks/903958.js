"use strict";
n.r(t), n("47120");
var a, r = n("735250"),
  s = n("470079"),
  o = n("120356"),
  i = n.n(o),
  l = n("442837"),
  u = n("607070"),
  c = n("451478"),
  d = n("841636");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends(a = s.PureComponent) {
  async componentDidMount() {
    let {
      importData: e,
      nextScene: t,
      pauseWhileUnfocused: a,
      pause: r,
      isWindowFocused: s,
      useReducedMotion: o
    } = this.props, [i, {
      default: l
    }] = await Promise.all([e(), n.e("23755").then(n.t.bind(n, "500923", 23))]);
    null != this.animationRef && (this.animation = l.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: i
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.animation.addEventListener("enterFrame", this.handleEnterFrame), this.playScene(t), (a && !s || r || o) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(e) {
    var t, n, a;
    let {
      nextScene: r,
      pauseWhileUnfocused: s,
      pause: o,
      isWindowFocused: i,
      useReducedMotion: l
    } = this.props;
    r !== this.currentScene && this.shouldForcePlayAfter() && !o && this.playScene(r), null != this.animation && (s && !e.isWindowFocused && i && !l && !0 !== o ? this.animation.play() : (l || s && e.isWindowFocused && !i) && this.animation.pause()), !e.pause && o ? null === (t = this.animation) || void 0 === t || t.pause() : e.pause && !o && !l && (null === (n = this.animation) || void 0 === n || n.play()), e.nextScene !== r && o && (this.playScene(r), null === (a = this.animation) || void 0 === a || a.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: e
    } = this.props;
    return !0 === e[this.currentScene].shouldForcePlayAfter
  }
  playScene(e) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: t,
      sceneSegments: n,
      useReducedMotion: a
    } = this.props, r = n[e], s = n[this.currentScene];
    if (null != this.animation && (e === this.currentScene || r.BEG !== s.BEG || r.END !== s.END) && this.animation.playSegments([r.BEG, r.END], !0), this.currentScene = e, null != t && t(this.currentScene), a) {
      var o;
      null === (o = this.animation) || void 0 === o || o.pause()
    }
  }
  render() {
    return (0, r.jsx)("div", {
      ref: this.handleSetRef,
      className: i()(this.props.className, d.wrapper)
    })
  }
  constructor(...e) {
    super(...e), p(this, "animationRef", null), p(this, "animation", void 0), p(this, "currentScene", this.props.nextScene), p(this, "isUnmounted", !1), p(this, "handleLoopComplete", () => {
      let {
        onSceneComplete: e,
        nextScene: t
      } = this.props;
      null != e && e(this.currentScene), this.playScene(t)
    }), p(this, "handleComplete", () => {
      let {
        onSceneComplete: e
      } = this.props;
      null != e && e(this.currentScene)
    }), p(this, "handleEnterFrame", e => {
      let {
        onEnterFrame: t
      } = this.props;
      null == t || t(this.currentScene, e)
    }), p(this, "handleSetRef", e => {
      this.animationRef = e;
      let {
        animationRef: t
      } = this.props;
      null != t && t(e)
    })
  }
}
p(f, "defaultProps", {
  pauseWhileUnfocused: !0,
  pause: !1
});
t.default = e => {
  let {
    componentRef: t,
    ignoreReducedMotion: n = !1,
    ...a
  } = e, s = (0, l.useStateFromStores)([c.default], () => c.default.isFocused()), o = (0, l.useStateFromStores)([u.default], () => u.default.useReducedMotion);
  return (0, r.jsx)(f, {
    ...a,
    isWindowFocused: s,
    useReducedMotion: o && !n,
    ref: t
  })
}