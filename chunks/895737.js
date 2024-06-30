n.d(t, {
    Z: function () {
        return C;
    }
});
var r = n(735250), s = n(470079), i = n(481060), o = n(891561), a = n(333866), l = n(689938), c = n(620189);
function d(e) {
    let {
            closePopout: t,
            sortOptionContext: n
        } = e, {
            sortOption: o,
            setSortOption: d,
            onReset: C
        } = n, u = s.useMemo(() => a.kL.map(e => (0, r.jsx)(i.MenuRadioItem, {
            id: ''.concat(e),
            group: 'sort-by',
            label: (0, a.eJ)(e),
            action: () => d(e),
            checked: o === e
        }, e)), [
            d,
            o
        ]);
    return (0, r.jsx)('div', {
        className: c.__invalid_container,
        children: (0, r.jsxs)(i.Menu, {
            navId: 'sort-and-view',
            'aria-label': l.Z.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_ARIA,
            hideScroller: !0,
            onClose: t,
            onSelect: t,
            children: [
                (0, r.jsx)(i.MenuGroup, {
                    label: l.Z.Messages.GUILD_STORE_SORT_OPTION_SELECT_MENU_SORT_BY_LABEL,
                    children: u
                }),
                (0, r.jsx)(i.MenuGroup, {
                    children: (0, r.jsx)(i.MenuItem, {
                        id: 'reset-all',
                        className: c.clearText,
                        label: (0, r.jsx)(i.Text, {
                            variant: 'text-sm/medium',
                            color: 'none',
                            children: l.Z.Messages.FORUM_CHANNEL_RESET_ALL
                        }),
                        action: C
                    })
                })
            ]
        })
    });
}
function C() {
    let e = (0, o.s)(), t = (0, a.eJ)(e.sortOption);
    return (0, r.jsx)(i.Popout, {
        renderPopout: t => {
            let {closePopout: n} = t;
            return (0, r.jsx)(d, {
                closePopout: n,
                sortOptionContext: e
            });
        },
        position: 'bottom',
        align: 'left',
        children: (e, n) => {
            let {isShown: s} = n;
            return (0, r.jsxs)(i.Button, {
                ...e,
                size: i.Button.Sizes.MIN,
                color: i.Button.Colors.CUSTOM,
                className: c.sortDropdown,
                innerClassName: c.sortDropdownInner,
                children: [
                    (0, r.jsx)(i.ArrowsUpDownIcon, {
                        size: 'xs',
                        color: 'currentColor',
                        'aria-label': l.Z.Messages.GUILD_STORE_SORT_OPTION_TOGGLE_ARIA
                    }),
                    (0, r.jsx)(i.Spacer, {
                        size: 8,
                        horizontal: !0
                    }),
                    (0, r.jsx)(i.Text, {
                        variant: 'text-sm/medium',
                        color: 'header-primary',
                        children: t
                    }),
                    s ? (0, r.jsx)(i.ChevronSmallUpIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20
                    }) : (0, r.jsx)(i.ChevronSmallDownIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        width: 20
                    })
                ]
            });
        }
    });
}
