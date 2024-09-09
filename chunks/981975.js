n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120),
    n(653041),
    n(536091);
var s = n(735250),
    a = n(470079),
    i = n(120356),
    r = n.n(i),
    l = n(392711),
    o = n.n(l),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    _ = n(275759),
    I = n(313201),
    E = n(63063),
    T = n(243730),
    m = n(764260),
    N = n(946724),
    S = n(95242),
    h = n(530198),
    g = n(420966),
    C = n(203377),
    x = n(981631),
    p = n(856651),
    R = n(689938),
    f = n(428572),
    L = n(151365);
let O = (0, I.hQ)();
function A(e, t) {
    return t !== _.O1.AND ? Object.values(o().groupBy(e, (e) => ''.concat(e.connectionType, ':').concat(e.applicationId))) : 0 === e.length ? [] : [[...e]];
}
function M(e) {
    let { handleAddVerificationClicked: t, locked: n } = e;
    return (0, s.jsxs)('div', {
        className: f.headerNoConfigContainer,
        children: [
            (0, s.jsx)(d.Heading, {
                className: f.headerHeading,
                variant: 'eyebrow',
                children: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
            }),
            (0, s.jsx)(d.Text, {
                variant: 'text-sm/normal',
                color: 'header-secondary',
                children: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({ helpdeskArticleUrl: E.Z.getArticleURL(x.BhN.CONNECTION_DETAILS_ADMIN) })
            }),
            (0, s.jsx)(d.Button, {
                disabled: n,
                className: f.addVerificationButton,
                size: d.Button.Sizes.MEDIUM,
                look: d.Button.Looks.FILLED,
                color: d.Button.Colors.BRAND,
                onClick: t,
                children: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION
            })
        ]
    });
}
function D(e) {
    let { guild: t, role: n, locked: i, setSelectedSection: l, integrations: o } = e,
        { headerHeight: I, headerRef: D } = (0, S.Z)(0),
        { scrolledToTop: v, handleScroll: j } = (0, g.V)(),
        Z = (0, c.e7)(
            [T.Z],
            () => {
                var e;
                return null === (e = T.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[n.id];
            },
            [n.id, t.id]
        ),
        b = (0, c.Wu)([N.Z], () => {
            var e;
            return null !== (e = N.Z.getEditedRoleConnectionConfigurationsMap().get(n.id)) && void 0 !== e ? e : [];
        }),
        U = b.length > 1 ? _.O1.OR : _.O1.AND,
        G = a.useMemo(() => (U === _.O1.OR ? b.flat() : null != b && b.length > 0 ? b[0] : []), [U, b]),
        P = a.useMemo(() => new Set(G.map((e) => e.connectionType)), [G]);
    function B(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
            s = [...G];
        s.push({
            connectionType: e,
            connectionMetadataField: void 0,
            applicationId: t,
            operator: void 0,
            value: void 0
        }),
            (0, m.d_)(n.id, A(s, U));
    }
    function y() {
        u.Z.dispatch({
            type: 'CONNECTIONS_GRID_MODAL_SHOW',
            onComplete: (e) => B(e),
            excludedPlatformTypes: P,
            integrations: o,
            onCompleteApplication: (e) => B(p.Kt, e)
        });
    }
    let F = null;
    if (0 === G.length)
        F = (0, s.jsx)(M, {
            handleAddVerificationClicked: y,
            locked: i
        });
    else if (G.length > 0) {
        var k, w;
        let e = null;
        G.length < 10 &&
            (e = (0, s.jsx)(d.Button, {
                className: r()(f.addVerificationButton, f.addVerificationButtonAppend),
                size: d.Button.Sizes.LARGE,
                look: d.Button.Looks.BLANK,
                color: d.Button.Colors.LINK,
                onClick: y,
                disabled: i,
                children: (0, s.jsxs)('div', {
                    className: f.addVerificationButtonAppendTextContainer,
                    children: [
                        (0, s.jsx)(d.CirclePlusIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                        R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_ADD_CONNECTION
                    ]
                })
            })),
            (F = (0, s.jsxs)(s.Fragment, {
                children: [
                    ((k = () => (0, m.d_)(n.id, [])),
                    (w = i),
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsxs)('div', {
                                className: f.headerTitleContainer,
                                children: [
                                    (0, s.jsx)('div', {
                                        className: f.headerTitleTextContainer,
                                        children: (0, s.jsx)(d.Heading, {
                                            variant: 'eyebrow',
                                            children: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_HEADER
                                        })
                                    }),
                                    (0, s.jsx)(d.Button, {
                                        className: f.headerTitleButton,
                                        size: d.Button.Sizes.TINY,
                                        look: d.Button.Looks.LINK,
                                        color: d.Button.Colors.LINK,
                                        onClick: k,
                                        disabled: w,
                                        children: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_CLEAR_ALL
                                    })
                                ]
                            }),
                            (0, s.jsx)(d.Text, {
                                variant: 'text-sm/normal',
                                children: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_DESCRIPTION_LEARN_MORE.format({ helpdeskArticleUrl: E.Z.getArticleURL(x.BhN.CONNECTION_DETAILS_ADMIN) })
                            })
                        ]
                    })),
                    (function (e, t, n, a, i) {
                        let r = A(a, _.O1.OR);
                        return (0, s.jsx)(d.FormItem, {
                            className: f.operatorContainer,
                            title: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_REQUIREMENTS,
                            children: (0, s.jsx)(d.RadioGroup, {
                                options: [
                                    {
                                        name: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_OR_DESCRIPTION,
                                        value: _.O1.OR
                                    },
                                    {
                                        name: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_AND_DESCRIPTION,
                                        value: _.O1.AND
                                    }
                                ],
                                onChange: (e) => i(a, e.value),
                                value: n,
                                disabled: e || r.length < 2,
                                'aria-labelledby': O
                            })
                        });
                    })(i, n.id, U, G, (e, t) => (0, m.d_)(n.id, A(e, t))),
                    (function (e, t, n, a, i) {
                        function r(n, s) {
                            let a = [];
                            for (let t of e) a.push({ ...t });
                            if (null == n) {
                                let t = e[s];
                                null !== t && null == t.connectionMetadataField && null == t.operator && null == t.value ? (a = a.filter((e) => (null == t.applicationId ? e.connectionType !== t.connectionType : e.connectionType !== t.connectionType && e.applicationId !== t.applicationId))) : a.splice(s, 1);
                            } else -1 === s ? a.push(n) : s >= 0 && (a[s] = n);
                            t(a);
                        }
                        let l = new Map();
                        for (let t of (e.forEach((e, t) => {
                            let n = ''.concat(e.connectionType, ':').concat(e.applicationId);
                            if (l.has(n)) {
                                let s = l.get(n);
                                null == s ||
                                    s.push({
                                        index: t,
                                        configuration: e
                                    });
                            } else
                                l.set(n, [
                                    {
                                        index: t,
                                        configuration: e
                                    }
                                ]);
                        }),
                        l.values())) {
                            if (
                                t.some((e) => {
                                    let { configuration: t } = e;
                                    return null == t.connectionMetadataField && null == t.operator && null == t.value;
                                })
                            )
                                continue;
                            let n = {
                                    ...t[0].configuration,
                                    connectionMetadataField: void 0,
                                    operator: void 0,
                                    value: void 0
                                },
                                s = e.push(n);
                            t.push({
                                index: s - 1,
                                configuration: n
                            });
                        }
                        return (0, s.jsx)('div', {
                            className: f.configurationsContainer,
                            children: Array.from(l.values()).map((e) =>
                                (0, s.jsx)(
                                    h.Z,
                                    {
                                        configurationItems: e,
                                        onConfigurationChange: r,
                                        locked: n,
                                        integrations: i
                                    },
                                    e[0].configuration.connectionType + ':' + e[0].index
                                )
                            )
                        });
                    })(G, (e) => (0, m.d_)(n.id, A(e, U)), i, n.id, o),
                    e
                ]
            }));
    }
    return (0, s.jsx)(d.AdvancedScrollerAuto, {
        className: f.scroller,
        style: { scrollPaddingTop: I },
        onScroll: j,
        children: (0, s.jsxs)('div', {
            className: L.contentWidth,
            children: [
                (0, s.jsx)('div', {
                    className: r()(L.header, L.stickyHeader, { [L.stickyHeaderElevated]: !v }),
                    ref: D,
                    children: (0, s.jsx)(g.Z, {
                        guild: t,
                        role: n,
                        selectedSection: C.ZI.VERIFICATIONS,
                        setSelectedSection: l
                    })
                }),
                (null != Z ? Z : 0) > 0
                    ? (0, s.jsxs)('div', {
                          className: f.warningContainer,
                          children: [
                              (0, s.jsx)(d.CircleWarningIcon, {
                                  size: 'custom',
                                  width: 20,
                                  height: 20,
                                  color: 'currentColor',
                                  className: f.warningIcon
                              }),
                              (0, s.jsx)(d.Text, {
                                  variant: 'text-sm/normal',
                                  color: 'text-normal',
                                  children: R.Z.Messages.ROLE_EDIT_CONNECTIONS_CONTROLS_MEMBERS_WARNING
                              })
                          ]
                      })
                    : null,
                F
            ]
        })
    });
}
