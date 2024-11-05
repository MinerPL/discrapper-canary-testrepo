n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(529103),
    d = n(194359),
    u = n(410575),
    h = n(607070),
    m = n(100527),
    p = n(906732),
    g = n(795448),
    f = n(735778),
    _ = n(699516),
    E = n(974042),
    I = n(451478),
    C = n(434184),
    v = n(701861),
    S = n(437314),
    N = n(696577),
    T = n(163417),
    x = n(492347),
    b = n(42575),
    A = n(617015),
    Z = n(981631),
    y = n(388032),
    L = n(522756);
t.Z = function (e) {
    let { sectionFilter: t, titleId: a } = e,
        { analyticsLocations: R } = (0, p.ZP)(m.Z.FRIENDS_LIST),
        { rows: P, section: O } = (0, s.cj)([E.ZP], () => E.ZP.getState()),
        j = (0, s.e7)([I.Z], () => I.Z.isFocused()),
        D = (0, s.e7)([_.Z], () => _.Z.getRelationshipCount()),
        [M, w] = r.useState(() => {
            let e = {};
            for (let t of Object.values(Z.pJs)) e[t] = '';
            return e;
        }),
        k = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('26177').then(n.bind(n, 158524));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        U = r.useCallback(
            (e) => {
                w({
                    ...M,
                    [t]: e
                });
            },
            [M, t]
        ),
        G = r.useCallback(() => {
            w({
                ...M,
                [t]: ''
            });
        }, [M, t]),
        B = (0, f.A)({ location: 'people_list' }) && t === Z.pJs.PENDING && P.filter(Z.pJs.SPAM).length > 0,
        H = P.filter(t, M[t]);
    if (
        (r.useEffect(() => {
            t === Z.pJs.ALL && (0, g.d$)();
        }, [t]),
        0 === H.length && '' === M[t])
    )
        return (0, i.jsx)('div', {
            className: L.emptyStateContainer,
            children: (0, i.jsx)(
                S.Z,
                {
                    type: t,
                    onClick: B
                        ? k
                        : t !== Z.pJs.PENDING
                          ? () => {
                                c.Z.setSection(Z.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                O
            )
        });
    let V = [H],
        F = 0 === H.length && '' !== M[t],
        z = H.filter((e) => e.type === Z.OGo.PENDING_INCOMING).length,
        Y = t === Z.pJs.PENDING && z > 0 && z >= A.yf;
    return (0, i.jsx)(p.Gt, {
        value: R,
        children: (0, i.jsxs)(u.Z, {
            section: Z.jXE.FRIENDS_LIST,
            children: [
                (0, i.jsx)(o.SearchBar, {
                    className: l()(L.searchBar, F ? L.searchEmptyState : null),
                    query: M[t],
                    onChange: U,
                    onClear: G,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: L.sectionTitle,
                    children: [
                        (0, i.jsx)(x.Z, {
                            id: a,
                            title: (function (e, t) {
                                switch (e) {
                                    case Z.pJs.ONLINE:
                                        return y.intl.formatToPlainString(y.t.BagU2d, { online: t.toString() });
                                    case Z.pJs.PENDING:
                                        return y.intl.formatToPlainString(y.t.XIpar6, { count: t.toString() });
                                    case Z.pJs.SUGGESTIONS:
                                        return y.intl.formatToPlainString(y.t['DYMZ/v'], { count: t.toString() });
                                    case Z.pJs.BLOCKED:
                                        return y.intl.formatToPlainString(y.t.M83kKy, { count: t.toString() });
                                    default:
                                        return y.intl.formatToPlainString(y.t.rHRrhI, { count: t.toString() });
                                }
                            })(t, H.length)
                        }),
                        Y &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: L.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(z);
                                },
                                'aria-label': y.intl.string(y.t.T3uOb2),
                                children: y.intl.string(y.t.T3uOb2)
                            })
                    ]
                }),
                F
                    ? (0, i.jsx)('div', {
                          className: L.emptyStateContainer,
                          children: (0, i.jsx)(S.Z, { type: S.j.SECTION_NO_RESULTS }, O)
                      })
                    : (0, i.jsx)(T.Z, {
                          relationshipCount: D,
                          statusSections: V,
                          renderRow: function (e) {
                              switch (t) {
                                  case Z.pJs.BLOCKED:
                                      return (0, i.jsx)(C.Z, {
                                          ...e,
                                          isFocused: j
                                      });
                                  case Z.pJs.PENDING:
                                      return (0, i.jsx)(N.Z, {
                                          ...e,
                                          isFocused: j
                                      });
                                  case Z.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(b.Z, {
                                          ...e,
                                          isFocused: j
                                      });
                                  case Z.pJs.ONLINE:
                                  case Z.pJs.ALL:
                                  default:
                                      let { key: n, ...r } = e;
                                      return (0, i.jsx)(
                                          v.Z,
                                          {
                                              ...r,
                                              isFocused: j
                                          },
                                          n
                                      );
                              }
                          },
                          sectionFilter: t,
                          searchQuery: M[t],
                          useReducedMotion: h.Z.useReducedMotion,
                          footer: B
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: L.viewSpamButtonColor,
                                    className: L.viewSpamButton,
                                    onClick: () => k(),
                                    size: o.ButtonSizes.TINY,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        children: y.intl.string(y.t.rXl8fn)
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
