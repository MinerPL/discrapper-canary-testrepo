n.d(t, {
    a: function () {
        return L;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(481060),
    c = n(963202),
    d = n(105671),
    u = n(92373),
    _ = n(570938),
    E = n(377171),
    h = n(207796),
    m = n(308083),
    I = n(689938),
    g = n(630244);
function p(e) {
    let { icon: t, text: n, ariaLabel: s, tooltip: l, onClick: c, isActive: d, autoWidth: u = !1 } = e,
        [_, E] = a.useState(!1),
        [m, I] = a.useState(!1),
        p = h.GN.getState().mode,
        T = p === h.v0.GAMES || p === h.v0.PLAYSTYLE || p === h.v0.TRAITS;
    a.useEffect(() => {
        T && (E(!1), I(!1));
    }, [T]);
    let S = d && (m || _),
        C = a.useMemo(
            () =>
                null != l
                    ? (0, i.jsxs)(o.Clickable, {
                          className: g.tooltipContentWrapper,
                          onClick: c,
                          onMouseEnter: () => {
                              !T && E(!0);
                          },
                          onMouseLeave: () => {
                              E(!1);
                          },
                          children: [(0, i.jsx)('div', { className: g.tooltipHoverBridge }), l]
                      })
                    : null,
            [l, c, T]
        ),
        f = a.useCallback(
            (e) =>
                (0, i.jsxs)(o.Button, {
                    ...e,
                    className: r()(g.filterPill, { [g.filterPillActive]: d }),
                    innerClassName: g.filterPillContents,
                    look: o.ButtonLooks.OUTLINED,
                    color: o.ButtonColors.CUSTOM,
                    onClick: c,
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
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'none',
                                    children: n
                                }),
                                null != C &&
                                    (0, i.jsx)(o.ChevronSmallDownIcon, {
                                        className: g.chevron,
                                        color: 'currentColor'
                                    })
                            ]
                        })
                    ]
                }),
            [t, n, d, c, C]
        );
    return null == C
        ? f({})
        : (0, i.jsx)(o.Tooltip, {
              text: C,
              position: 'bottom',
              'aria-label': s,
              shouldShow: S,
              forceOpen: S,
              allowOverflow: !0,
              disableTooltipPointerEvents: !1,
              tooltipClassName: r()(g.filterTooltip, { [g.filterTooltipAutoWidth]: u }),
              tooltipContentClassName: g.filterTooltipContent,
              children: f
          });
}
function T() {
    var e;
    let t = (0, h.GN)((e) => e.selectedGames, l.Z),
        n = a.useCallback(() => {
            (0, h.fH)(h.v0.GAMES, !0);
        }, []),
        s = null !== (e = (0, d.i)(t)) && void 0 !== e ? e : '',
        r = t.slice(0, 3),
        c = t.length - 3,
        _ = (0, i.jsx)('div', {
            className: g.gamesTooltip,
            children: r.map((e, t) =>
                (0, i.jsx)(
                    u.Z,
                    {
                        applicationId: e,
                        otherGamesCount: 2 === t && c > 0 ? c + 1 : void 0
                    },
                    e
                )
            )
        }),
        E = (0, i.jsx)(o.GameControllerIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(p, {
        icon: E,
        text: I.Z.Messages.CLAN_DISCOVERY_GAME_FILTER.format({ count: t.length }),
        tooltip: _,
        onClick: n,
        isActive: t.length > 0,
        ariaLabel: s,
        autoWidth: !0
    });
}
function S() {
    let e = a.useMemo(m.f4, []),
        t = (0, h.GN)((e) => e.selectedPlaystyle, l.Z),
        n = null != t ? e[t] : null,
        s = null == n ? void 0 : n.title,
        r = a.useCallback(() => {
            (0, h.fH)(h.v0.PLAYSTYLE, !0);
        }, []),
        c =
            null != n
                ? (0, i.jsxs)(i.Fragment, {
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
                  })
                : null,
        d = (0, i.jsx)(o.DpadIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(p, {
        icon: d,
        text: null != s ? s : I.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE,
        tooltip: c,
        onClick: r,
        isActive: null != n,
        ariaLabel: null != s ? s : I.Z.Messages.CLAN_DISCOVERY_ANY_PLAYSTYLE
    });
}
function C() {
    let e = (0, h.GN)((e) => e.selectedTraits, l.Z),
        t = a.useCallback(() => {
            (0, h.fH)(h.v0.TRAITS, !0);
        }, []);
    if (null == e) return null;
    let n = (0, i.jsx)('div', {
            className: g.traitsTooltip,
            children: e.map((e) =>
                (0, i.jsx)(
                    'div',
                    {
                        className: g.trait,
                        children: (0, i.jsx)(o.Text, {
                            variant: 'text-xs/medium',
                            color: 'none',
                            children: e
                        })
                    },
                    e
                )
            )
        }),
        s = (0, i.jsx)(o.TagIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        });
    return (0, i.jsx)(p, {
        icon: s,
        text: I.Z.Messages.CLAN_DISCOVERY_PREFERENCES_FILTER,
        tooltip: n,
        onClick: t,
        isActive: e.length > 0,
        ariaLabel: e.join(', '),
        autoWidth: !0
    });
}
function f(e) {
    let { onClick: t } = e,
        n = (0, h.GN)((e) => e.mode, l.Z),
        a = (0, h.GN)((e) => e.savedGuildIds, l.Z),
        s = (0, i.jsx)(o.HeartIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        }),
        r = (0, i.jsxs)('div', {
            className: g.savedInnerContainer,
            children: [
                I.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                a.length > 0
                    ? (0, i.jsx)(o.NumberBadge, {
                          count: a.length,
                          color: E.Z.INTERACTIVE_ACTIVE,
                          className: g.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(p, {
        icon: s,
        text: r,
        onClick: t,
        isActive: n === h.v0.SAVED_GUILDS,
        ariaLabel: I.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
        autoWidth: !0
    });
}
function N() {
    let e = (0, h.GN)((e) => e.mode, l.Z),
        {
            selectedGames: t,
            selectedPlaystyle: n,
            selectedTraits: s
        } = (0, h.GN)((e) => ({
            selectedGames: e.selectedGames,
            selectedPlaystyle: e.selectedPlaystyle,
            selectedTraits: e.selectedTraits
        })),
        r = t.length + (null != n ? 1 : 0) + s.length,
        c = a.useCallback(() => {
            if (e === h.v0.PREFERENCES) {
                (0, h.fH)(h.v0.DISCOVERY);
                return;
            }
            (0, h.fH)(h.v0.PREFERENCES);
        }, [e]),
        d = (0, i.jsxs)('div', {
            className: g.savedInnerContainer,
            children: [
                I.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
                r > 0
                    ? (0, i.jsx)(o.NumberBadge, {
                          count: r,
                          color: E.Z.INTERACTIVE_ACTIVE,
                          className: g.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(p, {
        icon: (0, i.jsx)(o.FiltersHorizontalIcon, {
            className: g.filterPillIcon,
            color: 'currentColor'
        }),
        text: d,
        onClick: c,
        isActive: r > 0,
        ariaLabel: I.Z.Messages.CLAN_DISCOVERY_PREFERENCES,
        autoWidth: !0
    });
}
function A(e) {
    let { title: t, onNavigateBack: n } = e;
    return null == t
        ? null
        : (0, i.jsxs)('div', {
              className: g.backToDiscovery,
              children: [
                  (0, i.jsx)(o.Clickable, {
                      className: g.backArrow,
                      onClick: n,
                      children: (0, i.jsx)(o.ArrowLargeLeftIcon, { color: 'currentColor' })
                  }),
                  (0, i.jsx)(o.Heading, {
                      variant: 'heading-md/semibold',
                      color: 'none',
                      children: t
                  })
              ]
          });
}
function v(e) {
    let { className: t, onNavigateBack: n } = e;
    return (0, i.jsxs)('div', {
        className: r()(g.toolbar, t),
        children: [
            (0, i.jsx)('div', {
                className: g.backToDiscovery,
                children: (0, i.jsx)(A, {
                    title: I.Z.Messages.CLAN_DISCOVERY_SAVED_GUILDS,
                    onNavigateBack: n
                })
            }),
            (0, i.jsx)('div', { className: g.actions })
        ]
    });
}
function L() {
    return (0, i.jsxs)('div', {
        className: g.guildsIconContainer,
        children: [
            (0, i.jsx)(_.Z, {
                width: 24,
                height: 24
            }),
            (0, i.jsx)(o.Heading, {
                variant: 'heading-md/semibold',
                color: 'header-primary',
                children: I.Z.Messages.CLANS
            })
        ]
    });
}
function Z(e) {
    let { guildIcon: t, className: n } = e,
        s = (0, h.GN)((e) => e.mode, l.Z),
        { enableClanCreation: o } = (0, c.C3)({
            location: 'UnifiedDiscoveryToolbar',
            includeConverted: !0
        }),
        d = (0, h.GN)((e) => e.dismissedPilotAdminNux),
        u = a.useMemo(() => !o || d, [d, o]),
        _ = a.useCallback(() => {
            if (s !== h.v0.SAVED_GUILDS) return (0, h.fH)(h.v0.SAVED_GUILDS);
        }, [s]),
        E = a.useCallback(() => (0, h.fH)(h.v0.DISCOVERY), []);
    return s === h.v0.SAVED_GUILDS
        ? (0, i.jsx)(v, {
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
                          children: [(0, i.jsx)(N, {}), (0, i.jsx)(f, { onClick: _ })]
                      })
              ]
          });
}
t.Z = function (e) {
    let { guildIcon: t, className: n } = e,
        a = (0, h.GN)((e) => e.mode, l.Z);
    return (0, c.iN)('discovery_toolbar')
        ? (0, i.jsx)(Z, {
              guildIcon: t,
              className: n
          })
        : a === h.v0.SAVED_GUILDS
          ? (0, i.jsx)(v, { className: n })
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
                        children: [(0, i.jsx)(T, {}), (0, i.jsx)(S, {}), (0, i.jsx)(C, {})]
                    }),
                    (0, i.jsx)('div', { className: g.actions })
                ]
            });
};
