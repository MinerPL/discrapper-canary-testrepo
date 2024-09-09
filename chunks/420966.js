n.d(t, {
    V: function () {
        return T;
    },
    Z: function () {
        return m;
    }
}),
    n(47120);
var s = n(735250),
    a = n(470079),
    i = n(442837),
    r = n(481060),
    l = n(239091),
    o = n(605436),
    c = n(741247),
    d = n(243730),
    u = n(852898),
    _ = n(203377),
    I = n(689938),
    E = n(4916);
function T() {
    let [e, t] = a.useState(!0);
    return {
        scrolledToTop: e,
        handleScroll: function (e) {
            t(0 === e.currentTarget.scrollTop);
        }
    };
}
function m(e) {
    let { guild: t, role: T, selectedSection: m, setSelectedSection: N } = e,
        S = a.useCallback(
            (e) => {
                N(e);
            },
            [N]
        ),
        h = (0, i.e7)(
            [d.Z],
            () => {
                var e;
                return null === (e = d.Z.getRoleMemberCount(t.id)) || void 0 === e ? void 0 : e[T.id];
            },
            [T.id, t.id]
        ),
        g = (0, o.pM)(t.id, T.id),
        C = (0, u.Z)(T);
    a.useEffect(() => {
        g && N(_.ZI.PERMISSIONS);
    }, [g, N]);
    let x = (0, c.useHasGuildRoleItems)(t, T);
    return (0, s.jsxs)(s.Fragment, {
        children: [
            (0, s.jsxs)('div', {
                className: E.titleContainer,
                children: [
                    (0, s.jsx)(r.Text, {
                        className: E.titleText,
                        color: 'header-primary',
                        variant: 'text-md/semibold',
                        children: I.Z.Messages.ROLE_EDIT_TITLE_WITH_NAME.format({ roleName: T.name })
                    }),
                    x
                        ? (0, s.jsx)(r.Clickable, {
                              className: E.menu,
                              onClick: function (e) {
                                  (0, l.jW)(e, async () => {
                                      let { default: e } = await Promise.resolve().then(n.bind(n, 741247));
                                      return (n) =>
                                          (0, s.jsx)(e, {
                                              ...n,
                                              guild: t,
                                              role: T
                                          });
                                  });
                              },
                              'aria-label': I.Z.Messages.MORE_OPTIONS,
                              children: (0, s.jsx)(r.MoreHorizontalIcon, {
                                  size: 'md',
                                  color: 'currentColor'
                              })
                          })
                        : null
                ]
            }),
            null != C
                ? (0, s.jsx)(r.HelpMessage, {
                      messageType: r.HelpMessageTypes.WARNING,
                      children: C
                  })
                : null,
            (0, s.jsxs)(r.TabBar, {
                className: E.tabBar,
                'aria-label': I.Z.Messages.OPTIONS,
                selectedItem: m,
                type: 'top',
                look: 'brand',
                onItemSelect: S,
                children: [
                    (0, s.jsx)(r.TabBar.Item, {
                        className: E.tabBarItem,
                        id: _.ZI.DISPLAY,
                        disabled: g,
                        children: I.Z.Messages.ROLE_EDIT_TAB_DISPLAY
                    }),
                    (0, s.jsx)(r.TabBar.Item, {
                        className: E.tabBarItem,
                        id: _.ZI.PERMISSIONS,
                        children: I.Z.Messages.ROLE_EDIT_TAB_PERMISSIONS
                    }),
                    (0, s.jsx)(r.TabBar.Item, {
                        className: E.tabBarItem,
                        id: _.ZI.VERIFICATIONS,
                        disabled: g,
                        children: I.Z.Messages.ROLE_EDIT_TAB_VERIFICATION
                    }),
                    (0, s.jsx)(r.TabBar.Item, {
                        className: E.tabBarItem,
                        id: _.ZI.MEMBERS,
                        disabled: g,
                        children: g ? I.Z.Messages.ROLE_EDIT_TAB_MANAGE_MEMBERS : I.Z.Messages.ROLE_EDIT_TAB_MEMBERS_WITH_LIST.format({ numMembers: String(h) })
                    })
                ]
            })
        ]
    });
}
