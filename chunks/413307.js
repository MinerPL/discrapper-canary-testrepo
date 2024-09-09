var i = n(735250),
    a = n(470079),
    s = n(949389),
    r = n(82950),
    l = n(434404),
    o = n(981631),
    c = n(689938),
    d = n(438825);
t.Z = (e) => {
    let { guild: t } = e,
        n = a.useCallback(() => {
            (0, s.K7)(t.id);
        }, [t.id]);
    return (0, i.jsx)(r.Z, {
        guild: t,
        onDismissed: n,
        onClick: () => l.Z.open(t.id, o.pNK.COMMUNITY),
        message: c.Z.Messages.NOTICE_ENABLE_PUBLIC_GUILD_UPSELL_MESSAGE,
        trackingSource: o.PsQ.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
        type: o.vID.PUBLIC_UPSELL,
        image: d,
        cta: c.Z.Messages.LEARN_MORE
    });
};
