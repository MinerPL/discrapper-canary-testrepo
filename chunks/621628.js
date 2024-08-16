t.d(s, {
    Z: function () {
        return h;
    }
}),
    t(47120),
    t(518263),
    t(970173),
    t(520712),
    t(268111),
    t(941497),
    t(32026),
    t(480839),
    t(744285),
    t(492257),
    t(873817),
    t(733860);
var n = t(735250),
    a = t(470079),
    i = t(120356),
    r = t.n(i),
    o = t(442837),
    l = t(704215),
    c = t(433517),
    d = t(481060),
    _ = t(600164),
    E = t(112831),
    u = t(675478),
    I = t(581883),
    T = t(883904),
    S = t(68985),
    N = t(211644),
    C = t(804501),
    m = t(989374),
    A = t(224499);
function O(e) {
    let { contents: s, content: t, onChange: a } = e,
        i = l.z[t],
        { isDismissed: r, handleToggleDismissState: o } = (0, C.x)(i, s);
    return (0, n.jsx)(n.Fragment, {
        children: (0, n.jsx)(d.FormSwitch, {
            value: r,
            onChange: () => {
                a(t), o();
            },
            children: (0, n.jsx)(d.FormText, {
                size: E.Z.Sizes.SIZE_16,
                className: A.marginTop4,
                children: ''.concat(t.toLowerCase(), ' (').concat(l.z[t], ')')
            })
        })
    });
}
function g(e) {
    let { items: s, dismissedContents: t, handleChange: a } = e;
    return (0, n.jsx)(n.Fragment, {
        children: s
            .filter((e) => isNaN(Number(e)))
            .map((e) =>
                (0, n.jsx)(
                    O,
                    {
                        contents: t,
                        content: e,
                        onChange: a
                    },
                    e
                )
            )
    });
}
function h() {
    var e;
    let s = (0, N.ZP)((e) => e.recentlyShown),
        { dailyCapReached: t, dailyCapOverridden: i } = (0, o.cj)([S.Z], () => ({
            dailyCapReached: S.Z.hasUserHitDCCap(),
            dailyCapOverridden: S.Z.dailyCapOverridden
        })),
        [E, C] = a.useState(''),
        O =
            null !==
                (e = (0, o.e7)([I.Z], () => {
                    var e;
                    return null === (e = I.Z.settings.userContent) || void 0 === e ? void 0 : e.dismissedContents;
                })) && void 0 !== e
                ? e
                : new Uint8Array(),
        [h, p] = (function (e, s) {
            let [t, n] = a.useState(() => {
                let t = c.K.get(e);
                return null != t ? t : s;
            });
            return (
                a.useEffect(() => {
                    c.K.set(e, t);
                }, [e, t]),
                [t, n]
            );
        })('RecentDismissibleOverrides', []),
        R = (e) => {
            p((s) => {
                let t = new Set(s);
                t.delete(e);
                let n = Array.from(t).slice(0, 4);
                return n.unshift(e), n;
            });
        },
        x = s.map((e) => l.z[e]),
        M = h.filter((e) => e.toLowerCase().includes(E.toLowerCase())).filter((e) => !x.includes(e)),
        f = Object.keys(l.z)
            .filter((e) => !x.includes(e))
            .filter((e) => !h.includes(e))
            .filter((e) => e.toLowerCase().includes(E.toLowerCase()))
            .sort((e, s) => e.localeCompare(s));
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsxs)(d.FormSection, {
                title: 'Dismissible Content Fatigue',
                tag: d.FormTitleTags.H1,
                className: A.marginBottom60,
                children: [
                    (0, n.jsx)(d.FormItem, {
                        children: (0, n.jsxs)(d.FormText, {
                            className: A.marginBottom4,
                            children: ['Daily Cap Reached: ', t ? 'Yes' : 'No']
                        })
                    }),
                    (0, n.jsx)(d.FormSwitch, {
                        value: i,
                        onChange: T.Nj,
                        children: 'Override Dismissible Content Daily Cap'
                    }),
                    (0, n.jsxs)(d.FormItem, {
                        children: [
                            (0, n.jsx)(d.Button, {
                                onClick: () => (0, T.EG)(),
                                children: 'Reset DismissibleContentFrameworkStore'
                            }),
                            (0, n.jsx)(d.FormText, {
                                className: A.marginTop4,
                                children: 'This will reset the daily cap and content seen during session'
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsxs)(d.FormSection, {
                title: 'Dismissible Contents',
                tag: d.FormTitleTags.H1,
                children: [
                    (0, n.jsx)(d.SearchBar, {
                        className: A.marginBottom20,
                        size: d.SearchBar.Sizes.LARGE,
                        query: E,
                        onChange: C,
                        onClear: () => C('')
                    }),
                    (0, n.jsxs)(d.FormItem, {
                        className: m.buttonsContainer,
                        children: [
                            (0, n.jsx)(d.Button, {
                                onClick: u.sr,
                                children: 'Clear All Dismissed Contents'
                            }),
                            (0, n.jsx)(d.Button, {
                                onClick: u.bE,
                                children: 'Check All Dismissed Contents'
                            })
                        ]
                    }),
                    s.length > 0
                        ? (0, n.jsxs)('div', {
                              className: A.marginBottom20,
                              children: [
                                  (0, n.jsx)('div', {
                                      className: A.marginBottom20,
                                      children: (0, n.jsx)(d.FormTitle, { children: 'Recently Shown' })
                                  }),
                                  (0, n.jsx)(g, {
                                      items: x,
                                      dismissedContents: O,
                                      handleChange: R
                                  })
                              ]
                          })
                        : null,
                    M.length > 0
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsx)('div', {
                                      className: A.marginBottom20,
                                      children: (0, n.jsx)(d.FormTitle, { children: 'Recent Overrides' })
                                  }),
                                  (0, n.jsx)(g, {
                                      items: M,
                                      dismissedContents: O,
                                      handleChange: R
                                  })
                              ]
                          })
                        : null,
                    (0, n.jsx)(_.Z, {
                        className: r()(A.marginBottom20, A.marginTop20),
                        children: (0, n.jsx)(d.FormTitle, { children: 'Available Dismissible Contents' })
                    }),
                    (0, n.jsx)(g, {
                        items: f,
                        dismissedContents: O,
                        handleChange: R
                    })
                ]
            })
        ]
    });
}
