n.d(t, {
    C: function () {
        return p;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(782690),
    o = n(481060),
    c = n(377171),
    d = n(207796),
    u = n(388032),
    h = n(899115);
function m(e) {
    let { icon: t, text: n, ariaLabel: a, tooltip: s, onClick: c, isActive: u, autoWidth: m = !1 } = e,
        [p, g] = r.useState(!1),
        [f, _] = r.useState(!1),
        E = d.GN.getState().mode,
        I = E === d.v0.GAMES || E === d.v0.PLAYSTYLE || E === d.v0.TRAITS;
    r.useEffect(() => {
        I && (g(!1), _(!1));
    }, [I]);
    let C = u && (f || p),
        v = r.useMemo(
            () =>
                null != s
                    ? (0, i.jsxs)(o.Clickable, {
                          className: h.tooltipContentWrapper,
                          onClick: c,
                          onMouseEnter: () => {
                              !I && g(!0);
                          },
                          onMouseLeave: () => {
                              g(!1);
                          },
                          children: [(0, i.jsx)('div', { className: h.tooltipHoverBridge }), s]
                      })
                    : null,
            [s, c, I]
        ),
        S = r.useCallback(
            (e) =>
                (0, i.jsxs)(o.Button, {
                    ...e,
                    className: l()(h.filterPill, { [h.filterPillActive]: u }),
                    innerClassName: h.filterPillContents,
                    look: o.ButtonLooks.OUTLINED,
                    color: o.ButtonColors.CUSTOM,
                    onClick: c,
                    onMouseEnter: () => {
                        _(!0);
                    },
                    onMouseLeave: () => {
                        _(!1);
                    },
                    children: [
                        t,
                        (0, i.jsxs)('div', {
                            className: h.filterPillText,
                            children: [
                                (0, i.jsx)(o.Text, {
                                    variant: 'text-xs/medium',
                                    color: 'none',
                                    children: n
                                }),
                                null != v &&
                                    (0, i.jsx)(o.ChevronSmallDownIcon, {
                                        className: h.chevron,
                                        color: 'currentColor'
                                    })
                            ]
                        })
                    ]
                }),
            [t, n, u, c, v]
        );
    return null == v
        ? S({})
        : (0, i.jsx)(o.Tooltip, {
              text: v,
              position: 'bottom',
              'aria-label': a,
              shouldShow: C,
              forceOpen: C,
              allowOverflow: !0,
              disableTooltipPointerEvents: !1,
              tooltipClassName: l()(h.filterTooltip, { [h.filterTooltipAutoWidth]: m }),
              tooltipContentClassName: h.filterTooltipContent,
              children: S
          });
}
function p() {
    let e = (0, d.GN)((e) => e.mode, s.Z),
        {
            selectedGames: t,
            selectedPlaystyle: n,
            selectedTraits: a
        } = (0, d.GN)((e) => ({
            selectedGames: e.selectedGames,
            selectedPlaystyle: e.selectedPlaystyle,
            selectedTraits: e.selectedTraits
        })),
        l = t.length + (null != n ? 1 : 0) + a.length,
        p = r.useCallback(() => {
            if (e === d.v0.PREFERENCES) {
                (0, d.fH)(d.v0.DISCOVERY);
                return;
            }
            (0, d.fH)(d.v0.PREFERENCES);
        }, [e]),
        g = (0, i.jsxs)('div', {
            className: h.savedInnerContainer,
            children: [
                u.intl.string(u.t.p7WzTU),
                l > 0
                    ? (0, i.jsx)(o.NumberBadge, {
                          count: l,
                          color: c.Z.INTERACTIVE_ACTIVE,
                          className: h.badgeInnerText
                      })
                    : null
            ]
        });
    return (0, i.jsx)(m, {
        icon: (0, i.jsx)(o.FiltersHorizontalIcon, {
            className: h.filterPillIcon,
            color: 'currentColor'
        }),
        text: g,
        onClick: p,
        isActive: l > 0,
        ariaLabel: u.intl.string(u.t.p7WzTU),
        autoWidth: !0
    });
}
