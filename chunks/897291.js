var r = n(735250), i = n(470079), a = n(996146), o = n(481060), s = n(100527), l = n(906732), u = n(963249), c = n(147915), d = n(51144), _ = n(981631), E = n(474936), f = n(689938), h = n(573809);
t.Z = i.memo(function (e) {
    let {
            disabled: t,
            channel: n
        } = e, {analyticsLocations: i} = (0, l.ZP)(s.Z.GIFT_BUTTON), p = (0, d.Ft)(n), {
            Component: m,
            events: I,
            play: T
        } = (0, a.$)();
    if (t)
        return null;
    let g = () => (0, u.Z)({
        isGift: !0,
        giftRecipient: null === p ? void 0 : p,
        initialPlanId: null,
        subscriptionTier: E.Si.TIER_2,
        analyticsLocations: i,
        analyticsObject: {
            page: n.isPrivate() ? _.ZY5.DM_CHANNEL : _.ZY5.GUILD_CHANNEL,
            section: _.jXE.CHANNEL_TEXT_AREA,
            object: _.qAy.BUTTON_ICON,
            objectType: _.Qqv.GIFT
        }
    });
    return (0, r.jsx)(o.Tooltip, {
        text: f.Z.Messages.PREMIUM_GIFT_BUTTON_TOOLTIP,
        children: e => (0, r.jsx)(c.Z, {
            ...e,
            innerClassName: h.button,
            isActive: !1,
            'aria-label': f.Z.Messages.PREMIUM_GIFT_BUTTON_LABEL,
            'aria-haspopup': 'dialog',
            onClick: () => {
                g(), T();
            },
            ...I,
            children: (0, r.jsx)(m, { color: 'currentColor' })
        })
    });
});
