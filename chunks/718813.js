n.d(t, {
    Z: function () {
        return y;
    }
}), n(653041);
var i, s = n(735250), a = n(470079), r = n(120356), l = n.n(r), o = n(748780), c = n(442837), d = n(215569), u = n(481060), _ = n(37234), E = n(134616), h = n(714338), I = n(663993), m = n(210887), p = n(819640), g = n(725568), T = n(585483), S = n(792125), C = n(981631), N = n(153144);
function f(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let A = (0, I.Un)({
        createPromise: () => Promise.all([
            n.e('96427'),
            n.e('77298'),
            n.e('23357'),
            n.e('19503'),
            n.e('15972'),
            n.e('12013'),
            n.e('6416'),
            n.e('39612'),
            n.e('32776'),
            n.e('95900'),
            n.e('33053'),
            n.e('8016'),
            n.e('50654'),
            n.e('76540'),
            n.e('68136'),
            n.e('87624'),
            n.e('22646'),
            n.e('5528'),
            n.e('33352'),
            n.e('30419'),
            n.e('18824'),
            n.e('44371'),
            n.e('78820')
        ]).then(n.bind(n, 989804)),
        webpackId: 989804,
        name: 'UserSettings'
    }), Z = (0, I.Un)({
        createPromise: () => Promise.all([
            n.e('33053'),
            n.e('7654'),
            n.e('33009'),
            n.e('75116')
        ]).then(n.bind(n, 869779)),
        webpackId: 869779,
        name: 'ChannelSettings'
    }), L = (0, I.Un)({
        createPromise: () => Promise.all([
            n.e('96427'),
            n.e('77298'),
            n.e('23357'),
            n.e('15972'),
            n.e('12013'),
            n.e('6416'),
            n.e('39612'),
            n.e('32776'),
            n.e('95900'),
            n.e('87624'),
            n.e('33352'),
            n.e('73685')
        ]).then(n.bind(n, 838819)),
        webpackId: 838819,
        name: 'CollectiblesShop'
    }), v = (0, I.Un)({
        createPromise: () => Promise.all([
            n.e('96427'),
            n.e('33053'),
            n.e('50654'),
            n.e('7654'),
            n.e('44156'),
            n.e('33009'),
            n.e('85552'),
            n.e('58227'),
            n.e('75291')
        ]).then(n.bind(n, 994763)),
        webpackId: 994763,
        name: 'GuildSettings'
    }), O = {
        [C.S9g.USER_SETTINGS]: () => (0, s.jsx)(A, {}),
        [C.S9g.CHANNEL_SETTINGS]: () => (0, s.jsx)(Z, {}),
        [C.S9g.GUILD_SETTINGS]: () => (0, s.jsx)(v, {}),
        [C.S9g.COLLECTIBLES_SHOP]: () => (0, s.jsx)(L, {})
    }, R = 'SHOWN', x = 'HIDDEN', P = {
        friction: 10,
        tension: 100
    };
function b() {
    return a.useEffect(() => (h.Z.enable(), h.Z.enableTemp(E.u), () => h.Z.disableTemp()), []), null;
}
class M extends (i = a.PureComponent) {
    static getDerivedStateFromProps(e, t) {
        return e.mode !== t.mode ? {
            animating: !0,
            mode: e.mode
        } : null;
    }
    componentDidUpdate(e) {
        let {mode: t} = this.props, {mode: n} = e;
        return t === n ? void 0 : t === R && n === x ? this.animateIn() : t === x && n === R ? this.animateUnder() : void 0;
    }
    componentWillEnter(e) {
        let {
            opacity: t,
            scale: n
        } = this.state;
        n.setValue(1.1), t.setValue(0), e(), this.setState({ animating: !0 }, () => this.animateIn());
    }
    componentWillLeave(e) {
        this.setState({ animating: !0 }, () => this.animateOut(e));
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
                ...P
            }),
            o.Z.spring(n, {
                toValue: 1,
                ...P
            })
        ]).start(() => this.animateComplete(e));
    }
    animateOut(e) {
        c.ZP.Emitter.pause(500);
        let {
            opacity: t,
            scale: n
        } = this.state;
        T.S.dispatch(C.CkL.LAYER_POP_START), o.Z.parallel([
            o.Z.spring(t, {
                toValue: 0,
                ...P
            }),
            o.Z.spring(n, {
                toValue: 1.1,
                ...P
            })
        ]).start(() => {
            e(), T.S.dispatch(C.CkL.LAYER_POP_COMPLETE);
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
                ...P
            }),
            o.Z.spring(t, {
                toValue: 0.93,
                ...P
            })
        ]).start(() => this.animateComplete());
    }
    animateComplete(e) {
        this.setState({ animating: !1 }, e);
    }
    render() {
        let {animating: e} = this.state, {
                mode: t,
                children: n,
                baseLayer: i,
                ...a
            } = this.props, r = e || t === x ? this.getAnimatedStyle() : null, c = (0, s.jsx)(o.Z.div, {
                ref: e => this.containerRef.current = null != e ? e.refs.node : void 0,
                'aria-hidden': t === x,
                className: l()(N.layer, {
                    [N.baseLayer]: i,
                    [N.animating]: e,
                    'stop-animations': t === x
                }),
                style: r,
                ...a,
                children: n
            });
        return i ? c : (0, s.jsx)(u.FocusLock, {
            containerRef: this.containerRef,
            children: c
        });
    }
    getAnimatedStyle() {
        let {
                opacity: e,
                scale: t
            } = this.state, {reducedMotion: n} = this.context;
        return {
            opacity: e,
            transform: n.enabled ? void 0 : [
                { scale: t },
                { translateZ: 0 }
            ]
        };
    }
    constructor(e) {
        super(e), f(this, 'containerRef', a.createRef());
        let t = 1, n = 1;
        e.mode === x && (t = 0.93, n = 0), this.state = {
            animating: !1,
            scale: new o.Z.Value(t),
            opacity: new o.Z.Value(n),
            mode: e.mode
        };
    }
}
f(M, 'defaultProps', { baseLayer: !1 }), f(M, 'contextType', u.AccessibilityPreferencesContext);
class D extends a.PureComponent {
    componentDidMount() {
        T.S.subscribe(C.CkL.LAYER_POP_ESCAPE_KEY, _.xf);
    }
    componentWillUnmount() {
        T.S.unsubscribe(C.CkL.LAYER_POP_ESCAPE_KEY, _.xf);
    }
    renderLayers() {
        let {
                children: e,
                layers: t,
                hasFullScreenLayer: n
            } = this.props, {length: i} = t, a = [];
        return a.push((0, s.jsx)(M, {
            mode: 0 !== i || n ? x : R,
            baseLayer: !0,
            children: e
        }, 'layer-base')), t.forEach((e, t) => a.push(this.renderComponent(e, t, i))), a;
    }
    renderComponent(e, t, n) {
        let i;
        return i = 'string' == typeof e ? O[e]() : (0, s.jsx)(e, {}), (0, s.jsxs)(M, {
            mode: t === n - 1 ? R : x,
            children: [
                (0, s.jsx)(b, {}),
                i
            ]
        }, 'layer-'.concat(t));
    }
    renderArtisanalHack() {
        return (0, s.jsx)('div', { className: l()(N.bg, (0, S.Q)(this.props.sidebarTheme)) });
    }
    render() {
        return (0, s.jsxs)(s.Fragment, {
            children: [
                this.renderArtisanalHack(),
                (0, s.jsx)(d.W, {
                    component: 'div',
                    className: l()(N.layers, this.props.className),
                    children: this.renderLayers()
                })
            ]
        });
    }
}
function y(e) {
    let t = (0, c.e7)([m.Z], () => m.Z.darkSidebar) ? C.BRd.DARK : void 0, n = (0, c.e7)([p.Z], () => p.Z.getLayers()), i = (0, g.QP)(e => e.fullScreenLayers.length > 0);
    return (0, s.jsx)(D, {
        ...e,
        sidebarTheme: t,
        layers: n,
        hasFullScreenLayer: i
    });
}
