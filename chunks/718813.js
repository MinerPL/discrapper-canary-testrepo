n.d(t, {
  Z: function() {
return y;
  }
}), n(653041);
var i, a = n(735250),
  s = n(470079),
  r = n(120356),
  l = n.n(r),
  o = n(748780),
  c = n(442837),
  d = n(215569),
  u = n(481060),
  _ = n(37234),
  h = n(134616),
  E = n(714338),
  m = n(663993),
  I = n(84615),
  g = n(210887),
  p = n(819640),
  T = n(585483),
  S = n(792125),
  f = n(981631),
  C = n(821636);

function N(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let A = (0, m.Un)({
createPromise: () => Promise.all([
  n.e('96427'),
  n.e('81039'),
  n.e('52249'),
  n.e('54803'),
  n.e('15685'),
  n.e('47006'),
  n.e('32776'),
  n.e('94915'),
  n.e('33053'),
  n.e('8016'),
  n.e('37581'),
  n.e('76540'),
  n.e('68136'),
  n.e('87624'),
  n.e('22646'),
  n.e('5528'),
  n.e('43331'),
  n.e('30419'),
  n.e('18824'),
  n.e('52619'),
  n.e('22290'),
  n.e('62520')
]).then(n.bind(n, 989804)),
webpackId: 989804,
name: 'UserSettings'
  }),
  v = (0, m.Un)({
createPromise: () => Promise.all([
  n.e('33053'),
  n.e('7654'),
  n.e('25519'),
  n.e('75116')
]).then(n.bind(n, 869779)),
webpackId: 869779,
name: 'ChannelSettings'
  }),
  Z = (0, m.Un)({
createPromise: () => Promise.all([
  n.e('96427'),
  n.e('52249'),
  n.e('54803'),
  n.e('15685'),
  n.e('47006'),
  n.e('32776'),
  n.e('94915'),
  n.e('87624'),
  n.e('43331'),
  n.e('82702')
]).then(n.bind(n, 838819)),
webpackId: 838819,
name: 'CollectiblesShop'
  }),
  L = (0, m.Un)({
createPromise: () => Promise.all([
  n.e('96427'),
  n.e('33053'),
  n.e('37581'),
  n.e('7654'),
  n.e('44156'),
  n.e('25519'),
  n.e('85552'),
  n.e('58227'),
  n.e('1607')
]).then(n.bind(n, 994763)),
webpackId: 994763,
name: 'GuildSettings'
  }),
  O = {
[f.S9g.USER_SETTINGS]: () => (0, a.jsx)(A, {}),
[f.S9g.CHANNEL_SETTINGS]: () => (0, a.jsx)(v, {}),
[f.S9g.GUILD_SETTINGS]: () => (0, a.jsx)(L, {}),
[f.S9g.COLLECTIBLES_SHOP]: () => (0, a.jsx)(Z, {})
  },
  R = 'SHOWN',
  x = 'HIDDEN',
  b = {
friction: 10,
tension: 100
  };

function P() {
  return s.useEffect(() => (E.Z.enable(), E.Z.enableTemp(h.u), () => E.Z.disableTemp()), []), null;
}
class M extends(i = s.PureComponent) {
  static getDerivedStateFromProps(e, t) {
return e.mode !== t.mode ? {
  animating: !0,
  mode: e.mode
} : null;
  }
  componentDidUpdate(e) {
let {
  mode: t
} = this.props, {
  mode: n
} = e;
return t === n ? void 0 : t === R && n === x ? this.animateIn() : t === x && n === R ? this.animateUnder() : void 0;
  }
  componentWillEnter(e) {
let {
  opacity: t,
  scale: n
} = this.state;
n.setValue(1.1), t.setValue(0), e(), this.setState({
  animating: !0
}, () => this.animateIn());
  }
  componentWillLeave(e) {
this.setState({
  animating: !0
}, () => this.animateOut(e));
  }
  animateIn(e) {
c.ZP.Emitter.pause(500);
let {
  opacity: t,
  scale: n
} = this.state;
o.Z.parallel([
  o.Z.spring(t, {
    toValue: 1,
    ...b
  }),
  o.Z.spring(n, {
    toValue: 1,
    ...b
  })
]).start(() => this.animateComplete(e));
  }
  animateOut(e) {
c.ZP.Emitter.pause(500);
let {
  opacity: t,
  scale: n
} = this.state;
T.S.dispatch(f.CkL.LAYER_POP_START), o.Z.parallel([
  o.Z.spring(t, {
    toValue: 0,
    ...b
  }),
  o.Z.spring(n, {
    toValue: 1.1,
    ...b
  })
]).start(() => {
  e(), T.S.dispatch(f.CkL.LAYER_POP_COMPLETE);
});
  }
  animateUnder() {
c.ZP.Emitter.pause(500);
let {
  opacity: e,
  scale: t
} = this.state;
o.Z.parallel([
  o.Z.spring(e, {
    toValue: 0,
    ...b
  }),
  o.Z.spring(t, {
    toValue: 0.93,
    ...b
  })
]).start(() => this.animateComplete());
  }
  animateComplete(e) {
this.setState({
  animating: !1
}, e);
  }
  render() {
let {
  animating: e
} = this.state, {
  mode: t,
  children: n,
  baseLayer: i,
  ...s
} = this.props, r = e || t === x ? this.getAnimatedStyle() : null, c = (0, a.jsx)(o.Z.div, {
  ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
  'aria-hidden': t === x,
  className: l()(C.layer, {
    [C.baseLayer]: i,
    [C.animating]: e,
    'stop-animations': t === x
  }),
  style: r,
  ...s,
  children: n
});
return i ? c : (0, a.jsx)(u.FocusLock, {
  containerRef: this.containerRef,
  children: c
});
  }
  getAnimatedStyle() {
let {
  opacity: e,
  scale: t
} = this.state, {
  reducedMotion: n
} = this.context;
return {
  opacity: e,
  transform: n.enabled ? void 0 : [{
      scale: t
    },
    {
      translateZ: 0
    }
  ]
};
  }
  constructor(e) {
super(e), N(this, 'containerRef', s.createRef());
let t = 1,
  n = 1;
e.mode === x && (t = 0.93, n = 0), this.state = {
  animating: !1,
  scale: new o.Z.Value(t),
  opacity: new o.Z.Value(n),
  mode: e.mode
};
  }
}
N(M, 'defaultProps', {
  baseLayer: !1
}), N(M, 'contextType', u.AccessibilityPreferencesContext);
class D extends s.PureComponent {
  componentDidMount() {
T.S.subscribe(f.CkL.LAYER_POP_ESCAPE_KEY, _.xf);
  }
  componentWillUnmount() {
T.S.unsubscribe(f.CkL.LAYER_POP_ESCAPE_KEY, _.xf);
  }
  renderLayers() {
let {
  children: e,
  layers: t,
  hasFullScreenLayer: n
} = this.props, {
  length: i
} = t, s = [];
return s.push((0, a.jsx)(M, {
  mode: 0 !== i || n ? x : R,
  baseLayer: !0,
  children: e
}, 'layer-base')), t.forEach((e, t) => s.push(this.renderComponent(e, t, i))), s;
  }
  renderComponent(e, t, n) {
let i;
return i = 'string' == typeof e ? O[e]() : (0, a.jsx)(e, {}), (0, a.jsxs)(M, {
  mode: t === n - 1 ? R : x,
  children: [
    (0, a.jsx)(P, {}),
    i
  ]
}, 'layer-'.concat(t));
  }
  renderArtisanalHack() {
return (0, a.jsx)('div', {
  className: l()(C.bg, (0, S.Q)(this.props.sidebarTheme))
});
  }
  render() {
return (0, a.jsxs)(a.Fragment, {
  children: [
    this.renderArtisanalHack(),
    (0, a.jsx)(d.W, {
      component: 'div',
      className: l()(C.layers, this.props.className),
      children: this.renderLayers()
    })
  ]
});
  }
}

function y(e) {
  let t = (0, c.e7)([g.Z], () => g.Z.darkSidebar) ? f.BRd.DARK : void 0,
n = (0, c.e7)([p.Z], () => p.Z.getLayers()),
i = (0, I.QP)(e => e.fullScreenLayers.length > 0);
  return (0, a.jsx)(D, {
...e,
sidebarTheme: t,
layers: n,
hasFullScreenLayer: i
  });
}