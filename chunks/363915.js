n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(338545),
    r = n(481060),
    l = n(75698);
let o = {
        mass: 1,
        tension: 300,
        friction: 60,
        clamp: !0
    },
    c = {
        mass: 1,
        tension: 600,
        friction: 60,
        clamp: !0
    };
function d(e) {
    var t, n, a;
    let { state: d, direction: u, cleanUp: _, children: E } = e;
    let h = (0, r.useSpring)(
        ((t = d),
        (n = u),
        (a = _),
        t === r.TransitionStates.MOUNTED
            ? {
                  from: {
                      opacity: 0,
                      transform: 'translateY(40px) translateX(0px)'
                  },
                  to: {
                      opacity: 1,
                      transform: 'translateY(0px) translateX(0px)'
                  },
                  config: o,
                  delay: 500
              }
            : t === r.TransitionStates.ENTERED
              ? {
                    from: {
                        opacity: 0,
                        transform: 'translateY(0px) translateX('.concat(-1 === n ? -40 : 40, 'px)')
                    },
                    to: {
                        opacity: 1,
                        transform: 'translateY(0px) translateX(0px)'
                    },
                    config: c,
                    delay: 500
                }
              : {
                    from: {
                        opacity: 1,
                        transform: 'translateY(0px) translateX(0px)'
                    },
                    to: {
                        opacity: 0,
                        transform: 'translateY(0px) translateX('.concat(-1 === n ? 40 : -40, 'px))')
                    },
                    config: c,
                    onRest: () => {
                        a();
                    }
                })
    );
    return (0, i.jsx)(s.animated.div, {
        style: h,
        className: l.step,
        children: (0, i.jsx)(r.ScrollerThin, {
            className: l.scroller,
            children: E
        })
    });
}
function u(e) {
    let { currentStep: t, renderItem: n, items: s, getItemKey: o } = e,
        c = a.useRef(t - 1);
    a.useEffect(() => {
        c.current = t;
    }, [t]);
    let u = a.useMemo(() => (null == c.current || t === c.current ? 0 : c.current < t ? 1 : -1), [t]),
        _ = a.useCallback(
            (e, t, a, s) =>
                (0, i.jsx)(
                    d,
                    {
                        state: a,
                        cleanUp: s,
                        direction: u,
                        children: n(t)
                    },
                    e
                ),
            [u, n]
        );
    return (0, i.jsx)('div', {
        className: l.stepsTransitionGroup,
        children: (0, i.jsx)(r.TransitionGroup, {
            items: s,
            renderItem: _,
            getItemKey: o
        })
    });
}
