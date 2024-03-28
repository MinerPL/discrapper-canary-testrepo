"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("653041");
var a, s = n("735250"),
  l = n("470079"),
  i = n("803997"),
  r = n.n(i),
  o = n("748780"),
  u = n("442837"),
  d = n("215569"),
  c = n("481060"),
  f = n("37234"),
  E = n("134616"),
  h = n("714338"),
  _ = n("663993"),
  C = n("210887"),
  m = n("819640"),
  S = n("725568"),
  I = n("585483"),
  p = n("792125"),
  T = n("981631"),
  g = n("997171");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("24267"), n.e("8895"), n.e("15972"), n.e("58625"), n.e("6416"), n.e("14720"), n.e("63438"), n.e("33053"), n.e("51238"), n.e("17938"), n.e("76540"), n.e("65866"), n.e("5528"), n.e("77030"), n.e("18824"), n.e("74753"), n.e("79618")]).then(n.bind(n, "989804")),
    webpackId: "989804",
    name: "UserSettings"
  }),
  v = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("33053"), n.e("85093"), n.e("78587")]).then(n.bind(n, "869779")),
    webpackId: "869779",
    name: "ChannelSettings"
  }),
  O = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("99387"), n.e("18249")]).then(n.bind(n, "838819")),
    webpackId: "838819",
    name: "CollectiblesShop"
  }),
  R = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("24267"), n.e("33053"), n.e("51238"), n.e("75475"), n.e("85093"), n.e("16114"), n.e("85552"), n.e("58227"), n.e("43502")]).then(n.bind(n, "994763")),
    webpackId: "994763",
    name: "GuildSettings"
  }),
  L = {
    [T.Layers.USER_SETTINGS]: () => (0, s.jsx)(N, {}),
    [T.Layers.CHANNEL_SETTINGS]: () => (0, s.jsx)(v, {}),
    [T.Layers.GUILD_SETTINGS]: () => (0, s.jsx)(R, {}),
    [T.Layers.COLLECTIBLES_SHOP]: () => (0, s.jsx)(O, {})
  },
  P = "SHOWN",
  M = "HIDDEN",
  y = {
    friction: 10,
    tension: 100
  };

function D() {
  return l.useEffect(() => (h.default.enable(), h.default.enableTemp(E.SETTINGS_LAYERS_LAYOUT), () => h.default.disableTemp()), []), null
}
class b extends(a = l.PureComponent) {
  static getDerivedStateFromProps(e, t) {
    return e.mode !== t.mode ? {
      animating: !0,
      mode: e.mode
    } : null
  }
  componentDidUpdate(e) {
    let {
      mode: t
    } = this.props, {
      mode: n
    } = e;
    if (t !== n) {
      if (t === P && n === M) return this.animateIn();
      if (t === M && n === P) return this.animateUnder()
    }
  }
  componentWillEnter(e) {
    let {
      opacity: t,
      scale: n
    } = this.state;
    n.setValue(1.1), t.setValue(0), e(), this.setState({
      animating: !0
    }, () => this.animateIn())
  }
  componentWillLeave(e) {
    this.setState({
      animating: !0
    }, () => this.animateOut(e))
  }
  animateIn(e) {
    u.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    o.default.parallel([o.default.spring(t, {
      toValue: 1,
      ...y
    }), o.default.spring(n, {
      toValue: 1,
      ...y
    })]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    u.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    I.ComponentDispatch.dispatch(T.ComponentActions.LAYER_POP_START), o.default.parallel([o.default.spring(t, {
      toValue: 0,
      ...y
    }), o.default.spring(n, {
      toValue: 1.1,
      ...y
    })]).start(() => {
      e(), I.ComponentDispatch.dispatch(T.ComponentActions.LAYER_POP_COMPLETE)
    })
  }
  animateUnder() {
    u.default.Emitter.pause(500);
    let {
      opacity: e,
      scale: t
    } = this.state;
    o.default.parallel([o.default.spring(e, {
      toValue: 0,
      ...y
    }), o.default.spring(t, {
      toValue: .93,
      ...y
    })]).start(() => this.animateComplete())
  }
  animateComplete(e) {
    this.setState({
      animating: !1
    }, e)
  }
  render() {
    let {
      animating: e
    } = this.state, {
      mode: t,
      children: n,
      baseLayer: a,
      ...l
    } = this.props, i = e || t === M ? this.getAnimatedStyle() : null, u = (0, s.jsx)(o.default.div, {
      ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
      "aria-hidden": t === M,
      className: r()(g.layer, {
        [g.baseLayer]: a,
        [g.animating]: e,
        "stop-animations": t === M
      }),
      style: i,
      ...l,
      children: n
    });
    return a ? u : (0, s.jsx)(c.FocusLock, {
      containerRef: this.containerRef,
      children: u
    })
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
      }, {
        translateZ: 0
      }]
    }
  }
  constructor(e) {
    super(e), A(this, "containerRef", l.createRef());
    let t = 1,
      n = 1;
    e.mode === M && (t = .93, n = 0), this.state = {
      animating: !1,
      scale: new o.default.Value(t),
      opacity: new o.default.Value(n),
      mode: e.mode
    }
  }
}
A(b, "defaultProps", {
  baseLayer: !1
}), A(b, "contextType", c.AccessibilityPreferencesContext);
class x extends l.PureComponent {
  componentDidMount() {
    I.ComponentDispatch.subscribe(T.ComponentActions.LAYER_POP_ESCAPE_KEY, f.popLayer)
  }
  componentWillUnmount() {
    I.ComponentDispatch.unsubscribe(T.ComponentActions.LAYER_POP_ESCAPE_KEY, f.popLayer)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: a
    } = t, l = [];
    return l.push((0, s.jsx)(b, {
      mode: 0 !== a || n ? M : P,
      baseLayer: !0,
      children: e
    }, "layer-base")), t.forEach((e, t) => l.push(this.renderComponent(e, t, a))), l
  }
  renderComponent(e, t, n) {
    let a;
    return a = "string" == typeof e ? L[e]() : (0, s.jsx)(e, {}), (0, s.jsxs)(b, {
      mode: t === n - 1 ? P : M,
      children: [(0, s.jsx)(D, {}), a]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, s.jsx)("div", {
      className: r()(g.bg, (0, p.getThemeClass)(this.props.sidebarTheme))
    })
  }
  render() {
    return (0, s.jsxs)(s.Fragment, {
      children: [this.renderArtisanalHack(), (0, s.jsx)(d.TransitionGroup, {
        component: "div",
        className: r()(g.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function U(e) {
  let t = (0, u.useStateFromStores)([C.default], () => C.default.darkSidebar) ? T.ThemeTypes.DARK : void 0,
    n = (0, u.useStateFromStores)([m.default], () => m.default.getLayers()),
    a = (0, S.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0);
  return (0, s.jsx)(x, {
    ...e,
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: a
  })
}