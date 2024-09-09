n.d(t, {
    Z: function () {
        return _;
    }
}),
    n(47120);
var r = n(735250),
    a = n(470079),
    l = n(120356),
    i = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(38618),
    u = n(465488),
    d = n(535271);
let h = 1000 / 60,
    m = 1000 / 45,
    x = 3 * h,
    f = Math.ceil(3000 / h);
function g(e) {
    let { socket: t, isAverageFrameTime: n } = e,
        [l, i] = (function (e) {
            let t = e.dispatcher.getIsSchedulerBackgrounded(),
                n = a.useRef(t);
            n.current = t;
            let r = a.useRef(t ? performance.now() : 0);
            return (
                a.useEffect(() => {
                    e.dispatcher.getIsSchedulerBackgrounded() && (r.current = performance.now());
                }),
                [n, r]
            );
        })(t),
        {
            currentFPS: o,
            averageFrameTime: c,
            timeSinceLastDrop: d,
            onResetFrameData: m,
            droppedFramesRef: g,
            renderedFrameCount: p,
            bufferFramecountRef: b,
            frameCheckerEffect: v
        } = (function (e, t) {
            let n = a.useRef(Array(f).fill(0)),
                r = a.useRef(performance.now()),
                l = a.useRef(0),
                i = a.useRef(0),
                o = a.useRef(0),
                s = a.useRef(0),
                c = a.useRef(0),
                u = a.useRef(0),
                d = a.useCallback(() => {
                    n.current.fill(0), (l.current = 0), (i.current = 0), (s.current = 0), (c.current = 0), (r.current = performance.now()), (o.current = 0);
                }, []),
                m = a.useCallback(
                    function () {
                        let a = performance.now(),
                            d = a - r.current;
                        if (((r.current = a), t.current)) return;
                        if (((i.current -= n.current[c.current]), (n.current[c.current] = d), (i.current += d), s.current < f && (s.current += 1), (c.current = (c.current + 1) % f), d > x)) {
                            let t = 0 === s.current ? h : i.current / s.current,
                                n = Math.min(2 * h, t),
                                r = Math.floor(d / (e ? n : h));
                            r > 0 && (u.current = performance.now()), (l.current += r);
                        }
                        let m = 0 === s.current ? h : i.current / s.current;
                        o.current += d / m;
                    },
                    [e, t]
                ),
                g = 0 === s.current ? 0 : i.current / s.current;
            return {
                currentFPS: 0 === g ? 0 : (h / g) * 60,
                averageFrameTime: g,
                timeSinceLastDrop: (performance.now() - u.current) / 1000,
                droppedFramesRef: l,
                bufferFramecountRef: s,
                renderedFrameCount: o,
                frameCheckerEffect: m,
                onResetFrameData: d
            };
        })(n, l),
        [_, C, j] = (function (e) {
            let t = a.useRef(Array(f).fill(0)),
                n = a.useRef(performance.now()),
                r = a.useRef(0),
                l = a.useRef(0),
                i = a.useRef(0),
                o = e.dispatcher.getIsSchedulerBackgrounded(),
                s = a.useRef(o);
            s.current = o;
            let c = a.useRef(o ? performance.now() : 0);
            a.useEffect(() => {
                e.dispatcher.getIsSchedulerBackgrounded() && (c.current = performance.now());
            });
            let u = a.useCallback(function () {
                let e = performance.now(),
                    a = e - n.current;
                if (((n.current = e), !s.current)) (r.current -= t.current[i.current]), (t.current[i.current] = a), (r.current += a), l.current < f && (l.current += 1), (i.current = (i.current + 1) % f);
            }, []);
            return [
                u,
                (e, t) => {
                    var n;
                    let a = null !== (n = l.current) && void 0 !== n ? n : 1,
                        i = r.current / a;
                    return Math.abs(e * t - i * a) / t;
                },
                () => {
                    (r.current = 0), (l.current = 0), t.current.fill(0), (n.current = performance.now()), (i.current = 0);
                }
            ];
        })(t),
        [T, N] = (function (e, t) {
            let n = a.useRef(null),
                r = a.useRef(null),
                l = a.useRef(null),
                i = a.useCallback(() => {
                    null != n.current && clearInterval(n.current), null != r.current && cancelIdleCallback(r.current), null != l.current && cancelAnimationFrame(l.current);
                }, []),
                o = a.useCallback(() => {
                    n.current = setTimeout(() => {
                        (r.current = requestIdleCallback(e)),
                            (l.current = requestAnimationFrame(() => {
                                t(), o();
                            }));
                    }, 12);
                }, [e, t]);
            return [
                a.useCallback(() => {
                    i(), o();
                }, [i, o]),
                i
            ];
        })(_, v),
        S = performance.now() - i.current < 5000,
        y = C(c, b.current);
    a.useEffect(
        () => (
            T(),
            () => {
                N();
            }
        ),
        []
    );
    let I = a.useCallback(() => {
        m(), j(), T();
    }, [m, j, T]);
    return (0, r.jsxs)('div', {
        className: u.panelGroup,
        children: [
            (0, r.jsxs)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'FPS (~3sec):',
                    ' ',
                    (0, r.jsx)(s.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: o < 30 ? 'text-danger' : o < 45 ? 'text-warning' : 'text-primary',
                        children: o.toFixed(2)
                    })
                ]
            }),
            (0, r.jsxs)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Dropped Frames:',
                    ' ',
                    (0, r.jsx)(s.Text, {
                        tag: 'span',
                        variant: 'text-md/bold',
                        color: d < 2 ? 'text-danger' : d < 5 ? 'text-warning' : 'text-primary',
                        children: g.current
                    }),
                    (0, r.jsxs)(s.Text, {
                        tag: 'span',
                        variant: 'text-sm/normal',
                        color: 'text-muted',
                        className: u.secondaryInfoText,
                        children: ['(Dropped: ', ((g.current / p.current) * 100).toFixed(4), '%)']
                    }),
                    S &&
                        (0, r.jsx)(s.Tooltip, {
                            position: 'left',
                            text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                            children: (e) =>
                                (0, r.jsx)('span', {
                                    ...e,
                                    children: (0, r.jsx)(s.Text, {
                                        tag: 'span',
                                        variant: 'text-xs/bold',
                                        color: 'text-danger',
                                        className: u.secondaryInfoText,
                                        children: '(Backgrounded)'
                                    })
                                })
                        })
                ]
            }),
            (0, r.jsxs)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Rendered Frames:',
                    ' ',
                    (0, r.jsx)(s.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: 'text-secondary',
                        children: p.current.toFixed(0)
                    })
                ]
            }),
            (0, r.jsxs)(s.Text, {
                variant: 'text-md/normal',
                color: 'text-muted',
                children: [
                    'Frame Times (~3sec):',
                    ' ',
                    (0, r.jsxs)(s.Text, {
                        tag: 'span',
                        variant: 'text-md/semibold',
                        color: c > 1.1 * h ? 'text-warning' : 'text-secondary',
                        children: [c.toFixed(2), 'ms']
                    })
                ]
            }),
            (0, r.jsx)(s.Tooltip, {
                position: 'left',
                text: "The average amount of 'lag' between us rendering a frame and being able to process background tasks. Values constantly above 1-2ms means our main thread is being burried by work and is taking all of its time in animation frames, most likely producing user interaciton blocking jank. (This doesn't work when the app is backgrounded though)",
                children: (e) =>
                    (0, r.jsx)('div', {
                        ...e,
                        children: (0, r.jsxs)(s.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: [
                                'Idle Frame Delta (~3sec):',
                                ' ',
                                (0, r.jsxs)(s.Text, {
                                    tag: 'span',
                                    variant: 'text-md/semibold',
                                    color: y > 1 ? 'text-danger' : 'text-secondary',
                                    children: [y.toFixed(2), 'ms']
                                }),
                                S &&
                                    (0, r.jsx)(s.Tooltip, {
                                        position: 'left',
                                        text: "We don't track frames while the app is in the background, because requestAnimationFrame doesn't fire in the background",
                                        children: (e) =>
                                            (0, r.jsx)('span', {
                                                ...e,
                                                children: (0, r.jsx)(s.Text, {
                                                    tag: 'span',
                                                    variant: 'text-xs/bold',
                                                    color: 'text-danger',
                                                    className: u.secondaryInfoText,
                                                    children: '(Backgrounded)'
                                                })
                                            })
                                    })
                            ]
                        })
                    })
            }),
            (0, r.jsx)('div', {
                className: u.bottomPanelButton,
                children: (0, r.jsx)(s.Button, {
                    size: s.Button.Sizes.SMALL,
                    onClick: I,
                    children: 'Reset Frame Data'
                })
            })
        ]
    });
}
function p(e) {
    let { socket: t, isAverageFrameTime: n, onToggleAverageFrameTime: l } = e,
        [i, o] = a.useState(t.dispatcher.getIsRequestIdleCallbackEnabled()),
        c = a.useRef(null);
    a.useEffect(() => {
        let e = setInterval(() => {
            o(t.dispatcher.getIsRequestIdleCallbackEnabled());
        }, m);
        return (
            (c.current = e),
            () => {
                null != c.current && clearInterval(c.current);
            }
        );
    }, [t.dispatcher]);
    let d = (e) => {
        t.dispatcher.toggleRequestIdleCallback(e), o(e);
    };
    return (0, r.jsxs)('div', {
        className: u.panelGroup,
        children: [
            (0, r.jsx)(s.Tooltip, {
                position: 'left',
                text: 'Instead of using 60fps to calculate the number of dropped frames, we use the average framerate to more accurately determine the number of actual dropped frames. Turn this off when benchmarking to get better comparsion between two different runtimes, where higher FPS might result in a higher dropped frame count.',
                children: (e) =>
                    (0, r.jsx)('div', {
                        ...e,
                        children: (0, r.jsx)(s.Checkbox, {
                            value: n,
                            onChange: () => l(!n),
                            size: 18,
                            type: s.Checkbox.Types.INVERTED,
                            shape: s.Checkbox.Shapes.BOX,
                            children: (0, r.jsx)(s.Text, {
                                tag: 'span',
                                variant: 'text-md/normal',
                                color: 'text-muted',
                                children: 'Use Average Frame Time'
                            })
                        })
                    })
            }),
            (0, r.jsx)(s.Checkbox, {
                value: i,
                onChange: () => d(!i),
                size: 18,
                type: s.Checkbox.Types.INVERTED,
                shape: s.Checkbox.Shapes.BOX,
                children: (0, r.jsx)(s.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable New Dispatch Scheduler (requestIdleCallback)'
                })
            })
        ]
    });
}
function b(e) {
    let { socket: t } = e,
        n = t.dispatcher.getDispatchTimings(),
        [l, o] = a.useState(!1);
    return (0, r.jsxs)('div', {
        className: u.panelGroup,
        children: [
            (0, r.jsx)('div', {
                className: i()(l && u.topPanelToggle),
                children: (0, r.jsx)(s.Checkbox, {
                    value: l,
                    onChange: () => o((e) => !e),
                    size: 18,
                    type: s.Checkbox.Types.INVERTED,
                    shape: s.Checkbox.Shapes.BOX,
                    children: (0, r.jsx)(s.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Timings'
                    })
                })
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Gateway Dispatch Timings:'
                          }),
                          (0, r.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(n).map((e) => {
                                  let [t, [n, a]] = e;
                                  return (0, r.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsx)(s.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsxs)(s.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: [n.toFixed(2), 'ms']
                                                  })
                                              }),
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsxs)(s.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/normal',
                                                      color: 'text-muted',
                                                      children: ['(count: ', a, ')']
                                                  })
                                              })
                                          ]
                                      },
                                      t
                                  );
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}
function v(e) {
    let { socket: t } = e,
        n = t.dispatcher.getSchedulerTelemetry(),
        [l, o] = a.useState(n.isTelemetryEnabled),
        [c, d] = a.useState(n.isTelemetryEnabled),
        h = (e) => {
            d(e), n.toggleTelemetry(e);
        };
    return (0, r.jsxs)('div', {
        className: u.panelGroup,
        children: [
            (0, r.jsx)(s.Checkbox, {
                value: c,
                onChange: () => h(!c),
                size: 18,
                type: s.Checkbox.Types.INVERTED,
                shape: s.Checkbox.Shapes.BOX,
                children: (0, r.jsx)(s.Text, {
                    tag: 'span',
                    variant: 'text-md/normal',
                    color: 'text-muted',
                    children: 'Enable Dispatch Telemetry'
                })
            }),
            (0, r.jsx)('div', {
                className: i()(l && u.topPanelToggle),
                children: (0, r.jsx)(s.Checkbox, {
                    value: l,
                    onChange: () => {
                        o((e) => {
                            let t = !e;
                            return t && h(!0), t;
                        });
                    },
                    size: 18,
                    type: s.Checkbox.Types.INVERTED,
                    shape: s.Checkbox.Shapes.BOX,
                    children: (0, r.jsx)(s.Text, {
                        tag: 'span',
                        variant: 'text-md/normal',
                        color: 'text-muted',
                        children: 'Show Dispatch Scheduler Telemetry'
                    })
                })
            }),
            l
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          (0, r.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              color: 'text-muted',
                              children: 'Dispatch Scheduler Telemetry:'
                          }),
                          (0, r.jsx)('table', {
                              cellPadding: 4,
                              children: Object.entries(n.generateTelemetry()).map((e) => {
                                  let [t, n] = e;
                                  return (0, r.jsxs)(
                                      'tr',
                                      {
                                          children: [
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsx)(s.Text, {
                                                      variant: 'text-xs/normal',
                                                      color: 'text-normal',
                                                      children: t
                                                  })
                                              }),
                                              (0, r.jsx)('td', {
                                                  children: (0, r.jsx)(s.Text, {
                                                      tag: 'span',
                                                      variant: 'text-xs/bold',
                                                      color: 'text-normal',
                                                      children: n
                                                  })
                                              })
                                          ]
                                      },
                                      t
                                  );
                              })
                          }),
                          (0, r.jsx)('div', {
                              className: u.bottomPanelButton,
                              children: (0, r.jsx)(s.Button, {
                                  size: s.Button.Sizes.SMALL,
                                  onClick: () => {
                                      n.reset();
                                  },
                                  children: 'Reset Scheduler Telemetry'
                              })
                          })
                      ]
                  })
                : null
        ]
    });
}
function _() {
    let e = (0, o.e7)([c.Z], () => c.Z.getSocket()),
        [t, n] = a.useState(!1);
    return (
        !(function () {
            let [, e] = a.useState({});
            a.useEffect(() => {
                let t = setInterval(() => {
                    e({});
                }, m);
                return () => {
                    clearInterval(t);
                };
            }, []);
        })(),
        (0, r.jsx)('div', {
            className: i()(d.panel, u.panel),
            children: (0, r.jsxs)(s.ScrollerThin, {
                className: u.panel,
                children: [
                    (0, r.jsx)(g, {
                        socket: e,
                        isAverageFrameTime: t
                    }),
                    (0, r.jsx)(p, {
                        socket: e,
                        isAverageFrameTime: t,
                        onToggleAverageFrameTime: n
                    }),
                    (0, r.jsx)(b, { socket: e }),
                    (0, r.jsx)(v, { socket: e })
                ]
            })
        })
    );
}
