n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(653041);
var i,
    a = n(735250),
    s = n(470079),
    r = n(120356),
    l = n.n(r),
    o = n(748780),
    c = n(442837),
    d = n(215569),
    u = n(481060),
    _ = n(37234),
    E = n(134616),
    h = n(714338),
    m = n(663993),
    I = n(84615),
    g = n(210887),
    p = n(819640),
    T = n(585483),
    S = n(981631),
    C = n(600753);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let N = (0, m.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('28356'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('47006'), n.e('32776'), n.e('18209'), n.e('33053'), n.e('8016'), n.e('37581'), n.e('76540'), n.e('68136'), n.e('87624'), n.e('22646'), n.e('25183'), n.e('5528'), n.e('43331'), n.e('30419'), n.e('18824'), n.e('52619'), n.e('53014'), n.e('96503')]).then(n.bind(n, 989804)),
        webpackId: 989804,
        name: 'UserSettings'
    }),
    A = (0, m.Un)({
        createPromise: () => Promise.all([n.e('33053'), n.e('7654'), n.e('14203'), n.e('75116')]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: 'ChannelSettings'
    }),
    v = (0, m.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('52249'), n.e('54803'), n.e('15685'), n.e('47006'), n.e('32776'), n.e('18209'), n.e('87624'), n.e('43331'), n.e('96536')]).then(n.bind(n, 838819)),
        webpackId: 838819,
        name: 'CollectiblesShop'
    }),
    L = (0, m.Un)({
        createPromise: () => Promise.all([n.e('96427'), n.e('33053'), n.e('37581'), n.e('7654'), n.e('44156'), n.e('14203'), n.e('85552'), n.e('58227'), n.e('75531')]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: 'GuildSettings'
    }),
    Z = {
        [S.S9g.USER_SETTINGS]: () => (0, a.jsx)(N, {}),
        [S.S9g.CHANNEL_SETTINGS]: () => (0, a.jsx)(A, {}),
        [S.S9g.GUILD_SETTINGS]: () => (0, a.jsx)(L, {}),
        [S.S9g.COLLECTIBLES_SHOP]: () => (0, a.jsx)(v, {})
    },
    R = 'SHOWN',
    O = 'HIDDEN',
    x = {
        friction: 10,
        tension: 100
    };
function b() {
    return s.useEffect(() => (h.Z.enable(), h.Z.enableTemp(E.u), () => h.Z.disableTemp()), []), null;
}
class P extends (i = s.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode
            ? {
                  animating: !0,
                  mode: e.mode
              }
            : null;
    }
    componentDidUpdate(e) {
        let { mode: t } = this.props,
            { mode: n } = e;
        return t === n ? void 0 : t === R && n === O ? this.animateIn() : t === O && n === R ? this.animateUnder() : void 0;
    }
    componentWillEnter(e) {
        let { opacity: t, scale: n } = this.state;
        n.setValue(1.1), t.setValue(0), e(), this.setState({ animating: !0 }, () => this.animateIn());
    }
    componentWillLeave(e) {
        this.setState({ animating: !0 }, () => this.animateOut(e));
    }
    animateIn(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        o.Z.parallel([
            o.Z.spring(t, {
                toValue: 1,
                ...x
            }),
            o.Z.spring(n, {
                toValue: 1,
                ...x
            })
        ]).start(() => this.animateComplete(e));
    }
    animateOut(e) {
        c.ZP.Emitter.pause(500);
        let { opacity: t, scale: n } = this.state;
        T.S.dispatch(S.CkL.LAYER_POP_START),
            o.Z.parallel([
                o.Z.spring(t, {
                    toValue: 0,
                    ...x
                }),
                o.Z.spring(n, {
                    toValue: 1.1,
                    ...x
                })
            ]).start(() => {
                e(), T.S.dispatch(S.CkL.LAYER_POP_COMPLETE);
            });
    }
    animateUnder() {
        c.ZP.Emitter.pause(500);
        let { opacity: e, scale: t } = this.state;
        o.Z.parallel([
            o.Z.spring(e, {
                toValue: 0,
                ...x
            }),
            o.Z.spring(t, {
                toValue: 0.93,
                ...x
            })
        ]).start(() => this.animateComplete());
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let { animating: e } = this.state,
            { mode: t, children: n, baseLayer: i, ...s } = this.props,
            r = e || t === O ? this.getAnimatedStyle() : null,
            c = (0, a.jsx)(o.Z.div, {
                ref: (e) => (this.containerRef.current = null != e ? e.refs.node : void 0),
                'aria-hidden': t === O,
                className: l()(C.layer, {
                    [C.baseLayer]: i,
                    [C.animating]: e,
                    'stop-animations': t === O
                }),
                style: r,
                ...s,
                children: n
            });
        return i
            ? c
            : (0, a.jsx)(u.FocusLock, {
                  containerRef: this.containerRef,
                  children: c
              });
    }
    getAnimatedStyle() {
        let { opacity: e, scale: t } = this.state,
            { reducedMotion: n } = this.context;
        return {
            opacity: e,
            transform: n.enabled ? void 0 : [{ scale: t }, { translateZ: 0 }]
        };
    }
    constructor(e) {
        super(e), f(this, 'containerRef', s.createRef());
        let t = 1,
            n = 1;
        e.mode === O && ((t = 0.93), (n = 0)),
            (this.state = {
                animating: !1,
                scale: new o.Z.Value(t),
                opacity: new o.Z.Value(n),
                mode: e.mode
            });
    }
}
f(P, 'defaultProps', { baseLayer: !1 }), f(P, 'contextType', u.AccessibilityPreferencesContext);
class M extends s.PureComponent {
    componentDidMount() {
        T.S.subscribe(S.CkL.LAYER_POP_ESCAPE_KEY, _.xf);
    }
    componentWillUnmount() {
        T.S.unsubscribe(S.CkL.LAYER_POP_ESCAPE_KEY, _.xf);
    }
    renderLayers() {
        let { children: e, layers: t, hasFullScreenLayer: n } = this.props,
            { length: i } = t,
            s = [];
        return (
            s.push(
                (0, a.jsx)(
                    P,
                    {
                        mode: 0 !== i || n ? O : R,
                        baseLayer: !0,
                        children: e
                    },
                    'layer-base'
                )
            ),
            t.forEach((e, t) => s.push(this.renderComponent(e, t, i))),
            s
        );
    }
    renderComponent(e, t, n) {
        let i;
        return (
            (i = 'string' == typeof e ? Z[e]() : (0, a.jsx)(e, {})),
            (0, a.jsxs)(
                P,
                {
                    mode: t === n - 1 ? R : O,
                    children: [(0, a.jsx)(b, {}), i]
                },
                'layer-'.concat(t)
            )
        );
    }
    renderArtisanalHack() {
        return (0, a.jsx)(u.ThemeProvider, {
            theme: this.props.sidebarTheme,
            children: (e) => (0, a.jsx)('div', { className: l()(C.bg, e) })
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
function D(e) {
    let t = (0, c.e7)([g.Z], () => g.Z.darkSidebar) ? S.BRd.DARK : void 0,
        n = (0, c.e7)([p.Z], () => p.Z.getLayers()),
        i = (0, I.QP)((e) => e.fullScreenLayers.length > 0);
    return (0, a.jsx)(M, {
        ...e,
        sidebarTheme: t,
        layers: n,
        hasFullScreenLayer: i
    });
}
