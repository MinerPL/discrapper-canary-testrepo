"use strict";
n.r(e), n("47120");
var i, s = n("735250"),
  r = n("470079"),
  a = n("803997"),
  u = n.n(a),
  o = n("442837"),
  l = n("607070"),
  c = n("451478"),
  d = n("477094");

function p(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t
}
class h extends(i = r.PureComponent) {
  async componentDidMount() {
    let {
      importData: t,
      nextScene: e,
      pauseWhileUnfocused: i,
      pause: s,
      isWindowFocused: r,
      useReducedMotion: a
    } = this.props, [u, {
      default: o
    }] = await Promise.all([t(), n.e("23755").then(n.t.bind(n, "500923", 23))]);
    null != this.animationRef && (this.animation = o.loadAnimation({
      container: this.animationRef,
      renderer: "svg",
      loop: !0,
      autoplay: !0,
      animationData: u
    }), this.animation.addEventListener("loopComplete", this.handleLoopComplete), this.animation.addEventListener("complete", this.handleComplete), this.playScene(e), (i && !r || s || a) && this.animation.pause())
  }
  componentWillUnmount() {
    this.isUnmounted = !0, null != this.animation && (this.animation.destroy(), this.animation = void 0)
  }
  componentDidUpdate(t) {
    var e, n, i;
    let {
      nextScene: s,
      pauseWhileUnfocused: r,
      pause: a,
      isWindowFocused: u,
      useReducedMotion: o
    } = this.props;
    s !== this.currentScene && this.shouldForcePlayAfter() && !a && this.playScene(s), null != this.animation && (r && !t.isWindowFocused && u && !o && !0 !== a ? this.animation.play() : (o || r && t.isWindowFocused && !u) && this.animation.pause()), !t.pause && a ? null === (e = this.animation) || void 0 === e || e.pause() : t.pause && !a && !o && (null === (n = this.animation) || void 0 === n || n.play()), t.nextScene !== s && a && (this.playScene(s), null === (i = this.animation) || void 0 === i || i.pause())
  }
  shouldForcePlayAfter() {
    let {
      sceneSegments: t
    } = this.props;
    return !0 === t[this.currentScene].shouldForcePlayAfter
  }
  playScene(t) {
    if (this.isUnmounted) return;
    let {
      onScenePlay: e,
      sceneSegments: n,
      useReducedMotion: i
    } = this.props, s = n[t], r = n[this.currentScene];
    if (null != this.animation && (t === this.currentScene || s.BEG !== r.BEG || s.END !== r.END) && this.animation.playSegments([s.BEG, s.END], !0), this.currentScene = t, null != e && e(this.currentScene), i) {
      var a;
      null === (a = this.animation) || void 0 === a || a.pause()
    }
  }
  render() {
    return (0, s.jsx)("div", {
      ref: this.handleSetRef,
      className: u()(this.props.className, d.wrapper)
    })
  }
  constructor(...t) {
    super(...t), p(this, "animationRef", null), p(this, "animation", void 0), p(this, "currentScene", this.props.nextScene), p(this, "isUnmounted", !1), p(this, "handleLoopComplete", () => {
      let {
        onSceneComplete: t,
        nextScene: e
      } = this.props;
      null != t && t(this.currentScene), this.playScene(e)
    }), p(this, "handleComplete", () => {
      let {
        onSceneComplete: t
      } = this.props;
      null != t && t(this.currentScene)
    }), p(this, "handleSetRef", t => {
      this.animationRef = t;
      let {
        animationRef: e
      } = this.props;
      null != e && e(t)
    })
  }
}
p(h, "defaultProps", {
  pauseWhileUnfocused: !0,
  pause: !1
});
e.default = t => {
  let {
    componentRef: e,
    ...n
  } = t, i = (0, o.useStateFromStores)([c.default], () => c.default.isFocused()), r = (0, o.useStateFromStores)([l.default], () => l.default.useReducedMotion);
  return (0, s.jsx)(h, {
    ...n,
    isWindowFocused: i,
    useReducedMotion: r,
    ref: e
  })
}