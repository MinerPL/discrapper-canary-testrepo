var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(873199),
    o = n(442837),
    c = n(481060),
    d = n(674588),
    u = n(368862),
    h = n(125909),
    m = n(857192),
    p = n(797908),
    g = n(292191),
    f = n(253509);
t.Z = function (e) {
    let { onSelectApplication: t } = e,
        n = (0, o.e7)([m.default], () => m.default.appDirectoryIncludesInactiveCollections),
        a = (0, o.e7)([u.Z], () => u.Z.getFetchState({ includesInactive: n })),
        _ = (0, o.e7)([u.Z], () => u.Z.getCollections({ includesInactive: n }));
    r.useEffect(() => {
        d.bG({ includesInactive: n });
    }, [n]);
    let E = r.useMemo(() => (null == _ ? void 0 : _.filter((e) => e.type !== s.o.GALLERY)), [_]);
    return a === u.M.ERROR
        ? (0, i.jsx)('div', {
              className: f.errorContainer,
              children: (0, i.jsx)(g.Z, { className: f.error })
          })
        : (0, i.jsx)(h.Z, {
              loading: a === u.M.FETCHING,
              children:
                  null == E
                      ? void 0
                      : E.map((e, n) =>
                            (0, i.jsxs)(
                                'div',
                                {
                                    children: [
                                        (0, i.jsx)(c.Heading, {
                                            className: l()(f.sectionTitle, { [f.titleExtraPadding]: 0 === n }),
                                            variant: 'heading-lg/semibold',
                                            color: 'header-primary',
                                            children: e.title
                                        }),
                                        (0, i.jsx)('div', {
                                            className: f.content,
                                            children: e.application_directory_collection_items.map((e) => {
                                                let { id: n, application: r } = e;
                                                return null == r
                                                    ? null
                                                    : (0, i.jsx)(
                                                          p.Z,
                                                          {
                                                              application: r,
                                                              onSelectApplication: t,
                                                              showCategory: !0
                                                          },
                                                          n
                                                      );
                                            })
                                        })
                                    ]
                                },
                                n
                            )
                        )
          });
};
