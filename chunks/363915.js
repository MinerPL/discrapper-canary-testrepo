n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250), s = n(470079), a = n(920906), r = n(442837), l = n(481060), o = n(607070), c = n(741541);
let d = {
        mass: 1,
        tension: 300,
        friction: 60,
        clamp: !0
    }, u = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0
    };
function _(e) {
    var t, n, s, _;
    let {
            state: E,
            direction: h,
            cleanUp: I,
            children: m
        } = e, p = (0, r.e7)([o.Z], () => o.Z.useReducedMotion);
    let g = (0, a.useSpring)((t = E, n = h, s = I, _ = p, t === l.TransitionStates.MOUNTED ? {
        from: {
            opacity: 0,
            transform: 'translateY(40px) translateX(0px)'
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px) translateX(0px)'
        },
        config: d,
        delay: 500,
        immediate: _
    } : t === l.TransitionStates.ENTERED ? {
        from: {
            opacity: 0,
            transform: 'translateY(0px) translateX('.concat(-1 === n ? -40 : 40, 'px)')
        },
        to: {
            opacity: 1,
            transform: 'translateY(0px) translateX(0px)'
        },
        config: u,
        delay: 500,
        immediate: _
    } : {
        from: {
            opacity: 1,
            transform: 'translateY(0px) translateX(0px)'
        },
        to: {
            opacity: 0,
            transform: 'translateY(0px) translateX('.concat(-1 === n ? 40 : -40, 'px))')
        },
        config: u,
        immediate: _,
        onRest: () => {
            s();
        }
    }));
    return (0, i.jsx)(a.animated.div, {
        style: g,
        className: c.step,
        children: (0, i.jsx)(l.ScrollerThin, {
            className: c.scroller,
            children: m
        })
    });
}
function E(e) {
    let {
            currentStep: t,
            renderItem: n,
            items: a,
            getItemKey: r
        } = e, o = s.useRef(t - 1);
    s.useEffect(() => {
        o.current = t;
    }, [t]);
    let d = s.useMemo(() => null == o.current || t === o.current ? 0 : o.current < t ? 1 : -1, [t]), u = s.useCallback((e, t, s, a) => (0, i.jsx)(_, {
            state: s,
            cleanUp: a,
            direction: d,
            children: n(t)
        }, e), [
            d,
            n
        ]);
    return (0, i.jsx)('div', {
        className: c.stepsTransitionGroup,
        children: (0, i.jsx)(l.TransitionGroup, {
            items: a,
            renderItem: u,
            getItemKey: r
        })
    });
}
