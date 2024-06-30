n.d(t, {
    Z: function () {
        return C;
    }
});
var i = n(735250), a = n(470079), l = n(920906), s = n(442837), r = n(780384), o = n(435064), c = n(39604), u = n(175470), d = n(569545), h = n(153850), p = n(385608);
let m = { visibility: 'hidden' }, _ = {
        precision: 0.0001,
        duration: 300
    }, f = {
        tension: 150,
        friction: 20,
        precision: 0.0001,
        bounce: 0
    }, E = { duration: 1000 };
function C(e) {
    let {
            stream: t,
            inPopout: n
        } = e, {reducedMotion: C} = a.useContext(r.Sf), g = (0, a.useRef)(null), I = u.n.getState().clipsButtonRef, x = (0, d.V9)(t), T = (0, s.e7)([o.Z], () => o.Z.getActiveAnimation()), N = (0, s.Wu)([o.Z], () => o.Z.getStreamClipAnimations(x)), v = (0, a.useRef)();
    a.useEffect(() => () => {
        (0, c.Gh)(x);
    }, [x]);
    let S = () => {
            var e;
            let t = null === (e = g.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            return null == t || n ? m : {
                width: t.width,
                height: t.height,
                top: t.top,
                left: t.left
            };
        }, Z = e => {
            let t = null == I ? void 0 : I.getBoundingClientRect();
            if (v.current = t, e.timestamp !== T || null == t || n)
                return m;
            let {
                top: i,
                left: a
            } = t;
            return {
                top: i + 36,
                left: a - 216,
                height: 151,
                width: 268
            };
        }, A = (0, a.useRef)(null), M = (0, l.useTransition)(N, {
            keys: e => e.timestamp,
            ref: A,
            from: { opacity: 0.2 },
            enter: { opacity: 0 },
            config: _
        }), b = (0, a.useRef)(null), R = (0, l.useTransition)(N, {
            ref: b,
            keys: e => e.timestamp,
            from: e => ({
                position: 'fixed',
                visibility: 'hidden',
                opacity: 1,
                ...C.enabled ? Z(e) : S()
            }),
            enter: e => [{
                    opacity: 1,
                    visibility: 'visible',
                    ...Z(e)
                }],
            leave: {
                opacity: 0,
                ...!C.enabled && {
                    height: 0,
                    width: 0,
                    ...(() => {
                        if (null != v.current)
                            return {
                                top: v.current.top + 12,
                                left: v.current.left + 12
                            };
                    })()
                }
            },
            config: C.enabled ? E : f,
            onRest: (e, t) => {
                null != t.item && null != N.find(e => e.timestamp === t.item.timestamp) && (0, c.Gh)(x, t.item.timestamp);
            }
        });
    return (0, l.useChain)([
        A,
        b
    ], [
        0,
        0.1
    ], 3000), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: p.hidden,
                ref: g
            }),
            M((e, t) => null != t && (0, i.jsx)(l.animated.div, {
                className: p.whiteFlash,
                style: e
            })),
            (0, i.jsx)(h.ZP, {
                children: (0, i.jsx)('div', {
                    className: p.hidden,
                    children: R((e, t, n, a) => (null == t ? void 0 : t.thumbnail) != null && (0, i.jsx)(l.animated.img, {
                        src: t.thumbnail,
                        className: p.movingImage,
                        style: e
                    }))
                })
            })
        ]
    });
}
