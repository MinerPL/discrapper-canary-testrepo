t.d(n, {
    Z: function () {
        return h;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(481060),
    o = t(542094),
    r = t(895924),
    s = t(499254),
    c = t(827498),
    d = t(160973),
    u = t(783097),
    m = t(890280),
    p = t(176412),
    _ = t(689938),
    C = t(94958);
function h(e) {
    let { channel: n, application: t, sectionName: h, primaryEntryPointCommand: f, buttonSize: A = l.ButtonSizes.MEDIUM } = e,
        E = a.useId(),
        N = a.useCallback(() => {
            s.yT(c.ti.ACTIVITY);
        }, []),
        { submitting: x, wasSubmitting: v } = (0, m.Z)({
            applicationId: t.id,
            channelId: n.id,
            launchingComponentId: E,
            onSubmissionComplete: N
        }),
        [I, g] = a.useState(!1),
        P = (0, o.Qv)({
            applicationId: t.id,
            channelId: n.id
        }),
        L = a.useMemo(() => (0, u.XZ)(f.displayName), [f.displayName]),
        {
            onActivityItemSelected: S,
            buttonColor: T,
            buttonText: b
        } = (0, p.P7)({
            channel: n,
            application: t,
            location: r.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: h,
            commandName: L,
            autoDismissOnClick: P === o.JS.LEAVE,
            launchingComponentId: E,
            submitting: null != v ? v : x
        }),
        { disabled: R, reason: M } = (0, d.Z)({
            channelId: n.id,
            application: t,
            activityAction: P
        });
    return (0, i.jsx)(l.Tooltip, {
        shouldShow: null != M,
        tooltipContentClassName: C.tooltipContent,
        text: M,
        children: (e) => {
            let { onClick: n, ...a } = e;
            return (0, i.jsx)(l.Button, {
                ...a,
                type: 'submit',
                size: A,
                color: T,
                disabled: R,
                submitting: I,
                onClick: () => {
                    g(!0), S(), null == n || n();
                },
                'aria-label': _.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: b,
                    applicationName: t.name
                }),
                children: b
            });
        }
    });
}
