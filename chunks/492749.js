s.d(t, {
    Z: function () {
        return T;
    }
}), s(47120);
var a, n, l = s(735250), i = s(470079), o = s(120356), r = s.n(o), c = s(442837), d = s(481060), u = s(285952), m = s(346656), C = s(273387), _ = s(16853), x = s(689938), E = s(237951), I = s(36705), L = s(216019);
function f(e) {
    let {
        guild: t,
        onClick: s
    } = e;
    return (0, l.jsxs)(d.Clickable, {
        className: E.clickableGuildRow,
        onClick: s,
        children: [
            (0, l.jsx)(m.Z, {
                guild: t,
                size: m.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, l.jsx)(d.Text, {
                className: E.guildName,
                variant: 'text-md/semibold',
                children: t.name
            }),
            (0, l.jsx)('img', {
                className: E.__invalid_arrow,
                alt: '',
                src: L
            })
        ]
    });
}
function h(e) {
    let {
            directoryChannelId: t,
            guild: s
        } = e, a = (0, c.e7)([C.Z], () => C.Z.getDirectoryEntry(t, s.id));
    return (0, l.jsxs)('div', {
        className: E.guildRow,
        children: [
            (0, l.jsx)(m.Z, {
                guild: s,
                size: m.Z.Sizes.MEDIUM,
                active: !0
            }),
            (0, l.jsx)(d.Text, {
                className: E.guildName,
                variant: 'text-md/normal',
                children: s.name
            }),
            (0, l.jsx)(_.Z, {
                entry: a,
                forceLightTheme: !0,
                children: e => (0, l.jsx)(d.MoreHorizontalIcon, {
                    size: 'md',
                    color: 'currentColor',
                    ...e,
                    className: E.overflowIcon
                })
            })
        ]
    });
}
function T(e) {
    let t, {
            directoryChannelId: s,
            onClose: a,
            onGuildChosen: n,
            handleChooseCreate: o,
            directoryGuildName: c,
            availableGuilds: m,
            addedGuilds: C,
            loading: _
        } = e, [L, T] = i.useState(0);
    return t = _ ? (0, l.jsx)('div', {
        className: E.emptyContainer,
        children: (0, l.jsx)(d.Spinner, {})
    }) : 0 === L ? 0 === m.length ? (0, l.jsxs)('div', {
        className: E.emptyContainer,
        children: [
            (0, l.jsx)('img', {
                src: I,
                alt: '',
                className: E.emptyImage
            }),
            (0, l.jsx)(d.Text, {
                className: E.emptyText,
                color: 'header-secondary',
                variant: 'text-md/normal',
                children: x.Z.Messages.HUB_CHOOSE_GUILD_EMPTY
            })
        ]
    }) : m.map(e => (0, l.jsx)(f, {
        guild: e,
        onClick: () => n(e)
    }, e.id)) : 0 === C.length ? (0, l.jsxs)('div', {
        className: E.emptyContainer,
        children: [
            (0, l.jsx)('img', {
                src: I,
                alt: '',
                className: E.emptyImage
            }),
            (0, l.jsx)(d.Text, {
                className: E.emptyText,
                color: 'header-secondary',
                variant: 'text-md/normal',
                children: x.Z.Messages.HUB_CHOOSE_GUILD_ADDED_EMPTY
            })
        ]
    }) : C.map(e => (0, l.jsx)(h, {
        directoryChannelId: s,
        guild: e
    }, e.id)), (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsxs)(d.ModalHeader, {
                direction: u.Z.Direction.VERTICAL,
                className: E.header,
                separator: !1,
                children: [
                    null != a && (0, l.jsx)(d.ModalCloseButton, {
                        className: E.closeButton,
                        onClick: a
                    }),
                    (0, l.jsx)(d.Heading, {
                        className: E.title,
                        variant: 'heading-xl/semibold',
                        children: x.Z.Messages.HUB_CHOOSE_GUILD_TITLE.format({ guildName: c })
                    }),
                    (0, l.jsx)(d.Text, {
                        className: E.subtitle,
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        children: x.Z.Messages.HUB_CHOOSE_GUILD_SUBTITLE
                    }),
                    (0, l.jsxs)(d.TabBar, {
                        className: E.tabBar,
                        selectedItem: L,
                        onItemSelect: T,
                        type: 'top',
                        look: 'brand',
                        children: [
                            (0, l.jsx)(d.TabBar.Item, {
                                className: r()(E.tabBarItem, { [E.selectedTab]: 0 === L }),
                                id: 0,
                                children: x.Z.Messages.HUB_CHOOSE_GUILD_CHOOSE_TAB
                            }),
                            (0, l.jsx)(d.TabBar.Item, {
                                className: r()(E.tabBarItem, { [E.selectedTab]: 1 === L }),
                                id: 1,
                                children: x.Z.Messages.HUB_CHOOSE_GUILD_ADDED_TAB
                            })
                        ]
                    })
                ]
            }),
            (0, l.jsx)(d.ModalContent, {
                className: E.guildList,
                paddingFix: !1,
                children: t
            }),
            (0, l.jsxs)(d.ModalFooter, {
                className: E.footer,
                children: [
                    (0, l.jsx)(d.Heading, {
                        variant: 'heading-lg/semibold',
                        className: E.footerTitle,
                        children: x.Z.Messages.HUB_CREATE_GUILD_LABEL
                    }),
                    (0, l.jsx)(d.Button, {
                        className: E.footerButton,
                        color: d.Button.Colors.PRIMARY,
                        onClick: o,
                        children: x.Z.Messages.HUB_CREATE_GUILD_CTA
                    })
                ]
            })
        ]
    });
}
(n = a || (a = {}))[n.AVAILABLE = 0] = 'AVAILABLE', n[n.ADDED = 1] = 'ADDED';
