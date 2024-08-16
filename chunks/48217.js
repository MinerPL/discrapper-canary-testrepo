n.d(t, {
    c: function () {
        return E;
    }
});
var s = n(735250);
n(470079);
var a = n(481060),
    i = n(269128),
    r = n(358555),
    l = n(267642),
    o = n(26323),
    c = n(30513),
    d = n(981631),
    u = n(689938),
    _ = n(651610);
function I(e) {
    let { guild: t, banner: n } = e;
    return (0, s.jsx)('div', {
        className: _.guildBanner,
        style: { backgroundImage: 'url('.concat(n) },
        children: (0, s.jsxs)('div', {
            className: _.guildHeader,
            children: [
                (0, s.jsx)(r.Z, {
                    guild: t,
                    isBannerVisible: !0
                }),
                (0, s.jsx)(a.Heading, {
                    className: _.guildName,
                    variant: 'heading-md/semibold',
                    children: t.toString()
                }),
                (0, s.jsx)(i.Z, {
                    className: _.dropdown,
                    open: !1
                })
            ]
        })
    });
}
function E(e) {
    let { analyticsLocations: t, analyticsLocation: n, guild: a, isGIF: i, banner: r } = e,
        _ = i ? (0, l._p)(d.oNc.ANIMATED_BANNER) : (0, l._p)(d.oNc.BANNER);
    null != _ &&
        (0, o.Z)({
            analyticsLocations: t,
            analyticsSourceLocation: n,
            guild: a,
            headerProps: {
                title: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_TITLE,
                subtitle: (function (e, t) {
                    let n = (0, l.nW)(e);
                    return t ? u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_ANIMATED.format({ targetLevelOrPlan: n }) : u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_SUBTITLE_STATIC.format({ targetLevelOrPlan: n });
                })(_, i),
                image: (0, s.jsx)(I, {
                    guild: a,
                    banner: r
                })
            },
            perkIntro: u.Z.Messages.GUILD_BANNER_UPSELL_MODAL_PERK_INTRO,
            perks: i ? (0, c.zC)() : (0, c.XO)()
        });
}
