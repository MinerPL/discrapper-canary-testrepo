s(47120);
var o = s(735250), T = s(470079), n = s(481060), a = s(230711), l = s(63063), i = s(378298), r = s(584656), _ = s(993750), S = s(981631), c = s(526761), E = s(689938), O = s(330731);
t.Z = function (e) {
    let {
            onClose: t,
            channelId: s
        } = e, [d, u] = T.useState(!1), A = T.useCallback(() => {
            a.Z.open(S.oAB.PRIVACY_AND_SAFETY, null, { scrollPosition: c.to.DM_SAFETY_ALERTS }), t();
        }, [t]), I = T.useCallback(() => {
            !d && (u(!0), (0, i.Uj)(s).then(() => {
                t(), (0, r.t)({
                    text: E.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE_SUCCESS,
                    id: 'safety-tools-report-false-positive'
                });
            }).catch(() => {
                u(!1), (0, n.showToast)((0, n.createToast)(E.Z.Messages.ERROR_GENERIC_TITLE, n.ToastType.FAILURE));
            }));
        }, [
            s,
            t,
            d
        ]);
    return (0, o.jsxs)(_.Z, {
        style: O.wrapperStyle,
        children: [
            (0, o.jsx)(n.Text, {
                variant: 'text-md/medium',
                children: E.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_DESCRIPTION.format({ learnMoreLink: l.Z.getArticleURL(S.BhN.SAFETY_ALERTS) })
            }),
            (0, o.jsx)(n.Button, {
                className: O.settingsButton,
                onClick: A,
                fullWidth: !0,
                children: E.Z.Messages.SAFETY_TOOLS_ACTION_SHEET_ABOUT_GO_TO_SETTINGS
            }),
            (0, o.jsx)('div', {
                children: (0, o.jsx)(n.Text, {
                    variant: 'text-sm/normal',
                    color: 'text-muted',
                    className: O.reportFalsePositiveText,
                    children: E.Z.Messages.SAFETY_TOOLS_REPORT_FALSE_POSITIVE.format({
                        reportFalsePositiveHook: (e, t) => (0, o.jsx)(n.Button, {
                            className: O.reportFalsePositiveButton,
                            size: n.Button.Sizes.NONE,
                            color: n.Button.Colors.LINK,
                            look: n.Button.Looks.LINK,
                            disabled: d,
                            onClick: I,
                            children: e
                        }, t)
                    })
                })
            })
        ]
    });
};
