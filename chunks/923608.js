var i = n(735250),
    a = n(470079),
    s = n(704215),
    r = n(605236),
    l = n(150340),
    o = n(434404),
    c = n(626135),
    d = n(428695),
    u = n(981631),
    _ = n(921944),
    E = n(689938);
t.Z = (e) => {
    let { guild: t, markAsDismissed: n } = e;
    a.useEffect(() => {
        (0, r.kk)(s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE);
    }, []);
    let h = a.useCallback(() => {
            o.Z.open(t.id, u.pNK.ONBOARDING),
                c.default.track(u.rMx.UPSELL_CLICKED, {
                    type: s.z[s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
                    action: 'primary'
                }),
                (0, r.EW)(s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, { dismissAction: _.L.PRIMARY }),
                (0, l.G)(t.id, s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE);
        }, [t.id]),
        m = a.useCallback(() => {
            c.default.track(u.rMx.UPSELL_CLICKED, {
                type: s.z[s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
                action: 'dismiss'
            }),
                n(_.L.UNKNOWN),
                (0, l.G)(t.id, s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE);
        }, [t.id, n]);
    return (0, i.jsx)(d.Z, {
        guild: t,
        onDismissed: m,
        onClick: h,
        title: E.Z.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_TITLE,
        message: E.Z.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_MESSAGE,
        cta: E.Z.Messages.CHECK_IT_OUT,
        trackingSource: u.PsQ.GUILD_ONBOARDING_UPSELL_NOTICE,
        type: u.vID.GUILD_ONBOARDING_UPSELL
    });
};
