i.d(n, {
    Z: function () {
        return C;
    }
});
var t = i(735250);
i(470079);
var a = i(120356),
    r = i.n(a),
    o = i(481060),
    l = i(410030),
    s = i(686546),
    c = i(565138),
    d = i(372769),
    u = i(134432),
    _ = i(601964),
    p = i(768581),
    m = i(981631),
    I = i(689938),
    f = i(936404),
    g = i(129512),
    h = i(330065);
function C(e) {
    let { guild: n, className: i, onClick: a } = e,
        C = (0, l.ZP)(),
        v = new _.ZP({
            name: n.name,
            icon: n.icon
        }),
        E = p.ZP.getGuildDiscoverySplashURL({
            id: n.id,
            splash: n.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        x =
            null != E
                ? E
                : (function (e) {
                      switch (e) {
                          case m.BRd.DARK:
                              return g;
                          case m.BRd.LIGHT:
                              return h;
                      }
                  })(C),
        b = p.ZP.getGuildIconURL({
            id: n.id,
            icon: n.icon,
            size: 50
        });
    return (0, t.jsxs)(o.Clickable, {
        className: r()(f.card, i),
        onClick: a,
        'aria-label': I.Z.Messages.APP_DIRECTORY_JOIN_SERVER_LABEL,
        children: [
            (0, t.jsxs)('div', {
                className: f.cardHeader,
                children: [
                    (0, t.jsx)('img', {
                        src: x,
                        alt: '',
                        className: f.splashImage
                    }),
                    (0, t.jsx)('div', {
                        className: f.guildIcon,
                        children: (0, t.jsx)(s.ZP, {
                            mask: s.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, t.jsx)('div', {
                                className: f.iconMask,
                                children: (0, t.jsx)(c.Z, {
                                    className: f.__invalid_icon,
                                    iconSrc: b,
                                    guild: v,
                                    size: c.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, t.jsxs)('div', {
                className: f.cardDetails,
                children: [
                    (0, t.jsxs)('div', {
                        className: f.guildNameWrapper,
                        children: [
                            (0, t.jsx)(d.Z, {
                                className: f.guildBadge,
                                guild: n,
                                tooltipColor: o.Tooltip.Colors.PRIMARY
                            }),
                            (0, t.jsx)(o.Heading, {
                                variant: 'heading-md/semibold',
                                className: f.guildName,
                                children: n.name
                            })
                        ]
                    }),
                    (0, t.jsx)(o.Text, {
                        className: f.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: n.description
                    }),
                    (0, t.jsx)('div', {
                        className: f.memberInfo,
                        children: (0, t.jsxs)('div', {
                            className: f.memberCountWrapper,
                            children: [
                                (0, t.jsx)(o.UserIcon, {
                                    color: 'currentColor',
                                    className: f.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, t.jsx)(o.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: I.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: n.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
