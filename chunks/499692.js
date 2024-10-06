var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(873199),
    o = n(442837),
    c = n(481060),
    d = n(674588),
    u = n(368862),
    _ = n(125909),
    E = n(857192),
    h = n(797908),
    m = n(292191),
    I = n(253509);
t.Z = function () {
    let e = (0, o.e7)([E.default], () => E.default.appDirectoryIncludesInactiveCollections),
        t = (0, o.e7)([u.Z], () => u.Z.getFetchState({ includesInactive: e })),
        n = (0, o.e7)([u.Z], () => u.Z.getCollections({ includesInactive: e }));
    a.useEffect(() => {
        d.bG({ includesInactive: e });
    }, [e]);
    let s = a.useMemo(() => (null == n ? void 0 : n.filter((e) => e.type !== l.o.GALLERY)), [n]);
    return t === u.M.ERROR
        ? (0, i.jsx)('div', {
              className: I.errorContainer,
              children: (0, i.jsx)(m.Z, { className: I.error })
          })
        : (0, i.jsx)(_.Z, {
              loading: t === u.M.FETCHING,
              children:
                  null == s
                      ? void 0
                      : s.map((e, t) =>
                            (0, i.jsxs)(
                                'div',
                                {
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            className: r()(I.sectionTitle, { [I.titleExtraPadding]: 0 === t }),
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)('div', {
                                            className: I.content,
                                            children: e.application_directory_collection_items.map((e) => {
                                                let { id: t, application: n } = e;
                                                return null == n
                                                    ? null
                                                    : (0, i.jsx)(
                                                          h.Z,
                                                          {
                                                              application: n,
                                                              showCategory: !0
                                                          },
                                                          t
                                                      );
                                            })
                                        })
                                    ]
                                },
                                t
                            )
                        )
          });
};
