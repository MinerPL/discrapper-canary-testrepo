n.d(t, {
    t: function () {
        return N;
    }
}),
    n(653041),
    n(47120);
var r,
    i,
    a,
    s,
    o = n(200651),
    l = n(192379),
    u = n(703533),
    c = n(481060),
    d = n(40851),
    f = n(745510),
    _ = n(633302),
    h = n(549006),
    p = n(146128),
    m = n(981631),
    g = n(675654),
    E = n(10257);
let v = [];
function I(e) {
    let t = [];
    return (
        e.forEach((e) => {
            let n = _.ZP.getByName(e);
            if (null != n) {
                if (
                    (t.push({
                        src: n.url,
                        colorize: !1
                    }),
                    n.hasDiversity)
                )
                    for (let e in n.diversityChildren) {
                        let r = n.diversityChildren[e];
                        t.push({
                            src: r.url,
                            colorize: !1
                        });
                    }
            }
        }),
        t
    );
}
((a = r || (r = {})).JACK_O_LANTERN = 'jack_o_lantern'), (a.NOSE = 'nose');
let S = new Set(['jack_o_lantern', 'nose']),
    T = {
        jack_o_lantern: {
            sprites: I(['chocolate_bar', 'lollipop', 'candy'])
        },
        nose: { sprites: I(['foot']) }
    };
((s = i || (i = {})).ENTER = 'enter'), (s.CONFETTI = 'confetti'), (s.EXIT = 'exit');
let b = {
    enter: {
        BEG: 0,
        END: 22
    },
    confetti: {
        BEG: 23,
        END: 119
    },
    exit: {
        BEG: 164,
        END: 200
    }
};
function y() {
    return n
        .e('60005')
        .then(n.t.bind(n, 931152, 19))
        .then((e) => {
            let { default: t } = e;
            return t;
        });
}
let A = l.forwardRef(function (e, t) {
    let { sprites: n } = e,
        [r, i] = l.useState(null),
        { confettiCanvas: a } = l.useContext(f.h),
        s = (0, u.uR)(a, r);
    return (
        l.useImperativeHandle(
            t,
            () => ({
                fireConfetti: (e, t) => {
                    s.createMultipleConfetti(
                        {
                            ...g.We,
                            position: {
                                type: 'static',
                                value: {
                                    x: e,
                                    y: t
                                }
                            },
                            velocity: {
                                type: 'static-random',
                                minValue: {
                                    x: -5,
                                    y: -40
                                },
                                maxValue: {
                                    x: -40,
                                    y: -100
                                }
                            },
                            size: {
                                type: 'static-random',
                                minValue: 12,
                                maxValue: 48
                            },
                            dragCoefficient: {
                                type: 'static',
                                value: 0.01
                            }
                        },
                        20
                    );
                }
            }),
            [s]
        ),
        (0, o.jsx)(u.Ji, {
            ref: i,
            colors: v,
            sprites: n,
            spriteWidth: 48,
            spriteHeight: 48
        })
    );
});
function N(e) {
    let { children: t } = e,
        n = l.useRef({}),
        [r, i] = l.useState(null),
        a = (function (e) {
            if (null == e) return 'enter';
            switch (e) {
                case 'enter':
                    return 'confetti';
                case 'confetti':
                    return 'exit';
                case 'exit':
                    return 'enter';
            }
        })(r),
        s = l.useRef(null),
        [u, f] = l.useState(!1),
        _ = l.useRef('jack_o_lantern'),
        g = (0, d.bp)(),
        v = l.useCallback(
            (e) => {
                if (!u) {
                    let t = (function (e) {
                        if (null == e) return null;
                        for (let t of S) if (null != e.match(new RegExp(':'.concat(t, '(_tone[1-9])?')))) return t;
                        return null;
                    })(e);
                    null != t && ((_.current = t), f(!0), i(null));
                }
            },
            [u]
        ),
        I = l.useMemo(() => ({ triggerAnimation: v }), [v]),
        N = l.useCallback((e) => {
            i(e);
        }, []),
        C = l.useCallback((e) => {
            'exit' === e && f(!1);
        }, []),
        R = l.useCallback((e) => {
            s.current = e;
        }, []);
    return (l.useEffect(() => {
        if ('confetti' === r) {
            if (null == s.current) return;
            let e = s.current.getBoundingClientRect(),
                t = e.left - 11,
                r = e.top + 125,
                i = n.current[_.current];
            null == i || i.fireConfetti(t, r);
        }
    }, [r]),
    g !== m.IlC.APP)
        ? (0, o.jsx)(o.Fragment, { children: t })
        : (0, o.jsxs)(p.Rm.Provider, {
              value: I,
              children: [
                  t,
                  Object.keys(T).map((e) => {
                      let t = T[e];
                      return (0, o.jsx)(
                          A,
                          {
                              ref: (t) => {
                                  null != t ? (n.current[e] = t) : delete n.current[e];
                              },
                              sprites: t.sprites
                          },
                          e
                      );
                  }),
                  u
                      ? (0, o.jsx)(h.ZP, {
                            children: (0, o.jsx)('div', {
                                className: E.animationWrapper,
                                children: (0, o.jsx)(c.SequencedLottieAnimation, {
                                    animationRef: R,
                                    className: E.lottieAnimation,
                                    nextScene: a,
                                    sceneSegments: b,
                                    onScenePlay: N,
                                    onSceneComplete: C,
                                    importData: y,
                                    pauseWhileUnfocused: !1
                                })
                            })
                        })
                      : null
              ]
          });
}
