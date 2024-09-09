t.d(n, {
    Z: function () {
        return I;
    }
}),
    t(47120);
var i = t(735250),
    a = t(470079),
    l = t(442837),
    o = t(481060),
    r = t(595519),
    s = t(374065),
    c = t(761122),
    d = t(542094),
    u = t(895924),
    m = t(973616),
    p = t(496675),
    _ = t(358085),
    C = t(499254),
    f = t(827498),
    h = t(783097),
    A = t(890280),
    E = t(176412),
    N = t(231338),
    x = t(689938),
    v = t(872674);
function I(e) {
    let { channel: n, application: t, sectionName: I, primaryEntryPointCommand: g, buttonSize: P = o.ButtonSizes.MEDIUM } = e,
        S = a.useId(),
        L = a.useCallback(() => {
            C.y(f.ti.ACTIVITY);
        }, []),
        { submitting: b, wasSubmitting: R } = (0, A.Z)({
            applicationId: t.id,
            channelId: n.id,
            launchingComponentId: S,
            onSubmissionComplete: L
        }),
        [T, M] = a.useState(!1),
        y = (0, d.Qv)({
            applicationId: t.id,
            channelId: n.id
        }),
        j = a.useMemo(() => (0, h.XZ)(g.displayName), [g.displayName]),
        {
            onActivityItemSelected: Z,
            buttonColor: O,
            buttonText: H
        } = (0, E.P7)({
            channel: n,
            application: t,
            location: u.Vh.APP_LAUNCHER_APPLICATION_VIEW,
            sectionName: I,
            commandName: j,
            autoDismissOnClick: y === d.JS.LEAVE,
            launchingComponentId: S,
            submitting: null != R ? R : b
        }),
        { disabled: U, reason: B } = (function (e) {
            let { channel: n, application: t, activityAction: i } = e,
                a = (0, l.e7)([p.Z], () => p.Z.can(N.Pl.USE_EMBEDDED_ACTIVITIES, n)),
                o = (0, s.KF)(n.id),
                u = !1,
                C = x.Z.Messages.EMBEDDED_ACTIVITIES_LAUNCH_DISABLED_START;
            switch (i) {
                case d.JS.LEAVE:
                    u = !1;
                    break;
                case d.JS.START:
                    n.isGuildVoice() ? o !== s.jy.CAN_LAUNCH && (u = !0) : !(0, r.WS)(n) && (u = !0);
                    break;
                case d.JS.JOIN:
                    n.isGuildVoice() ? (u = !a) : !(0, r.WS)(n) && (u = !0);
            }
            if (i !== d.JS.LEAVE) {
                let e = t instanceof m.Z ? t.embeddedActivityConfig : t.embedded_activity_config,
                    i = (0, c.Z)((0, _.getOS)());
                null == e || e.supported_platforms.includes(i) ? n.isThread() && ((u = !0), (C = x.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_IN_THREAD)) : ((u = !0), (C = x.Z.Messages.APP_LAUNCHER_ACTIVITY_NOT_AVAILABLE_ON_DEVICE));
            }
            return {
                disabled: u,
                reason: C
            };
        })({
            channel: n,
            application: t,
            activityAction: y
        });
    return (0, i.jsx)(o.Tooltip, {
        shouldShow: U,
        tooltipContentClassName: v.tooltipContent,
        text: B,
        children: (e) => {
            let { onClick: n, ...a } = e;
            return (0, i.jsx)(o.Button, {
                ...a,
                type: 'submit',
                size: P,
                color: O,
                disabled: U,
                submitting: T,
                onClick: () => {
                    M(!0), Z(), null == n || n();
                },
                'aria-label': x.Z.Messages.APP_LAUNCHER_ACTIVITY_ITEM_SELECTED_BUTTON_ARIA_LABEL.format({
                    buttonText: H,
                    applicationName: t.name
                }),
                children: H
            });
        }
    });
}
