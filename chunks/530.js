n.d(t, {
    Z: function () {
        return d;
    }
});
var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(481060), s = n(129861), l = n(228168), u = n(689938), c = n(28738);
function d(e) {
    let {
            user: t,
            profileType: n,
            usernameIcon: i,
            tags: d,
            nickname: _,
            nicknameIcons: E,
            pronouns: f,
            className: h,
            isTryItOut: p,
            onOpenProfile: m,
            nicknameVariant: I = 'heading-lg/bold',
            pronounsVariant: T = 'text-sm/medium'
        } = e, g = {
            [c.biteSize]: n === l.y0.BITE_SIZE,
            [c.fullSize]: n === l.y0.FULL_SIZE,
            [c.panel]: n === l.y0.PANEL
        }, S = e => null == m ? e : (0, r.jsx)(o.Clickable, {
            onClick: m,
            className: c.clickableUsername,
            children: e
        }), A = null != f && f.length > 0;
    return (0, r.jsxs)('div', {
        className: a()(c.container, h),
        children: [
            (0, r.jsxs)('div', {
                className: c.usernameRow,
                children: [
                    S((0, r.jsx)(o.Heading, {
                        className: a()(c.nickname, g),
                        variant: I,
                        children: _
                    })),
                    null != E && (0, r.jsx)('div', {
                        className: a()(c.nicknameIcons, g),
                        children: E
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: a()(c.tags, g, A && c.tagsWithPronouns),
                children: [
                    S((0, r.jsx)(s.Z, {
                        user: t,
                        usernameIcon: i,
                        forceUsername: !0,
                        forcePomelo: p,
                        className: c.userTag,
                        usernameClass: c.userTagUsername,
                        discriminatorClass: c.userTagDiscriminator,
                        botClass: c.botTag
                    })),
                    A && (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)('div', {
                                'aria-hidden': 'true',
                                className: c.dotSpacer
                            }),
                            (0, r.jsx)(o.TooltipContainer, {
                                className: c.pronounsTooltip,
                                text: u.Z.Messages.USER_PROFILE_PRONOUNS,
                                delay: l.vB,
                                children: (0, r.jsx)(o.Text, {
                                    variant: T,
                                    className: c.pronouns,
                                    color: 'header-primary',
                                    children: f
                                })
                            })
                        ]
                    }),
                    d
                ]
            })
        ]
    });
}
