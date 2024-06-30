n(47120);
var i, a = n(735250), l = n(470079), s = n(120356), r = n.n(s), o = n(512722), c = n.n(o), u = n(613828), d = n(442837), h = n(481060), p = n(490173), m = n(40851), _ = n(607070), f = n(899663), E = n(317381), C = n(496616), g = n(100527), I = n(906732), x = n(168551), T = n(597952), N = n(628123), v = n(151851), S = n(587061), Z = n(392358), A = n(892254), M = n(706454), b = n(210887), R = n(740492), j = n(451478), L = n(153850), P = n(806519), O = n(358085), y = n(792125), D = n(998502), k = n(473159), U = n(928518), w = n(981631), B = n(689938), H = n(559286);
function G(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
class V extends (i = l.Component) {
    componentDidMount() {
        let {guestWindow: e} = this.props, t = e.document;
        null == t.querySelector('title') && null != t.head && t.head.appendChild(t.createElement('title')), this.updateTitle(), this.updateFontScale(), this.updateLocale(), this.updateClientTheme(), this.updateSaturationFactor(), this.updateForcedColors(), (0, k.O)(e), e.addEventListener('blur', this.handleBlur), t.addEventListener('contextmenu', this.handleContextMenu, !0), e.addEventListener('beforeunload', this.warnPopoutClose);
    }
    componentDidUpdate(e) {
        let {
            title: t,
            fontScale: n,
            locale: i,
            clientThemesCSS: a
        } = this.props;
        e.title !== t && this.updateTitle(), e.fontScale !== n && this.updateFontScale(), e.locale !== i && this.updateLocale(), e.clientThemesCSS !== a && this.updateClientTheme(), e.saturation !== this.props.saturation && this.updateSaturationFactor(), (e.forcedColors !== this.props.forcedColors || e.systemForcedColors !== this.props.systemForcedColors) && this.updateForcedColors();
    }
    componentWillUnmount() {
        let {guestWindow: e} = this.props, t = e.document;
        e.removeEventListener('blur', this.handleBlur), t.removeEventListener('contextmenu', this.handleContextMenu, !0), h.useModalsStore.setState(e => ({
            ...e,
            [h.POPOUT_MODAL_CONTEXT]: []
        })), e.removeEventListener('beforeunload', this.warnPopoutClose);
    }
    updateSaturationFactor() {
        let {
                saturation: e,
                guestWindow: t
            } = this.props, n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), n.style.setProperty('--saturation-factor', e.toString());
    }
    updateLocale() {
        let {
                locale: e,
                guestWindow: t
            } = this.props, n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), n.lang = e;
    }
    updateTitle() {
        let {
                title: e,
                guestWindow: t
            } = this.props, n = t.document.querySelector('title');
        null != n && (n.innerText = e);
    }
    updateFontScale() {
        let {
                fontScale: e,
                guestWindow: t
            } = this.props, n = t.document.documentElement;
        c()(null != n, 'Window document element was null'), n.style.fontSize = ''.concat(e, '%');
    }
    updateClientTheme() {
        let {
                clientThemesCSS: e,
                guestWindow: t
            } = this.props, n = t.document, i = (0, n.head);
        c()(null != i, 'Window document '.concat('head', ' was null'));
        let a = i.querySelector('style['.concat(x.PQ, ']'));
        if (null != a) {
            a.textContent = e;
            return;
        }
        let l = n.createElement('style');
        l.setAttribute(x.PQ, 'true'), l.textContent = e, i.appendChild(l);
    }
    updateForcedColors() {
        let {
            useForcedColors: e,
            systemForcedColors: t,
            guestWindow: n
        } = this.props;
        n.document.documentElement.classList.toggle('disable-forced-colors', !e && 'active' === t);
    }
    render() {
        let {
                theme: e,
                forcedColors: t,
                focused: n,
                appFocused: i,
                children: l,
                windowKey: s,
                mouseModeEnabled: o,
                keyboardModeEnabled: c,
                reducedMotionEnabled: d,
                fontScaleClass: _,
                saturation: E,
                withTitleBar: C,
                guestWindow: g,
                clientThemesClassName: I,
                contentClassName: x
            } = this.props, S = (0, O.getPlatform)(), Z = r()(_, {
                'mouse-mode': o,
                'reduce-motion': d,
                'full-motion': !d,
                'keyboard-mode': c,
                'app-focused': n || i,
                'low-saturation': E <= 0.4
            });
        return (0, a.jsx)(u.VK, {
            children: (0, a.jsx)(A.Z, {
                children: (0, a.jsx)(h.ThemeContextProvider, {
                    theme: e,
                    children: (0, a.jsx)(h.RedesignIconContextProvider, {
                        children: (0, a.jsx)('div', {
                            'data-popout-root': !0,
                            ref: this.rootRef,
                            className: r()((0, y.Q)(e), (0, T.Z)(), Z, I),
                            children: (0, a.jsx)(h.FocusRingScope, {
                                containerRef: this.rootRef,
                                children: (0, a.jsx)(f.Z, {
                                    children: (0, a.jsxs)(N.Z, {
                                        children: [
                                            (0, a.jsx)(P.Co, {}),
                                            (0, a.jsx)(m.Wu, {
                                                appContext: w.IlC.POPOUT,
                                                renderWindow: g,
                                                children: (0, a.jsxs)(L.yP, {
                                                    children: [
                                                        (0, a.jsxs)('div', {
                                                            className: H.popout,
                                                            children: [
                                                                C && null != S ? (0, a.jsx)(v.Z, {
                                                                    focused: n,
                                                                    type: S,
                                                                    windowKey: s,
                                                                    macOSFrame: !0
                                                                }) : null,
                                                                (0, a.jsx)('div', {
                                                                    className: r()(H.content, x),
                                                                    children: l
                                                                })
                                                            ]
                                                        }),
                                                        (0, a.jsx)(h.Modals, {}),
                                                        (0, a.jsx)(p.Z, {}),
                                                        (0, a.jsx)(L.Un, {})
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            }, t)
        });
    }
    constructor(...e) {
        super(...e), G(this, 'rootRef', l.createRef()), G(this, '_cleanupWindowActionCreators', void 0), G(this, 'warnPopoutClose', e => {
            if (this.props.connectedToEmbeddedActivity && !R.ZP.disableEmbeddedActivityPopOutAlert) {
                if (e.returnValue = B.Z.Messages.EMBEDDED_ACTIVITIES_ARE_YOU_SURE_WANT_TO_LEAVE, !!O.isPlatformEmbedded)
                    (0, C.Z)(() => {
                        U.Z.unmountWindow(this.props.windowKey), O.isPlatformEmbedded && D.ZP.close(this.props.windowKey);
                    });
            }
        }), G(this, 'handleBlur', () => {
            var e, t;
            null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t);
        }), G(this, 'handleContextMenu', e => {
            e.preventDefault();
        });
    }
}
G(V, 'defaultProps', { withTitleBar: !0 });
let F = l.forwardRef(function (e, t) {
    let {
        guestWindow: n,
        focused: i
    } = (0, d.cj)([U.Z], () => ({
        guestWindow: U.Z.getWindow(e.windowKey),
        focused: U.Z.getWindowFocused(e.windowKey)
    }));
    c()(null != n, 'Missing guestWindow reference');
    let l = (0, d.e7)([j.Z], () => j.Z.isFocused()), {
            locale: s,
            theme: r
        } = (0, d.cj)([
            b.Z,
            M.default
        ], () => ({
            locale: M.default.locale,
            theme: b.Z.theme
        })), o = (0, d.e7)([_.Z], () => _.Z.useForcedColors ? 'yes' : 'no'), {
            fontScale: u,
            keyboardModeEnabled: p,
            reducedMotionEnabled: m,
            fontScaleClass: f,
            saturation: C,
            systemForcedColors: T,
            useForcedColors: N
        } = (0, d.cj)([_.Z], () => ({
            fontScale: _.Z.fontScale,
            keyboardModeEnabled: _.Z.keyboardModeEnabled,
            reducedMotionEnabled: _.Z.useReducedMotion,
            fontScaleClass: _.Z.fontScaleClass,
            saturation: _.Z.saturation,
            systemForcedColors: _.Z.systemForcedColors,
            useForcedColors: _.Z.useForcedColors
        })), v = (0, d.e7)([E.ZP], () => null != e.channelId && null !== E.ZP.getSelfEmbeddedActivityForChannel(e.channelId));
    (0, S.Z)(n, !1);
    let A = (0, Z.Z)(n, i), {analyticsLocations: R} = (0, I.ZP)(g.Z.POPOUT_WINDOW), {
            clientThemesClassName: L,
            clientThemesCSS: P
        } = (0, x.ZP)();
    return null == n ? null : (0, a.jsx)(h.DnDProvider, {
        children: (0, a.jsx)(I.Gt, {
            value: R,
            children: (0, a.jsx)(V, {
                ref: t,
                ...e,
                guestWindow: n,
                focused: i,
                appFocused: l,
                locale: s,
                theme: r,
                forcedColors: o,
                useForcedColors: N,
                systemForcedColors: T,
                fontScale: u,
                keyboardModeEnabled: p,
                mouseModeEnabled: A,
                reducedMotionEnabled: m,
                connectedToEmbeddedActivity: v,
                fontScaleClass: f,
                saturation: C,
                clientThemesClassName: L,
                clientThemesCSS: P
            })
        })
    });
});
t.Z = F;
