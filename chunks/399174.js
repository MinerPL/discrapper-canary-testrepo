"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("424973");
var a = n("37983"),
  s = n("884691"),
  l = n("414456"),
  i = n.n(l),
  r = n("458960"),
  o = n("446674"),
  u = n("266491"),
  d = n("77078"),
  c = n("54239"),
  f = n("454286"),
  E = n("485328"),
  h = n("269936"),
  _ = n("161778"),
  C = n("778588"),
  S = n("708169"),
  I = n("659500"),
  m = n("439932"),
  p = n("49111"),
  T = n("332630");
let g = (0, h.makeLazy)({
    createPromise: () => n.el("420610").then(n.bind(n, "420610")),
    webpackId: "420610",
    name: "UserSettings"
  }),
  A = (0, h.makeLazy)({
    createPromise: () => n.el("995865").then(n.bind(n, "995865")),
    webpackId: "995865",
    name: "ChannelSettings"
  }),
  N = (0, h.makeLazy)({
    createPromise: () => n.el("258556").then(n.bind(n, "258556")),
    webpackId: "258556",
    name: "CollectiblesShop"
  }),
  R = (0, h.makeLazy)({
    createPromise: () => n.el("725621").then(n.bind(n, "725621")),
    webpackId: "725621",
    name: "GuildSettings"
  }),
  O = {
    [p.Layers.USER_SETTINGS]: () => (0, a.jsx)(g, {}),
    [p.Layers.CHANNEL_SETTINGS]: () => (0, a.jsx)(A, {}),
    [p.Layers.GUILD_SETTINGS]: () => (0, a.jsx)(R, {}),
    [p.Layers.COLLECTIBLES_SHOP]: () => (0, a.jsx)(N, {})
  },
  v = "SHOWN",
  L = "HIDDEN",
  M = {
    friction: 10,
    tension: 100
  };

function P() {
  return s.useEffect(() => (E.default.enable(), E.default.enableTemp(f.SETTINGS_LAYERS_LAYOUT), () => E.default.disableTemp()), []), null
}
class y extends s.PureComponent {
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
      if (t === v && n === L) return this.animateIn();
      if (t === L && n === v) return this.animateUnder()
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
    o.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    r.default.parallel([r.default.spring(t, {
      toValue: 1,
      ...M
    }), r.default.spring(n, {
      toValue: 1,
      ...M
    })]).start(() => this.animateComplete(e))
  }
  animateOut(e) {
    o.default.Emitter.pause(500);
    let {
      opacity: t,
      scale: n
    } = this.state;
    I.ComponentDispatch.dispatch(p.ComponentActions.LAYER_POP_START), r.default.parallel([r.default.spring(t, {
      toValue: 0,
      ...M
    }), r.default.spring(n, {
      toValue: 1.1,
      ...M
    })]).start(() => {
      e(), I.ComponentDispatch.dispatch(p.ComponentActions.LAYER_POP_COMPLETE)
    })
  }
  animateUnder() {
    o.default.Emitter.pause(500);
    let {
      opacity: e,
      scale: t
    } = this.state;
    r.default.parallel([r.default.spring(e, {
      toValue: 0,
      ...M
    }), r.default.spring(t, {
      toValue: .93,
      ...M
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
      baseLayer: s,
      ...l
    } = this.props, o = e || t === L ? this.getAnimatedStyle() : null, u = (0, a.jsx)(r.default.div, {
      ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
      "aria-hidden": t === L,
      className: i(T.layer, {
        [T.baseLayer]: s,
        [T.animating]: e,
        "stop-animations": t === L
      }),
      style: o,
      ...l,
      children: n
    });
    return s ? u : (0, a.jsx)(d.FocusLock, {
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
    super(e), this.containerRef = s.createRef();
    let t = 1,
      n = 1;
    e.mode === L && (t = .93, n = 0), this.state = {
      animating: !1,
      scale: new r.default.Value(t),
      opacity: new r.default.Value(n),
      mode: e.mode
    }
  }
}
y.defaultProps = {
  baseLayer: !1
}, y.contextType = d.AccessibilityPreferencesContext;
class D extends s.PureComponent {
  componentDidMount() {
    I.ComponentDispatch.subscribe(p.ComponentActions.LAYER_POP_ESCAPE_KEY, c.popLayer)
  }
  componentWillUnmount() {
    I.ComponentDispatch.unsubscribe(p.ComponentActions.LAYER_POP_ESCAPE_KEY, c.popLayer)
  }
  renderLayers() {
    let {
      children: e,
      layers: t,
      hasFullScreenLayer: n
    } = this.props, {
      length: s
    } = t, l = [];
    return l.push((0, a.jsx)(y, {
      mode: 0 !== s || n ? L : v,
      baseLayer: !0,
      children: e
    }, "layer-base")), t.forEach((e, t) => l.push(this.renderComponent(e, t, s))), l
  }
  renderComponent(e, t, n) {
    let s;
    return s = "string" == typeof e ? O[e]() : (0, a.jsx)(e, {}), (0, a.jsxs)(y, {
      mode: t === n - 1 ? v : L,
      children: [(0, a.jsx)(P, {}), s]
    }, "layer-".concat(t))
  }
  renderArtisanalHack() {
    return (0, a.jsx)("div", {
      className: i(T.bg, (0, m.getThemeClass)(this.props.sidebarTheme))
    })
  }
  render() {
    return (0, a.jsxs)(a.Fragment, {
      children: [this.renderArtisanalHack(), (0, a.jsx)(u.TransitionGroup, {
        component: "div",
        className: i(T.layers, this.props.className),
        children: this.renderLayers()
      })]
    })
  }
}

function x(e) {
  let t = (0, o.useStateFromStores)([_.default], () => _.default.darkSidebar) ? p.ThemeTypes.DARK : void 0,
    n = (0, o.useStateFromStores)([C.default], () => C.default.getLayers()),
    s = (0, S.useFullScreenLayerStore)(e => e.fullScreenLayers.length > 0);
  return (0, a.jsx)(D, {
    ...e,
    sidebarTheme: t,
    layers: n,
    hasFullScreenLayer: s
  })
}