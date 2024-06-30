n.d(t, {
    Ox: function () {
        return N;
    },
    QP: function () {
        return T;
    },
    ob: function () {
        return O;
    },
    q4: function () {
        return v;
    }
}), n(47120);
var r, i, a = n(735250), o = n(470079), s = n(97613), l = n.n(s), u = n(832706), c = n(435802), d = n(652874), _ = n(477690), E = n(481060), f = n(714338), h = n(624138), p = n(153850), m = n(247194);
let I = (0, h.Mg)(_.Z.FULL_SCREEN_LAYER_ANIMATION_DURATION);
(i = r || (r = {}))[i.ENTERING = 1] = 'ENTERING', i[i.ENTERED = 2] = 'ENTERED', i[i.EXITING = 3] = 'EXITING', i[i.EXITED = 4] = 'EXITED';
let T = (0, d.Z)(e => ({
    fullScreenLayers: [],
    addLayer: t => e(e => {
        let {fullScreenLayers: n} = e;
        return {
            fullScreenLayers: [
                ...n,
                t
            ]
        };
    })
}));
function g(e) {
    let {item: t} = e, n = o.useRef(null);
    return (0, E.useFocusLock)(n), o.useEffect(() => (f.Z.disable(), f.Z.enableTemp(function (e) {
        return {
            POP_LAYER: {
                binds: ['esc'],
                comboKeysBindGlobal: !0,
                action() {
                    O(e);
                }
            }
        };
    }(t.key)), () => {
        f.Z.disableTemp();
    }), [t.key]), (0, a.jsx)(t.LayerComponent, {
        children: (0, a.jsxs)('div', {
            className: m.root,
            ref: n,
            children: [
                (0, a.jsx)('div', { className: m.drag }),
                t.render({
                    transitionState: null != t ? t.transitionState : 3,
                    closeLayer: () => O(t.key)
                })
            ]
        })
    });
}
let S = {
        enter: m.enter,
        enterActive: m.enterActive,
        enterDone: m.enterDone,
        exit: m.exit,
        exitActive: m.exitActive,
        exitDone: m.exitDone
    }, A = {
        enter: m.enterReducedMotion,
        enterActive: m.enterActiveReducedMotion,
        enterDone: m.enterDoneReducedMotion,
        exit: m.exitReducedMotion,
        exitActive: m.exitActiveReducedMotion,
        exitDone: m.exitDoneReducedMotion
    };
function N() {
    let {reducedMotion: e} = o.useContext(E.AccessibilityPreferencesContext), t = e.enabled ? A : S, n = T(e => e.fullScreenLayers);
    return (0, a.jsx)(u.Z, {
        children: n.map(e => (0, a.jsx)(c.Z, {
            classNames: t,
            timeout: I,
            onEntered: () => {
                T.setState({
                    fullScreenLayers: n.map(t => t.key === e.key ? {
                        ...t,
                        transitionState: 2
                    } : t)
                });
            },
            unmountOnExit: !0,
            children: (0, a.jsx)(g, { item: e })
        }, e.key))
    });
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.freeze({}), {
            layerKey: n,
            Layer: r
        } = t, i = null != n ? n : l()();
    return T.setState(t => ({
        fullScreenLayers: [
            ...t.fullScreenLayers,
            {
                key: i,
                transitionState: 1,
                LayerComponent: null != r ? r : p.ZP,
                render: e
            }
        ]
    })), i;
}
function O(e) {
    T.setState(t => ({ fullScreenLayers: t.fullScreenLayers.filter(t => t.key !== e) }));
}
