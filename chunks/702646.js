n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(442837),
    c = n(481060),
    d = n(963202),
    u = n(105671),
    _ = n(92373);
n(570938);
var E = n(377171),
    h = n(229893),
    m = n(207796),
    I = n(308083),
    p = n(689938),
    g = n(899115);
function T(e) {
    let { icon: t, text: n, ariaLabel: s, tooltip: l, onClick: o, isActive: d, autoWidth: u = !1 } = e,
        [_, E] = a.useState(!1),
        [h, I] = a.useState(!1),
        p = m.GN.getState().mode,
        T = p === m.v0.GAMES || p === m.v0.PLAYSTYLE || p === m.v0.TRAITS;
    a.useEffect(() => {
        T && (E(!1), I(!1));
    }, [T]);
    let f = d && (h || _),
        S = a.useMemo(
            () =>
                null != l
                    ? (0, i.jsxs)(c.Clickable, {
                          className: g.tooltipContentWrapper,
                          onClick: o,
                          onMouseEnter: () => {
                              !T && E(!0);
                          },
                          onMouseLeave: () => {
                              E(!1);
                          },
                          children: [(0, i.jsx)('div', { className: g.tooltipHoverBridge }), l]
                      })
                    : null,
            [l, o, T]
        ),
        C = a.useCallback(
            (e) =>
                (0, i.jsxs)(c.Button, {
                    ...e,
                    className: r()(g.filterPill, { [g.filterPillActive]: d }),
                    innerClassName: g.filterPillContents,
                    look: c.ButtonLooks.OUTLINED,
                    color: c.ButtonColors.CUSTOM,
                    onClick: o,
                    onMouseEnter: () => {
                        I(!0);
                    },
                    onMouseLeave: () => {
                        I(!1);
                    },
                    children: [
                        t,
                        (0, i.jsxs)('div', {
                            className: g.filterPillText,
                            children: [
                                (0, i.jsx)(c.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'none',
                                    children: n
                                }),
                                null != S &&
                                    (0, i.jsx)(c.ChevronSmallDownIcon, {
                                        className: g.chevron,
                                        color: 'currentColor'
                                    })
                            ]
                        })
                    ]
                }),
            [t, n, d, o, S]
        );
    return null == S
        ? C({})
        : (0, i.jsx)(c.Tooltip, {
              text: S,
              position: 'bottom',
              'aria-label': s,
              shouldShow: f,
              forceOpen: f,
              allowOverflow: !0,
              disableTooltipPointerEvents: !1,
              tooltipClassName: r()(g.filterTooltip, { [g.filterTooltipAutoWidth]: u }),
              tooltipContentClassName: g.filterTooltipContent,
              children: C
          });
}
function f() {
    var e;
    let t = (0, m.GN)((e) => e.selectedGames, l.Z),
        n = a.useCallback(() => {
            (0, m.fH)(m.v0.GAMES, !0);
        }, []),
        s = null !== (e = (0, u.i)(t)) && void 0 !== e ? e : '',
        r = t.slice(0, 3),
        o = t.length - 3,
        d = (0, i.jsx)('div', {
            className: g.gamesTooltip,
            children: r.map((e, t) =>
                (0, i.jsx)(
                    _.Z,
                    {
                        applicationId: e,
                        otherGamesCount: 2 === t && o > 0 ? o + 1 : void 0
                    },
                    e
                )
            )
        }),
        E = (0, i.jsx)(c.GameControllerIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(T, {
        icon: E,
        text: p.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({ count: t.length }),
        tooltip: d,
        onClick: n,
        isActive: t.length > 0,
        ariaLabel: s,
        autoWidth: !0
    });
}
function S() {
    let e = a.useMemo(I.f4, []),
        t = (0, m.GN)((e) => e.selectedPlaystyle, l.Z),
        n = null != t ? e[t] : null,
        s = null == n ? void 0 : n.title,
        r = a.useCallback(() => {
            (0, m.fH)(m.v0.PLAYSTYLE, !0);
        }, []),
        o =
            null != n
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          (0, i.jsx)(c.Heading, {
                              variant: 'heading-xxl/medium',
                              children: n.emoji
                          }),
                          (0, i.jsxs)('div', {
                              children: [
                                  (0, i.jsx)(c.Heading, {
                                      variant: 'heading-md/medium',
                                      children: n.title
                                  }),
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-xs/normal',
                                      children: n.subtitle
                                  })
                              ]
                          })
                      ]
                  })
                : null,
        d = (0, i.jsx)(c.DpadIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(T, {
        icon: d,
        text: null != s ? s : p.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
        tooltip: o,
        onClick: r,
        isActive: null != n,
        ariaLabel: null != s ? s : p.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
    });
}
function C() {
    let e = (0, m.GN)((e) => e.selectedTraits, l.Z),
        t = a.useCallback(() => {
            (0, m.fH)(m.v0.TRAITS, !0);
        }, []);
    if (null == e) return null;
    let n = (0, i.jsx)('div', {
            className: g.traitsTooltip,
            children: e.map((e) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: g.trait,
                        children: (0, i.jsx)(c.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children: e
                        })
                    },
                    e
                )
            )
        }),
        s = (0, i.jsx)(c.TagIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(T, {
        icon: s,
        text: p.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
        tooltip: n,
        onClick: t,
        isActive: e.length > 0,
        ariaLabel: e.join(', '),
        autoWidth: !0
    });
}
function N(e) {
    let { onClick: t } = e,
        n = (0, m.GN)((e) => e.mode, l.Z),
        a = (0, o.Wu)([h.Z], () => h.Z.getSavedGuilds()),
        s = (0, i.jsx)(c.HeartIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        }),
        r = (0, i.jsxs)('div', {
            className: g.savedInnerContainer,
            children: [
                p.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                a.length > 0
                    ? (0, i.jsx)(c.NumberBadge, {
                          count: a.length,
                          color: E.Z.INTERACTIVE_ACTIVE,
                          className: g.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(T, {
        icon: s,
        text: r,
        onClick: t,
        isActive: n === m.v0.SAVED_GUILDS,
        ariaLabel: p.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
        autoWidth: !0
    });
}
function A() {
    let e = (0, m.GN)((e) => e.mode, l.Z),
        {
            selectedGames: t,
            selectedPlaystyle: n,
            selectedTraits: s
        } = (0, m.GN)((e) => ({
            selectedGames: e.selectedGames,
            selectedPlaystyle: e.selectedPlaystyle,
            selectedTraits: e.selectedTraits
        })),
        r = t.length + (null != n ? 1 : 0) + s.length,
        o = a.useCallback(() => {
            if (e === m.v0.PREFERENCES) {
                (0, m.fH)(m.v0.DISCOVERY);
                return;
            }
            (0, m.fH)(m.v0.PREFERENCES);
        }, [e]),
        d = (0, i.jsxs)('div', {
            className: g.savedInnerContainer,
            children: [
                p.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
                r > 0
                    ? (0, i.jsx)(c.NumberBadge, {
                          count: r,
                          color: E.Z.INTERACTIVE_ACTIVE,
                          className: g.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(T, {
        icon: (0, i.jsx)(c.FiltersHorizontalIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        }),
        text: d,
        onClick: o,
        isActive: r > 0,
        ariaLabel: p.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
        autoWidth: !0
    });
}
function v(e) {
    let { title: t, onNavigateBack: n } = e;
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: g.backToDiscovery,
              children: [
                  (0, i.jsx)(c.Clickable, {
                      className: g.backArrow,
                      onClick: n,
                      children: (0, i.jsx)(c.ArrowLargeLeftIcon, { color: 'currentColor' })
                  }),
                  (0, i.jsx)(c.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'none',
                      children: t
                  })
              ]
          });
}
function Z(e) {
    let { className: t, onNavigateBack: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(g.toolbar, t),
        children: [
            (0, i.jsx)('div', {
                className: g.backToDiscovery,
                children: (0, i.jsx)(v, {
                    title: p.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    onNavigateBack: n
                })
            }),
            (0, i.jsx)('div', { className: g.actions })
        ]
    });
}
function L(e) {
    let { guildIcon: t, className: n } = e,
        s = (0, m.GN)((e) => e.mode, l.Z),
        { enableClanCreation: o } = (0, d.C3)({
            location: 'UnifiedDiscoveryToolbar',
            includeConverted: !0
        }),
        c = (0, m.GN)((e) => e.dismissedPilotAdminNux),
        u = a.useMemo(() => !o || c, [c, o]),
        _ = a.useCallback(() => {
            if (s !== m.v0.SAVED_GUILDS) return (0, m.fH)(m.v0.SAVED_GUILDS);
        }, [s]),
        E = a.useCallback(() => (0, m.fH)(m.v0.DISCOVERY), []);
    return s === m.v0.SAVED_GUILDS
        ? (0, i.jsx)(Z, {
              className: n,
              onNavigateBack: E
          })
        : (0, i.jsxs)('div', {
              className: r()(g.toolbar, n),
              children: [
                  null != t
                      ? (0, i.jsx)('div', {
                            className: g.toolbarIcon,
                            children: t
                        })
                      : null,
                  (0, i.jsx)('div', { className: g.preferences }),
                  u &&
                      (0, i.jsxs)('div', {
                          className: g.actions,
                          children: [(0, i.jsx)(A, {}), (0, i.jsx)(N, { onClick: _ })]
                      })
              ]
          });
}
t.Z = function (e) {
    let { guildIcon: t, className: n } = e,
        a = (0, m.GN)((e) => e.mode, l.Z);
    return (0, d.iN)('discovery_toolbar')
        ? (0, i.jsx)(L, {
              guildIcon: t,
              className: n
          })
        : a === m.v0.SAVED_GUILDS
          ? (0, i.jsx)(Z, { className: n })
          : (0, i.jsxs)('div', {
                className: r()(g.toolbar, n),
                children: [
                    null != t
                        ? (0, i.jsx)('div', {
                              className: g.toolbarIcon,
                              children: t
                          })
                        : null,
                    (0, i.jsxs)('div', {
                        className: g.preferences,
                        children: [(0, i.jsx)(f, {}), (0, i.jsx)(S, {}), (0, i.jsx)(C, {})]
                    }),
                    (0, i.jsx)('div', { className: g.actions })
                ]
            });
};
