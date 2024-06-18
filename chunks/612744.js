"use strict";
n.d(t, {
  h: function() {
    return f
  }
}), n(47120);
var i, r = n(735250),
  s = n(470079),
  o = n(120356),
  a = n.n(o),
  l = n(477690),
  u = n(257915),
  _ = n(624138),
  d = n(980483),
  c = n(450590),
  E = n(756286),
  I = n(271225);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = (0, _.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

function S(e, t) {
  let {
    innerWidth: n,
    innerHeight: i
  } = window;
  if (0 === e || 0 === t) return null;
  let r = t / e,
    s = n,
    o = Math.round(n * r);
  return o < i && (o = i, s = Math.round(i * (r = e / t))), {
    naturalWidth: e,
    naturalHeight: t,
    width: s,
    height: o
  }
}

function f(e) {
  let {
    splash: t,
    children: n
  } = e, [{
    width: i,
    height: o
  }, l] = s.useState({
    width: 0,
    height: 0,
    naturalHeight: 0,
    naturalWidth: 0
  });
  return s.useEffect(() => {
    function e() {
      l(e => {
        let {
          naturalWidth: t,
          naturalHeight: n
        } = e, i = S(t, n);
        return null != i ? i : e
      })
    }
    return window.addEventListener("resize", e), () => window.removeEventListener("reslize", e)
  }, []), (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(u.Z, {
      className: a()(I.rightSplit),
      onLoad: function(e) {
        let {
          currentTarget: t
        } = e, {
          naturalWidth: n,
          naturalHeight: i
        } = t, r = S(n, i);
        null != r && l(r)
      },
      src: t,
      width: i,
      height: o
    }), (0, r.jsx)("div", {
      className: a()(I.leftSplit, {
        [I.nonEmbeddedLeftSplit]: !0
      }),
      children: n
    })]
  })
}
class N extends(i = s.PureComponent) {
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }
  calculateShowWaveAnimation() {
    return window.innerWidth > h
  }
  renderSplashArt() {
    let {
      splash: e,
      embedded: t
    } = this.props, {
      width: n,
      height: i
    } = this.state;
    return null != e ? (0, r.jsx)(u.Z, {
      className: a()(I.rightSplit, {
        [I.embedded]: t
      }),
      src: e,
      width: n,
      height: i,
      onLoad: this.handleLoad
    }) : null
  }
  renderWave() {
    let {
      waveState: e,
      updateWaveState: t,
      embedded: n
    } = this.props, {
      showWaveAnimation: i,
      splashLoaded: s
    } = this.state;
    return i ? (0, r.jsx)(c.Z, {
      embedded: n,
      waveState: e,
      updateWaveState: t,
      hideFallback: !s
    }) : (0, r.jsx)("div", {
      className: I.mobileWave
    })
  }
  renderContent() {
    let {
      children: e,
      waveState: t,
      showLogo: n,
      logoClassName: i,
      embedded: o
    } = this.props, {
      showWaveAnimation: l
    } = this.state;
    return (0, r.jsxs)(s.Fragment, {
      children: [this.renderWave(), (0, r.jsxs)("div", {
        className: a()(I.leftSplit, {
          [I.nonEmbeddedLeftSplit]: o
        }),
        children: [n ? (0, r.jsx)(d.Z, {
          show: !l || t === E.hO.ENTERED && t !== E.hO.FILLING,
          className: a()(I.logo, i)
        }) : null, e]
      })]
    })
  }
  render() {
    let {
      className: e
    } = this.props;
    return (0, r.jsxs)("div", {
      className: a()(e, I.wrapper),
      children: [this.renderSplashArt(), this.renderContent()]
    })
  }
  constructor(...e) {
    super(...e), T(this, "state", {
      naturalWidth: 0,
      naturalHeight: 0,
      width: 0,
      height: 0,
      showWaveAnimation: this.calculateShowWaveAnimation(),
      splashLoaded: !1
    }), T(this, "handleResize", () => {
      let {
        naturalWidth: e,
        naturalHeight: t
      } = this.state, n = S(e, t), i = this.calculateShowWaveAnimation();
      null != n ? this.setState({
        ...n,
        showWaveAnimation: i
      }) : this.setState({
        showWaveAnimation: i
      })
    }), T(this, "handleLoad", e => {
      let {
        currentTarget: t
      } = e, {
        naturalWidth: n,
        naturalHeight: i
      } = t, r = S(n, i);
      null != r && this.setState(r), this.setState({
        splashLoaded: !0
      }), window.removeEventListener("resize", this.handleResize), window.addEventListener("resize", this.handleResize)
    })
  }
}
T(N, "defaultProps", {
  embedded: !1
}), t.Z = N