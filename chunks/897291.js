var r = n(735250),
    i = n(470079),
    a = n(996146),
    s = n(481060),
    o = n(100527),
    l = n(906732),
    u = n(963249),
    c = n(51144),
    d = n(443603),
    _ = n(981631),
    E = n(689938),
    f = n(305489);
t.Z = i.memo(function (e) {
    let { disabled: t, channel: n } = e,
        { analyticsLocations: i } = (0, l.ZP)(o.Z.GIFT_BUTTON),
        h = (0, c.Ft)(n),
        { Component: p, events: m, play: I } = (0, a.$)();
    if (t) return null;
    let T = () => {
        (0, u.Z)({
            isGift: !0,
            giftRecipient: null === h ? void 0 : h,
            initialPlanId: null,
            analyticsLocations: i,
            analyticsObject: {
                page: n.isPrivate() ? _.ZY5.DM_CHANNEL : _.ZY5.GUILD_CHANNEL,
                section: _.jXE.CHANNEL_TEXT_AREA,
                object: _.qAy.BUTTON_ICON,
                objectType: _.Qqv.GIFT
            }
        });
    };
    return (0, r.jsx)(s.Tooltip, {
        text: E.Z.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
        children: (e) =>
            (0, r.jsx)(d.Z, {
                ...e,
                innerClassName: f.button,
                isActive: !1,
                'aria-label': E.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
                'aria-haspopup': 'dialog',
                onClick: () => {
                    T(), I();
                },
                ...m,
                children: (0, r.jsx)(p, { color: 'currentColor' })
            })
    });
});
