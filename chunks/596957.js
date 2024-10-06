n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(758059),
    d = n(194359),
    u = n(410575),
    _ = n(607070),
    E = n(100527),
    h = n(906732),
    m = n(795448),
    I = n(735778),
    p = n(699516),
    g = n(974042),
    T = n(451478),
    f = n(434184),
    S = n(701861),
    C = n(437314),
    N = n(696577),
    A = n(163417),
    v = n(492347),
    Z = n(42575),
    L = n(617015),
    R = n(981631),
    O = n(689938),
    x = n(522756);
t.Z = function (e) {
    let { sectionFilter: t, titleId: s } = e,
        { analyticsLocations: b } = (0, h.ZP)(E.Z.FRIENDS_LIST),
        { rows: M, section: P } = (0, l.cj)([g.ZP], () => g.ZP.getState()),
        D = (0, l.e7)([T.Z], () => T.Z.isFocused()),
        y = (0, l.e7)([p.Z], () => p.Z.getRelationshipCount()),
        [j, U] = a.useState(() => {
            let e = {};
            for (let t of Object.values(R.pJs)) e[t] = '';
            return e;
        }),
        G = () => {
            (0, o.openModalLazy)(async () => {
                let { default: e } = await n.e('26177').then(n.bind(n, 158524));
                return (t) => (0, i.jsx)(e, { ...t });
            });
        },
        w = a.useCallback(
            (e) => {
                U({
                    ...j,
                    [t]: e
                });
            },
            [j, t]
        ),
        k = a.useCallback(() => {
            U({
                ...j,
                [t]: ''
            });
        }, [j, t]),
        B = (0, I.A)({ location: 'people_list' }) && t === R.pJs.PENDING && M.filter(R.pJs.SPAM).length > 0,
        V = M.filter(t, j[t]);
    if (
        (a.useEffect(() => {
            t === R.pJs.ALL && (0, m.d$)();
        }, [t]),
        0 === V.length && '' === j[t])
    )
        return (0, i.jsx)('div', {
            className: x.emptyStateContainer,
            children: (0, i.jsx)(
                C.Z,
                {
                    type: t,
                    onClick: B
                        ? G
                        : t !== R.pJs.PENDING
                          ? () => {
                                c.Z.setSection(R.pJs.ADD_FRIEND);
                            }
                          : void 0
                },
                P
            )
        });
    let H = [V],
        F = 0 === V.length && '' !== j[t],
        Y = V.filter((e) => e.type === R.OGo.PENDING_INCOMING).length,
        z = t === R.pJs.PENDING && Y > 0 && Y >= L.yf;
    return (0, i.jsx)(h.Gt, {
        value: b,
        children: (0, i.jsxs)(u.Z, {
            section: R.jXE.FRIENDS_LIST,
            children: [
                (0, i.jsx)(o.SearchBar, {
                    className: r()(x.searchBar, F ? x.searchEmptyState : null),
                    query: j[t],
                    onChange: w,
                    onClear: k,
                    size: o.SearchBar.Sizes.MEDIUM
                }),
                (0, i.jsxs)('div', {
                    className: x.sectionTitle,
                    children: [
                        (0, i.jsx)(v.Z, {
                            id: s,
                            title: (function (e, t) {
                                switch (e) {
                                    case R.pJs.ONLINE:
                                        return O.Z.Messages.FRIENDS_ONLINE_HEADER.format({ online: t.toString() });
                                    case R.pJs.PENDING:
                                        return O.Z.Messages.FRIENDS_PENDING_HEADER.format({ count: t.toString() });
                                    case R.pJs.SUGGESTIONS:
                                        return O.Z.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({ count: t.toString() });
                                    case R.pJs.BLOCKED:
                                        return O.Z.Messages.FRIENDS_BLOCKED_HEADER.format({ count: t.toString() });
                                    default:
                                        return O.Z.Messages.FRIENDS_ALL_HEADER.format({ count: t.toString() });
                                }
                            })(t, V.length)
                        }),
                        z &&
                            (0, i.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: x.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: (e) => {
                                    e.stopPropagation(), d.Z.confirmClearPendingRelationships(Y);
                                },
                                'aria-label': O.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
                                children: O.Z.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
                            })
                    ]
                }),
                F
                    ? (0, i.jsx)('div', {
                          className: x.emptyStateContainer,
                          children: (0, i.jsx)(C.Z, { type: C.j.SECTION_NO_RESULTS }, P)
                      })
                    : (0, i.jsx)(A.Z, {
                          relationshipCount: y,
                          statusSections: H,
                          renderRow: function (e) {
                              switch (t) {
                                  case R.pJs.BLOCKED:
                                      return (0, i.jsx)(f.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case R.pJs.PENDING:
                                      return (0, i.jsx)(N.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case R.pJs.SUGGESTIONS:
                                      return (0, i.jsx)(Z.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                                  case R.pJs.ONLINE:
                                  case R.pJs.ALL:
                                  default:
                                      return (0, i.jsx)(S.Z, {
                                          ...e,
                                          isFocused: D
                                      });
                              }
                          },
                          sectionFilter: t,
                          searchQuery: j[t],
                          useReducedMotion: _.Z.useReducedMotion,
                          footer: B
                              ? (0, i.jsx)(o.Button, {
                                    look: o.Button.Looks.LINK,
                                    color: x.viewSpamButtonColor,
                                    className: x.viewSpamButton,
                                    onClick: () => G(),
                                    size: o.ButtonSizes.TINY,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: 'text-xs/medium',
                                        children: O.Z.Messages.FRIEND_REQUESTS_VIEW_SPAM_REQUESTS
                                    })
                                })
                              : null
                      })
            ]
        })
    });
};
