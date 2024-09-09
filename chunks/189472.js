n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(92114),
    o = n(367907),
    l = n(138201),
    u = n(592125),
    c = n(9156),
    d = n(621600),
    _ = n(981631),
    E = n(689938);
t.Z = (e) => {
    let { user: t, reportId: n } = e,
        f = u.Z.getDMFromUserId(t.id),
        h = (0, a.e7)([c.ZP], () => (null == f ? null : c.ZP.isChannelMuted(null, f))),
        [p, I] = i.useState(null != h && h),
        m = i.useCallback(() => {
            null != f &&
                (I(!0),
                o.ZP.trackWithMetadata(_.rMx.IAR_MUTE_USER_BUTTON_CLICKED, {
                    other_user_id: t.id,
                    report_id: n
                }),
                s.Z.updateChannelOverrideSettings(null, f, { muted: !0 }, d.ZB.Muted));
        }, [f, t, n]);
    return (0, r.jsx)(l.Z, {
        title: E.Z.Messages.IAR_UPSELLS_MUTE_TITLE.format({ username: t.username }),
        description: E.Z.Messages.IAR_UPSELLS_MUTE_DESCRIPTION,
        buttonText: p ? E.Z.Messages.IAR_UPSELLS_MUTED_BUTTON : E.Z.Messages.IAR_UPSELLS_MUTE_BUTTON,
        buttonDisabled: p,
        onButtonPress: m
    });
};
