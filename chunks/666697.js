n(47120);
var i,
    r,
    a = n(200651),
    l = n(192379),
    s = n(442837),
    o = n(674588),
    c = n(264043),
    d = n(125909),
    u = n(374939),
    h = n(233374),
    m = n(283293),
    p = n(292191),
    g = n(680474),
    f = n(571737),
    _ = n(101400),
    E = n(946542),
    I = n(388032),
    C = n(850258);
((r = i || (i = {})).ABOUT = 'about'), (r.STORE = 'store');
t.Z = function (e) {
    let { applicationId: t, onScroll: n } = e,
        i = (0, s.e7)([c.Z], () => c.Z.getApplication(t)),
        r = (0, s.e7)([c.Z], () => c.Z.getApplicationFetchState(t));
    l.useEffect(() => {
        null != t && null == i && o.i6(t);
    }, [t, i]);
    let v = null == i ? void 0 : i.storefront_available,
        [S, N] = l.useState('about'),
        T = l.useMemo(
            () => [
                {
                    id: 'about',
                    label: I.intl.string(I.t.JkjJBQ)
                },
                {
                    id: 'store',
                    label: I.intl.string(I.t.NfuihY)
                }
            ],
            []
        ),
        x = l.useMemo(() => {
            if (null == i) return null;
            switch (S) {
                case 'about':
                    return (0, a.jsx)(g.Z, { application: i });
                case 'store':
                    return null;
            }
        }, [S, i]);
    if (null == i)
        return r === c.M.FETCHING
            ? (0, a.jsx)('div', {
                  className: C.centerContainer,
                  children: (0, a.jsx)(d.Z, { loading: !0 })
              })
            : (0, a.jsx)('div', {
                  className: C.centerContainer,
                  children: (0, a.jsx)(p.Z, { className: C.error })
              });
    let b = 'about' === S;
    return (0, a.jsx)(m.Z, {
        onScroll: n,
        children: (0, a.jsx)(u.Z, {
            children: (0, a.jsxs)('div', {
                className: C.detailContainer,
                children: [
                    (0, a.jsx)(f.Z, { application: i }),
                    (0, a.jsxs)('div', {
                        className: C.contentContainer,
                        children: [
                            (0, a.jsxs)('div', {
                                className: C.contentTabsContainer,
                                children: [
                                    v &&
                                        (0, a.jsx)('div', {
                                            className: C.contentTabs,
                                            children: (0, a.jsx)(h.Z, {
                                                tabs: T,
                                                onTabSelect: N,
                                                selectedTab: S
                                            })
                                        }),
                                    x,
                                    (0, a.jsx)(E.Z, { application: i })
                                ]
                            }),
                            b &&
                                (0, a.jsx)(_.Z, {
                                    className: C.sidebar,
                                    application: i
                                })
                        ]
                    })
                ]
            })
        })
    });
};
