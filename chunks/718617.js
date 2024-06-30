n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(735250), a = n(470079), l = n(920906), s = n(442837), r = n(186325), o = n(110924), c = n(714338), u = n(433355), d = n(863840), h = n(189432), p = n(727381), m = n(313692), _ = n(596443), f = n(50493), E = n(981631);
function C(e, t) {
    return n => {
        if (0 === n)
            return 'auto';
        let i = 'forwards' === t.current, a = n > 0, l = !1;
        return a && i && 'left' === e && (l = !0), a && !i && 'right' === e && (l = !0), !a && i && 'right' === e && (l = !0), !a && !i && 'left' === e && (l = !0), l ? 'calc('.concat(100 * Math.abs(n), '% + ').concat(Math.round(12 * Math.abs(n)), 'px)') : 'auto';
    };
}
function g(e) {
    var t, n;
    let {
            userId: g,
            guildId: I,
            onClose: x,
            analyticsLocation: T,
            className: N
        } = e, v = (0, s.e7)([u.ZP], () => u.ZP.getGuildSidebarState(I), [I]), S = null !== (t = null == v ? void 0 : v.details.modViewPanel) && void 0 !== t ? t : f.k.INFO, Z = (0, o.Z)(g);
    let A = null == (n = S) ? null : n === f.k.INFO ? 'backwards' : 'forwards', M = (0, d.Z)(A), {reducedMotion: b} = a.useContext(r.S), R = a.useCallback(e => {
            null != v && (0, h.r)(I, g, v.baseChannelId, { modViewPanel: e });
        }, [
            v,
            I,
            g
        ]), j = a.useMemo(() => ({
            [E.EkH.CLOSE_MODAL]: {
                binds: ['esc'],
                comboKeysBindGlobal: !0,
                action() {
                    if (S === f.k.INFO)
                        return x();
                    return R(f.k.INFO);
                }
            }
        }), [
            x,
            S,
            R
        ]);
    a.useEffect(() => (c.Z.enable(), c.Z.enableTemp(j), () => c.Z.disableTemp()), [j]);
    let L = (0, l.useTransition)(S, {
        immediate: Z !== g,
        value: 0,
        from: { value: 1 },
        enter: { value: 0 },
        leave: { value: -1 }
    });
    return (0, i.jsx)(l.animated.div, {
        style: {
            position: 'relative',
            height: '100%',
            flex: 1,
            overflow: 'hidden'
        },
        children: L((e, t, n) => {
            var a, s, r;
            let {key: o} = n;
            return (0, i.jsx)(l.animated.div, {
                style: {
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column',
                    backfaceVisibility: 'hidden',
                    width: '100%',
                    height: '100%',
                    ...b.enabled ? { opacity: null === (a = e.value) || void 0 === a ? void 0 : a.to(e => 1 - Math.abs(e)) } : {
                        left: null === (s = e.value) || void 0 === s ? void 0 : s.to(C('left', M)),
                        right: null === (r = e.value) || void 0 === r ? void 0 : r.to(C('right', M))
                    }
                },
                children: function (e) {
                    switch (e) {
                    case f.k.INFO:
                        return (0, i.jsx)(p.Z, {
                            userId: g,
                            guildId: I,
                            onNavigate: R,
                            className: N
                        });
                    case f.k.MESSAGE_HISTORY:
                        return (0, i.jsx)(m.Z, {
                            userId: g,
                            guildId: I,
                            onNavigate: () => R(f.k.INFO),
                            className: N
                        });
                    case f.k.PERMISSIONS:
                        return (0, i.jsx)(_.Z, {
                            userId: g,
                            guildId: I,
                            onNavigate: () => R(f.k.INFO),
                            className: N
                        });
                    default:
                        return null;
                    }
                }(t)
            }, o);
        })
    });
}
