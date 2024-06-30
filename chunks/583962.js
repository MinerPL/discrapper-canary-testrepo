n.d(t, {
    PD: function () {
        return R;
    },
    aR: function () {
        return y;
    }
}), n(47120);
var i = n(735250), l = n(470079), r = n(120356), a = n.n(r), s = n(920906), o = n(91192), c = n(442837), u = n(477690), d = n(481060), h = n(239091), p = n(607070), _ = n(100527), f = n(367907), m = n(906732), g = n(434404), C = n(496675), I = n(259580), E = n(267642), N = n(624138), x = n(667815), S = n(531572), Z = n(26323), v = n(30513), T = n(981631), L = n(689938), A = n(960600);
let b = (0, N.Mg)(u.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY_CONDITIONAL_BOTTOM_MARGIN), M = e => {
        let {
                guild: t,
                onSelect: n
            } = e, [r, a] = l.useState(t.premiumProgressBarEnabled), [s, o] = l.useState(!1), u = (0, c.e7)([C.Z], () => C.Z.can(T.Plq.MANAGE_GUILD, t)), p = async () => {
                if (!!u)
                    o(!0), await g.Z.saveGuild(t.id, { premiumProgressBarEnabled: !r }), a(!r), o(!1);
            };
        return (0, i.jsx)(d.Menu, {
            navId: 'progress-bar-context',
            onClose: h.Zy,
            'aria-label': L.Z.Messages.PROGRESS_BAR_ACTIONS_MENU_LABEL,
            onSelect: n,
            children: (0, i.jsx)(d.MenuCheckboxItem, {
                id: 'progress-bar-enabled',
                label: L.Z.Messages.GUILD_ENABLE_PROGRESS_BAR,
                checked: r,
                disabled: s,
                action: p
            })
        });
    }, R = 57, y = 57 + b, O = {
        tension: 180,
        friction: 80
    };
t.ZP = e => {
    let {
            guild: t,
            withMargin: n
        } = e, {analyticsLocations: r} = (0, m.ZP)(_.Z.GUILD_BOOSTING_SIDEBAR_DISPLAY), {
            premiumSubscriberCount: u,
            id: g
        } = t, N = (0, E.rF)(u, g), b = (0, E.FZ)(N, t.id), R = null == b, y = null != b ? b : N, P = (0, c.e7)([S.Z], () => {
            var e;
            return null !== (e = S.Z.getCountForGuild(g)) && void 0 !== e ? e : 0;
        }), j = (0, c.e7)([p.Z], () => p.Z.useReducedMotion), D = (0, c.e7)([C.Z], () => C.Z.can(T.Plq.MANAGE_GUILD, t));
    l.useEffect(() => {
        P !== u && (0, x.v)(g, u);
    }, [
        g,
        P,
        u
    ]);
    let U = ''.concat(Math.min(100, u / (0, E.vn)(t.id)[y] * 100), '%'), {current: G} = l.useRef(U), w = {
            from: { width: P === u ? G : '0%' },
            to: { width: U },
            config: O,
            immediate: j
        }, [k, B] = (0, s.useSpring)(() => w), V = () => {
            (0, f.yw)(T.rMx.PREMIUM_GUILD_PROMOTION_OPENED, {
                location: { section: T.jXE.PREMIUM_GUILD_PROGRESS_BAR },
                guild_id: g,
                location_stack: r
            }), (0, Z.Z)({
                analyticsLocations: r,
                analyticsSourceLocation: {
                    page: T.ZY5.GUILD_CHANNEL,
                    section: T.jXE.PREMIUM_GUILD_PROGRESS_BAR,
                    object: T.qAy.TOOLTIP
                },
                guild: t,
                perks: (0, v.VF)(),
                perkIntro: L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_UPSELL_MODAL_PROGRESS_BAR_HEADER
            });
        }, H = L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_GOAL.format({ levelName: (0, E.e9)(y) }), F = L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_BLURB.format({
            numBoosts: u,
            numTotal: (0, E.vn)(t.id)[y]
        });
    R && (H = (0, E.e9)(y), F = L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_COMPLETED_BLURB.format({ numBoosts: u }));
    let W = (0, o.JA)('boosts-'.concat(t.id));
    return (0, i.jsx)('li', {
        children: (0, i.jsx)(d.Tooltip, {
            text: R ? L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP_COMPLETE : L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_NUDGE_TOOLTIP.format({ levelName: (0, E.nW)(y) }),
            color: d.Tooltip.Colors.BLACK,
            position: 'top',
            delay: 200,
            hideOnClick: !0,
            children: e => (0, i.jsxs)(d.Clickable, {
                ...W,
                ...e,
                'aria-label': void 0,
                role: 'button',
                focusProps: {
                    offset: {
                        left: 10,
                        right: 4
                    }
                },
                onClick: V,
                onMouseEnter: () => {
                    var t;
                    null === (t = e.onMouseEnter) || void 0 === t || t.call(e), B(w);
                },
                className: a()(A.container, { [A.containerWithMargin]: n }),
                onContextMenu: e => {
                    D && (0, h.vq)(e, e => (0, i.jsx)(M, {
                        ...e,
                        guild: t
                    }));
                },
                children: [
                    (0, i.jsx)(d.HiddenVisually, { children: e['aria-label'] }),
                    (0, i.jsxs)('div', {
                        className: A.textArea,
                        children: [
                            (0, i.jsx)('div', {
                                className: A.goalTextContainer,
                                children: (0, i.jsx)(d.Text, {
                                    className: A.goalText,
                                    color: 'interactive-active',
                                    variant: 'text-xs/bold',
                                    children: H
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: A.progressFraction,
                                children: [
                                    (0, i.jsx)(d.Text, {
                                        color: 'interactive-normal',
                                        variant: 'text-xs/normal',
                                        children: F
                                    }),
                                    (0, i.jsx)(I.Z, {
                                        className: A.count,
                                        height: 16,
                                        width: 16,
                                        direction: I.Z.Directions.RIGHT
                                    })
                                ]
                            })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: a()(A.progressBarContainer, { [A.progressBarContainerComplete]: R }),
                        children: [
                            (0, i.jsx)(s.animated.div, {
                                className: A.progressBar,
                                style: k
                            }),
                            R ? (0, i.jsx)('span', {
                                'aria-label': L.Z.Messages.PREMIUM_GUILD_SUBSCRIPTIONS_PROGRESS_BAR_TADA_ICON_ALT_TEXT,
                                role: 'img',
                                className: A.tadaIcon,
                                children: '\uD83C\uDF89'
                            }) : null
                        ]
                    })
                ]
            })
        })
    });
};
