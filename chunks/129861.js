var r = n(735250);
n(470079);
var i = n(120356), a = n.n(i), o = n(442837), s = n(481060), l = n(246946), u = n(467679), c = n(180828), d = n(51144), _ = n(689938), E = n(81364);
function f(e) {
    if (e.isSystemUser())
        return c.J.SYSTEM_DM;
    if (e.isClyde())
        return c.J.AI;
    if (e.bot)
        return c.J.BOT;
    return null;
}
let h = e => {
    let {
        primary: t,
        secondary: n,
        botType: i,
        botVerified: o,
        discriminatorClass: l,
        className: c,
        usernameClass: d,
        color: f,
        botClass: h,
        showStreamerModeTooltip: p
    } = e;
    return (0, r.jsxs)('div', {
        className: a()(E.info, c),
        children: [
            (0, r.jsx)(s.Tooltip, {
                text: _.Z.Messages.STREAMER_MODE_ENABLED,
                shouldShow: p,
                'aria-label': !!p && void 0,
                children: e => (0, r.jsx)('span', {
                    ...e,
                    className: a()(E.__invalid_username, d),
                    style: null != f ? { color: f } : void 0,
                    children: t
                })
            }),
            null != n ? (0, r.jsx)('span', {
                className: a()(E.infoSpacing, l),
                children: n
            }) : void 0,
            null != i && (0, r.jsx)(u.Z, {
                type: i,
                className: a()(E.infoSpacing, h),
                verified: o
            })
        ]
    });
};
t.Z = e => {
    let {
            hideDiscriminator: t = !1,
            user: n,
            nick: i,
            forceUsername: a,
            showAccountIdentifier: s,
            overrideDiscriminator: u,
            forcePomelo: _,
            ...E
        } = e, p = (0, o.e7)([l.Z], () => l.Z.hidePersonalInformation), m = p || t || n.isNonUserBot(), I = n.toString(), T = d.ZP.getName(n), g = a ? I : null != i ? i : T, S = n.isPomelo() || _;
    if (S || g !== I) {
        let e = g === I && S && a ? d.ZP.getUserTag(n, { forcePomelo: _ }) : g, t = s && e !== '@'.concat(I) ? d.ZP.getUserTag(n) : void 0;
        return (0, r.jsx)(h, {
            primary: e,
            secondary: t,
            botVerified: n.isVerifiedBot(),
            botType: f(n),
            showStreamerModeTooltip: p && e !== T,
            ...E
        });
    }
    return (0, r.jsx)(c.Z, {
        name: g,
        botType: f(n),
        botVerified: n.isVerifiedBot(),
        discriminator: m || g !== I ? null : null != u ? u : n.discriminator,
        ...E
    });
};
