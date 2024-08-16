i.d(t, {
    Z: function () {
        return C;
    }
}),
    i(411104);
var n = i(735250),
    a = i(470079),
    r = i(120356),
    o = i.n(r),
    s = i(873199),
    l = i(442837),
    c = i(857192),
    d = i(674588),
    u = i(368862),
    h = i(927356),
    _ = i(125909),
    p = i(185156),
    m = i(87528),
    g = i(57348),
    f = i(886053);
function C() {
    let e = (0, l.e7)([c.default], () => c.default.appDirectoryIncludesInactiveCollections),
        t = (0, l.e7)([u.Z], () => u.Z.getFetchState({ includesInactive: e })),
        i = (0, l.e7)([u.Z], () => u.Z.getCollections({ includesInactive: e }));
    return (a.useEffect(() => {
        d.bG({ includesInactive: e });
    }, [e]),
    t === u.M.ERROR)
        ? (0, n.jsx)(h.Z, {})
        : (0, n.jsx)(_.Z, {
              loading: t === u.M.FETCHING,
              children:
                  null == i
                      ? void 0
                      : i.map((e, t) => {
                            let a;
                            let r = t > 0 && i[t - 1].type !== s.o.GALLERY;
                            switch (e.type) {
                                case s.o.LIST:
                                    a = (0, n.jsx)(m.Z, { collection: e });
                                    break;
                                case s.o.LIST_WITH_IMAGE:
                                    a = (0, n.jsx)(g.Z, { collection: e });
                                    break;
                                case s.o.GALLERY:
                                    a = (0, n.jsx)(p.Z, { collection: e });
                                    break;
                                default:
                                    return null;
                            }
                            return (0, n.jsx)(
                                'div',
                                {
                                    className: o()({ [f.topMargin]: r }),
                                    children: a
                                },
                                e.id
                            );
                        })
          });
}
