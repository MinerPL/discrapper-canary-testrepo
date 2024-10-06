s(47120);
var T = s(735250),
    o = s(470079),
    a = s(481060),
    n = s(230711),
    l = s(187819),
    _ = s(63063),
    i = s(378298),
    r = s(584656),
    S = s(993750),
    E = s(981631),
    c = s(526761),
    O = s(689938),
    d = s(681789);
t.Z = function (e) {
    let { onClose: t, channelId: s } = e,
        [u, A] = o.useState(!1),
        I = (0, l._p)({
            location: 'safety-tools-about-safety-alerts',
            autoTrackExposure: !1
        }),
        L = o.useCallback(() => {
            n.Z.open(E.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: I ? c.to.DM_SAFETY_ALERTS_V2 : c.to.DM_SAFETY_ALERTS }), t();
        }, [I, t]),
        N = o.useCallback(() => {
            !u &&
                (A(!0),
                (0, i.Uj)(s)
                    .then(() => {
                        t(),
                            (0, r.t)({
                                text: O.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
                                id: 'safety-tools-report-false-positive'
                            });
                    })
                    .catch(() => {
                        A(!1), (0, a.showToast)((0, a.createToast)(O.Z.Messages.ERROR_GENERIC_TITLE, a.ToastType.FAILURE));
                    }));
        }, [s, t, u]);
    return (0, T.jsxs)(S.Z, {
        style: d.wrapperStyle,
        children: [
            (0, T.jsx)(a.Text, {
                variant: 'text-md/medium',
                children: O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({ learnMoreLink: _.Z.getArticleURL(E.BhN.SAFETY_ALERTS) })
            }),
            (0, T.jsx)(a.Button, {
                className: d.settingsButton,
                onClick: L,
                fullWidth: !0,
                children: O.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
            }),
            (0, T.jsx)('div', {
                children: (0, T.jsx)(a.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: d.reportFalsePositiveText,
                    children: O.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
                        reportFalsePositiveHook: (e, t) =>
                            (0, T.jsx)(
                                a.Button,
                                {
                                    className: d.reportFalsePositiveButton,
                                    size: a.Button.Sizes.NONE,
                                    color: a.Button.Colors.LINK,
                                    look: a.Button.Looks.LINK,
                                    disabled: u,
                                    onClick: N,
                                    children: e
                                },
                                t
                            )
                    })
                })
            })
        ]
    });
};
