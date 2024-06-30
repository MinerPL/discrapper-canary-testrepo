n(47120);
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(143927), o = n(481060), c = n(963202), d = n(105671), u = n(92373), _ = n(207796), E = n(308083), h = n(689938), I = n(971633);
function m(e) {
    let {
            icon: t,
            text: n,
            ariaLabel: a,
            tooltip: l,
            onClick: c,
            isActive: d,
            autoWidth: u = !1
        } = e, [E, h] = s.useState(!1), [m, p] = s.useState(!1), g = _.GN.getState().mode, T = g === _.v0.GAMES || g === _.v0.PLAYSTYLE || g === _.v0.TRAITS;
    s.useEffect(() => {
        T && (h(!1), p(!1));
    }, [T]);
    let S = d && (m || E), C = s.useMemo(() => (0, i.jsxs)(o.Clickable, {
            className: I.tooltipContentWrapper,
            onClick: c,
            onMouseEnter: () => {
                !T && h(!0);
            },
            onMouseLeave: () => {
                h(!1);
            },
            children: [
                (0, i.jsx)('div', { className: I.tooltipHoverBridge }),
                l
            ]
        }), [
            l,
            c,
            T
        ]);
    return (0, i.jsx)(o.Tooltip, {
        text: C,
        position: 'bottom',
        'aria-label': a,
        shouldShow: S,
        forceOpen: S,
        allowOverflow: !0,
        disableTooltipPointerEvents: !1,
        tooltipClassName: r()(I.filterTooltip, { [I.filterTooltipAutoWidth]: u }),
        tooltipContentClassName: I.filterTooltipContent,
        children: e => (0, i.jsxs)(o.Button, {
            ...e,
            className: r()(I.filterPill, { [I.filterPillActive]: d }),
            innerClassName: I.filterPillContents,
            look: o.ButtonLooks.OUTLINED,
            color: o.ButtonColors.CUSTOM,
            onClick: c,
            onMouseEnter: () => {
                p(!0);
            },
            onMouseLeave: () => {
                p(!1);
            },
            children: [
                t,
                (0, i.jsxs)('div', {
                    className: I.filterPillText,
                    children: [
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children: n
                        }),
                        (0, i.jsx)(o.ChevronSmallDownIcon, {
                            className: I.chevron,
                            color: 'currentColor'
                        })
                    ]
                })
            ]
        })
    });
}
function p() {
    var e;
    let t = (0, _.GN)(e => e.selectedGames, l.Z), n = s.useCallback(() => {
            (0, _.fH)(_.v0.GAMES, !0);
        }, []), a = null !== (e = (0, d.i)(t)) && void 0 !== e ? e : '', r = t.slice(0, 3), c = t.length - 3, E = (0, i.jsx)('div', {
            className: I.gamesTooltip,
            children: r.map((e, t) => (0, i.jsx)(u.Z, {
                applicationId: e,
                otherGamesCount: 2 === t && c > 0 ? c + 1 : void 0
            }, e))
        }), p = (0, i.jsx)(o.GameControllerIcon, {
            className: I.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(m, {
        icon: p,
        text: h.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({ count: t.length }),
        tooltip: E,
        onClick: n,
        isActive: t.length > 0,
        ariaLabel: a,
        autoWidth: !0
    });
}
function g() {
    let e = s.useMemo(E.f4, []), t = (0, _.GN)(e => e.selectedPlaystyle, l.Z), n = null != t ? e[t] : null, a = null == n ? void 0 : n.title, r = s.useCallback(() => {
            (0, _.fH)(_.v0.PLAYSTYLE, !0);
        }, []), c = null != n ? (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(o.Heading, {
                    variant: 'heading-xxl/medium',
                    children: n.emoji
                }),
                (0, i.jsxs)('div', {
                    children: [
                        (0, i.jsx)(o.Heading, {
                            variant: 'heading-md/medium',
                            children: n.title
                        }),
                        (0, i.jsx)(o.Text, {
                            variant: 'text-xs/normal',
                            children: n.subtitle
                        })
                    ]
                })
            ]
        }) : null, d = (0, i.jsx)(o.DpadIcon, {
            className: I.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(m, {
        icon: d,
        text: null != a ? a : h.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
        tooltip: c,
        onClick: r,
        isActive: null != n,
        ariaLabel: null != a ? a : h.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
    });
}
function T() {
    let e = (0, _.GN)(e => e.selectedTraits, l.Z), t = s.useCallback(() => {
            (0, _.fH)(_.v0.TRAITS, !0);
        }, []);
    if (null == e)
        return null;
    let n = (0, i.jsx)('div', {
            className: I.traitsTooltip,
            children: e.map(e => (0, i.jsx)('div', {
                className: I.trait,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'none',
                    children: e
                })
            }, e))
        }), a = (0, i.jsx)(o.TagIcon, {
            className: I.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(m, {
        icon: a,
        text: h.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
        tooltip: n,
        onClick: t,
        isActive: e.length > 0,
        ariaLabel: e.join(', '),
        autoWidth: !0
    });
}
function S() {
    let {enableClanCreation: e} = (0, c.C3)({
        location: 'clan_discovery_add_clan',
        includeConverted: !1
    });
    return e ? (0, i.jsxs)(o.Clickable, {
        className: r()(I.buttonPill),
        onClick: () => (0, _.fH)(_.v0.ADMIN_UPSELL),
        children: [
            (0, i.jsx)(o.PlusSmallIcon, {
                className: I.filterPillIcon,
                color: 'currentColor'
            }),
            (0, i.jsx)('div', {
                className: I.filterPillText,
                children: (0, i.jsx)(o.Text, {
                    variant: 'text-xs/medium',
                    color: 'none',
                    children: h.Z.Messages.CLAN_DISCOVERY_ADD_CLAN
                })
            })
        ]
    }) : null;
}
t.Z = function (e) {
    let {className: t} = e;
    return (0, i.jsxs)('div', {
        className: r()(I.toolbar, t),
        children: [
            (0, i.jsx)('div', {
                className: I.addClan,
                children: (0, i.jsx)(S, {})
            }),
            (0, i.jsxs)('div', {
                className: I.preferences,
                children: [
                    (0, i.jsx)(p, {}),
                    (0, i.jsx)(g, {}),
                    (0, i.jsx)(T, {})
                ]
            }),
            (0, i.jsx)('div', { className: I.actions })
        ]
    });
};
