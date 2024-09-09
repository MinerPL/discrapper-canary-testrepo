n(653041), n(47120);
var t = n(735250),
    a = n(470079),
    l = n(120356),
    r = n.n(l),
    i = n(780384),
    o = n(481060),
    c = n(410030),
    d = n(355932),
    u = n(984370),
    I = n(669405),
    E = n(889711),
    _ = n(246364),
    T = n(689938),
    m = n(859955);
let R = (e) => {
        let { tabs: s, selectedTab: n, onTabSelect: a, onClose: l } = e;
        return (0, t.jsx)(o.Menu, {
            navId: 'member-applications-tabs-overflow-menu',
            'aria-label': T.Z.Messages.GLOBAL_DISCOVERY_MORE_MENU_A11Y,
            hideScroller: !0,
            onClose: l,
            onSelect: l,
            children: (0, t.jsx)(
                o.MenuGroup,
                {
                    children: s.map((e) => {
                        let { id: s, label: l } = e;
                        return (0, t.jsx)(
                            o.MenuItem,
                            {
                                id: s,
                                label: l,
                                icon: s === n ? o.CircleCheckIcon : void 0,
                                action: () => a(s)
                            },
                            s
                        );
                    })
                },
                'applications-overflow-tabs'
            )
        });
    },
    M = (e, s, n) => {
        let t = [];
        return (
            e &&
                t.push({
                    id: 'REVIEW_APPLICATION',
                    label: T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REVIEW_APPLICATION_TITLE
                }),
            s &&
                (t.push({
                    id: _.wB.SUBMITTED,
                    label: 0 === n ? T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING : T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_PENDING_COUNT.format({ count: n })
                }),
                t.push({
                    id: _.wB.APPROVED,
                    label: T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_APPROVED
                }),
                t.push({
                    id: _.wB.REJECTED,
                    label: T.Z.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REJECTED
                })),
            t
        );
    };
function N(e) {
    let { onTabSelect: s, tabs: n, selectedTab: l } = e,
        d = (0, c.ZP)(),
        u = (0, i.wj)(d),
        I = a.useMemo(
            () =>
                null !=
                n.find((e) => {
                    let { id: s } = e;
                    return s === l;
                }),
            [l, n]
        ),
        E = I ? 'header-primary' : u ? 'text-muted' : 'header-primary',
        _ = I ? o.tokens.colors.HEADER_PRIMARY : u ? o.tokens.colors.TEXT_MUTED : o.tokens.colors.HEADER_PRIMARY;
    return (0, t.jsx)(o.Popout, {
        renderPopout: (e) => {
            let { closePopout: a } = e;
            return (0, t.jsx)(R, {
                selectedTab: l,
                onClose: a,
                tabs: n,
                onTabSelect: s
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, s) => {
            let { isShown: n } = s;
            return (0, t.jsxs)(o.TabBar.Item, {
                ...e,
                id: 'more',
                color: 'text-muted',
                className: r()(m.more, { [m.selected]: I }),
                'aria-label': T.Z.Messages.MORE,
                children: [
                    (0, t.jsx)(o.Text, {
                        variant: 'text-md/medium',
                        color: E,
                        children: T.Z.Messages.MORE
                    }),
                    n
                        ? (0, t.jsx)(o.ChevronSmallUpIcon, {
                              size: 'sm',
                              color: _
                          })
                        : (0, t.jsx)(o.ChevronSmallDownIcon, {
                              size: 'sm',
                              color: _
                          })
                ]
            });
        }
    });
}
s.Z = function (e) {
    let { pendingGuildJoinRequestsTotal: s, currentTab: n, onTabItemSelect: l, showSetupTab: r, canActionJoinRequests: i, isSidebarOpen: c } = e,
        [_, R] = a.useState(0),
        C = a.useRef(null),
        x = a.useRef(_),
        h = M(r, i, s),
        {
            lastVisibleIndex: A,
            onItemLayout: b,
            overflowItemsRef: S
        } = (0, d.zP)({
            items: h,
            itemGapPx: 16,
            maxLines: 1,
            containerWidth: _ - 400
        }),
        j = a.useMemo(() => h.slice(0, A + 1), [A, h]),
        P = a.useMemo(() => h.slice(A + 1), [A, h]),
        p = a.useCallback(() => {
            var e;
            let s = null === (e = C.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
            null != s && x.current !== s.width && (R(s.width), (x.current = s.width));
        }, []);
    return (
        a.useEffect(() => {
            let e = (0, E.pP)(p);
            return (0, E.YP)(e, document.body), () => (0, E.UC)(e, document.body);
        }, [p]),
        a.useEffect(() => {
            p();
        }, [p, c]),
        (0, t.jsx)('div', {
            ref: C,
            children: (0, t.jsxs)(u.Z, {
                hideSearch: !0,
                toolbar: (0, t.jsx)('div', {}),
                children: [
                    (0, t.jsx)(u.Z.Icon, {
                        icon: (0, o.makeIconCompat)(I.Z),
                        disabled: !0,
                        'aria-label': T.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                    }),
                    (0, t.jsx)(u.Z.Title, {
                        className: m.title,
                        children: T.Z.Messages.MEMBER_VERIFICATION_MEMBER_APPLICATIONS
                    }),
                    (0, t.jsx)(u.Z.Divider, { className: m.divider }),
                    (0, t.jsxs)('div', {
                        className: m.container,
                        children: [
                            (0, t.jsxs)('div', {
                                className: m.measurements,
                                children: [
                                    h.map((e, s) =>
                                        (0, t.jsx)(
                                            d.AJ,
                                            {
                                                index: s,
                                                onItemLayout: b,
                                                children: (0, t.jsx)(o.TabBar.Item, {
                                                    id: e.id,
                                                    'aria-label': e.label,
                                                    children: e.label
                                                })
                                            },
                                            e.id
                                        )
                                    ),
                                    (0, t.jsx)('div', {
                                        ref: S,
                                        children: (0, t.jsx)(N, {
                                            tabs: P,
                                            onTabSelect: l,
                                            selectedTab: n
                                        })
                                    })
                                ]
                            }),
                            (0, t.jsxs)(o.TabBar, {
                                'aria-label': T.Z.Messages.FRIENDS,
                                selectedItem: n,
                                type: 'top-pill',
                                onItemSelect: l,
                                children: [
                                    j.map((e) =>
                                        (0, t.jsx)(
                                            o.TabBar.Item,
                                            {
                                                id: e.id,
                                                'aria-label': e.label,
                                                children: e.label
                                            },
                                            e.id
                                        )
                                    ),
                                    0 !== P.length
                                        ? (0, t.jsx)(N, {
                                              tabs: P,
                                              onTabSelect: l,
                                              selectedTab: n
                                          })
                                        : null
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    );
};
