n.d(t, {
    Hu: function () {
        return Y;
    },
    oA: function () {
        return H;
    },
    se: function () {
        return z;
    }
}),
    n(47120),
    n(518263),
    n(970173),
    n(520712),
    n(268111),
    n(941497),
    n(32026),
    n(480839),
    n(744285),
    n(492257),
    n(873817),
    n(863942),
    n(642549),
    n(653041),
    n(724458);
var l = n(735250),
    s = n(470079),
    i = n(120356),
    r = n.n(i),
    a = n(553813),
    o = n.n(a),
    c = n(788900),
    d = n(268146),
    u = n(442837),
    f = n(141038),
    h = n(846519),
    m = n(481060),
    x = n(224706),
    _ = n(579806),
    g = n(600164),
    p = n(152708),
    C = n(594190),
    S = n(569984),
    j = n(918701),
    v = n(977156),
    E = n(28798),
    I = n(131951),
    Z = n(449224),
    T = n(358085),
    N = n(463727),
    M = n(855403),
    R = n(299570),
    A = n(960861),
    O = n(989941),
    L = n(958707),
    w = n(152165),
    b = n(133179),
    D = n(70722),
    P = n(46140),
    y = n(65154),
    G = n(689938),
    B = n(624743);
async function k() {
    let e = I.Z.getVideoDevices(),
        t = (0, f.Z)(I.Z.getMediaEngine(), [d.vA.WINDOW, d.vA.SCREEN], {
            width: 176,
            height: 99
        }),
        n = U(),
        l = await n,
        s = await t,
        i = s.filter((e) => e.id.startsWith(d.vA.SCREEN)),
        r = (function (e, t) {
            let n = {};
            return (
                t.forEach((e) => {
                    n[e.id] = e;
                }),
                e.forEach((e) => {
                    n[e.id] = e;
                }),
                Object.values(n)
            );
        })(
            s.filter((e) => e.id.startsWith(d.vA.WINDOW)),
            l
        ),
        a = ['GQgGHISKZ5aYqYeYhX9isDUHGw', 'bAgKFITWhoVvmHVRuokCdjVQaA', 'XAgGDIJ/ipadd3iCiYUcWpCZBA', 'HRkGDIT5aXRneomGdlvUawB7qA', 'I9gNDISmlqqPmHiKd3isTp/5lg', 'XxgGBIIwT2ZGpneUeZev6fWLXQ', 'KzsKNIZDeYmfd3ihe1bXfr8Jxg', 'J9cRDIJ6iHd/d4h4eIUJf5LyRw', 'DggKFIQwtndKe3hVfXnAWQmddQ', 'WggKDILeh3ePZpd6l4jln1b5SQ', '4PgJJIJVl3eAaod2iJeHj7tE8Q'];
    return {
        windowSources: r,
        screenSources: i,
        cameraSources: Object.entries(e)
            .filter((e) => {
                let [t, n] = e;
                return !n.disabled;
            })
            .map((e, t) => {
                let [n, l] = e,
                    s = a[t % a.length],
                    i = Uint8Array.from(atob(s), (e) => e.charCodeAt(0)),
                    r = (0, c.xS)(i);
                return {
                    id: 'camera:' + l.id,
                    name: l.name,
                    url: r
                };
            })
    };
}
async function U() {
    let e = C.ZP.getRunningGames();
    return (
        await Promise.all(
            e.map(async (e) => {
                let t;
                if (null == e.name) return null;
                try {
                    t = await x.Z.identifyGame(e.pid, e.name);
                } catch (e) {
                    return null;
                }
                let n = e.windowHandle,
                    l = e.name,
                    s = t.icon;
                return null != n && null != l && null != s
                    ? {
                          id: 'window:'.concat(n),
                          name: l,
                          url: 'data:image/bmp;base64,'.concat(s)
                      }
                    : null;
            })
        )
    ).filter((e) => null !== e);
}
function V(e) {
    let t = (0, T.isWindows)() ? (0, O.Z)(C.ZP, Z.Z) : null,
        n = C.ZP.getRunningGames();
    return null != t && (0, M.Z)(e.id, t.windowHandle) ? 2 : null != n.find((t) => (0, M.Z)(e.id, t.windowHandle)) ? 1 : 0;
}
function H(e) {
    let { selectedSource: t, onChangeSelectedSource: n } = e,
        { enableGoLiveCaptureCard: i } = N.Z.useExperiment({ location: 'GoLive_Source_Select' }),
        a = I.Z.supports(y.AN.GO_LIVE_HARDWARE),
        [o, c] = s.useState(null),
        [f, x] = s.useState(null),
        [_, Z] = s.useState(null),
        T = null != _ && _.length > 0,
        [R, A] = s.useState(d.vA.WINDOW),
        [O, w] = s.useState(!1),
        D = s.useRef(null),
        U = s.useRef(new h.Xp()),
        H = (0, u.e7)([C.ZP], () => C.ZP.getRunningGames()),
        W = (function (e, t, n) {
            let l = (0, v.Zy)({ location: P.dr.STREAM_SOURCE_SELECT });
            return s.useMemo(() => {
                if (null == n || !l) return null;
                for (let l of n) {
                    var s, i;
                    let n = t.find((e) => (0, M.Z)(l.id, e.windowHandle));
                    if ((null == n ? void 0 : n.id) == null) continue;
                    let r = (0, j.lQ)(e, n.id);
                    if (null != r && (null === (s = r.userStatus) || void 0 === s ? void 0 : s.enrolledAt) != null && (null === (i = r.userStatus) || void 0 === i ? void 0 : i.completedAt) == null)
                        return {
                            source: l,
                            quest: r
                        };
                }
                return null;
            }, [l, e, t, n]);
        })(
            (0, u.e7)([S.Z], () => S.Z.quests),
            H,
            f
        ),
        F = s.useMemo(() => (null == f ? null : [...f].sort((e, t) => ((null == W ? void 0 : W.source.id) === e.id ? -1 : (null == W ? void 0 : W.source.id) === t.id ? 1 : V(t) - V(e)))), [W, f]);
    s.useEffect(() => {
        let e = U.current;
        return (
            k().then((e) => {
                let { screenSources: t, windowSources: n, cameraSources: l } = e;
                c(t), x(n), Z(l);
            }),
            e.start(1000, async () => {
                let { screenSources: e, windowSources: t, cameraSources: n } = await k();
                c(e), x(t), Z(n);
            }),
            () => {
                e.stop();
            }
        );
    }, []);
    let z = s.useCallback((e) => {
            null !== e && ((D.current = e), w(!e.isScrolledToTop()));
        }, []),
        Y = (function (e) {
            switch (e) {
                case d.vA.WINDOW:
                    return F;
                case d.vA.SCREEN:
                    return o;
                case d.vA.CAMERA:
                    return _;
            }
        })(R);
    if (null == Y)
        return (0, l.jsx)(g.Z, {
            className: B.spinner,
            justify: g.Z.Justify.CENTER,
            align: g.Z.Align.CENTER,
            children: (0, l.jsx)(m.Spinner, {})
        });
    let K = Y.map((e) => {
        let { id: s } = e,
            i = (null == t ? void 0 : t.id) === s;
        return (0, l.jsx)(
            m.Clickable,
            {
                className: r()(B.tile, { [B.selected]: i }),
                onClick: () => n(e, null),
                children: (0, l.jsx)(
                    b.Z,
                    {
                        source: e,
                        selectedSource: t
                    },
                    e.id
                )
            },
            s
        );
    });
    function Q() {
        let e = D.current;
        null != e && w(!e.isScrolledToTop());
    }
    return (0, l.jsxs)(s.Fragment, {
        children: [
            (0, l.jsxs)('div', {
                className: B.segmentContainer,
                children: [
                    (0, l.jsx)(L.Z, { separator: O }),
                    (0, l.jsx)(m.SegmentedControl, {
                        options: (function () {
                            let e = [
                                {
                                    name: G.Z.Messages.GO_LIVE_MODAL_APPLICATIONS,
                                    value: d.vA.WINDOW
                                },
                                {
                                    name: G.Z.Messages.GO_LIVE_MODAL_SCREENS,
                                    value: d.vA.SCREEN
                                }
                            ];
                            return (
                                i &&
                                    a &&
                                    T &&
                                    e.push({
                                        name: G.Z.Messages.GO_LIVE_MODAL_CAPTURE,
                                        value: d.vA.CAMERA
                                    }),
                                e
                            );
                        })(),
                        value: R,
                        onChange: (e) => {
                            let { value: t } = e;
                            return A(t);
                        },
                        className: B.segmentControl,
                        optionClassName: B.segmentControlOption
                    })
                ]
            }),
            R === d.vA.CAMERA
                ? (0, l.jsx)('div', {
                      className: B.sourceContainer,
                      children: (0, l.jsx)(m.AdvancedScroller, {
                          ref: z,
                          className: B.sourceScroller,
                          onScroll: Q,
                          children: (0, l.jsx)(p.Z, {
                              layout: p.Z.Layout.WRAP,
                              columns: 2,
                              className: B.sourceContainer,
                              children: K
                          })
                      })
                  })
                : (0, l.jsxs)(m.AdvancedScroller, {
                      ref: z,
                      className: B.sourceScroller,
                      onScroll: Q,
                      children: [
                          R === d.vA.WINDOW && null != W && (0, l.jsx)(E.Z, { quest: W.quest }),
                          (0, l.jsx)(p.Z, {
                              layout: p.Z.Layout.WRAP,
                              columns: 2,
                              className: B.sourceContainer,
                              children: K
                          })
                      ]
                  })
        ]
    });
}
function W(e) {
    let { onSelect: t } = e,
        n = s.useCallback(() => {
            t({
                id: 'prepicked:',
                name: G.Z.Messages.GO_LIVE_MODAL_ANY,
                url: ''
            });
        }, [t]);
    return (0, l.jsx)(m.Clickable, {
        role: 'radio',
        'aria-checked': !1,
        onClick: n,
        tabIndex: 0,
        className: r()(B.nativeSourceSingleTypeButton, B.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: B.nativeSourceSingleTypeButtonInner,
            children: [
                (0, l.jsx)(w.Z, { className: B.nativeSourceSingleTypeImage }),
                (0, l.jsx)(m.Text, {
                    variant: 'text-md/medium',
                    color: 'none',
                    children: G.Z.Messages.GO_LIVE_MODAL_ANY_CTA
                })
            ]
        })
    });
}
function F(e) {
    let { id: t, name: n, text: i, icon: a, onSelect: o } = e,
        c = s.useCallback(() => {
            o({
                id: 'prepicked:' + t,
                name: n,
                url: ''
            });
        }, [t, n, o]);
    return (0, l.jsx)(m.Clickable, {
        role: 'radio',
        'aria-checked': !1,
        onClick: c,
        tabIndex: 0,
        className: r()(B.nativeSourceTypeButton, B.nativePickerRadioItem),
        children: (0, l.jsxs)('div', {
            className: B.nativeSourceTypeButtonInner,
            children: [
                (0, l.jsx)(a, { size: 'lg' }),
                (0, l.jsx)(m.Text, {
                    variant: 'text-sm/medium',
                    color: 'none',
                    children: i
                })
            ]
        })
    });
}
function z(e) {
    let { onSourceSelect: t } = e,
        [n, i] = s.useState([]),
        [a, c] = s.useState({}),
        d = s.useRef(new h.Xp());
    s.useEffect(() => {
        let e = d.current,
            t = () => {
                let e = Object.entries(I.Z.getVideoDevices()).filter((e) => {
                    let [t, n] = e;
                    return !n.disabled;
                });
                i(e),
                    c({
                        ...e.reduce((e, t) => {
                            let [n, l] = t;
                            return {
                                ...e,
                                ['camera:' + n]: l.name
                            };
                        }, {})
                    });
            };
        return (
            t(),
            e.start(1000, t),
            () => {
                e.stop();
            }
        );
    }, []);
    let u = s.useCallback(
            (e) => {
                var n;
                let { value: l } = e;
                t({
                    id: l,
                    name: null !== (n = a[l]) && void 0 !== n ? n : '',
                    url: ''
                });
            },
            [t, a]
        ),
        f = (0, T.isMac)() && o().satisfies(null === _.Z || void 0 === _.Z ? void 0 : _.Z.os.release, D.jR),
        x = (0, T.isMac)(),
        [g, p] = s.useState(!1),
        C = s.useCallback(() => {
            p(!g);
        }, [g]),
        S = f
            ? (0, l.jsx)(W, { onSelect: t })
            : (0, l.jsxs)('div', {
                  className: B.nativePickerTypes,
                  children: [
                      (0, l.jsx)(F, {
                          onSelect: t,
                          id: 'screen',
                          name: G.Z.Messages.GO_LIVE_MODAL_SCREEN,
                          text: G.Z.Messages.GO_LIVE_MODAL_SCREEN_CTA,
                          icon: m.ScreenIcon
                      }),
                      (0, l.jsx)(F, {
                          onSelect: t,
                          id: 'window',
                          name: G.Z.Messages.GO_LIVE_MODAL_WINDOW,
                          text: G.Z.Messages.GO_LIVE_MODAL_WINDOW_CTA,
                          icon: m.BrowserIcon
                      }),
                      x
                          ? (0, l.jsx)(F, {
                                onSelect: t,
                                id: 'app',
                                name: G.Z.Messages.GO_LIVE_MODAL_APP,
                                text: G.Z.Messages.GO_LIVE_MODAL_APP_CTA,
                                icon: m.ClydeIcon
                            })
                          : null
                  ]
              });
    return (0, l.jsxs)('div', {
        className: B.nativePickerScroll,
        children: [
            (0, l.jsx)(m.Text, {
                className: B.nativePickerLabel,
                variant: 'text-md/semibold',
                color: 'interactive-normal',
                children: G.Z.Messages.GO_LIVE_MODAL_SCREENSHARE_HEADER
            }),
            S,
            0 === n.length
                ? null
                : (0, l.jsxs)('div', {
                      className: r()(B.nativePickerCaptureSection, g ? null : B.nativePickerCollapsed),
                      children: [
                          (0, l.jsxs)(m.Clickable, {
                              onClick: C,
                              className: r()(B.nativePickerLabel),
                              children: [
                                  (0, l.jsx)(m.Text, {
                                      className: B.nativeCaptureDevicesText,
                                      variant: 'text-md/semibold',
                                      color: 'interactive-normal',
                                      children: G.Z.Messages.GO_LIVE_MODAL_CAPTURE_HEADER
                                  }),
                                  (0, l.jsx)(m.ChevronSmallDownIcon, {
                                      size: 'sm',
                                      color: 'currentColor',
                                      className: B.captureDevicesToggleIndicator
                                  })
                              ]
                          }),
                          (0, l.jsx)(m.RadioGroup, {
                              className: B.nativePickerCaptureList,
                              onChange: u,
                              radioItemClassName: B.nativePickerRadioItem,
                              options: n.map((e) => {
                                  let [t, n] = e;
                                  return {
                                      name: n.name,
                                      value: 'camera:' + n.id,
                                      icon: m.VideoIcon,
                                      radioItemIconClassName: B.hideRadioCheckbox
                                  };
                              })
                          })
                      ]
                  })
        ]
    });
}
function Y(e) {
    let { onSourceSelect: t, onCancel: n } = e,
        { lastPickerAction: i, lastPickerError: r } = (0, u.e7)([A.ZP], () => A.ZP.getPickerState());
    return (
        s.useEffect(() => {
            (0, R.t)();
        }, []),
        (0, A.kE)(),
        s.useEffect(() => {
            i === A.Uc.Update ? t() : i === A.Uc.Cancel && ((0, R.t)(), n());
        }, [i, t, n]),
        i === A.Uc.Error
            ? (0, l.jsx)(m.Text, {
                  className: B.errorMessage,
                  variant: 'text-md/normal',
                  color: 'text-danger',
                  children: null != r && r.length > 0 ? r : G.Z.Messages.ERROR_ANOTHER_TRY
              })
            : (0, l.jsx)(w.Z, {
                  animated: !0,
                  className: B.nativePickerGuide
              })
    );
}
