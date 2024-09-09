n.d(t, {
    w: function () {
        return C;
    }
});
var i = n(735250),
    s = n(470079),
    a = n(657707),
    r = n(793030),
    l = n(524437),
    o = n(481060),
    c = n(100527),
    u = n(436774),
    d = n(197115),
    _ = n(74538),
    E = n(175006),
    I = n(981631),
    m = n(474936),
    T = n(689938),
    h = n(591047),
    N = n(492764);
function C(e) {
    let { tab: t } = e,
        n = '',
        s = '';
    return (
        t === l.Pr.ALL ? ((n = T.Z.Messages.FOR_LATER_EMPTY_ALL_TITLE), (s = T.Z.Messages.FOR_LATER_EMPTY_ALL_BODY_WEB)) : t === l.Pr.BOOKMARKS ? ((n = T.Z.Messages.FOR_LATER_EMPTY_BOOKMARKS_TITLE), (s = T.Z.Messages.FOR_LATER_EMPTY_BOOKMARKS_BODY_WEB)) : t === l.Pr.REMINDERS && ((n = T.Z.Messages.FOR_LATER_EMPTY_REMINDERS_TITLE), (s = T.Z.Messages.FOR_LATER_EMPTY_REMINDERS_BODY_WEB)),
        (0, i.jsxs)('div', {
            className: h.emptyContainer,
            children: [
                (0, i.jsxs)('div', {
                    className: h.emptyInner,
                    children: [
                        (0, i.jsx)('img', {
                            src: N,
                            className: h.image,
                            alt: ''
                        }),
                        (0, i.jsx)(o.Heading, {
                            className: h.header,
                            variant: 'heading-xl/semibold',
                            color: 'text-muted',
                            children: n
                        }),
                        (0, i.jsx)(r.x, {
                            variant: 'text-md/medium',
                            color: 'text-muted',
                            children: s
                        })
                    ]
                }),
                (0, E.Z)() ? null : (0, i.jsx)(f, {})
            ]
        })
    );
}
function f() {
    let e = (0, _.Px)(m.p9.TIER_2),
        t = s.useCallback(
            () =>
                (0, o.openModalLazy)(async () => {
                    let { default: e } = await n.e('34906').then(n.bind(n, 639565));
                    return (t) =>
                        (0, i.jsx)(e, {
                            source: c.Z.FOR_LATER_POPOUT,
                            ...t
                        });
                }),
            []
        ),
        l = T.Z.Messages.FOR_LATER_PREMIUM_UPSELL.format({
            nitroTierName: e,
            onClick: t
        });
    return (0, i.jsxs)('div', {
        className: h.upsellContainer,
        children: [
            (0, i.jsx)(a.SrA, {
                size: 'md',
                color: u.JX.PREMIUM_TIER_2
            }),
            (0, i.jsx)(r.x, {
                variant: 'text-xs/medium',
                color: 'header-primary',
                className: h.upsellText,
                children: l
            }),
            (0, i.jsx)(d.Z, {
                className: h.upsellButton,
                size: o.ButtonSizes.TINY,
                shinyButtonClassName: h.upsellButton,
                subscriptionTier: m.Si.TIER_2,
                buttonText: T.Z.Messages.FOR_LATER_PREMIUM_UPSELL_CTA,
                premiumModalAnalyticsLocation: { section: I.jXE.FOR_LATER_POPOUT_UPSELL }
            })
        ]
    });
}
