n.d(t, {
    I: function () {
        return f;
    }
});
var r = n(735250), i = n(470079), a = n(920906), o = n(442837), s = n(607070), l = n(345332), u = n(417153), c = n(561466), d = n(550919);
let _ = {
        duration: 300,
        friction: 24,
        tension: 280
    }, E = {
        [c.az.TOP]: {
            styles: d.containerTop,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: _
                },
                enter: {
                    transform: 'translate3d(0, -0px, 0)',
                    opacity: 1,
                    config: _
                },
                leave: {
                    transform: 'translate3d(0, -100%, 0)',
                    opacity: 0,
                    config: {
                        ..._,
                        friction: 40,
                        clamp: !0
                    }
                }
            }
        },
        [c.az.BOTTOM]: {
            styles: d.containerBottom,
            transition: {
                trail: 400,
                from: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: _
                },
                enter: {
                    transform: 'translate3d(0, 0px, 0)',
                    opacity: 1,
                    config: _
                },
                leave: {
                    transform: 'translate3d(0, 100%, 0)',
                    opacity: 0,
                    config: {
                        ..._,
                        friction: 40,
                        clamp: !0
                    }
                }
            }
        }
    };
function f() {
    var e, t, n, d;
    let _ = (0, u.Es)(e => e.currentToast), f = i.useRef(null !== (n = null == _ ? void 0 : null === (e = _.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.si.position), h = i.useRef(null !== (d = null == _ ? void 0 : null === (t = _.options) || void 0 === t ? void 0 : t.duration) && void 0 !== d ? d : c.si.duration), p = (0, o.e7)([s.Z], () => s.Z.useReducedMotion);
    i.useEffect(() => {
        if (null != _) {
            var e, t, n, r;
            f.current = null !== (n = null === (e = _.options) || void 0 === e ? void 0 : e.position) && void 0 !== n ? n : c.si.position, h.current = null !== (r = null === (t = _.options) || void 0 === t ? void 0 : t.duration) && void 0 !== r ? r : c.si.duration;
        }
    }, [_]);
    let m = i.useMemo(() => {
            var e, t;
            return E[null !== (t = null == _ ? void 0 : null === (e = _.options) || void 0 === e ? void 0 : e.position) && void 0 !== t ? t : f.current];
        }, [_]), I = (0, a.useTransition)(_, {
            keys: e => {
                var t;
                return null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : '';
            },
            immediate: p,
            ...m.transition
        });
    return i.useEffect(() => {
        null != _ && setTimeout(() => {
            (0, u.z5)();
        }, h.current);
    }, [_]), (0, r.jsx)('div', {
        className: m.styles,
        children: I((e, t) => null === t ? null : (0, r.jsx)(a.animated.div, {
            style: e,
            children: (0, r.jsx)(l.F, { ...t })
        }, t.id))
    });
}
