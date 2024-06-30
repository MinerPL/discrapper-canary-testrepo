n.d(t, {
    B$: function () {
        return c;
    },
    l7: function () {
        return d;
    },
    p: function () {
        return u;
    }
}), n(47120), n(653041);
var s = n(735250), o = n(470079), r = n(699581), a = n(920906), i = n(130653), l = n(743294);
let c = o.createContext({
        registerComponent: () => {
        },
        unregisterComponent: () => {
        },
        animatedComponents: {},
        expandedContentRef: o.createRef(),
        collapsedContentRef: o.createRef(),
        recalculateAnimationPositions: () => {
        },
        animatedComponentProps: [],
        expansionSpring: null,
        isExpansionAnimationComplete: !1
    }), d = o.forwardRef(function (e, t) {
        let {
                children: n,
                id: l,
                inState: d,
                isTextTransition: u = !1
            } = e, {
                isExpansionAnimationComplete: p,
                recalculateAnimationPositions: x,
                registerComponent: m,
                unregisterComponent: g,
                expansionSpring: C
            } = o.useContext(c), f = o.useRef(null), h = o.useRef(null), _ = o.useContext(i.T);
        o.useEffect(() => {
            x();
        }, [x]), o.useEffect(() => {
            let e = f.current;
            return null != e && m(e, l, d), () => {
                null != e && g(l, d);
            };
        }, [
            l,
            d,
            m,
            g
        ]);
        let E = document.getElementById(_ ? 'quest-bar-v2-preview-' + l : 'quest-bar-v2-' + l), S = null;
        return null == E ? S = null : u && null != C ? S = (0, s.jsxs)(s.Fragment, {
            children: [
                'collapsed' === d && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
                    style: {
                        position: 'absolute',
                        opacity: C.to({
                            range: [
                                0,
                                1
                            ],
                            output: [
                                1,
                                0
                            ]
                        })
                    },
                    children: n(h)
                }), E),
                'expanded' === d && (0, r.createPortal)((0, s.jsx)(a.animated.div, {
                    style: {
                        position: 'absolute',
                        opacity: C.to({
                            range: [
                                0,
                                1
                            ],
                            output: [
                                0,
                                1
                            ]
                        })
                    },
                    children: n(h)
                }), E)
            ]
        }) : 'collapsed' === d && (S = (0, r.createPortal)(n(h), E)), (0, s.jsxs)('div', {
            style: { opacity: null == E || p ? 1 : 0 },
            ref: t,
            children: [
                n(f),
                !p && S
            ]
        });
    }), u = e => {
        let {
                children: t,
                expandedContentRef: n,
                collapsedContentRef: r,
                expansionSpring: a,
                isExpansionAnimationComplete: i
            } = e, [d, u] = o.useState({}), [p, x] = o.useState([]), m = o.useCallback((e, t, n) => {
                u(s => {
                    var o;
                    let r = null !== (o = s[t]) && void 0 !== o ? o : {
                        expanded: null,
                        collapsed: null
                    };
                    return {
                        ...s,
                        [t]: {
                            ...r,
                            [n]: e
                        }
                    };
                });
            }, []), g = o.useCallback((e, t) => {
                u(n => {
                    var s;
                    let o = null !== (s = n[e]) && void 0 !== s ? s : {
                        expanded: null,
                        collapsed: null
                    };
                    return o[t] = null, {
                        ...n,
                        [e]: o
                    };
                });
            }, []), C = o.useCallback(() => {
                let e = [];
                for (let t in d) {
                    if (null == d[t] || null == n.current || null == r.current)
                        continue;
                    let s = d[t].collapsed, o = d[t].expanded;
                    if (null == s || null == o)
                        continue;
                    let a = o.getBoundingClientRect().top - n.current.getBoundingClientRect().top + l.Li, i = s.getBoundingClientRect().top - r.current.getBoundingClientRect().top, c = o.getBoundingClientRect().left - n.current.getBoundingClientRect().left + l.Li, u = s.getBoundingClientRect().left - r.current.getBoundingClientRect().left, p = -o.getBoundingClientRect().right + n.current.getBoundingClientRect().right + l.Li, x = -s.getBoundingClientRect().right + r.current.getBoundingClientRect().right;
                    e.push({
                        id: t,
                        collapsedLeft: u,
                        expandedLeft: c,
                        collapsedRight: x,
                        expandedRight: p,
                        collapsedTop: i,
                        expandedTop: a
                    });
                }
                x(e);
            }, [
                d,
                n,
                r,
                x
            ]);
        return (0, s.jsx)(c.Provider, {
            value: {
                isExpansionAnimationComplete: i,
                registerComponent: m,
                unregisterComponent: g,
                animatedComponents: d,
                expandedContentRef: n,
                collapsedContentRef: r,
                recalculateAnimationPositions: C,
                animatedComponentProps: p,
                expansionSpring: a
            },
            children: t
        });
    };
