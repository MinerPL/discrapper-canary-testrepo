"use strict";
n.d(t, {
  F: function() {
    return _
  }
}), n(47120);
var i, r, s, o = n(735250),
  a = n(470079),
  l = n(846519);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {})).SVG = "svg", s.CANVAS = "canvas";
class _ extends(r = a.Component) {
  componentDidMount() {
    (null == this.props.versionKey || !(this.props.versionKey < 0)) && this.loadAnimation()
  }
  componentDidUpdate(e) {
    (null == this.props.versionKey || !(this.props.versionKey < 0)) && (null != this.props.versionKey && null != e.versionKey && this.props.versionKey > e.versionKey ? this.loadAnimation() : this.playOrPauseAnimation(e))
  }
  componentWillUnmount() {
    null != this.animation && (this.animation.stop(), this.animation.destroy(), this.animation = null), this.delayTimeout.stop()
  }
  playOrPauseAnimation(e) {
    if (null != this.animation) this.props.shouldAnimate && (null == e || !e.shouldAnimate) ? this.props.resetOnPlay ? this.animation.goToAndPlay(0) : this.animation.play() : !this.props.shouldAnimate && (null == e || e.shouldAnimate) && (this.animation.pause(), null != this.props.pauseAtFrame && this.animation.goToAndStop(this.props.pauseAtFrame, !0))
  }
  render() {
    return (0, o.jsx)("div", {
      className: this.props.className,
      ref: this.animationRef
    })
  }
  constructor(...e) {
    super(...e), u(this, "animationRef", a.createRef()), u(this, "animation", void 0), u(this, "delayTimeout", new l.V7), u(this, "loadAnimation", async () => {
      let {
        importData: e,
        loop: t,
        autoplay: i,
        delay: r,
        renderer: s,
        rendererSettings: o,
        shouldAnimate: a
      } = this.props;
      null != this.animation && this.animation.destroy();
      let [l, {
        default: u
      }] = await Promise.all([e(), n.e("23755").then(n.t.bind(n, 500923, 23))]);
      if (null != this.animationRef.current) this.animation = u.loadAnimation({
        container: this.animationRef.current,
        renderer: s,
        loop: t,
        autoplay: i && null == r && a,
        animationData: l,
        rendererSettings: o
      }), null != r ? this.delayTimeout.start(r, () => {
        var e;
        null === (e = this.animation) || void 0 === e || e.play()
      }) : this.playOrPauseAnimation(), this.animation.addEventListener("complete", this.handleComplete)
    }), u(this, "handleComplete", () => {
      let {
        onComplete: e
      } = this.props;
      null != e && e()
    })
  }
}
u(_, "defaultProps", {
  loop: !0,
  autoplay: !0,
  renderer: "svg",
  shouldAnimate: !0,
  resetOnPlay: !1
}), u(_, "Renderers", i)