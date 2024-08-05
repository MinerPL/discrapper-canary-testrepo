n.d(t, {
  h: function() {
return I;
  }
}), n(47120);
var r, i = n(735250),
  a = n(470079),
  s = n(120356),
  o = n.n(s),
  l = n(477690),
  u = n(877604),
  c = n(624138),
  d = n(133853),
  _ = n(686694),
  E = n(898625),
  f = n(832306);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let p = (0, c.Mg)(l.Z.WAVE_SPLASH_RESPONSIVE_WIDTH_MOBILE);

function m(e, t) {
  let {
innerWidth: n,
innerHeight: r
  } = window;
  if (0 === e || 0 === t)
return null;
  let i = t / e,
a = n,
s = Math.round(n * i);
  return s < r && (s = r, a = Math.round(r * (i = e / t))), {
naturalWidth: e,
naturalHeight: t,
width: a,
height: s
  };
}

function I(e) {
  let {
splash: t,
children: n
  } = e, [{
width: r,
height: s
  }, l] = a.useState({
width: 0,
height: 0,
naturalHeight: 0,
naturalWidth: 0
  });
  return a.useEffect(() => {
function e() {
  l(e => {
    let {
      naturalWidth: t,
      naturalHeight: n
    } = e, r = m(t, n);
    return null != r ? r : e;
  });
}
return window.addEventListener('resize', e), () => window.removeEventListener('reslize', e);
  }, []), (0, i.jsxs)(i.Fragment, {
children: [
  (0, i.jsx)(u.Z, {
    className: o()(f.rightSplit),
    onLoad: function(e) {
      let {
        currentTarget: t
      } = e, {
        naturalWidth: n,
        naturalHeight: r
      } = t, i = m(n, r);
      null != i && l(i);
    },
    src: t,
    width: r,
    height: s
  }),
  (0, i.jsx)('div', {
    className: o()(f.leftSplit, {
      [f.nonEmbeddedLeftSplit]: !0
    }),
    children: n
  })
]
  });
}
class T extends(r = a.PureComponent) {
  componentWillUnmount() {
window.removeEventListener('resize', this.handleResize);
  }
  calculateShowWaveAnimation() {
return window.innerWidth > p;
  }
  renderSplashArt() {
let {
  splash: e,
  embedded: t
} = this.props, {
  width: n,
  height: r
} = this.state;
return null != e ? (0, i.jsx)(u.Z, {
  className: o()(f.rightSplit, {
    [f.embedded]: t
  }),
  src: e,
  width: n,
  height: r,
  onLoad: this.handleLoad
}) : null;
  }
  renderWave() {
let {
  waveState: e,
  updateWaveState: t,
  embedded: n
} = this.props, {
  showWaveAnimation: r,
  splashLoaded: a
} = this.state;
return r ? (0, i.jsx)(_.Z, {
  embedded: n,
  waveState: e,
  updateWaveState: t,
  hideFallback: !a
}) : (0, i.jsx)('div', {
  className: f.mobileWave
});
  }
  renderContent() {
let {
  children: e,
  waveState: t,
  showLogo: n,
  logoClassName: r,
  embedded: s
} = this.props, {
  showWaveAnimation: l
} = this.state;
return (0, i.jsxs)(a.Fragment, {
  children: [
    this.renderWave(),
    (0, i.jsxs)('div', {
      className: o()(f.leftSplit, {
        [f.nonEmbeddedLeftSplit]: s
      }),
      children: [
        n ? (0, i.jsx)(d.Z, {
          show: !l || t === E.hO.ENTERED && t !== E.hO.FILLING,
          className: o()(f.logo, r)
        }) : null,
        e
      ]
    })
  ]
});
  }
  render() {
let {
  className: e
} = this.props;
return (0, i.jsxs)('div', {
  className: o()(e, f.wrapper),
  children: [
    this.renderSplashArt(),
    this.renderContent()
  ]
});
  }
  constructor(...e) {
super(...e), h(this, 'state', {
  naturalWidth: 0,
  naturalHeight: 0,
  width: 0,
  height: 0,
  showWaveAnimation: this.calculateShowWaveAnimation(),
  splashLoaded: !1
}), h(this, 'handleResize', () => {
  let {
    naturalWidth: e,
    naturalHeight: t
  } = this.state, n = m(e, t), r = this.calculateShowWaveAnimation();
  null != n ? this.setState({
    ...n,
    showWaveAnimation: r
  }) : this.setState({
    showWaveAnimation: r
  });
}), h(this, 'handleLoad', e => {
  let {
    currentTarget: t
  } = e, {
    naturalWidth: n,
    naturalHeight: r
  } = t, i = m(n, r);
  null != i && this.setState(i), this.setState({
    splashLoaded: !0
  }), window.removeEventListener('resize', this.handleResize), window.addEventListener('resize', this.handleResize);
});
  }
}
h(T, 'defaultProps', {
  embedded: !1
}), t.Z = T;