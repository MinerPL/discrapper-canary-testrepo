n(47120);
var r = n(735250),
    i = n(470079),
    a = n(442837),
    s = n(481060),
    o = n(194359),
    l = n(367907),
    u = n(138201),
    c = n(699516),
    d = n(981631),
    _ = n(689938);
t.Z = (e) => {
    let { user: t, reportId: n } = e,
        [E, f] = i.useState(!1),
        h = (0, a.e7)([c.Z], () => c.Z.getRelationshipType(t.id), [t.id]) === d.OGo.BLOCKED;
    i.useEffect(() => {
        f(h);
    }, [h]);
    let p = i.useCallback(() => {
        f(!0),
            l.ZP.trackWithMetadata(d.rMx.IAR_BLOCK_USER_BUTTON_CLICKED, {
                other_user_id: t.id,
                report_id: n
            }),
            o.Z.addRelationship({
                userId: t.id,
                context: { location: 'ReportMenuBlockUser-iOS' },
                type: d.OGo.BLOCKED
            });
    }, [t, n]);
    return (0, r.jsx)(u.Z, {
        title: _.Z.Messages.IAR_UPSELLS_BLOCK_TITLE.format({ username: t.username }),
        description: _.Z.Messages.IAR_UPSELLS_BLOCK_DESCRIPTION,
        buttonText: E ? _.Z.Messages.IAR_UPSELLS_BLOCKED_BUTTON : _.Z.Messages.IAR_UPSELLS_BLOCK_BUTTON,
        buttonDisabled: E,
        onButtonPress: p,
        buttonColor: s.Button.Colors.RED
    });
};
