n.d(t, {
    Z: function () {
        return g;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    l = n(129861),
    u = n(906732),
    c = n(406943),
    d = n(385499),
    f = n(954138),
    _ = n(979264),
    h = n(228168),
    p = n(388032),
    m = n(543337);
function g(e) {
    let { user: t, profileType: n, usernameIcon: a, tags: g, nickname: E, nicknameIcons: v, pronouns: I, className: S, isTryItOut: T, onOpenProfile: b, nicknameVariant: y = 'heading-lg/bold', pronounsVariant: A = 'text-sm/medium' } = e,
        { newestAnalyticsLocation: N } = (0, u.ZP)(),
        C = {
            [m.biteSize]: n === h.y0.BITE_SIZE,
            [m.fullSize]: n === h.y0.FULL_SIZE,
            [m.panel]: n === h.y0.PANEL
        },
        R = (e) =>
            null == b
                ? e
                : (0, r.jsx)(o.Clickable, {
                      onClick: b,
                      className: m.clickableUsername,
                      children: e
                  }),
        O = null != I && I.length > 0,
        D = (0, c.D)(t),
        L = (0, f.Z)('UserProfileUsername'),
        x = i.useMemo(
            () => ({
                source: N,
                tagUserId: t.id
            }),
            [N, t.id]
        );
    return (0, r.jsxs)('div', {
        className: s()(m.container, { [m.bot]: null != D }, S),
        children: [
            (0, r.jsxs)('div', {
                className: m.usernameRow,
                children: [
                    R(
                        (0, r.jsx)(o.Heading, {
                            className: s()(m.nickname, C),
                            variant: y,
                            children: E
                        })
                    ),
                    null != D &&
                        (0, r.jsx)(d.Z, {
                            type: D,
                            verified: t.isVerifiedBot()
                        }),
                    null != v &&
                        (0, r.jsx)('div', {
                            className: s()(m.nicknameIcons, C),
                            children: v
                        })
                ]
            }),
            (0, r.jsxs)('div', {
                className: s()(m.tags, C, {
                    [m.pronouns]: O,
                    [m.bot]: null != D
                }),
                children: [
                    R(
                        (0, r.jsx)(l.Z, {
                            user: t,
                            usernameIcon: a,
                            forceUsername: !0,
                            forcePomelo: T,
                            className: m.userTag,
                            usernameClass: m.userTagUsername,
                            discriminatorClass: m.userTagDiscriminator,
                            hideBotTag: !0
                        })
                    ),
                    O &&
                        (0, r.jsxs)(r.Fragment, {
                            children: [
                                (0, r.jsx)('div', {
                                    'aria-hidden': 'true',
                                    className: m.dotSpacer
                                }),
                                (0, r.jsx)(o.TooltipContainer, {
                                    className: m.pronounsTooltip,
                                    text: p.intl.string(p.t.GI2A8P),
                                    delay: h.vB,
                                    children: (0, r.jsx)(o.Text, {
                                        variant: A,
                                        className: m.pronounsText,
                                        color: 'header-primary',
                                        children: I
                                    })
                                })
                            ]
                        }),
                    L &&
                        (0, r.jsx)(_.ZP, {
                            userId: t.id,
                            profileViewedAnalytics: x,
                            containerClassName: m.clanTagContainer,
                            className: m.clanTag
                        }),
                    g
                ]
            })
        ]
    });
}
