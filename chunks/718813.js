"use strict";
n.r(t), n.d(t, {
  default: function() {
    return U
  }
}), n("653041");
var a, s = n("735250"),
  l = n("470079"),
  i = n("120356"),
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
  S = n("819640"),
  m = n("725568"),
  p = n("585483"),
  I = n("792125"),
  T = n("981631"),
  g = n("435140");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("40326"), n.e("23357"), n.e("28020"), n.e("15972"), n.e("440"), n.e("6416"), n.e("63438"), n.e("58600"), n.e("33053"), n.e("49146"), n.e("17938"), n.e("65866"), n.e("76540"), n.e("93521"), n.e("5528"), n.e("80603"), n.e("18824"), n.e("74753"), n.e("79618")]).then(n.bind(n, "989804")),
    webpackId: "989804",
    name: "UserSettings"
  }),
  v = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("33053"), n.e("85093"), n.e("78587")]).then(n.bind(n, "869779")),
    webpackId: "869779",
    name: "ChannelSettings"
  }),
  R = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("93521"), n.e("18249")]).then(n.bind(n, "838819")),
    webpackId: "838819",
    name: "CollectiblesShop"
  }),
  L = (0, _.makeLazy)({
    createPromise: () => Promise.all([n.e("49237"), n.e("99387"), n.e("66635"), n.e("33053"), n.e("49146"), n.e("75475"), n.e("58227"), n.e("85093"), n.e("85552"), n.e("43502")]).then(n.bind(n, "994763")),
    webpackId: "994763",
    name: "GuildSettings"
  }),
  O = {
    [T.Layers.USER_SETTINGS]: () => (0, s.jsx)(N, {}),
    [T.Layers.CHANNEL_SETTINGS]: () => (0, s.jsx)(v, {}),
    [T.Layers.GUILD_SETTINGS]: () => (0, s.jsx)(L, {}),
    [T.Layers.COLLECTIBLES_SHOP]: () => (0, s.jsx)(R, {})
  },
  M = "SHOWN",
  P = "HIDDEN",
  y = {
    friction: 10,
    tension: 100
  };

function x() {
  return l.useEffect(() => (h.default.enable(), h.default.enableTemp(E.SETTINGS_LAYERS_LAYOUT), () => h.default.disableTemp()), []), null
}
class D extends(a = l.PureComponent) {
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
      if (t === M && n === P) return this.animateIn();
      if (t === P && n === M) return this.animateUnder()
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
    p.ComponentDispatch.dispatch(T.ComponentActions.LAYER_POP_START), o.default.parallel([o.default.spring(t, {
      toValue: 0,
      ...y
    }), o.default.spring(n, {
      toValue: 1.1,
      ...y
    })]).start(() => {
      e(), p.ComponentDispatch.dispatch(T.ComponentActions.LAYER_POP_COMPLETE)
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
    } = this.props, i = e || t === P ? this.getAnimatedStyle() : null, u = (0, s.jsx)(o.default.div, {
      ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
      "aria-hidden": t === P,
      className: r()(g.layer, {
        [g.baseLayer]: a,
        [g.animating]: e,
        "stop-animations": t === P
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
    e.mode === P && (t = .93, n = 0), this.state = {
      animating: !1,
      scale: new o.default.Value(t),
      opacity: new o.default.Value(n),
      mode: e.mode
    }
  }
}
A(D, "defaultProps", {
  baseLayer: !1
}), A(D, "contextType", c.AccessibilityPreferencesContext);
class b extends l.PureComponent {
  componentDidMount() {
    p.ComponentDispatch.subscribe(T.ComponentActions.LAYER_POP_ESCAPE_KEY, f.popLayer)
  }
  componentWillUnmount() {
    p.ComponentDispatch.unsubscribe(T.ComponentActions.LAYER_POP_ESCAPE_KEY, f.popLayer)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: a
    } = t, l = [];
    return l.push((0, s.jsx)(D, {
      mode: 0 !== a || n ? P : M,
      baseLayer: !0,
      children: e
    }, "layer-base")), t.forEach((e, t) => l.push(this.renderComponent(e, t, a))), l
  }
  renderComponent(e, t, n) {
    let a;
    return a = "string" == typeof e ? O[e]() : (0, s.jsx)(e, {}), (0, s.jsxs)(D, {
      mode: t === n - 1 ? M : P,
      children: [(0, s.jsx)(x, {}), a]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, s.jsx)("div", {
      className: r()(g.bg, (0, I.getThemeClass)(this.props.sidebarTheme))
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
    n = (0, u.useStateFromStores)([S.default], () => S.default.getLayers()),
    a = (0, m.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0);
  return (0, s.jsx)(b, {
    ...e,
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: a
  })
}