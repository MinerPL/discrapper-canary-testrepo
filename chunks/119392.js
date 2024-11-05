n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(239091),
    a = n(782568),
    o = n(570938),
    s = n(951394),
    c = n(749681),
    d = n(572004),
    u = n(63063),
    m = n(931515),
    h = n(981631),
    f = n(49898),
    p = n(128449),
    g = n(388032),
    _ = n(818768),
    C = n(761604);
function E(e) {
    let { gameId: t, onSelect: n } = e;
    return (0, i.jsx)(r.Menu, {
        onSelect: n,
        navId: 'discovery-entrypoint-context-menu',
        'aria-label': g.intl.string(g.t.ogxXGh),
        onClose: l.Zy,
        children: (0, i.jsxs)(r.MenuGroup, {
            children: [
                d.wS &&
                    (0, i.jsx)(r.MenuItem, {
                        id: 'copy',
                        label: g.intl.string(g.t.WqhZsr),
                        icon: r.CopyIcon,
                        action: () => {
                            (0, d.JG)(''.concat(location.protocol, '//').concat(location.host).concat(h.Z5c.DISCOVERY_GUILD_GAME_RESULTS(t)));
                        }
                    }),
                (0, i.jsx)(r.MenuItem, {
                    id: 'learn-more',
                    label: g.intl.string(g.t.hvVgAQ),
                    icon: r.LinkExternalMediumIcon,
                    action: () => {
                        (0, a.Z)(u.Z.getArticleURL(h.BhN.CLANS_FAQ));
                    }
                })
            ]
        })
    });
}
function I(e) {
    let { gameId: t } = e;
    return (0, i.jsx)(s.ZP, {
        className: _.buttonContainer,
        children: (0, i.jsx)(r.Popout, {
            animation: r.Popout.Animation.NONE,
            position: 'bottom',
            spacing: 4,
            align: 'right',
            renderPopout: (e) => {
                let { closePopout: n } = e;
                return (0, i.jsx)(E, {
                    gameId: t,
                    onSelect: n
                });
            },
            children: (e) => {
                let { onClick: t, ...n } = e;
                return (0, i.jsx)(r.Tooltip, {
                    text: g.intl.string(g.t.UKOtz8),
                    hideOnClick: !0,
                    children: (e) => {
                        let { onClick: l, ...a } = e;
                        return (0, i.jsx)(s.zx, {
                            ...n,
                            ...a,
                            onClick: (e) => {
                                e.stopPropagation(), null == l || l(), t(e);
                            },
                            'aria-label': g.intl.string(g.t.UKOtz8),
                            children: (0, i.jsx)(r.MoreHorizontalIcon, {
                                size: 'md',
                                color: 'currentColor',
                                className: _.overflowIcon
                            })
                        });
                    }
                });
            }
        })
    });
}
function x(e) {
    let { gameId: t } = e,
        {
            isLoading: n,
            backgroundImageUrl: l,
            gameName: a
        } = (0, m.kN)(t, {
            coverImageWidth: 600,
            coverImageHeight: 280
        });
    return n
        ? (0, i.jsx)(r.Spinner, { className: _.spinner })
        : null == a
          ? (0, i.jsxs)('div', {
                className: _.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.errorHeader,
                        children: [
                            (0, i.jsx)('div', {
                                className: _.headerContent,
                                children: (0, i.jsx)(r.Heading, {
                                    className: _.title,
                                    variant: 'display-md',
                                    color: 'header-secondary',
                                    children: g.intl.string(g.t.ZDg1eH)
                                })
                            }),
                            (0, i.jsx)('img', {
                                alt: '',
                                src: C,
                                className: _.errorImage
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.content,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: g.intl.string(g.t['yHp/y8'])
                            }),
                            (0, i.jsx)(r.Button, {
                                className: _.button,
                                look: r.Button.Looks.FILLED,
                                size: r.Button.Sizes.MEDIUM,
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: f.F$.SERVERS,
                                        selectedServersTab: p.vf.GUILDS,
                                        entrypoint: p.Qq.EMBED
                                    });
                                },
                                children: g.intl.string(g.t.uPeLWl)
                            })
                        ]
                    })
                ]
            })
          : (0, i.jsxs)('div', {
                className: _.wrapper,
                children: [
                    (0, i.jsxs)('div', {
                        className: _.header,
                        children: [
                            (0, i.jsx)(I, { gameId: t }),
                            (0, i.jsx)('div', {
                                className: _.splashWrapper,
                                children: (0, i.jsx)('div', {
                                    className: _.splash,
                                    style: { backgroundImage: 'url("'.concat(l, '")') }
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: _.headerContent,
                                children: [
                                    (0, i.jsxs)(r.Text, {
                                        className: _.label,
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: [(0, i.jsx)(o.Z, { className: _.icon }), g.intl.string(g.t.KH2azs)]
                                    }),
                                    (0, i.jsx)(r.Heading, {
                                        className: _.title,
                                        variant: 'display-md',
                                        color: 'header-secondary',
                                        children: g.intl.format(g.t.DOeucH, { gameName: a })
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: _.content,
                        children: [
                            (0, i.jsx)(r.Text, {
                                variant: 'text-sm/normal',
                                color: 'text-normal',
                                children: g.intl.format(g.t['34PBmJ'], { gameName: a })
                            }),
                            (0, i.jsx)(r.Button, {
                                className: _.button,
                                look: r.Button.Looks.FILLED,
                                size: r.Button.Sizes.MEDIUM,
                                color: r.Button.Colors.BRAND,
                                onClick: () => {
                                    (0, c.transitionToGlobalDiscovery)({
                                        tab: f.F$.SERVERS,
                                        selectedServersTab: p.vf.GUILDS,
                                        entrypoint: p.Qq.EMBED,
                                        extra: { search: '?game='.concat(t) }
                                    });
                                },
                                children: g.intl.string(g.t['7R5eKi'])
                            })
                        ]
                    })
                ]
            });
}
