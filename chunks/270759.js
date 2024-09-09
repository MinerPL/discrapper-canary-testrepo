n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(266067),
    o = n(873546),
    c = n(442837),
    d = n(481060),
    u = n(570140),
    _ = n(150063),
    E = n(758059),
    h = n(252618),
    m = n(313201),
    I = n(5254),
    g = n(984370),
    p = n(518311),
    T = n(199104),
    S = n(108427),
    C = n(210887),
    f = n(974042),
    N = n(666286),
    A = n(596957),
    v = n(981631),
    L = n(723359),
    Z = n(689938),
    R = n(676277);
function O() {
    return (0, i.jsxs)('div', {
        className: R.inviteToolbar,
        children: [(0, i.jsx)(p.Z, { tooltip: Z.Z.Messages.NEW_GROUP_DM }), (0, i.jsx)(g.Z.Divider, {})]
    });
}
t.Z = function (e) {
    let { initialSection: t } = e,
        n = (0, l.TH)(),
        s = (0, l.k6)();
    a.useEffect(() => {
        'true' === new URLSearchParams(n.search).get('confirm-age') &&
            u.Z.dispatch({
                type: 'AGE_GATE_MODAL_OPEN',
                source: L.L0.DEEP_LINK_PROMPT
            }).then(() => {
                s.replace(v.Z5c.ME);
            });
    }, [s, n]),
        a.useEffect(() => {
            _.Y(v.Z5c.FRIENDS), (0, S.e)('friends');
        }, []),
        a.useEffect(() => {
            null != t && E.Z.setInitialSection(t);
        }, [t]);
    let p = (0, c.e7)([C.Z], () => C.Z.theme),
        { section: x, pendingCount: b } = (0, c.cj)([f.ZP], () => f.ZP.getState()),
        P = (0, c.cj)([I.Z], () => I.Z.getSuggestionCount()),
        M = (e) => {
            E.Z.setSection(e);
        },
        D = (0, m.Dt)(),
        y = (0, m.Dt)();
    return (0, i.jsxs)('main', {
        className: R.container,
        'aria-label': Z.Z.Messages.FRIENDS,
        children: [
            (0, i.jsx)(h.yY, { location: Z.Z.Messages.FRIENDS }),
            (0, i.jsx)(d.ThemeProvider, {
                theme: p,
                children: (e) =>
                    (0, i.jsxs)(g.Z, {
                        className: e,
                        toolbar: (0, i.jsx)(O, {}),
                        scrollable: o.tq,
                        role: 'navigation',
                        'aria-labelledby': D,
                        children: [
                            (0, i.jsx)(g.Z.Icon, {
                                icon: d.FriendsIcon,
                                'aria-hidden': !0
                            }),
                            (0, i.jsx)(g.Z.Title, {
                                id: D,
                                children: Z.Z.Messages.FRIENDS
                            }),
                            (0, i.jsx)(g.Z.Divider, {}),
                            (0, i.jsxs)(d.TabBar, {
                                'aria-label': Z.Z.Messages.FRIENDS,
                                selectedItem: x,
                                type: 'top-pill',
                                onItemSelect: M,
                                className: R.tabBar,
                                children: [
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: v.pJs.ONLINE,
                                        className: R.item,
                                        children: Z.Z.Messages.FRIENDS_SECTION_ONLINE
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: v.pJs.ALL,
                                        className: R.item,
                                        children: Z.Z.Messages.FRIENDS_SECTION_ALL
                                    }),
                                    (0, i.jsxs)(d.TabBar.Item, {
                                        id: v.pJs.PENDING,
                                        className: R.item,
                                        'aria-label': Z.Z.Messages.FRIENDS_SECTION_PENDING,
                                        children: [
                                            Z.Z.Messages.FRIENDS_SECTION_PENDING,
                                            b > 0
                                                ? (0, i.jsx)(d.NumberBadge, {
                                                      count: b,
                                                      className: R.badge
                                                  })
                                                : null
                                        ]
                                    }),
                                    P > 0
                                        ? (0, i.jsxs)(d.TabBar.Item, {
                                              id: v.pJs.SUGGESTIONS,
                                              className: R.item,
                                              'aria-label': Z.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
                                              children: [
                                                  Z.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
                                                  (0, i.jsx)(d.NumberBadge, {
                                                      count: P,
                                                      className: R.badge
                                                  })
                                              ]
                                          })
                                        : null,
                                    (0, i.jsx)(d.TabBar.Item, {
                                        id: v.pJs.BLOCKED,
                                        className: R.item,
                                        children: Z.Z.Messages.BLOCKED
                                    }),
                                    (0, i.jsx)(d.TabBar.Item, {
                                        'aria-label': Z.Z.Messages.FRIENDS_SECTION_ADD_FRIEND,
                                        className: r()(R.item, R.addFriend),
                                        id: v.pJs.ADD_FRIEND,
                                        children: (0, i.jsx)('span', { children: Z.Z.Messages.FRIENDS_SECTION_ADD_FRIEND })
                                    })
                                ]
                            })
                        ]
                    })
            }),
            (0, i.jsxs)('div', {
                className: R.tabBody,
                children: [
                    (0, i.jsx)(d.TabBar.Panel, {
                        id: x,
                        className: R.peopleColumn,
                        'aria-labelledby': y,
                        children:
                            x === v.pJs.ADD_FRIEND
                                ? (0, i.jsx)(N.Z, {})
                                : (0, i.jsx)(A.Z, {
                                      titleId: y,
                                      sectionFilter: x
                                  })
                    }),
                    (0, i.jsx)('div', {
                        className: R.nowPlayingColumn,
                        children: (0, i.jsx)(T.Z, {})
                    })
                ]
            })
        ]
    });
};
